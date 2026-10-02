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
    "I ship MERN apps, tinker with agents and RAG, and keep a 400+ problem LeetCode streak honest.",
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
  secondary: {
    label: "Intermediate (Class XII), Telangana State Board",
    period: "2022 – 2024",
    score: "96%",
  },
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
      "Agentic AI (ServiceNow)",
      "Oracle Cloud AI Foundations",
      "Google Cloud",
      "Pega low-code",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    packages: [
      "Git & GitHub",
      "Vercel",
      "CI/CD",
      "VS Code",
      "Postman",
    ],
  },
];

export const experience = [
  {
    id: "pega-trainee",
    hash: "a1b2c3d",
    role: "Industrial Trainee",
    org: "Pegasystems × SmartBridge (AICTE NEAT)",
    period: "Aug – Sep 2026",
    bullets: [
      "60 hours of training in low-code workflow automation and enterprise process design on Pega.",
    ],
  },
  {
    id: "servicenow-intern",
    hash: "e4f5g6h",
    role: "Virtual Intern",
    org: "ServiceNow University (AICTE × SmartBridge)",
    period: "Jul 2026",
    bullets: [
      "ServiceNow Administration, Agentic AI, Flows, ATF, and Reports.",
      "Earned ServiceNow Micro Certification.",
    ],
  },
];

export const projects = [
  {
    id: "foodexpress",
    name: "FoodExpress",
    tagline: "MERN food delivery platform",
    description:
      "End-to-end food delivery app: menu browsing, cart, orders, JWT auth, and modular REST APIs with full MongoDB CRUD.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/foodexpress",
    liveUrl: null, // TODO: add live demo if deployed
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    tagline: "React + Vite SPA on Vercel",
    description:
      "This site — React SPA with CI/CD on Vercel. Currently getting a terminal-themed UI overhaul.",
    stack: ["React", "Vite", "CSS", "Vercel", "CI/CD"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/Vikranth-Jakkoju-Portfolio",
    liveUrl: "https://vikranth-jakkoju-portfolio.vercel.app",
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine Simulator",
    tagline: "Java OOP capstone-style project",
    description:
      "Coffee machine simulation using encapsulation, inheritance, and polymorphism — the OOP trilogy, caffeinated.",
    stack: ["Java", "OOP"],
    repoUrl: "https://github.com/Vikranth-Kumar-Jakkoju/CoffeeMachineProject",
    liveUrl: null,
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

/** Section anchors for nav, command palette, and terminal (Steps 3+). */
export const sections = [
  { id: "hero", label: "Boot", command: "boot" },
  { id: "about", label: "About", command: "whoami" },
  { id: "skills", label: "Skills", command: "skills" },
  { id: "experience", label: "Experience", command: "experience" },
  { id: "projects", label: "Projects", command: "projects" },
  { id: "leetcode", label: "LeetCode", command: "leetcode" },
  { id: "certifications", label: "Certifications", command: "certs" },
  { id: "contact", label: "Contact", command: "contact" },
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
  hackathonsAndEvents,
  achievementHighlights,
  certificationHighlights,
  sections,
};

export default content;
