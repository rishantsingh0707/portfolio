export const CFG = {
  EMAIL: "rishant3333@gmail.com",      
  RESUME_URL: "/resume.pdf",     
  PHOTO: "photo.jpg",           
  GH: "https://github.com/rishantsingh0707",
  LI: "https://www.linkedin.com/in/rishantsingh1408",
};

export const SKILLS = ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "JWT/OAuth2", "Socket.IO", "Zustand ", "Redis", "Docker", "GitHub", "GitHub Actions", "Kubernetes", "REST API", "Linux", "Containerisation","Axios"];
export const ROLES = ["Full-stack MERN developer", "AI-powered app builder", "DevOps-curious problem solver"];

export const PROJECTS = [
  { t: "Ai-Study-Companion", 
    d: "A RAG-based AI study companion with six study modes, searchable chat history and a live dashboard. Documents are chunked, embedded and retrieved so answers stay grounded in your own notes.",
    s: ["React", "TypeScript", "Gemini", "Node.js", "Express", "Groq / LLaMA", "ChromaDB", "MongoDB", "Redis", "Oauth2","React Query"],
    demo: "https://learniq-steel.vercel.app",
    gh: CFG.GH },
  { t: "DevHub",
    d: "It enables users to create and join live coding sessions with integrated code execution, chat, and video calling. DevHub focuses on clean architecture, performance, and a smooth developer experience.", 
    s: ["Node.js", "Express", "Stream", "Axios", "MongoDB" ,"Clerk" , "DaizyUI"], 
    demo: "https://dev-hub-nu-ten.vercel.app", 
    gh: CFG.GH },
  { t: "Chatty",
    d: "A Chrome extension that queues and sends messages on Claude.ai around free-tier rate limits, with a timer, file attachments, live status badges and desktop notifications.", 
    s: ["JavaScript", "Zustand", "Socket.IO", "FloatUI","Express","Axios"], 
    demo: "https://chatty-9kn5.vercel.app", 
    gh: CFG.GH },

];

export const EDU = [
  { y: "2024 - 2027", t: "Bacholers in Computer Applications.", s: "Christ College, Pune", d: "Currently pursuing a degree with a focus on computer applications and business management" },
  { y: "2022 - 2024", t: "12Th Standard in Commerce", s: "AISSMS's College", d: "Did my higher secondary education with a focus on commerce subjects.Scored 64% in Board Exam." },
  { y: "2009 - 2022", t: "Schooling", s: "Poona Women's Council English Medium School", d: "Completed schooling with 71.20% marks in Board Exam." },
];
