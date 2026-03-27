export interface Project {
  title: string;
  description: string;
  role: string;
  tags: string[];
  link?: string;
  isPrivate?: boolean;
  category: "research" | "dev";
  authors?: string; // e.g. "with Prof. X" or "Co-authored with Y"
  relatedPresentations?: Presentation[];
  relatedPapers?: { title: string; link: string }[];
  longDescription?: string; // More detailed description for the modal
}

export interface Article {
  title: string;
  date: string;
  summary: string;
  link: string;
  category: "research" | "dev";
}

export interface Presentation {
  title: string;
  authors?: string;
  event: string;
  eventUrl?: string;
  date: string;
  location?: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
}

export interface Experience {
  role: string;
  organization: string;
  date: string;
}

export interface Award {
  title: string;
  date: string;
}

// Define presentations here to reference them in multiple places
const presentationsData: Presentation[] = [
  {
    title: "自動車部品の背景にある技術革新度と取引距離",
    authors: "大野 由香子, 黒木 裕鷹, 横山 健人 (発表者)",
    event: "CSIS DAYS 2025",
    eventUrl: "https://sites.google.com/view/csis-days-2025",
    date: "2025-11-15",
    location: "東京大学 柏キャンパス",
  },
  {
    title: "自動車部品サプライネットワークにおける取引距離と部品の技術革新度",
    authors: "大野 由香子, 黒木 裕鷹, 横山 健人 (発表者)",
    event: "Regional Complexity Workshop 2026",
    eventUrl: "https://kagawa-regional-science.github.io/",
    date: "2026-02-22",
    location: "香川大学",
  },
];

export const siteConfig = {
  profile: {
    name: "Kento YOKOYAMA",
    title:
      "Master's Student at Keio University / Indie Hacker (self-proclaimed)",
    bullets: [
      "慶應義塾大学大学院 商学研究科 修士課程（都市経済学・実証分析）",
      "研究：土地利用規制 × 住宅価格/人口移動",
      "Build：日常の様々な面倒を減らすツールを個人開発",
    ],
  },
  links: {
    cv: "/CV_hp.pdf", // Place your CV PDF in the public folder
    linkedin: "https://www.linkedin.com/in/kento-yokoyama-0428a82a7/",
    github: "https://github.com/y-k-15",
  },
  featured: [
    {
      title: "Comming Soon",
      description: "Coming Soon",
      role: "--",
      tags: [],
      link: "",
      category: "dev",
    },

    {
      title: "土地利用規制が住宅価格・土地価格・人口流動に与える影響 (京都市における建築物の高さ規制の事例)",
      description:
        "京都市における建築物の高さ規制が住宅価格、土地価格、および人口流動に与える影響を準自然実験的手法を用いて推定する。",
      role: "Master's Thesis",
      tags: ["Master Thesis","Urban Economics", "Housing Market", "Kyoto"],
      link: "",
      category: "research",
      authors: "Supervisor: 大野由香子 教授",
    },
    {
      title: "自動車部品サプライネットワークにおける取引距離と部品の技術革新度",
      description:
        "",
      role: "Co-Researcher",
      tags: ["Network Analysis", "Economics", "Python", "NetworkX"],
      link: "",
      category: "research",
      authors: "大野 由香子, 黒木 裕鷹, 横山 健人",
      longDescription:
        "",
      relatedPresentations: [
        presentationsData[0],
        presentationsData[1],
      ],
    },
  ] as Project[],
  projects: [
    {
      title: "Portfolio Site",
      description: "このポートフォリオサイト。Astro + Tailwind CSSで構築。",
      role: "Frontend",
      tags: ["Astro", "TypeScript"],
      link: "https://github.com/y-k-15/y-k-15.github.io",
      category: "dev",
    },
    {
      title: "Private Research Tool",
      description: "研究室内部で使用するデータクリーニングツール。",
      role: "Python",
      tags: ["Python", "Pandas"],
      isPrivate: true,
      category: "research",
    },
  ] as Project[],
  writings: [
    {
      title: "Coming Soon",
      date: "2026年XX月XX日",
      summary: "Coming Soon",
      link: "#",
      category: "research",
    },
    {
      title: "Coming Soon",
      date: "2026年XX月XX日",
      summary: "Coming Soon",
      link: "#",
      category: "dev",
    },
  ] as Article[],
  presentations: presentationsData,
  education: [
    {
      institution: "慶應義塾大学大学院 商学研究科 修士課程",
      degree: "入学",
      date: "2025年4月",
      link: "https://www.fbc.keio.ac.jp/graduate/"
    },
    {
      institution: "慶應義塾大学 商学部",
      degree: "卒業",
      date: "2025年3月",
      link: "https://www.fbc.keio.ac.jp/"
    },
    {
      institution: "愛知県立岡崎高等学校",
      degree: "卒業",
      date: "2021年3月",
      link: "https://okazaki-h.aichi-c.ed.jp/cms/"
    }
  ] as (Education & { link?: string })[],
  experience: [
    {
      role: "Research Assistant to Prof. Yukako ONO",
      organization: "慶應義塾大学 商学部",
      date: "2024年1月 - Present",
    },
  ] as Experience[],
  awards: [
    {
      title: "小泉信三記念大学院特別奨学研究生",
      date: "2025年4月 - 2026年3月",
    },
  ] as Award[],
  contact: {
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzDZUga-6VntOQWmSVPI-f9ge5yHgc3uXlSUVU4aGRHEpvLw/viewform?usp=header",
  },
};
