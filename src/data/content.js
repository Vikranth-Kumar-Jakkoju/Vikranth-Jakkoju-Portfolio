/**
 * Single source of truth for portfolio copy and structured content.
 * UI components import from here; certificate/badge galleries use ./certifications.js and ./achievements.js.
 */

export const site = {
  title: "Vikranth Jakkoju | Full Stack Developer",
  description:
    "Full-stack developer building MERN apps, AI-powered tools, and cloud-native integrations. 400+ LeetCode problems, React + Node, Generative & Agentic AI.",
  url: "https://vikranth-jakkoju-portfolio.vercel.app",
  locale: "en_IN",
  themeColor: "#0d1117",
};

export const person = {
  name: "Vikranth Jakkoju",
  title: "Full Stack Developer · AI & Cloud Enthusiast",
  location: "Hyderabad, Telangana, India",
  email: "jakkojuvikranth@gmail.com",
  /** TODO: add profile photo to /public and set path, e.g. /profile.jpg */
  photo: null,
  resumePath: "/resume.pdf", // TODO: add PDF to /public
};

/** Hero boot copy — keep short so the sequence stays under ~2.5s. */
export const hero = {
  bootLines: [
    "$ boot vikranth.dev --fast",
    "[ok] stack: react · node · mongodb",
    "[ok] dsa --count 400+",
  ],
  tagline:
    "I build full-stack apps, train on agentic AI, and have solved 400+ LeetCode problems.",
  primaryCta: { label: "View projects", href: "#Projects" },
  secondaryCta: { label: "Download résumé", href: "/resume.pdf" },
};

export const links = {
  github: "https://github.com/Vikranth-Kumar-Jakkoju",
  linkedin:
    "https://www.linkedin.com/in/vikranth-kumar-jakkoju-b6b69220b/",
  leetcode: "https://leetcode.com/u/Vikranth_Kumar_Jakkoju/",
  hackerrank: "https://www.hackerrank.com/profile/jakkojuvikranth",
  codechef: "https://www.codechef.com/users/h5c_1512",
};

export const summary = `I'm a full-stack developer who ships with React, Node, Express, and MongoDB — and I'm equally happy in Java or Python when the problem calls for it. I've delivered a complete MERN food delivery app and this React portfolio (CI/CD on Vercel), trained in Generative AI, Agentic AI, and low-code automation on ServiceNow and Pega, and I've solved 400+ DSA problems on LeetCode with a 100+ day streak. I'm most interested in AI-powered apps, agents, RAG, and cloud-native enterprise integrations.`;

