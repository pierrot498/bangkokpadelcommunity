import type { Locale } from "@/lib/site";

type Localized = Record<Locale, string>;
type LocalizedKeywords = Record<Locale, string[]>;

export type Post = {
  slug: string;
  date: string;
  readMinutes: number;
  title: Localized;
  excerpt: Localized;
  body: Localized;
  keywords: LocalizedKeywords;
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Post 1 — Padel Clubs in Bangkok                                          */
/* ────────────────────────────────────────────────────────────────────────── */

const clubsEn = `
## A guide to padel clubs in Bangkok

Padel exploded in Bangkok between 2023 and 2026, and the city now has more
than two dozen dedicated venues — from rooftop courts in Sukhumvit to
multi-court warehouses in the suburbs. This guide is curated from
recommendations made by members of the **Bangkok Padel Community** on
Facebook, where players from every level share the clubs they actually come
back to.

> **Quick take.** If you only have time for one club, pick the one closest
> to where you live or work. Bangkok traffic is the deciding factor — a
> 40-minute commute kills a 1-hour court booking.

## Central Bangkok (Sukhumvit, Sathorn, Silom)

The central clubs are the most expensive but also the most accessible by BTS
and MRT. Expect peak-hour prices and full weekday evenings — book three
days ahead, more for weekends.

- **Pad Thai Padel** (Rama IV / Sukhumvit 36, close to Thonglor BTS).
  Three courts (two indoor, one outdoor), one of the most polished social
  scenes in the city, a busy calendar of mixers and Americano nights.
- **Padel Club Bangkok** (Banthatthong Road, near Chulalongkorn). Four
  outdoor courts open day and night, certified coaches on staff, and
  private lessons with national-team coaches.
- **Kross Padel Asoke**. A compact city-centre branch of the Kross network.
  Good for after-work games when you can't make it across town.

## North &amp; East (Ratchada, Rama 9, On Nut, Bang Na)

The east and north have the most courts per square kilometre and the
biggest mix of facilities — pools, ice baths, saunas and big covered
arenas.

- **Kross Padel On Nut**. Three courts (two covered) next to a pool, ice
  bath and sauna. The flagship of the Kross brand and a regular host of
  tournaments.
- **Padel Asia** (Ratchada 18). One of Bangkok&apos;s longer-running clubs,
  popular for casual league nights and beginner-friendly Americanos.
- **No Drama Padel**. Community-first vibe with both certified and
  non-certified coaches available; a solid shop on-site if you need to
  upgrade gear.

## Riverside &amp; West (Charoen Nakhon, Pinklao)

The west bank has newer venues with better parking. Saturday open courts
fill up fast — sign up by Wednesday.

- **The Padel Co.** Praised by community members for the court quality and
  the way they run mixed-doubles social events.
- **Bel Club 22**. A newer arrival with a focus on social padel and
  community programming.

## What to look for in a Bangkok padel club

1. **Court surface and lighting.** Panoramic glass courts and high-CRI
   lighting make a real difference at night. Ask if the club has them
   before you book.
2. **Air-conditioning or covered courts.** From March to October, an
   indoor or covered court is worth paying extra for.
3. **Open-court programming.** Clubs that run weekly mixed Americanos are
   the fastest way to meet players at your level.
4. **Coaching depth.** A club with several certified coaches is a sign
   the venue is investing for the long term.
5. **Booking apps.** Most Bangkok clubs use Matchi or their own app — get
   the account before you arrive.

## How to actually pick one

The Facebook group is the fastest filter. Post your area, your level and
your weekly schedule, and the community will point you to the two or three
clubs you should try. After 2–3 open-court nights you&apos;ll know which
venue feels right.

> Want to recommend a club we missed? Tag us in the
> [Bangkok Padel Community Facebook group](https://web.facebook.com/groups/bangkok.padel.community)
> — every post helps another player find their court.
`;

const clubsTh = `
## ไกด์คลับพาเดิลในกรุงเทพฯ

ระหว่างปี 2023 ถึง 2026 วงการพาเดิลในกรุงเทพโตอย่างก้าวกระโดด ตอนนี้มีคลับและคอร์ทพาเดิลมากกว่า 20 แห่ง — ตั้งแต่คอร์ทรูฟท็อปฝั่งสุขุมวิทไปจนถึงคลับขนาดใหญ่ในชานเมือง บทความนี้รวบรวมคำแนะนำจากสมาชิก **Bangkok Padel Community** ในกลุ่ม Facebook ที่ผู้เล่นทุกระดับช่วยกันรีวิวคลับที่พวกเขากลับไปเล่นซ้ำจริง ๆ

> **สรุปสั้น ๆ** ถ้ามีเวลาเลือกคลับเดียว ให้เลือกคลับที่ใกล้บ้านหรือใกล้ที่ทำงานที่สุด เพราะรถติดในกรุงเทพคือปัจจัยตัดสิน — ขับ 40 นาทีเพื่อตี 1 ชั่วโมงไม่คุ้ม

## กลางเมือง (สุขุมวิท สาทร สีลม)

โซนนี้แพงสุดแต่เดินทางง่ายสุด ทั้ง BTS และ MRT ราคา Peak สูง คอร์ทเย็นวันธรรมดามักเต็ม ควรจองล่วงหน้าอย่างน้อย 3 วัน หรือมากกว่านั้นถ้าเป็นเสาร์-อาทิตย์

- **Pad Thai Padel** (พระราม 4 / สุขุมวิท 36 ใกล้ BTS ทองหล่อ) — 3 คอร์ท (อินดอร์ 2 เอาท์ดอร์ 1) บรรยากาศสังคมแน่นที่สุดในกรุงเทพ มีอีเวนต์ Americano บ่อย
- **Padel Club Bangkok** (ถนนบรรทัดทอง ใกล้จุฬาฯ) — 4 คอร์ทเอาท์ดอร์ เปิดทั้งวันทั้งคืน มีโค้ชที่ผ่านการรับรอง รวมถึงเทรนเนอร์ทีมชาติ
- **Kross Padel อโศก** — สาขาคอมแพคต์ใจกลางเมือง เหมาะสำหรับเล่นหลังเลิกงาน

## เหนือและตะวันออก (รัชดา พระราม 9 อ่อนนุช บางนา)

โซนนี้มีคอร์ทหนาแน่นสุด และมีคลับใหญ่ ๆ ครบสุด ทั้งสระว่ายน้ำ ห้องน้ำแข็ง ห้องซาวน่า และโดมใหญ่

- **Kross Padel อ่อนนุช** — 3 คอร์ท (มีหลังคา 2 คอร์ท) ติดกับสระ ห้องน้ำแข็ง และซาวน่า เป็นแฟลกชิปของ Kross และจัดทัวร์นาเมนต์บ่อย
- **Padel Asia** (รัชดา 18) — คลับรุ่นเก่าของกรุงเทพ มีลีกสบาย ๆ และ Americano สำหรับมือใหม่
- **No Drama Padel** — บรรยากาศคอมมูนิตี้ มีโค้ชทั้งแบบรับรองและไม่รับรอง มีร้านขายอุปกรณ์ในคลับด้วย

## ริมน้ำและฝั่งตะวันตก (เจริญนคร ปิ่นเกล้า)

ฝั่งตะวันตกเป็นคลับใหม่ ๆ ที่จอดรถสะดวก คอร์ทช่วงเสาร์เต็มเร็ว ควรลงทะเบียนภายในวันพุธ

- **The Padel Co.** — คอมมูนิตี้ชมเรื่องคุณภาพคอร์ทและการจัด Mixed Doubles
- **Bel Club 22** — คลับเปิดใหม่ที่เน้นพาเดิลแบบ Social

## เลือกคลับพาเดิลในกรุงเทพอย่างไร

1. **พื้นคอร์ทและไฟ** คอร์ทกระจกพาโนรามาและไฟ CRI สูงให้ประสบการณ์ดีกว่ามาก ลองถามคลับก่อนจอง
2. **แอร์ / หลังคา** ตั้งแต่มีนาคมถึงตุลาคม คอร์ทอินดอร์หรือมีหลังคาคุ้มราคาเพิ่มแน่นอน
3. **อีเวนต์ Open Court** คลับที่จัด Americano รายสัปดาห์เป็นทางที่เร็วที่สุดในการเจอผู้เล่นระดับเดียวกัน
4. **โค้ชที่หลากหลาย** คลับที่มีโค้ชระดับใบรับรองหลายคนคือคลับที่ลงทุนระยะยาว
5. **แอปจองคอร์ท** คลับส่วนใหญ่ใช้ Matchi หรือแอปของตัวเอง สมัครไว้ก่อนไป

## วิธีเลือกจริง ๆ

วิธีกรองที่เร็วที่สุดคือกลุ่ม Facebook โพสต์โซน ระดับฝีมือ และตารางว่าง คอมมูนิตี้จะแนะนำคลับ 2-3 ที่ที่เหมาะกับคุณ พอลอง Open Court 2-3 ครั้งจะรู้ว่าคลับไหนใช่

> อยากแนะนำคลับที่บทความนี้ยังไม่มี? แท็กเราในกลุ่ม [Bangkok Padel Community](https://web.facebook.com/groups/bangkok.padel.community) ทุกโพสต์ช่วยให้ผู้เล่นคนอื่นเจอคอร์ทของพวกเขา
`;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Post 2 — Padel Coaching in Bangkok                                        */
/* ────────────────────────────────────────────────────────────────────────── */

const coachingEn = `
## Padel coaching in Bangkok: what you actually get for your money

If you&apos;re past your first ten games, the fastest way to level up is to
take a few coaching sessions. Bangkok has a strong coaching market with
options from 1,400 THB to 2,500 THB per private hour, plus group sessions
that bring the cost per player down considerably.

This guide is built on prices and formats published by Bangkok&apos;s most
active padel academies as of mid-2026, plus feedback from members of the
**[Bangkok Padel Community Facebook group](https://web.facebook.com/groups/bangkok.padel.community)**.
Prices change — always confirm with the club before booking.

## Typical private lesson rates in Bangkok

| Venue | Private (1 player) | Group of 2 | Group of 4 | Notes |
| --- | --- | --- | --- | --- |
| Pad Thai Padel | ~2,000 THB / hr | — | from ~3,000 THB / hr | One-on-one and 4+ packages |
| Bangkok Padel | ~1,900 THB | ~1,100 THB / pp | ~800 THB / pp | 10-lesson pack ~17,000 THB |
| No Drama Padel | ~1,700 THB / hr (certified) | — | — | 1,400 THB / hr for non-certified |
| Padel Asia | varies | varies | varies | Long-running academy |

> **Court fees and balls.** Most Bangkok academies include the court fee
> and balls in the lesson price. Confirm in writing — being asked to pay
> a court fee on top at the end is the most common surprise.

## Group lessons are how locals improve

Bangkok&apos;s climate makes 2-hour sessions tough, but a 1-hour group
of 4 is ideal: the pace stays high, you rotate often, and the price per
player drops below a normal court hire. This is what most regulars do
weekly.

The community organises both:

- **Pre-built academy groups**, run by clubs at fixed times each week.
- **Self-organised groups**, where four players share a coach and split
  the cost. The Facebook group is full of these.

## What to ask before you book a coach

1. **Certification.** Asia Pacific Padel Academy (APPA) and Padel MBA are
   the two certifications most often cited by Bangkok academies. Both
   indicate the coach knows the modern padel curriculum.
2. **Language.** Most Bangkok padel coaches teach in English and Thai;
   a few teach in Spanish. Confirm before booking.
3. **Specialisation.** New players need fundamentals. 3.0+ players benefit
   from a coach who can break down video and game tactics. Ask which they
   focus on.
4. **Match-style sessions.** The best coaches run drill blocks _then_
   live points with corrections. If a coach only feeds balls, you&apos;ll
   plateau.
5. **Trial first.** Always start with one private session before
   committing to a 10-pack.

## We&apos;re not a school — we&apos;re a community

The Bangkok Padel Community itself doesn&apos;t run lessons. What we do
is host the biggest crowd of players in town. **The fastest way to find a
coach who fits you** is to post in our Facebook group: your level, your
area, your budget. Members will share recommendations within hours.

[**Ask for a coach in the Facebook group →**](https://web.facebook.com/groups/bangkok.padel.community)
`;

const coachingTh = `
## โค้ชพาเดิลในกรุงเทพ: ราคาและความคุ้มค่า

หลังจากตีพาเดิลครบประมาณ 10 ครั้ง วิธีพัฒนาฝีมือที่เร็วที่สุดคือเรียนกับโค้ช ตลาดโค้ชพาเดิลในกรุงเทพคึกคัก ราคาเริ่มต้นประมาณ 1,400 บาท ไปจนถึง 2,500 บาทต่อชั่วโมง (เรียนเดี่ยว) ถ้าจับกลุ่มก็จะถูกลงต่อคนมาก

ราคาในบทความนี้อ้างอิงจากคลับที่ Active ที่สุดในกรุงเทพ ณ กลางปี 2026 บวกกับความเห็นจากสมาชิกในกลุ่ม **[Bangkok Padel Community](https://web.facebook.com/groups/bangkok.padel.community)** ราคาเปลี่ยนแปลงได้ ควรเช็คกับคลับก่อนจอง

## ราคาเรียนพาเดิลในกรุงเทพ (โดยประมาณ)

| คลับ | เรียนเดี่ยว | กลุ่ม 2 | กลุ่ม 4 | หมายเหตุ |
| --- | --- | --- | --- | --- |
| Pad Thai Padel | ~2,000 บาท / ชม. | — | ตั้งแต่ ~3,000 บาท / ชม. | มีแพ็คเกจ |
| Bangkok Padel | ~1,900 บาท | ~1,100 บาท / คน | ~800 บาท / คน | 10 ครั้ง ~17,000 บาท |
| No Drama Padel | ~1,700 บาท / ชม. (โค้ชรับรอง) | — | — | 1,400 บาท สำหรับโค้ชไม่รับรอง |
| Padel Asia | หลายอัตรา | หลายอัตรา | หลายอัตรา | คลับเก่าแก่ |

> **ค่าคอร์ทและลูก** คลับส่วนใหญ่รวมค่าคอร์ทและลูกในค่าเรียนแล้ว ควรขอยืนยันก่อน เพราะเรื่องที่ลูกค้าเจอบ่อยที่สุดคือถูกคิดค่าคอร์ทเพิ่มทีหลัง

## คนกรุงเทพพัฒนาฝีมือจากการเรียนกลุ่ม

อากาศกรุงเทพทำให้เรียน 2 ชั่วโมงเหนื่อยมาก แต่กลุ่ม 4 คน 1 ชั่วโมงเหมาะที่สุด ตีกันถี่ หมุนคู่บ่อย และต่อหัวถูกกว่าค่าคอร์ทปกติ ผู้เล่นประจำส่วนใหญ่เรียนแบบนี้ทุกสัปดาห์

ในกรุงเทพมี 2 รูปแบบ:

- **กลุ่มของคลับ** จัดเวลาคงที่ทุกสัปดาห์
- **กลุ่มจัดเอง** ผู้เล่น 4 คนรวมตัวเองและแชร์ค่าโค้ช ในกลุ่ม Facebook มีโพสต์รวมกลุ่มเยอะ

## ควรถามอะไรก่อนจองโค้ช

1. **ใบรับรอง** Asia Pacific Padel Academy (APPA) และ Padel MBA เป็นใบรับรองที่คลับในกรุงเทพอ้างอิงบ่อยที่สุด แสดงว่าโค้ชเรียนหลักสูตรพาเดิลทันสมัย
2. **ภาษา** โค้ชในกรุงเทพส่วนใหญ่สอนภาษาอังกฤษและไทย บางคนสอนสเปนได้ ควรเช็คก่อน
3. **ความเชี่ยวชาญ** มือใหม่ต้องการพื้นฐาน ระดับ 3.0+ ได้ประโยชน์จากโค้ชที่วิเคราะห์วิดีโอและแทคติคได้ ลองถามจุดเด่นของโค้ช
4. **เซสชั่นแบบเล่นจริง** โค้ชเก่งจะมี Drill แล้วต่อด้วยเล่นจริงพร้อมแก้ไข ถ้าโค้ชแค่ป้อนบอลคุณจะตันเร็ว
5. **ลองครั้งแรกก่อน** ลงเดี่ยว 1 ครั้งก่อน ก่อนซื้อแพ็คเกจ 10 ครั้ง

## เราไม่ใช่โรงเรียน — เราเป็นคอมมูนิตี้

Bangkok Padel Community ไม่ได้เปิดสอนเอง แต่เรามีผู้เล่นรวมกันมากที่สุดในเมือง **วิธีที่เร็วที่สุดในการหาโค้ชที่เหมาะ** คือโพสต์ในกลุ่ม Facebook ของเรา บอกระดับ โซน และงบประมาณ สมาชิกจะตอบกลับภายในไม่กี่ชั่วโมง

[**โพสต์ถามหาโค้ชในกลุ่ม Facebook →**](https://web.facebook.com/groups/bangkok.padel.community)
`;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Post 3 — Padel Racket Buying Guide                                        */
/* ────────────────────────────────────────────────────────────────────────── */

const racketEn = `
## How to choose your first padel racket in Bangkok

After your first few sessions with rental rackets, you&apos;ll start to
notice the differences — and that&apos;s the moment to buy your own. The
right racket for a beginner or intermediate player in Bangkok costs
between **2,500 and 7,500 THB**, depending on brand and model.

This guide explains the three things that actually matter (shape, weight,
balance), and lists the shops in Bangkok where the
**[Bangkok Padel Community](https://web.facebook.com/groups/bangkok.padel.community)**
recommends buying.

## The three things that actually matter

### 1. Shape

| Shape | Sweet spot | Power | Control | Best for |
| --- | --- | --- | --- | --- |
| **Round** | Large, centred | Low | High | Beginners, control players |
| **Teardrop** | Medium, mid-balance | Medium | Medium | Intermediate, all-round |
| **Diamond** | Small, top-balance | High | Low | Advanced, attacking players |

For your first racket in Bangkok, almost everyone in our community will
tell you the same thing: **start with a round racket**. The bigger sweet
spot will hide the early mishits, and you&apos;ll improve your placement
before you start worrying about smash power.

### 2. Weight

Most modern padel rackets weigh between **350 g and 385 g**.

- **Under 360 g** is friendlier on the shoulder and easier to manoeuvre.
  Recommended for women and beginners.
- **365–375 g** is the sweet spot for most intermediate players.
- **Over 380 g** is for advanced players who want extra power on
  smashes — and who already have the shoulder strength for it.

Bangkok&apos;s heat means a lighter racket is genuinely a smart choice for
your first year. Arm fatigue at 32°C is real.

### 3. Balance

- **Low balance** (closer to the handle) → more control, easier defence.
- **Medium balance** → all-round.
- **High balance** (closer to the head) → more power, harder to control.

Beginner-friendly rackets are almost always round + light + low-balance.
Intermediate teardrops sit in the middle. Diamonds are high-balance.

## Brands you&apos;ll see most in Bangkok

- **Babolat** — strong distribution in Thailand with the Viper, Veron and
  Vertuo families covering attack, all-round and control.
- **Nox** — popular intermediate and advanced brand from Spain.
- **Bullpadel** — used by many ranked players; available in Bangkok via
  speciality shops.
- **Adidas** — wide range; the Metalbone and Drive series are common in
  Bangkok.
- **Black Crown, Siux, StarVie, Drop Shot, Dunlop** — all available
  through speciality stockists.

## Where to buy a padel racket in Bangkok

- **Padel Racket Thailand** — online shop with the widest brand mix
  (Adidas, Babolat, Black Crown, Bullpadel, Dunlop, Drop Shot, Nox, Siux,
  StarVie). Good filtering by skill level.
- **No Drama Padel (in-club shop)** — order in-store or pick from stocked
  rackets. Useful if you want to demo before buying.
- **Padel Asia** — in-club shop with rackets and accessories.
- **Babolat Thailand** — official local site if you specifically want the
  Babolat ranges.
- **Decathlon Thailand** — entry-level rackets at sub-3,000 THB price
  points if you want a starter while you decide.

## A pragmatic recommendation

If you&apos;re between sessions 5 and 30 and need a racket today:

1. Pick a **round-shaped** racket.
2. Weight between **360 and 370 g**.
3. **Low balance**.
4. Budget **3,500 – 5,500 THB**.
5. Get it from a shop where you can hold it before you buy.

If you can demo, even better. Many clubs in Bangkok have demo rackets
available, and the community runs racket-swap sessions in the Facebook
group.

> Buying or selling a racket? Drop a post in the
> [Bangkok Padel Community Facebook group](https://web.facebook.com/groups/bangkok.padel.community)
> — second-hand rackets in good condition move fast in our group.
`;

const racketTh = `
## วิธีเลือกไม้พาเดิลตัวแรกของคุณในกรุงเทพ

หลังจากตีพาเดิลด้วยไม้ของคลับมาประมาณ 3-5 ครั้ง คุณจะเริ่มสังเกตได้ว่าไม้แต่ละแบบให้ความรู้สึกต่างกัน — นั่นคือจังหวะที่ควรซื้อไม้ของตัวเอง ไม้พาเดิลสำหรับมือใหม่ถึงระดับกลางในกรุงเทพราคาประมาณ **2,500 ถึง 7,500 บาท** ขึ้นอยู่กับแบรนด์และรุ่น

บทความนี้จะอธิบาย 3 ปัจจัยที่สำคัญจริง (รูปทรง น้ำหนัก สมดุล) และรวมร้านในกรุงเทพที่สมาชิก **[Bangkok Padel Community](https://web.facebook.com/groups/bangkok.padel.community)** แนะนำให้ซื้อ

## 3 ปัจจัยที่สำคัญจริง

### 1. รูปทรง

| รูปทรง | Sweet spot | พลัง | คอนโทรล | เหมาะกับ |
| --- | --- | --- | --- | --- |
| **กลม (Round)** | ใหญ่ ตรงกลาง | ต่ำ | สูง | มือใหม่ ผู้เล่นเน้นคอนโทรล |
| **หยดน้ำ (Teardrop)** | กลาง สมดุลกลาง | กลาง | กลาง | ระดับกลาง ออลราวด์ |
| **เพชร (Diamond)** | เล็ก สมดุลบน | สูง | ต่ำ | ระดับสูง เน้นโจมตี |

สำหรับไม้ตัวแรกในกรุงเทพ คนในคอมมูนิตี้แทบทุกคนจะแนะนำเหมือนกัน: **เริ่มที่ทรงกลม** เพราะ sweet spot ใหญ่ทำให้ตีพลาดน้อยกว่า คุณจะพัฒนาเรื่องการวางบอลก่อนค่อยไปคิดเรื่องสแมช

### 2. น้ำหนัก

ไม้พาเดิลรุ่นใหม่ส่วนใหญ่หนักประมาณ **350-385 กรัม**

- **ต่ำกว่า 360 กรัม** เบามือ คุมง่าย เหมาะกับผู้หญิงและมือใหม่
- **365-375 กรัม** เป็นจุดที่เหมาะกับผู้เล่นระดับกลางมากที่สุด
- **เกิน 380 กรัม** สำหรับระดับสูงที่ต้องการพลังสแมชและมีกำลังไหล่พอ

อากาศร้อนกรุงเทพทำให้ไม้เบาเป็นทางเลือกที่ดีในปีแรก เพราะแขนล้าเร็วที่ 32°C

### 3. สมดุล

- **Low balance** (สมดุลด้ามจับ) → คอนโทรลดี ป้องกันง่าย
- **Medium balance** → ออลราวด์
- **High balance** (สมดุลหัวไม้) → พลังเยอะ แต่คุมยากกว่า

ไม้สำหรับมือใหม่มักจะเป็นทรงกลม น้ำหนักเบา และสมดุลต่ำ ไม้ระดับกลางทรงหยดน้ำอยู่ตรงกลาง ส่วนไม้ทรงเพชรสมดุลสูง

## แบรนด์ที่เจอเยอะที่สุดในกรุงเทพ

- **Babolat** — มีตัวแทนจำหน่ายในไทยชัดเจน รุ่น Viper, Veron, Vertuo ครอบคลุมตั้งแต่โจมตี ออลราวด์ ถึงคอนโทรล
- **Nox** — แบรนด์สเปนยอดนิยมระดับกลางถึงสูง
- **Bullpadel** — นักกีฬาในระดับแข่งใช้กันเยอะ หาในร้านพาเดิลเฉพาะทาง
- **Adidas** — รุ่นเยอะ Metalbone และ Drive เจอบ่อย
- **Black Crown, Siux, StarVie, Drop Shot, Dunlop** — มีในร้านพาเดิลเฉพาะทาง

## ซื้อไม้พาเดิลที่ไหนในกรุงเทพ

- **Padel Racket Thailand** — ร้านออนไลน์ที่มีแบรนด์เยอะที่สุด (Adidas, Babolat, Black Crown, Bullpadel, Dunlop, Drop Shot, Nox, Siux, StarVie) คัดกรองตามระดับฝีมือได้
- **No Drama Padel (ร้านในคลับ)** — สั่งหรือเลือกจากสต๊อกที่คลับ ลองจับก่อนซื้อได้
- **Padel Asia** — มีร้านในคลับ ทั้งไม้และอุปกรณ์
- **Babolat Thailand** — เว็บอย่างเป็นทางการของไทยถ้าเจาะ Babolat
- **Decathlon Thailand** — ไม้ราคาประหยัด ต่ำกว่า 3,000 บาท เหมาะเป็นไม้เริ่มต้น

## คำแนะนำแบบจริงจัง

ถ้าคุณตีพาเดิลมาแล้ว 5-30 ครั้ง และต้องเลือกไม้วันนี้:

1. เลือกทรง **กลม**
2. น้ำหนัก **360-370 กรัม**
3. สมดุล **ต่ำ**
4. งบ **3,500-5,500 บาท**
5. ซื้อจากร้านที่จับไม้ก่อนได้

ถ้ามีโอกาสยืมลองยิ่งดี คลับในกรุงเทพหลายแห่งมีไม้ Demo และในกลุ่ม Facebook ก็มีโพสต์แลกเปลี่ยนไม้ลองกันบ่อย

> ซื้อหรือขายไม้พาเดิล? โพสต์ในกลุ่ม [Bangkok Padel Community](https://web.facebook.com/groups/bangkok.padel.community) — ไม้มือสองสภาพดีหมุนเวียนเร็วมากในกลุ่ม
`;

export const posts: Post[] = [
  {
    slug: "best-padel-clubs-bangkok",
    date: "2026-05-12",
    readMinutes: 7,
    title: {
      en: "The Best Padel Clubs in Bangkok: A Community-Curated Guide (2026)",
      th: "คลับพาเดิลที่ดีที่สุดในกรุงเทพ: ไกด์โดยคอมมูนิตี้ (ปี 2026)",
    },
    excerpt: {
      en: "Where to play padel in Bangkok in 2026 — the venues our community keeps coming back to, by area, with what to look for in a club.",
      th: "ตีพาเดิลที่ไหนดีในกรุงเทพปี 2026 — คลับที่คอมมูนิตี้กลับไปเล่นซ้ำ แบ่งตามโซน พร้อมเช็คลิสต์ที่ควรเช็คก่อนเลือกคลับ",
    },
    keywords: {
      en: [
        "padel clubs Bangkok",
        "best padel courts Bangkok",
        "where to play padel Bangkok 2026",
        "Kross Padel",
        "Pad Thai Padel",
        "Padel Asia Bangkok",
        "padel venues Bangkok",
      ],
      th: [
        "คลับพาเดิล กรุงเทพ",
        "คอร์ทพาเดิล กรุงเทพ",
        "ตีพาเดิลที่ไหนดี กรุงเทพ",
        "Kross Padel",
        "Pad Thai Padel",
        "Padel Asia กรุงเทพ",
      ],
    },
    body: { en: clubsEn, th: clubsTh },
  },
  {
    slug: "padel-coaching-bangkok-prices-guide",
    date: "2026-05-08",
    readMinutes: 6,
    title: {
      en: "Padel Coaching in Bangkok: Prices, Academies and How to Pick a Coach (2026)",
      th: "เรียนพาเดิลในกรุงเทพ: ราคา คลับ และวิธีเลือกโค้ช (ปี 2026)",
    },
    excerpt: {
      en: "Private lessons in Bangkok run from ~1,400 to ~2,500 THB/hr. Here's what you get for it, plus what to ask before booking a coach.",
      th: "เรียนพาเดิลในกรุงเทพ ราคา ~1,400 ถึง ~2,500 บาท/ชม. สำหรับเรียนเดี่ยว นี่คือสิ่งที่ได้และคำถามที่ควรถามก่อนจองโค้ช",
    },
    keywords: {
      en: [
        "padel coaching Bangkok",
        "padel lessons Bangkok",
        "padel coach Bangkok price",
        "padel academy Bangkok",
        "Pad Thai Padel coaching",
        "No Drama Padel coaching",
        "Bangkok Padel lessons",
      ],
      th: [
        "เรียนพาเดิล กรุงเทพ",
        "โค้ชพาเดิล กรุงเทพ",
        "ราคาเรียนพาเดิล กรุงเทพ",
        "อะคาเดมีพาเดิล กรุงเทพ",
        "Pad Thai Padel เรียน",
      ],
    },
    body: { en: coachingEn, th: coachingTh },
  },
  {
    slug: "padel-racket-buying-guide-bangkok",
    date: "2026-05-02",
    readMinutes: 8,
    title: {
      en: "How to Choose Your First Padel Racket in Bangkok (Beginner to Intermediate, 2026)",
      th: "เลือกไม้พาเดิลตัวแรกในกรุงเทพ (มือใหม่ถึงระดับกลาง ปี 2026)",
    },
    excerpt: {
      en: "Round, teardrop or diamond? Weight, balance, brand. The community-tested way to pick a padel racket in Bangkok without overspending.",
      th: "ทรงกลม หยดน้ำ หรือเพชร? น้ำหนัก สมดุล แบรนด์ — วิธีเลือกไม้พาเดิลในกรุงเทพแบบคอมมูนิตี้แนะนำ ไม่ต้องจ่ายแพงเกิน",
    },
    keywords: {
      en: [
        "padel racket Bangkok",
        "best padel racket beginner",
        "buy padel racket Thailand",
        "Babolat padel Thailand",
        "Nox padel Bangkok",
        "Bullpadel Bangkok",
        "padel racket shape weight balance",
      ],
      th: [
        "ไม้พาเดิล กรุงเทพ",
        "ไม้พาเดิลมือใหม่",
        "ซื้อไม้พาเดิล ประเทศไทย",
        "Babolat พาเดิล ไทย",
        "Nox พาเดิล",
        "Bullpadel ไทย",
      ],
    },
    body: { en: racketEn, th: racketTh },
  },
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function listPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
