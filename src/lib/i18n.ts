import type { Locale } from "./site";

type Dict = {
  meta: {
    home: { title: string; description: string };
    blog: { title: string; description: string };
    coaching: { title: string; description: string };
    courts: { title: string; description: string };
  };
  nav: {
    home: string;
    blog: string;
    coaching: string;
    courts: string;
    switchLanguage: string;
  };
  home: {
    badge: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    tagline: string;
    facebookLabel: string;
    facebookSublabel: string;
    instagramLabel: string;
    instagramSublabel: string;
    about: string;
    footer: string;
  };
  popup: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  blog: {
    title: string;
    description: string;
    readMore: string;
    backToBlog: string;
    publishedOn: string;
    minRead: (n: number) => string;
  };
  coaching: {
    title: string;
    lead: string;
    body: string;
    cta: string;
    ctaSub: string;
  };
  courts: {
    eyebrow: string;
    h1: string;
    lead: string;
    methodologyTitle: string;
    methodology: string;
    transit: string;
    courts: string;
    price: string;
    booking: string;
    visitWebsite: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    relatedLead: string;
    relatedPlay: string;
    relatedClubs: string;
    relatedCoaching: string;
  };
};

const en: Dict = {
  meta: {
    home: {
      title: "Bangkok Padel Community — #1 Padel Community in Bangkok",
      description:
        "Bangkok's #1 padel community. Find players, courts, tournaments and events. Join the largest padel network in Bangkok on Facebook and Instagram.",
    },
    blog: {
      title: "Padel in Bangkok — News, Courts & Tips",
      description:
        "Padel stories, court guides, tournament reports and tips from Bangkok's biggest padel community.",
    },
    coaching: {
      title: "Padel Coaching in Bangkok",
      description:
        "Looking for a padel coach in Bangkok? Ask the Bangkok Padel Community on Facebook and the community will recommend coaches at every level.",
    },
    courts: {
      title: "Padel Courts in Bangkok — Ranked (2026)",
      description:
        "The best padel courts and clubs in Bangkok, ranked by the Bangkok Padel Community. Prices, booking apps, BTS access and what each venue is known for.",
    },
  },
  nav: {
    home: "Home",
    blog: "Blog",
    coaching: "Coaching",
    courts: "Courts",
    switchLanguage: "Switch language",
  },
  home: {
    badge: "#1 Padel Community in Bangkok",
    titleA: "Bangkok",
    titleAccent: "Padel",
    titleB: "Community",
    tagline:
      "The largest padel network in Bangkok, Thailand. Find players, discover courts, and stay up to date on tournaments and events.",
    facebookLabel: "Join the Facebook Group",
    facebookSublabel: "Players, matches, courts & events",
    instagramLabel: "Follow on Instagram",
    instagramSublabel: "@bangkokpadelcommunity",
    about:
      "Bangkok Padel Community is the city's leading padel network, connecting players of every level across Bangkok and Thailand. Whether you're looking for a partner, a court, a club or a tournament — start here.",
    footer: "Bangkok, Thailand",
  },
  popup: {
    title: "Join the Bangkok Padel Community",
    body: "Get matched with players, discover courts and stay up to date on tournaments and events — directly in our Facebook group.",
    primary: "Join the Facebook group",
    secondary: "Maybe later",
  },
  blog: {
    title: "Blog",
    description:
      "Padel stories, court guides, tournament reports and tips from Bangkok's biggest padel community.",
    readMore: "Read more",
    backToBlog: "Back to blog",
    publishedOn: "Published",
    minRead: (n: number) => `${n} min read`,
  },
  coaching: {
    title: "Padel Coaching in Bangkok",
    lead: "Want to take your padel to the next level?",
    body: "We don't run lessons directly — but our community has dozens of players, captains and coaches across Bangkok who can recommend the right coach for your level, schedule and budget. Just ask in the Facebook group and you'll get answers fast.",
    cta: "Ask for a coach in the Facebook group",
    ctaSub: "Free, public, and the fastest way to find a coach in Bangkok",
  },
  courts: {
    eyebrow: "Padel Court Rankings",
    h1: "Padel Courts in Bangkok — Ranked (2026)",
    lead: "The best places to play padel in Bangkok, ranked by the community. Prices, booking apps and BTS access at a glance.",
    methodologyTitle: "How this ranking is built",
    methodology:
      "Rankings reflect recurring recommendations from members of the Bangkok Padel Community Facebook group, balanced against court count, booking reliability, coaching depth, social programming (Americanos / mixers) and BTS / MRT accessibility. We update the list when new clubs open or pricing changes. Prices change — always confirm with the club before booking.",
    transit: "Transit",
    courts: "Courts",
    price: "Price",
    booking: "Booking",
    visitWebsite: "Visit website",
    ctaTitle: "Not sure which court to pick?",
    ctaBody:
      "Post your area, level and weekly schedule in the Facebook group — the community will point you to the right club in a day.",
    ctaButton: "Ask the Bangkok Padel Community",
    relatedLead: "See also:",
    relatedPlay: "Play padel in Bangkok",
    relatedClubs: "Best padel clubs guide",
    relatedCoaching: "Coaching",
  },
};

