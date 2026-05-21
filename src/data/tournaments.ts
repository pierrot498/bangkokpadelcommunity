import data from "./tournaments.json";

export type PlaytomicClub = {
  id: string;
  slug: string | null;
  name: string;
  status: string | null;
  city: string | null;
  street: string | null;
  timezone: string | null;
  lat: number | null;
  lon: number | null;
  courtCount: number | null;
  image: string | null;
  playtomicUrl: string | null;
};

export type PlaytomicTournament = {
  id: string;
  name: string;
  image: string | null;
  startDate: string;
  endDate: string | null;
  type: string | null;
  status: string | null;
  visibility: string | null;
  isCancelled: boolean;
  minPlayers: number | null;
  maxPlayers: number | null;
  registeredPlayers: number | null;
  availablePlaces: number | null;
  price: string | null;
  gender: string | null;
  level: string | null;
  registrationClosingTime: string | null;
  tenant: {
    id: string | null;
    name: string | null;
    city: string | null;
    street: string | null;
    timezone: string | null;
    lat: number | null;
    lon: number | null;
  };
  playtomicUrl: string | null;
};

export type TournamentsSnapshot = {
  scrapedAt: string;
  source: string;
  geo: { center: string; radiusMeters: number };
  horizonDays: number;
  clubs: PlaytomicClub[];
  tournaments: PlaytomicTournament[];
  totals: {
    clubs: number;
    tournamentsTotal: number;
    tournamentsUpcoming: number;
  };
};

export function loadTournaments(): TournamentsSnapshot {
  return data as TournamentsSnapshot;
}

export function tournamentsByMonth(
  tournaments: PlaytomicTournament[],
  locale: "en" | "th",
): { key: string; label: string; items: PlaytomicTournament[] }[] {
  const monthFmt = new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  });
  const groups = new Map<string, { label: string; items: PlaytomicTournament[] }>();
  for (const t of tournaments) {
    const d = new Date(t.startDate);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    const label = monthFmt.format(d);
    if (!groups.has(key)) groups.set(key, { label, items: [] });
    groups.get(key)!.items.push(t);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([key, value]) => ({ key, ...value }));
}
