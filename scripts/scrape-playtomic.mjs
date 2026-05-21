#!/usr/bin/env node
// Scrapes Playtomic's public API for Bangkok-area padel clubs and tournaments
// and writes the normalized result to src/data/tournaments.json.
//
// Usage: npm run scrape:playtomic

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "..", "src", "data", "tournaments.json");

const BKK_COORD = "13.7563,100.5018";
const RADIUS_M = 50_000;
// Floor: we want every Bangkok event from May 2026 onwards, even ones that
// have already happened, so historical context survives on the page.
const FROM_DATE = process.env.FROM_DATE ?? "2026-05-01T00:00:00";
const HORIZON_DAYS = 540; // ~18 months ahead from FROM_DATE

const HEADERS = {
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  "User-Agent":
    "Mozilla/5.0 (compatible; BangkokPadelCommunity/1.0; +https://bangkokpadelcommunity.com)",
};

async function fetchJson(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} on ${url}`);
  }
  return res.json();
}

function isoDay(date) {
  return date.toISOString().slice(0, 19);
}

async function fetchTenants() {
  const url = new URL("https://api.playtomic.io/v1/tenants");
  url.searchParams.set("coordinate", BKK_COORD);
  url.searchParams.set("radius_meters", String(RADIUS_M));
  url.searchParams.set("sport_id", "PADEL");
  url.searchParams.set("size", "50");
  return fetchJson(url.toString());
}

async function fetchTournaments() {
  const url = new URL("https://api.playtomic.io/v1/tournaments");
  url.searchParams.set("coordinate", BKK_COORD);
  url.searchParams.set("radius_meters", String(RADIUS_M));
  url.searchParams.set("sport_id", "PADEL");
  url.searchParams.set("size", "500");
  url.searchParams.set("sort", "start_date,ASC");
  url.searchParams.set("tournament_visibility", "PUBLIC");
  url.searchParams.set("from_start_date", FROM_DATE);
  return fetchJson(url.toString());
}

function normalizeTenant(raw) {
  const coord = raw.address?.coordinate ?? {};
  return {
    id: raw.tenant_id,
    slug: raw.tenant_uid,
    name: raw.tenant_name,
    status: raw.tenant_status,
    city: raw.address?.city ?? null,
    street: raw.address?.street ?? null,
    timezone: raw.address?.timezone ?? null,
    lat: coord.lat ?? null,
    lon: coord.lon ?? null,
    courtCount: Array.isArray(raw.resources) ? raw.resources.length : null,
    image: raw.images?.[0] ?? raw.image_data?.[0]?.url ?? null,
    playtomicUrl: raw.tenant_uid
      ? `https://playtomic.com/clubs/${raw.tenant_uid}`
      : null,
  };
}

function normalizeTournament(raw) {
  const tenantAddress = raw.tenant?.tenant_address ?? {};
  const coord = tenantAddress.coordinate ?? {};
  return {
    id: raw.tournament_id,
    name: raw.tournament_name,
    image: raw.tournament_image ?? null,
    startDate: raw.start_date ?? null,
    endDate: raw.end_date ?? null,
    type: raw.type ?? null,
    status: raw.tournament_status ?? null,
    visibility: raw.tournament_visibility ?? null,
    isCancelled: Boolean(raw.is_cancelled),
    minPlayers: raw.min_players ?? null,
    maxPlayers: raw.max_players ?? null,
    registeredPlayers: Array.isArray(raw.registered_players)
      ? raw.registered_players.length
      : null,
    availablePlaces: raw.available_places ?? null,
    price: raw.price ?? null,
    gender: raw.gender ?? null,
    level: raw.level_description ?? null,
    registrationClosingTime: raw.registration_closing_time ?? null,
    tenant: {
      id: raw.tenant?.tenant_id ?? null,
      name: raw.tenant?.tenant_name ?? null,
      city: tenantAddress.city ?? null,
      street: tenantAddress.street ?? null,
      timezone: tenantAddress.timezone ?? null,
      lat: coord.lat ?? null,
      lon: coord.lon ?? null,
    },
    playtomicUrl: raw.tournament_id
      ? `https://playtomic.com/tournaments/${raw.tournament_id}`
      : null,
  };
}

function filterInWindow(tournaments) {
  const floor = new Date(FROM_DATE);
  const horizon = new Date(floor);
  horizon.setDate(horizon.getDate() + HORIZON_DAYS);
  return tournaments
    .filter((t) => {
      if (t.isCancelled) return false;
      if (!t.startDate) return false;
      const start = new Date(t.startDate);
      return start >= floor && start <= horizon;
    })
    .sort((a, b) => (a.startDate < b.startDate ? -1 : 1));
}

async function main() {
  console.log("[playtomic] fetching Bangkok tenants…");
  const tenantsRaw = await fetchTenants();
  const tenants = tenantsRaw.map(normalizeTenant);
  console.log(`[playtomic] ${tenants.length} tenants`);

  console.log(`[playtomic] fetching tournaments from ${FROM_DATE}…`);
  const tournamentsRaw = await fetchTournaments();
  const allTournaments = tournamentsRaw.map(normalizeTournament);
  const inWindow = filterInWindow(allTournaments);
  console.log(
    `[playtomic] ${allTournaments.length} total → ${inWindow.length} in window (${FROM_DATE} → +${HORIZON_DAYS}d)`,
  );

  const output = {
    scrapedAt: new Date().toISOString(),
    source: "playtomic",
    geo: { center: BKK_COORD, radiusMeters: RADIUS_M },
    fromDate: FROM_DATE,
    horizonDays: HORIZON_DAYS,
    clubs: tenants,
    tournaments: inWindow,
    totals: {
      clubs: tenants.length,
      tournamentsTotal: allTournaments.length,
      tournamentsInWindow: inWindow.length,
    },
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));
  console.log(`[playtomic] wrote ${OUT_PATH}`);
}

main().catch((err) => {
  console.error("[playtomic] failed:", err);
  process.exit(1);
});