const th: Dict = {
  meta: {
    home: {
      title: "Bangkok Padel Community — คอมมูนิตี้พาเดิลอันดับ 1 ในกรุงเทพฯ",
      description:
        "คอมมูนิตี้พาเดิลที่ใหญ่ที่สุดในกรุงเทพฯ หาคู่ตี หาคอร์ท ติดตามทัวร์นาเมนต์และอีเวนต์ เข้าร่วมเครือข่ายพาเดิลที่ใหญ่ที่สุดในกรุงเทพได้ทาง Facebook และ Instagram",
    },
    blog: {
      title: "พาเดิลในกรุงเทพฯ — ข่าว คอร์ท และเคล็ดลับ",
      description:
        "เรื่องราวพาเดิล ไกด์คอร์ท รายงานทัวร์นาเมนต์ และเคล็ดลับจากคอมมูนิตี้พาเดิลที่ใหญ่ที่สุดในกรุงเทพฯ",
    },
    coaching: {
      title: "โค้ชพาเดิลในกรุงเทพฯ",
      description:
        "กำลังหาโค้ชพาเดิลในกรุงเทพอยู่หรือเปล่า? โพสต์ถามใน Facebook กลุ่ม Bangkok Padel Community แล้วคอมมูนิตี้จะแนะนำโค้ชที่เหมาะกับคุณ",
    },
    courts: {
      title: "คอร์ทพาเดิลในกรุงเทพฯ — จัดอันดับ (ปี 2026)",
      description:
        "คอร์ทและคลับพาเดิลที่ดีที่สุดในกรุงเทพ จัดอันดับโดยคอมมูนิตี้ Bangkok Padel Community ครบทั้งราคา แอปจอง การเดินทาง BTS และจุดเด่นของแต่ละคลับ",
    },
  },
  nav: {
    home: "หน้าแรก",
    blog: "บล็อก",
    coaching: "โค้ช",
    courts: "คอร์ท",
    switchLanguage: "เปลี่ยนภาษา",
  },
  home: {
    badge: "คอมมูนิตี้พาเดิลอันดับ 1 ในกรุงเทพฯ",
    titleA: "Bangkok",
    titleAccent: "Padel",
    titleB: "Community",
    tagline:
      "เครือข่ายพาเดิลที่ใหญ่ที่สุดในกรุงเทพฯ ประเทศไทย หาคู่ตี ค้นหาคอร์ท และอัปเดตทัวร์นาเมนต์กับอีเวนต์ได้ที่นี่",
    facebookLabel: "เข้าร่วมกลุ่ม Facebook",
    facebookSublabel: "คู่ตี แมตช์ คอร์ท และอีเวนต์",
    instagramLabel: "ติดตามทาง Instagram",
    instagramSublabel: "@bangkokpadelcommunity",
    about:
      "Bangkok Padel Community คือเครือข่ายพาเดิลชั้นนำของกรุงเทพฯ เชื่อมต่อผู้เล่นทุกระดับทั่วกรุงเทพและประเทศไทย ไม่ว่าคุณกำลังหาคู่ตี คอร์ท คลับ หรือทัวร์นาเมนต์ — เริ่มต้นที่นี่ได้เลย",
    footer: "กรุงเทพฯ ประเทศไทย",
  },
  popup: {
    title: "เข้าร่วม Bangkok Padel Community",
    body: "หาคู่ตี ค้นหาคอร์ท และอัปเดตทัวร์นาเมนต์กับอีเวนต์ — ได้ในกลุ่ม Facebook ของเราโดยตรง",
    primary: "เข้าร่วมกลุ่ม Facebook",
    secondary: "ไว้ค่อยดู",
  },
  blog: {
    title: "บล็อก",
    description:
      "เรื่องราวพาเดิล ไกด์คอร์ท รายงานทัวร์นาเมนต์ และเคล็ดลับจากคอมมูนิตี้พาเดิลที่ใหญ่ที่สุดในกรุงเทพฯ",
    readMore: "อ่านต่อ",
    backToBlog: "กลับไปที่บล็อก",
    publishedOn: "เผยแพร่",
    minRead: (n: number) => `อ่าน ${n} นาที`,
  },
  coaching: {
    title: "โค้ชพาเดิลในกรุงเทพฯ",
    lead: "อยากพัฒนาเกมพาเดิลของคุณให้ดีขึ้น?",
    body: "เราไม่ได้สอนเองโดยตรง — แต่ในคอมมูนิตี้ของเรามีผู้เล่น กัปตันทีม และโค้ชจำนวนมากในกรุงเทพฯ ที่สามารถแนะนำโค้ชที่เหมาะกับระดับ ตารางเวลา และงบประมาณของคุณได้ เพียงโพสต์ถามในกลุ่ม Facebook คุณจะได้คำตอบอย่างรวดเร็ว",
    cta: "โพสต์ถามหาโค้ชในกลุ่ม Facebook",
    ctaSub: "ฟรี เปิดสาธารณะ และเป็นวิธีที่เร็วที่สุดในการหาโค้ชในกรุงเทพฯ",
  },
  courts: {
    eyebrow: "อันดับคอร์ทพาเดิล",
    h1: "คอร์ทพาเดิลในกรุงเทพ — จัดอันดับ (ปี 2026)",
    lead: "สถานที่ตีพาเดิลที่ดีที่สุดในกรุงเทพ จัดอันดับโดยคอมมูนิตี้ พร้อมราคา แอปจอง และการเดินทาง BTS",
    methodologyTitle: "อันดับนี้สร้างขึ้นอย่างไร",
    methodology:
      "อันดับสะท้อนคำแนะนำที่สมาชิกกลุ่ม Facebook Bangkok Padel Community แชร์ซ้ำ ๆ ผสมกับจำนวนคอร์ท ความน่าเชื่อถือของการจอง ความลึกของโค้ช โปรแกรมโซเชียล (Americano / mixer) และการเข้าถึง BTS / MRT เราอัปเดตเมื่อมีคลับเปิดใหม่หรือราคาเปลี่ยน ราคาอาจเปลี่ยนแปลง — ยืนยันกับคลับก่อนจองทุกครั้ง",
    transit: "การเดินทาง",
    courts: "คอร์ท",
    price: "ราคา",
    booking: "การจอง",
    visitWebsite: "ดูเว็บไซต์",
    ctaTitle: "ยังไม่แน่ใจว่าควรเลือกคลับไหน?",
    ctaBody:
      "โพสต์โซน ระดับ และตารางของคุณในกลุ่ม Facebook — คอมมูนิตี้จะแนะนำคลับที่เหมาะภายในวันเดียว",
    ctaButton: "ถามในกลุ่ม Bangkok Padel Community",
    relatedLead: "อ่านเพิ่มเติม:",
    relatedPlay: "ตีพาเดิลในกรุงเทพ",
    relatedClubs: "ไกด์คลับพาเดิล",
    relatedCoaching: "โค้ช",
  },
};

const dictionaries: Record<Locale, Dict> = { en, th };

export function dict(locale: Locale): Dict {
  return dictionaries[locale];
}

export type { Dict };
