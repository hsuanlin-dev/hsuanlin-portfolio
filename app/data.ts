type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkRole = {
  title: string
  start: string
  end: string
  highlights: string[]
}

type WorkExperience = {
  id: string
  company: string
  icon?: string
  roles: WorkRole[]
}

type Education = {
  id: string
  title: string
  school: string
  start: string
  end: string
  icon?: string
  highlights?: string[] // scholarship ＆ honor
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  download?: boolean
}

export const SKILLS = [
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
    description:
      'Advanced component library and customizable templates for sustainable ESG web platforms.',
    link: 'https://csp-tradevan.com.tw/ESG/Formosa',
    image:
      '/esg.png',
    id: 'project1',
  },
  {
    name: 'EZSIGN Digital Signature',
    description: 'Comprehensive UI kit with animated components for secure digital signature services.',
    link: 'https://ezsign.tradevan.com.tw/APESP/',
    image:
      '/ezsign.png',
    id: 'project2',
  },
  {
    name: 'TaipeiPASS – Taipei City Citizen Portal',
    description: 'Modern UI kit featuring interactive maps, animations, and citizen-centric services for Taipei city portal.',
    link: 'https://id.taipei/tpcd/',
    image:
      '/taipeipass.png',
    id: 'project3',
  },
  {
    name: 'National Park Service, Ministry of the Interior',
    description: 'Responsive UI components and animated interfaces for national park information and interactive maps.',
    link: 'https://www.nps.gov.tw/ch',
    image:
      '/nps.png',
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
        title: 'Design Engineer',
        start: '2023',
        end: 'Present',
        highlights: [
          'Designed and implemented user-facing features with a strong focus on usability and cross-team collaboration.',
          'Partnered closely with designers and backend engineers to build scalable, maintainable frontend solutions.',
        ],
      },
      {
        title: 'Full Stack Developer',
        start: '2020',
        end: '2023',
        highlights: [
          'Developed and maintained full-stack web applications for enterprise clients.',
          'Enhanced system performance and code quality through refactoring, testing strategies, and peer code reviews.',
        ],
      },
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'edu-parsons',
    title: "Master’s Degree in Design and Technology",
    school: 'Parsons School of Design, New York, NY, USA',
    start: '2016',
    end: '2018',
    icon: '/parsons.png',
    highlights: [
      'Focused on the intersection of design, technology, and human-centered interaction through studio-based projects.',
      'Selected for the Studying Abroad for Excellent Students Scholarship, sponsored by the Ministry of Education, Taiwan.',
    ],
  },
  {
    id: 'edu-ntu',
    title: "Bachelor’s Degree in Computer Science",
    school: 'National Taiwan University, Taipei, Taiwan',
    start: '2010',
    end: '2014',
    icon: '/ntpu.jpg',
    highlights: [
      'A significant part of the education involves practical experience through labs and projects, which are designed to enhance problem-solving skills.',
    ],
  },
  {
    id: 'edu-efrei',
    title: 'Exchange Program in Computer Science',
    school: 'EFREI – Engineering School of Digital Technologies, Paris, France',
    start: '2012',
    end: '2013',
    icon: '/efrei.jpg',
    highlights: [      
      'Awarded the MOE Scholarship for Excellent Students to Study Overseas (2012).',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hlforge/',
  },
  {
    label: 'Download Resume PDF',
    link: '/resume.png',
    download: true,
  },
]

export const EMAIL = 'hsuanlin44@gmail.com'
