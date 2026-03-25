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

export const SKILLS: string[] = [
  'JavaScript (ES6+)',
  'React',
  'Semantic HTML5',
  'SASS · CSS Architecture',
  'Pixel-perfect UI',
  'Design Systems',
  'A11y (AA Standards)',
  'UI/UX Design',
  'Figma',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Performance Optimization',
]

export const PROJECTS: Project[] = [
    {
    name: 'TaipeiPASS — Taipei City Digital Ecosystem',
    description: {
      en: 'Redefining the city’s digital gateway through universal accessibility and pixel-perfect visual excellence.',
      zh: '透過全民無障礙與像素級的視覺精準度，重新定義城市的數位入口。',
    },
    // link: 'https://id.taipei/tpcd/',
    link: '/project/taipei-pass',
    image: '/taipeipass.png',
    id: 'project1',
  },
  {
    name: 'National Park Service — Standardized UI Framework',
    description: {
      en: 'Harmonizing national digital identity with a scalable React framework built for long-term cohesion.',
      zh: '透過具備擴充性的 React 架構，讓國家級數位識別達成視覺和諧。',
    },
    // link: 'https://www.nps.gov.tw/ch',
    link: '/project/national-park-service',
    image: '/nps.png',
    id: 'project2',
  },
  {
    name: 'Indigenous Carbon Sink — ESG Matchmaking Platform',
    description: {
      en: 'Bridging indigenous cultural storytelling with modern web engineering to drive sustainable impact.',
      zh: '連結原民文化敘事與現代網頁工程，推動永續轉型的影響力。',
    },
    // link: 'https://csp-tradevan.com.tw/ESG/Formosa',
    link: '/project/indigenous-carbon-sink',
    image: '/esg.png',
    id: 'project3',
  },
  {
    name: 'EZSIGN — B2B Digital Signature Experience',
    description: {
      en: 'Evolving complex B2B workflows into intuitive, trust-driven digital journeys through human-centric design.',
      zh: '透過以人為本的設計，將複雜的商業流程轉化為直覺且具信任感的數位旅程。',
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
          en: 'Design Engineer',
          zh: '設計工程師',
        },
        start: '2023',
        end: 'Present',
        highlights: {
          en: [
            'Designed and implemented user-facing features with a strong focus on usability and cross-team collaboration.',
            'Partnered closely with designers and backend engineers to build scalable, maintainable frontend solutions.',
          ],
          zh: [
            '設計並實作面向使用者的產品功能，重視易用性與跨團隊協作。',
            '與設計師及後端工程師緊密合作，打造可擴充且易維護的前端解決方案。',
          ],
        },
      },
      {
        title: {
          en: 'Full Stack Developer',
          zh: '全端工程師',
        },
        start: '2020',
        end: '2023',
        highlights: {
          en: [
            'Developed and maintained full-stack web applications for enterprise clients.',
            'Enhanced system performance and code quality through refactoring, testing strategies, and peer code reviews.',
          ],
          zh: [
            '為企業客戶開發並維護全端網頁應用系統。',
            '透過重構、測試策略與同儕程式碼審查，提升系統效能與程式碼品質。',
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