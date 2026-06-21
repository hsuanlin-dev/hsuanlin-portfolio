export type LangText = {
  en: string
  zh: string
}

export type LangList = {
  en: string[]
  zh: string[]
}

type Project = {
  name: string
  description: LangText
  link: string
  image: string
  id: string
}

type WorkRole = {
  title: LangText
  start: string
  end: string
  highlights: LangList
}

type WorkExperience = {
  id: string
  company: string
  icon?: string
  roles: WorkRole[]
}

type Education = {
  id: string
  title: LangText
  school: string
  start: string
  end: string
  icon?: string
  highlights?: LangList
}

type BlogPost = {
  title: LangText
  description: LangText
  link: string
  uid: string
}

type SocialLink = {
  label: LangText
  link: string
  download?: boolean
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Core Tech',
    items: ['JavaScript (ES6+)', 'React', 'Semantic HTML5', 'SASS · CSS Architecture'],
  },
  {
    category: 'Design',
    items: ['Design Systems', 'UI/UX Design', 'Pixel-perfect UI', 'Figma', 'A11y (WCAG 2.1 AA)'],
  },
  {
    category: 'Engineering & Tooling',
    items: ['TypeScript', 'NPM', 'Git', 'Tailwind CSS', 'Webpack', 'Vite'],
  },
  {
    category: 'AI Development Tools',
    items: ['Claude Code', 'Cursor'],
  },
]

