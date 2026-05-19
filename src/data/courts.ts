import type { Locale } from "@/lib/site";

type Localized = Record<Locale, string>;

export type Court = {
  /** URL-safe id, also used as DOM anchor on the rankings page */
  id: string;
  /** Brand name — kept identical across locales */
  name: string;
  /** Area / neighbourhood — used as a sub-heading */
  area: Localized;
  /** Nearest BTS / MRT — empty string if none nearby */
  transit: Localized;
  /** Short pitch — 1–2 sentences */
  pitch: Localized;
  /** Court count + indoor/outdoor mix */
  courts: Localized;
  /** Court rental indication, total (not per player). e.g. "from ~800 THB / hr off-peak" */
  price: Localized;
  /** Booking platform / channel */
  booking: Localized;
  /** External website URL */
  website?: string;
};

/**
 * Ordered ranking of padel clubs in Bangkok, curated by the
 * Bangkok Padel Community on Facebook. Order is the rank.
 */
export const courts: Court[] = [
  {
    id: "pad-thai-padel",
    name: "Pad Thai Padel",
    area: {
      en: "Sukhumvit (near Thonglor BTS)",
      th: "สุขุมวิท (ใกล้ BTS ทองหล่อ)",
    },
    transit: { en: "Thonglor BTS", th: "BTS ทองหล่อ" },
    pitch: {
      en: "One of Bangkok's most polished padel venues: three courts (two indoor, one outdoor), packed Americano calendar and one of the best social scenes in the city.",
      th: "หนึ่งในคลับพาเดิลที่สมบูรณ์ที่สุดในกรุงเทพ 3 คอร์ท (ในร่ม 2 กลางแจ้ง 1) ปฏิทิน Americano แน่น และบรรยากาศโซเชียลดีที่สุดแห่งหนึ่งของเมือง",
    },
    courts: { en: "3 courts (2 indoor, 1 outdoor)", th: "3 คอร์ท (ในร่ม 2, กลางแจ้ง 1)" },
    price: {
      en: "Court ~1,400 THB / hr · Private lesson ~2,000 THB / hr",
      th: "ค่าคอร์ท ~1,400 บาท/ชม. · เรียนเดี่ยว ~2,000 บาท/ชม.",
    },
    booking: { en: "Web / Playtomic / direct", th: "เว็บ / Playtomic / จองตรง" },
  },
  {
    id: "bangkok-padel",
    name: "Bangkok Padel",
    area: {
      en: "Sukhumvit 11 — Ambassador Hotel rooftop",
      th: "สุขุมวิท 11 — รูฟท็อปโรงแรม Ambassador",
    },
    transit: { en: "Nana BTS", th: "BTS นานา" },
    pitch: {
      en: "Two panoramic glass courts on the Ambassador rooftop — the most central padel courts in Bangkok with a Sukhumvit skyline backdrop.",
      th: "คอร์ทกระจกพาโนรามา 2 คอร์ทบนรูฟท็อป Ambassador คอร์ทพาเดิลที่อยู่ใจกลางกรุงเทพที่สุดพร้อมวิวสกายไลน์สุขุมวิท",
    },
    courts: { en: "2 panoramic rooftop courts", th: "2 คอร์ทพาโนรามาบนรูฟท็อป" },
    price: {
      en: "Court ~1,200 THB / hr · Lesson 1,900 THB · 4-player group ~800 THB pp",
      th: "ค่าคอร์ท ~1,200 บาท/ชม. · เรียนเดี่ยว 1,900 บาท · กลุ่ม 4 คน ~800 บาท/คน",
    },
    booking: { en: "Matchi", th: "Matchi" },
    website: "https://www.matchi.se/facilities/bangkokpadel",
  },
  {
    id: "kross-padel-on-nut",
    name: "Kross Padel On Nut",
    area: { en: "Phra Khanong / On Nut", th: "พระโขนง / อ่อนนุช" },
    transit: { en: "On Nut BTS", th: "BTS อ่อนนุช" },
    pitch: {
      en: "Flagship of the Kross network: three courts (two covered) beside a pool, ice bath and sauna. Hosts community tournaments year-round.",
      th: "แฟล็กชิปของเครือ Kross: 3 คอร์ท (คลุม 2) ติดสระว่ายน้ำ ice bath และซาวน่า จัดทัวร์นาเมนต์คอมมูนิตี้ตลอดปี",
    },
    courts: { en: "3 courts (2 covered)", th: "3 คอร์ท (คลุม 2)" },
    price: { en: "~800 – 1,000 THB / hr", th: "~800 – 1,000 บาท/ชม." },
    booking: { en: "Direct (krosspadel.com)", th: "จองตรง (krosspadel.com)" },
    website: "https://krosspadel.com/",
  },
  {
    id: "the-padel-co",
    name: "The Padel Co.",
    area: { en: "Sukhumvit 50 (near On Nut BTS)", th: "สุขุมวิท 50 (ใกล้ BTS อ่อนนุช)" },
    transit: { en: "On Nut BTS", th: "BTS อ่อนนุช" },
    pitch: {
      en: "Two fully indoor air-conditioned courts — the most reliable indoor option in east Bangkok. Open 07:00 – 23:00 daily.",
      th: "2 คอร์ทในร่มมีแอร์ — ตัวเลือกในร่มที่ไว้ใจได้ที่สุดในกรุงเทพตะวันออก เปิด 07:00 – 23:00 ทุกวัน",
    },
    courts: { en: "2 indoor courts", th: "2 คอร์ทในร่ม" },
    price: { en: "~1,400 THB / hr · 10× credit pack 8,000 → 10,000 THB", th: "~1,400 บาท/ชม. · แพ็ค 10 ครั้ง 8,000 → 10,000 บาท" },
    booking: { en: "Playtomic", th: "Playtomic" },
    website: "https://www.thepadel.co/",
  },
  {
    id: "playerbox",
    name: "Playerbox (Padel Club Bangkok)",
    area: { en: "Banthat Thong (near Chulalongkorn)", th: "บรรทัดทอง (ใกล้จุฬาฯ)" },
    transit: { en: "National Stadium BTS", th: "BTS สนามกีฬาแห่งชาติ" },
    pitch: {
      en: "Four outdoor courts open day and night with certified coaches on staff. The most accessible off-peak rates in central Bangkok.",
      th: "4 คอร์ทกลางแจ้งเปิดทั้งวันทั้งคืน มีโค้ชเซอร์ติฟายประจำ ราคา off-peak เข้าถึงง่ายที่สุดในใจกลางเมือง",
    },
    courts: { en: "4 outdoor courts", th: "4 คอร์ทกลางแจ้ง" },
    price: { en: "From ~800 THB / hr off-peak · Racket ~100 THB", th: "เริ่ม ~800 บาท/ชม. off-peak · ไม้ ~100 บาท" },
    booking: { en: "GoWabi / direct", th: "GoWabi / จองตรง" },
    website: "https://playerbox.co/",
  },
  {
    id: "no-drama-padel",
    name: "No Drama Padel",
    area: { en: "Bangkok (riverside)", th: "ริมแม่น้ำ" },
    transit: { en: "—", th: "—" },
    pitch: {
      en: "Community-first vibe with both certified and non-certified coaches, on-site shop and a restaurant by the river. Strong beginner-friendly programming.",
      th: "บรรยากาศเน้นคอมมูนิตี้ มีทั้งโค้ชเซอร์ติฟายและไม่เซอร์ติฟาย ช็อปและร้านอาหารริมแม่น้ำ โปรแกรมสำหรับมือใหม่แข็งแรง",
    },
    courts: { en: "5 courts (covered)", th: "5 คอร์ท (คลุม)" },
    price: {
      en: "Private lesson 1,400 THB (non-cert) / 1,700 THB (cert)",
      th: "เรียนเดี่ยว 1,400 บาท (ไม่เซอร์ติฟาย) / 1,700 บาท (เซอร์ติฟาย)",
    },
    booking: { en: "Direct (nodramapadel.com)", th: "จองตรง (nodramapadel.com)" },
    website: "https://nodramapadel.com/",
  },
  {
    id: "bel-club-22",
    name: "Bel Club 22",
    area: { en: "1938 Phetchaburi Rd", th: "ถนนเพชรบุรี 1938" },
    transit: { en: "Phetchaburi MRT", th: "MRT เพชรบุรี" },
    pitch: {
      en: "Three world-class courts in lush surroundings with a courtside bar. Floodlit evening sessions and one of Bangkok's most vibrant social scenes.",
      th: "3 คอร์ทระดับเวิลด์คลาสในสวนเขียวขจี พร้อมบาร์ข้างคอร์ท เซสชั่นเย็นใต้ไฟ บรรยากาศโซเชียลคึกคักที่สุดแห่งหนึ่งในกรุงเทพ",
    },
    courts: { en: "3 courts", th: "3 คอร์ท" },
    price: { en: "Varies — check app", th: "ราคาดูในแอป" },
    booking: { en: "Padel Mates app / web", th: "แอป Padel Mates / เว็บ" },
    website: "https://belclub22.com/",
  },
  {
    id: "padel-asia",
    name: "Padel Asia",
    area: { en: "Ratchada 18", th: "รัชดา 18" },
    transit: { en: "Ratchadaphisek MRT", th: "MRT รัชดาภิเษก" },
    pitch: {
      en: "One of Bangkok's longest-running padel clubs with a big covered court — popular for casual league nights, beginner Americanos and family / company events.",
      th: "หนึ่งในคลับพาเดิลที่เปิดมานานที่สุดของกรุงเทพ มีคอร์ทคลุมขนาดใหญ่ เหมาะกับลีกแบบสบาย Americano มือใหม่ และอีเวนต์ครอบครัว / องค์กร",
    },
    courts: { en: "Covered courts", th: "คอร์ทคลุม" },
    price: { en: "Varies", th: "ราคาแตกต่าง" },
    booking: { en: "Direct", th: "จองตรง" },
    website: "https://padelasia.org/",
  },
  {
    id: "baan-padel",
    name: "Baan Padel",
    area: { en: "Bangkok (indoor warehouse-style venue)", th: "กรุงเทพ (สไตล์โกดังในร่ม)" },
    transit: { en: "—", th: "—" },
    pitch: {
      en: "Seven indoor courts with air-conditioning, high ceilings and clean facilities — Bangkok's most court-dense single venue. Strong coaching pipeline for beginners.",
      th: "7 คอร์ทในร่มมีแอร์ เพดานสูง สิ่งอำนวยความสะดวกใหม่ — คลับเดี่ยวที่มีจำนวนคอร์ทมากที่สุดในกรุงเทพ โปรแกรมโค้ชมือใหม่แข็งแรง",
    },
    courts: { en: "7 indoor courts", th: "7 คอร์ทในร่ม" },
    price: { en: "Varies — check booking system", th: "ราคาดูในระบบจอง" },
    booking: { en: "Direct (baanpadel.com)", th: "จองตรง (baanpadel.com)" },
    website: "https://baanpadel.com/",
  },
  {
    id: "kross-padel-asoke",
    name: "Kross Padel Asoke",
    area: { en: "Asoke (central Sukhumvit)", th: "อโศก (สุขุมวิทใจกลาง)" },
    transit: { en: "Asok BTS / Sukhumvit MRT", th: "BTS อโศก / MRT สุขุมวิท" },
    pitch: {
      en: "Compact city-centre branch of the Kross network — the best option for after-work games when you can't make it to On Nut.",
      th: "สาขาใจกลางเมืองของเครือ Kross — ตัวเลือกที่ดีที่สุดสำหรับเล่นหลังเลิกงานเมื่อไปอ่อนนุชไม่ทัน",
    },
    courts: { en: "Compact branch", th: "สาขาเล็ก" },
    price: { en: "Varies — ask the club", th: "ราคาแตกต่าง — ติดต่อคลับ" },
    booking: { en: "Direct (krosspadel.com)", th: "จองตรง (krosspadel.com)" },
    website: "https://krosspadel.com/",
  },
];

export function listCourts(): Court[] {
  return courts;
}
