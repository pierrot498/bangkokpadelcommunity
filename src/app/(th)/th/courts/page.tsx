import type { Metadata } from "next";
import CourtsContent from "@/components/CourtsContent";
import { listCourts } from "@/data/courts";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbLd,
  faqPageLd,
  itemListLd,
  webPageLd,
} from "@/lib/jsonld";
import { dict } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const locale = "th" as const;
const d = dict(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/courts",
  title: d.meta.courts.title,
  description: d.meta.courts.description,
  keywords: [
    "คอร์ทพาเดิล กรุงเทพ",
    "คอร์ทพาเดิลที่ดีที่สุด กรุงเทพ",
    "อันดับคอร์ทพาเดิล",
    "เล่นพาเดิลที่ไหน กรุงเทพ",
    "คลับพาเดิล กรุงเทพ",
    "พาเดิล กรุงเทพ 2026",
  ],
});

const FAQ = [
  {
    question: "คอร์ทพาเดิลที่ดีที่สุดในกรุงเทพคือที่ไหน?",
    answer:
      "ในปัจจุบันคอมมูนิตี้ Bangkok Padel จัดให้ Pad Thai Padel (สุขุมวิท) และ Bangkok Padel (รูฟท็อป Ambassador Hotel) อยู่อันดับต้นในโซนใจกลาง ส่วนกรุงเทพตะวันออกคือ Kross Padel On Nut และ The Padel Co. คลับที่เหมาะกับคุณขึ้นกับการเดินทาง พื้นคอร์ท และคุณชอบคอร์ทในร่ม รูฟท็อป หรือกลางแจ้งที่คลุม",
  },
  {
    question: "ในกรุงเทพมีคอร์ทพาเดิลกี่ที่?",
    answer:
      "กรุงเทพมีคลับพาเดิลมากกว่า 20 แห่ง กระจายอยู่ในสุขุมวิท สาทร อ่อนนุช รัชดา ประตูน้ำ และบางนา แต่ละคลับมีตั้งแต่ 2 ถึง 7 คอร์ท คลับใหม่ยังคงเปิดอย่างต่อเนื่องในปี 2025 และ 2026",
  },
  {
    question: "ค่าคอร์ทพาเดิลต่อชั่วโมงในกรุงเทพประมาณเท่าไหร่?",
    answer:
      "ค่าคอร์ทอยู่ในช่วงประมาณ 800 บาท / ชั่วโมง สำหรับ off-peak ที่ Playerbox ถึง ~2,000 บาท / ชั่วโมง สำหรับ primetime ที่คลับพรีเมียม ค่าใช้จ่ายหารกันได้ระหว่างผู้เล่น 4 คน เหลือคนละประมาณ 200 – 500 บาท",
  },
  {
    question: "คอร์ทไหนเหมาะกับมือใหม่ที่สุด?",
    answer:
      "No Drama Padel และ Baan Padel ขึ้นชื่อด้านโปรแกรมโค้ชสำหรับมือใหม่และ Americano คละระดับรายสัปดาห์ ส่วน Pad Thai Padel และ Bangkok Padel ก็มีฟอร์แมตโซเชียลคละระดับที่ต้อนรับผู้เริ่มต้นเช่นกัน",
  },
];

export default function ThCourtsPage() {
  const path = "/th/courts";
  const courts = listCourts();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageLd(locale, path, d.meta.courts.title, d.meta.courts.description),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: d.nav.home, path: "/th" },
              { name: d.nav.courts, path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListLd({
              pathname: path,
              name: d.meta.courts.title,
              description: d.meta.courts.description,
              items: courts.map((c) => ({
                name: c.name,
                url: `${SITE_URL}${path}#${c.id}`,
                description: c.pitch[locale],
              })),
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageLd(FAQ)),
        }}
      />
      <CourtsContent locale={locale} />
    </>
  );
}