export const PROJECTS: Project[] = [
    {
    name: 'TaipeiPASS — Taipei City Digital Ecosystem',
    description: {
      en: "Frontend lead for Taipei City Government’s TaipeiPASS platform, built to WCAG 2.1 AA standards.",
      zh: '負責台北市政府 TaipeiPASS 平台的前端開發，落實 WCAG 2.1 AA 無障礙標準。',
    },
    // link: 'https://id.taipei/tpcd/',
    link: '/project/taipei-pass',
    image: '/taipeipass.png',
    id: 'project1',
  },
  {
    name: 'National Park Service — Standardized UI Framework',
    description: {
      en: "Rebuilt two government platforms to match the National Park Service portal's UI system, without sharing a codebase.",
      zh: '參照國家公園入口網的 UI 規範，獨立重建兩個政府平台的前端，未共用程式碼。',
    },
    // link: 'https://www.nps.gov.tw/ch',
    link: '/project/national-park-service',
    image: '/nps.png',
    id: 'project2',
  },
  {
    name: 'Indigenous Carbon Sink — ESG Matchmaking Platform',
    description: {
      en: "Sole contributor for the platform's visual layer, built with a custom SCSS architecture.",
      zh: '獨立負責平台的整套視覺層，採用自訂 SCSS 架構完成開發。',
    },
    // link: 'https://csp-tradevan.com.tw/ESG/Formosa',
    link: '/project/indigenous-carbon-sink',
    image: '/esg.png',
    id: 'project3',
  },
  {
    name: 'EZSIGN — B2B Digital Signature Experience',
    description: {
      en: "Multi-step Wizard workflow and landing page for EZSIGN's B2B onboarding, built with Bootstrap.",
      zh: '為 EZSIGN 的 B2B 設計整體視覺呈現與 UX flow，以多步驟 Wizard 簡化複雜的法律簽署流程。',
    },
    // link: 'https://ezsign.tradevan.com.tw/APESP/',
    link: '/project/ezsign',
    image: '/ezsign.png',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'tradevan',
    company: 'Tradevan, Taipei, Taiwan',
    icon: '/tradevan.jpg',
    roles: [
      {
        title: {
          en: 'Senior Frontend Engineer',
          zh: '資深前端工程師',
        },
        start: '03/2023',
        end: 'Present',
        highlights: {
          en: [
            'Served as frontend lead on a 5-person team building the TaipeiPASS digital platform for Taipei City Government, owning UI implementation and enforcing WCAG 2.1 AA accessibility standards across the frontend layer.',
            'Rebuilt the frontends of two internal government platforms from legacy code, independently replicating the UI specification and component conventions of the National Park Service portal to maintain visual consistency without a shared codebase.',
            'Designed and built the full visual layer of the Indigenous Carbon Sink ESG platform as a sole contributor, implementing a custom SCSS architecture with a defined color system and responsive layout.',
            'Implemented a multi-step Wizard workflow and landing page for EZSIGN\'s B2B onboarding using Bootstrap, simplifying a complex legal signing process into a guided, high-contrast UI flow.',
          ],
          zh: [
            '擔任 5 人團隊的前端負責人，打造台北市政府的 TaipeiPASS 數位平台，負責 UI 實作並在前端層全面落實 WCAG 2.1 AA 無障礙標準。',
            '在沒有共用程式碼的情況下，參照國家公園入口網的 UI 規範與元件慣例，獨立重建另外兩個政府平台的前端，維持視覺一致性。',
            '作為唯一負責人，設計並打造原住民碳匯 ESG 平台的整套視覺層，建立自訂 SCSS 架構，包含色彩系統與響應式版面。',
            '使用 Bootstrap 為 EZSIGN 的 B2B 導入流程實作多步驟 Wizard 流程與 landing page，將複雜的法律簽署流程簡化為引導式、高對比的 UI 流程。',
          ],
        },
      },
      {
        title: {
          en: 'Frontend Engineer',
          zh: '前端工程師',
        },
        start: '03/2021',
        end: '03/2023',
        highlights: {
          en: [
            'Refactored the ECAR cross-agency vehicle platform and NSRRC research portal from legacy markup to a structured SCSS + ES6+ architecture, including complex multi-step forms with dynamic field logic and data-heavy admin interfaces.',
            'Established a unified visual style guide and component conventions for both platforms, working directly with internal users to align the UI with existing government workflows.',
          ],
          zh: [
            '將 ECAR 跨機關車輛平台與 NSRRC 研究入口網站從舊有 markup 重構為結構化的 SCSS + ES6+ 架構，包含具動態欄位邏輯的多步驟表單與資料密集的後台介面。',
            '為兩個平台建立統一的視覺風格指南與元件規範，並直接與內部使用者協作，讓 UI 對齊既有的政府作業流程。',
          ],
        },
      },
      {
        title: {
          en: 'Full Stack Developer',
          zh: '全端工程師',
        },
        start: '03/2020',
        end: '03/2021',
        highlights: {
          en: [
            'Built the APEWS portal, a centralized entry point providing unified access and consistent UI across 10+ independent IoT surveillance subsystems, with shared visual styles and cross-system SSO navigation.',
            'Built a real-time visualization dashboard integrating Google Maps API and Chart.js to display live container tracking states across 10+ interconnected subsystems, designed under a zero-scroll high-density layout constraint.',
            'Developed the data layer using Java Spring MVC and SQL to support high-concurrency container tracking, ensuring consistent state between backend and the frontend visualization layer.',
          ],
          zh: [
            '打造 APEWS 入口網站，作為串接 10 個以上獨立 IoT 監控子系統的單一入口，提供統一的存取方式與一致的 UI，並具備跨系統 SSO 導覽與共用視覺風格。',
            '打造整合 Google Maps API 與 Chart.js 的即時視覺化儀表板，在零捲動、高密度版面的限制下，顯示橫跨 10 個以上子系統的即時貨櫃追蹤狀態。',
            '使用 Java Spring MVC 與 SQL 開發資料層，支援高併發的貨櫃追蹤需求，確保後端與前端視覺化層之間的狀態一致。',
          ],
        },
      },
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'edu-parsons',
    title: {
      en: "Master’s Degree in Design and Technology",
      zh: '設計與科技碩士',
    },
    school: 'Parsons School of Design, New York, NY, USA',
    start: '2016',
    end: '2018',
    icon: '/parsons.png',
    highlights: {
      en: [
        'Focused on the intersection of design, technology, and human-centered interaction through studio-based projects.',
        'Selected for the Studying Abroad for Excellent Students Scholarship, sponsored by the Ministry of Education, Taiwan.',
      ],
      zh: [
        '透過工作室型專案深入探索設計、科技與以人為本互動的交會。',
        '獲教育部優秀學生出國留學獎學金。',
      ],
    },
  },
  {
    id: 'edu-ntu',
    title: {
      en: "Bachelor’s Degree in Computer Science",
      zh: '資訊工程學士',
    },
    school: 'National Taipei University, Taipei, Taiwan',
    start: '2010',
    end: '2014',
    icon: '/ntpu.jpg',
    highlights: {
      en: [
        'A significant part of the education involves practical experience through labs and projects, which are designed to enhance problem-solving skills.',
      ],
      zh: [
        '課程包含大量實驗與專題實作，著重培養問題分析與解決能力。',
      ],
    },
  },
  {
    id: 'edu-efrei',
    title: {
      en: 'Exchange Program in Computer Science',
      zh: '資訊工程交換計畫',
    },
    school: 'EFREI – Engineering School of Digital Technologies, Paris, France',
    start: '2012',
    end: '2013',
    icon: '/efrei.jpg',
    highlights: {
      en: [
        'Awarded the MOE Scholarship for Excellent Students to Study Overseas (2012).',
      ],
      zh: [
        '2012 年獲教育部優秀學生出國研修獎學金。',
      ],
    },
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      en: 'JavaScript Event Loop Explained: Understanding Microtasks and Macrotasks with a Stir-Fry Restaurant Analogy',
      zh: '深入淺出 JavaScript Event Loop：熱炒店比喻，理解微任務與宏任務',
    },
    description: {
      en: 'Understand JavaScript Event Loop, microtasks, and macrotasks through a stir-fry restaurant analogy.',
      zh: '用熱炒店比喻理解 JavaScript Event Loop、微任務與宏任務的執行順序。',
    },
    link: '/blog/javascript-event-loop-explained',
    uid: 'blog-1',
  },
  {
    title: {
      en: 'In-Depth Guide to JavaScript Asynchrony: Promise, Async/Await, and a Handwritten Promise.all',
      zh: 'JavaScript 非同步深度解析：Promise、Async/Await 與手寫 Promise.all',
    },
    description: {
      en: 'A deeper understanding of JavaScript asynchrony, Promise, and Async/Await.',
      zh: '深入理解 JavaScript 非同步、Promise 與 Async/Await。',
    },
    link: '/blog/javascript-promise-async-await',
    uid: 'blog-2',
  },
  {
    title: {
      en: 'JavaScript Closures: From the Explorer’s Backpack Analogy to Real-World Applications',
      zh: 'JavaScript 閉包 (Closure)：從探險家背包比喻到實際應用',
    },
    description: {
      en: 'Understand JavaScript closures through the “explorer’s backpack” analogy and learn how scope persistence works in practice.',
      zh: '用「探險家背包」比喻理解 JavaScript Closure，學會作用域保存與實際開發應用。',
    },
    link: '/blog/javascript-closures',
    uid: 'blog-3',
  },
  {
    title: {
      en: 'JavaScript Prototype System and ES6 Classes: From “Finding Dad’s Treasure Chest” to Understanding the Syntax Sugar',
      zh: 'JavaScript 原型系統與 ES6 Class：從「找爸爸翻寶箱」到語法糖完整解析',
    },
    description: {
      en: 'Using the “prototype treasure hunt” analogy, this walks through how the JavaScript prototype chain works and how ES6 classes function under the hood.',
      zh: '透過「找爸爸翻寶箱」的比喻理解 JavaScript Prototype Chain 與 ES6 Class 的運作原理。',
    },
    link: '/blog/javascript-prototype-system',
    uid: 'blog-4',
  },
  {
    title: {
      en: 'The JavaScript this Keyword Fully Explained: The 5 Binding Rules and Practical Use Cases',
      zh: 'JavaScript this 關鍵字徹底解析：5 大綁定規則與實際應用',
    },
    description: {
      en: 'Understand how the JavaScript this keyword works through the five binding rules and practical examples.',
      zh: '透過五大綁定規則與實例解析 JavaScript this 的指向與實際應用。',
    },
    link: '/blog/javascript-this-keyword',
    uid: 'blog-5',
  },
  // {
  //   title: {
  //     en: 'Understanding JavaScript Variable Declarations: A Complete Guide to var, let, const, Hoisting, and the TDZ',
  //     zh: '深入淺出 JavaScript 變數宣告：var、let、const、Hoisting 與 TDZ 完全解析',
  //   },
  //   description: {
  //     en: 'Explore how var, let, const, hoisting, and the TDZ shape JavaScript variable behavior.',
  //     zh: '解析 var、let、const、Hoisting 與 TDZ，理解 JavaScript 變數宣告的核心機制。',
  //   },
  //   link: '/blog/test-post-my-first-custom-article',
  //   uid: 'blog-6',
  // },
  // {
  //   title: {
  //     en: 'JavaScript Shallow Copy vs Deep Copy: Understanding Memory References Through the “Safe Box” Analogy',
  //     zh: 'JavaScript 淺拷貝與深拷貝：以「保險箱」比喻理解記憶體引用機制',
  //   },
  //   description: {
  //     en: 'Understand shallow copy, deep copy, and memory references in JavaScript using the “safe box” analogy.',
  //     zh: '透過「保險箱」比喻理解 JavaScript 的淺拷貝、深拷貝與記憶體引用機制。',
  //   },
  //   link: '/blog/test-post-my-first-custom-article',
  //   uid: 'blog-7',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: {
      en: 'LinkedIn',
      zh: 'LinkedIn',
    },
    link: 'https://www.linkedin.com/in/hlforge/',
  },
  {
    label: {
      en: 'Download Resume PDF',
      zh: '下載履歷 PDF',
    },
    link: '/HsuanLinResume.pdf',
    download: true,
  },
]

export const EMAIL = 'hsuanlin44@gmail.com'