export const education = {
  degree: "B.E. Information Technology",
  institution: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
  period: "2024 – 2028",
  cgpa: "9.19",
  coursework: [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const skillGroups = [
  {
    id: "core-cs",
    label: "Core CS",
    packages: [
      "OOP & SOLID",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "DSA",
    ],
  },
  {
    id: "languages",
    label: "Languages",
    packages: ["JavaScript (ES6+)", "Java", "Python", "C++", "C"],
  },
  {
    id: "full-stack",
    label: "Full stack",
    packages: [
      "React.js",
      "Vite",
      "HTML5 / CSS3",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MERN",
    ],
  },
  {
    id: "data-bi",
    label: "Databases & BI",
    packages: [
      "MongoDB (Associate Certified)",
      "SQL",
      "ERDs",
      "Power BI",
      "Tableau",
    ],
  },
  {
    id: "ai-cloud",
    label: "AI, Cloud & Automation",
    packages: [
      "Generative AI (NPTEL)",
      "Agentic AI (ServiceNow training)",
      "Oracle Cloud AI Foundations",
      "Google Cloud",
      "Pega low-code",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    packages: [
      "Git",
      "GitHub",
      "Vercel",
      "CI/CD",
      "VS Code",
      "Postman",
      "MS Office",
    ],
  },
];

export const experience = [
  {
    id: "pega-trainee",
    decorativeHash: "pega~01",
    hash: "pega~01",
    role: "Industrial Trainee",
    org: "Pegasystems × SmartBridge (National Internship Program)",
    period: "Aug – Sep 2026",
    dateTime: "2026-08",
    certId: "PEGA-SW-NIP-2026-134",
    tags: ["AICTE NEAT", "National Internship Program"],
    bullets: [
      "60 hours of training in low-code workflow automation and enterprise process design on Pega; sponsored by Pegasystems with SmartBridge and AICTE's NEAT Cell.",
    ],
  },
  {
    id: "servicenow-intern",
    decorativeHash: "snu~01",
    hash: "snu~01",
    role: "Virtual Intern",
    org: "ServiceNow University (AICTE × SmartBridge)",
    period: "Jul 2026",
    dateTime: "2026-07",
    certId: "SNU2027984",
    tags: ["AICTE × SmartBridge", "Micro Certification"],
    bullets: [
      "ServiceNow Administration, Agentic AI, Introduction to Flows, Automated Test Framework (ATF), Reports; earned a ServiceNow Micro Certification.",
    ],
  },
];

export const projects = [
  {
    id: "foodexpress",
    name: "FoodExpress",
    repoFullName: "Vikranth-Kumar-Jakkoju/foodexpress",
    tagline: "MERN food delivery platform",
    description:
      "Menu browsing, cart, order management, JWT-based auth, and modular RESTful APIs with full MongoDB CRUD.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/foodexpress",
    liveUrl: null,
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    repoFullName: "Vikranth-Kumar-Jakkoju/Vikranth-Jakkoju-Portfolio",
    tagline: "React + Vite SPA on Vercel",
    description:
      "Responsive single-page application with automated CI/CD deployments via GitHub.",
    stack: ["React.js", "Vite", "JavaScript", "CSS3", "Vercel", "CI/CD"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/Vikranth-Jakkoju-Portfolio",
    liveUrl: "https://vikranth-jakkoju-portfolio.vercel.app",
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine Simulator",
    repoFullName: "Vikranth-Kumar-Jakkoju/CoffeeMachineProject",
    tagline: "Java OOP capstone-style project",
    description:
      "Multi-class architecture simulating coffee brewing using core OOP principles: encapsulation, inheritance, and polymorphism.",
    stack: ["Java", "OOP", "Multi-Class Architecture"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/CoffeeMachineProject",
    liveUrl: null,
  },
  {
    id: "study-planner",
    name: "Interactive Study Planner",
    repoFullName:
      "Vikranth-Kumar-Jakkoju/Interactive-Study-Planner-Website",
    tagline: "Personalized academic management web app",
    description:
      "Responsive study planner for semester progress, subject-wise workload, exam timetables, and batch schedules — built for a busy semester instead of scattered notes.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    repoUrl:
      "https://github.com/Vikranth-Kumar-Jakkoju/Interactive-Study-Planner-Website",
    liveUrl:
      "https://vikranth-kumar-jakkoju.github.io/Interactive-Study-Planner-Website/",
  },
];

export const leetcode = {
  problemsSolved: "400+",
  streakDays: "100+",
  streakNote: "Active streak in 2025; 50+ day badges in 2025 and 2026.",
  profileUrl: links.leetcode,
  /** Display-only stats — no live API; numbers match your stated progress. */
  highlights: [
    { label: "Problems solved", value: "400+" },
    { label: "Longest streak", value: "100+ days" },
    { label: "Consistency badges", value: "50+ days (2025, 2026)" },
  ],
};

export const hackathonsAndEvents = [
  "CBIT SUDHEE Hackathon 2025",
  "CBIT COSC Hackweek (Jul 2026)",
  "AI Impact Summit Buildathon",
  "Google Solution Challenge 2026",
  "HICON Club and COSC at CBIT",
];

export const codingProfiles = [
  {
    id: "leetcode",
    name: "LeetCode",
    badge: "100+ Day Streak (2025)",
    stats: "400+ Problems Solved",
    sub: "Active streak in 2025; 50+ day badges in 2025 & 2026",
    badges: [
      "100+ Day Streak (2025)",
      "50+ Day Badge (2025)",
      "50+ Day Badge (2026)",
    ],
    profileUrl: links.leetcode,
    icon: "⚡",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    badge: "Silver Level",
    stats: "Problem Solving Silver",
    sub: "Python & C++ badges verified",
    badges: ["Problem Solving Silver", "Python Badge", "C++ Badge"],
    profileUrl: links.hackerrank,
    icon: "★",
  },
  {
    id: "codechef",
    name: "CodeChef",
    badge: "Bronze Level",
    stats: "Bronze Badges",
    sub: "Problem Solver & Daily Streak",
    badges: ["Problem Solver Bronze", "Daily Streak Bronze"],
    profileUrl: links.codechef,
    icon: "◈",
  },
];

export const achievementHighlights = [
  "400+ LeetCode problems solved",
  "100+ day LeetCode streak (2025)",
  "50+ day LeetCode badges (2025, 2026)",
  "HackerRank Silver (Problem Solving); Python & C++ badges",
  "CodeChef Bronze badges",
  "HICON Club & COSC, CBIT",
];

export const certificationHighlights = [
  "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
  "MongoDB Associate Developer",
  "Programming using Java (Infosys Springboard)",
  "Programming with Generative AI (NPTEL)",
  "Pega National Internship Program",
  "Google Solution Challenge 2026: Build with AI",
  "Trust & Security with Google Cloud",
  "Git Training · Cybersecurity Awareness (HP LIFE)",
  "IBM SkillsBuild · GUVI (Data Science & ML, GenAI, Power BI & Tableau, Full Stack)",
];

/**
 * Logical section id → current DOM id.
 */
export const sectionAnchors = {
  hero: "hero",
  about: "AboutMe",
  skills: "TechnicalArsenal",
  experience: "Experience",
  projects: "Projects",
  leetcode: "LeetCode",
  achievements: "Achievements",
  certifications: "Certifications",
  contact: "ContantMe",
};

/** Section anchors for nav, command palette, and terminal (Steps 3+). */
export const sections = [
  { id: "hero", label: "Boot", file: "hero.jsx", command: "boot" },
  { id: "about", label: "About", file: "about.md", command: "whoami" },
  { id: "skills", label: "Skills", file: "skills.json", command: "skills" },
  {
    id: "experience",
    label: "Experience",
    file: "experience.log",
    command: "experience",
  },
  { id: "projects", label: "Projects", file: "projects/", command: "projects" },
  { id: "leetcode", label: "LeetCode", file: "leetcode.ts", command: "leetcode" },
  {
    id: "achievements",
    label: "Achievements",
    file: "achievements/",
    command: "achievements",
  },
  {
    id: "certifications",
    label: "Certifications",
    file: "certs/",
    command: "certs",
  },
  { id: "contact", label: "Contact", file: "contact.sh", command: "contact" },
];

/** Command palette rows — sections plus public links only (no phone). */
export const paletteItems = [
  ...sections.map((section) => ({
    id: `jump-${section.id}`,
    group: "Jump to",
    label: section.label,
    hint: section.command,
    href: `#${sectionAnchors[section.id]}`,
    external: false,
  })),
  {
    id: "link-github",
    group: "Open",
    label: "GitHub",
    hint: "github.com",
    href: links.github,
    external: true,
  },
  {
    id: "link-linkedin",
    group: "Open",
    label: "LinkedIn",
    hint: "linkedin.com",
    href: links.linkedin,
    external: true,
  },
  {
    id: "link-leetcode",
    group: "Open",
    label: "LeetCode",
    hint: "leetcode.com",
    href: links.leetcode,
    external: true,
  },
  {
    id: "link-email",
    group: "Open",
    label: "Email",
    hint: person.email,
    href: `mailto:${person.email}`,
    external: false,
  },
  {
    id: "link-resume",
    group: "Open",
    label: "Download résumé",
    hint: "resume.pdf",
    href: person.resumePath,
    external: false,
  },
];

const content = {
  site,
  person,
  hero,
  links,
  summary,
  education,
  skillGroups,
  experience,
  projects,
  leetcode,
  codingProfiles,
  hackathonsAndEvents,
  achievementHighlights,
  certificationHighlights,
  sectionAnchors,
  sections,
  paletteItems,
};

export default content;
