// Edit everything about your portfolio here.
export const CFG = {
  EMAIL: "you@example.com",      // contact form sends here
  RESUME_URL: "/resume.pdf",     // put your PDF in /public/resume.pdf
  PHOTO: "photo.jpg",           // put your photo in /public/photo.jpg (falls back to a placeholder)
  GH: "https://github.com/rishantsingh0707",
};

export const SKILLS = ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS","JWT/OAuth2" ,"Socket.IO","Zustand " ,"Redis", "Docker","GitHub", "GitHub Actions", "Kubernetes", "REST API", "Linux", "Containerisation"];
export const ROLES = ["Full-stack MERN developer", "AI-powered app builder", "DevOps-curious problem solver"];

export const PROJECTS = [
  { t: "Nexa", d: "A RAG-based AI study companion with six study modes, searchable chat history and a live dashboard. Documents are chunked, embedded and retrieved so answers stay grounded in your own notes.", s: ["React", "TypeScript", "Vite", "Node.js", "Express", "Groq / LLaMA", "ChromaDB", "MongoDB", "Redis"], demo: "#", gh: CFG.GH },
  { t: "InvoiceFlow", d: "A GST-compliant invoice generator with a dark and cream split interface. It produces PDFs and writes amounts in words using Indian lakh and crore grouping.", s: ["Node.js", "Express", "pdfkit", "GST logic", "MongoDB"], demo: "#", gh: CFG.GH },
  { t: "Claude Message Scheduler", d: "A Chrome extension that queues and sends messages on Claude.ai around free-tier rate limits, with a timer, file attachments, live status badges and desktop notifications.", s: ["JavaScript", "Chrome Extension API", "Wake Lock API", "Notifications"], demo: "#", gh: CFG.GH },
  { t: "Student Placement System", d: "A Java desktop app where students apply for jobs, companies post openings and admins track placement stats, all talking over sockets to a MySQL database.", s: ["Java Swing", "MySQL", "JDBC", "Sockets", "Collections"], demo: "#", gh: CFG.GH },
];

export const EDU = [
  { y: "Year – Year", t: "Computer Applications", s: "College name, Pune", d: "Core computer science, databases, Java, web technologies and software engineering." },
  { y: "Ongoing", t: "Self-taught full-stack and DevOps", s: "Project-driven learning", d: "MERN, TypeScript, Redis, Docker, GitHub Actions, AWS EC2 and Kubernetes, learned by building and deploying real projects." },
];
