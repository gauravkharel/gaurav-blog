import profile from '../public/tathya.gif'
import pappu from '../public/pappu.jpg'
import tele from '../public/telehealth.png'
export const techstacks = [
  { name: 'JavaScript', href: '' },
  { name: 'TypeScript', href: '' },
  { name: 'React', href: '' },
  { name: 'Next.js', href: '' },
  { name: 'Redux Toolkit', href: '' },
  { name: `TanStack Query`, href: '' },
  { name: `Node.js`, href: '' },
  { name: 'Express', href: '' },
]


export const projects = [
  {
    name: "Tathya Ecommerce Project",
    description: "Worked on it from this to that.",
    image: pappu,
    project_url: 'https://locrian-frill-de5.notion.site/Building-Tathya-My-Journey-in-Developing-an-E-commerce-Platform-0d758279c8eb477e92269f752a2dcb1f?pvs=4',
  }
];

export const selectedProjects = [
  {
    timeline: '2025 - Now',
    project_title: 'Telehealth Webapp',
    desc: 'A centralized telehealth web application that connects patients with doctors.',
    project_url: "https://www.behance.net/gallery/224121807/Telehearth%28feeback-appreciated%29?",
    gif_url: tele,
    keywords: ['Figma', 'UX Research', 'Wireframing', 'High-Fidelity Design']
  },
  {
    timeline: '2021 - 2022',
    project_title: 'Tathya',
    desc: 'A basic ecommerce flow.',
    project_url: "https://locrian-frill-de5.notion.site/Building-Tathya-My-Journey-in-Developing-an-E-commerce-Platform-0d758279c8eb477e92269f752a2dcb1f?pvs=4",
    gif_url: profile,
    keywords: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL']
  }
]

export const workExperience = [
  {
    timeline: 'Aug 2023 - Present',
    job_title: 'Frontend Developer',
    company: 'Prajna World',
    location: 'Kathmandu, Nepal',
    description: "Spearheaded the development of in-house productivity tools, significantly boosting team efficiency. Crafted and maintained robust applications using Next.js and TypeScript, while collaborating closely with Product Managers and Designers to align with company goals. Implemented frontend best practices, with a keen focus on enhancing user experience and interface design.",
    tech_used: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Git']
  },
  {
    timeline: 'Feb 2023 - June 2023',
    job_title: 'Frontend Intern',
    company: 'Tech Trust Digital Solution',
    location: 'Remote',
    description: "Contributed to multiple web application projects, gaining valuable insights into project lifecycles and team dynamics. Collaborated effectively with the development team using tools like GitHub, JIRA, and Slack. Actively participated in team meetings and project tasks, honing skills in frontend development and professional collaboration.",
    tech_used: ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'JIRA', 'Slack']
  }
]


