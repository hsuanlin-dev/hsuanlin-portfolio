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
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'JavaScript',
  'HTML/CSS',
  'Git',
  'Figma',
  'Accessibility',
  'Performance Optimization',
]

export const PROJECTS: Project[] = [
  {
    name: 'Indigenous Carbon Sink ESG Platform',
    description: {
      en: 'Advanced component library and customizable templates for sustainable ESG web platforms.',
      zh: '為永續 ESG 網站平台打造進階元件庫與可客製化版型系統。',
    },
    link: 'https://csp-tradevan.com.tw/ESG/Formosa',
    image: '/esg.png',
    id: 'project1',
  },
  {
    name: 'EZSIGN Digital Signature',
    description: {
      en: 'Comprehensive UI kit with animated components for secure digital signature services.',
      zh: '為安全數位簽章服務打造完整 UI Kit 與動態互動元件系統。',
    },
    link: 'https://ezsign.tradevan.com.tw/APESP/',
    image: '/ezsign.png',
    id: 'project2',
  },
  {
    name: 'TaipeiPASS – Taipei City Citizen Portal',
    description: {
      en: 'Modern UI kit featuring interactive maps, animations, and citizen-centric services for Taipei city portal.',
      zh: '為台北市民服務入口網站打造現代化 UI Kit，整合互動地圖、動態效果與以市民為核心的服務體驗。',
    },
    link: 'https://id.taipei/tpcd/',
    image: '/taipeipass.png',
    id: 'project3',
  },
  {
    name: 'National Park Service, Ministry of the Interior',
    description: {
      en: 'Responsive UI components and animated interfaces for national park information and interactive maps.',
      zh: '為國家公園資訊與互動地圖打造響應式 UI 元件與動態介面。',
    },
    link: 'https://www.nps.gov.tw/ch',
    image: '/nps.png',
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
      en: 'Exploring the Intersection of Design, AI, and Design Engineering',
      zh: '探索設計、AI 與設計工程的交會',
    },
    description: {
      en: 'How AI is changing the way we design',
      zh: 'AI 正如何改變我們設計與打造產品的方式',
    },
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: {
      en: 'Test Post: My First Custom Article',
      zh: '測試文章',
    },
    description: {
      en: 'This is a test article used to verify that the blog template, MDX routing, and metadata are working correctly.',
      zh: '測試文章描述',
    },
    link: '/blog/test-post-my-first-custom-article',
    uid: 'blog-2',
  },
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
    uid: 'blog-3',
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
    uid: 'blog-4',
  },
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
    link: '/resume.png',
    download: true,
  },
]

export const EMAIL = 'hsuanlin44@gmail.com'