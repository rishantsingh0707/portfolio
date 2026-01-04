import BlogingImage from "../assets/Bloging.png";
import Hirely from "../assets/Hirely.png";
import DevHub from "../assets/DevHub.png";
import Chatty from "../assets/Chatty.png";

export const projects = [
  {
    id: 1,
    title: "Chatty",
    description: "A secure real-time chat application featuring friend-only messaging, unique user codes for search, live online status, and a modern UI with dark/light mode. ",
    image: Chatty,
    technologies: ["Zustand", "Axios", "Node.js", "Express", "Socket.IO", "MongoDB", "JavaScript","FloatUI"],
    github: "https://github.com/rishantsingh0707/Chatty",
    demo: "https://chatty-9kn5.vercel.app"
  },
  {
    id: 2,
    title: "DevHub",
    description: "It enables users to create and join live coding sessions with integrated code execution, chat, and video calling. DevHub focuses on clean architecture, performance, and a smooth developer experience.",
    image: DevHub,
    technologies: ["Stream", "Axios", "Node.js", "Express", "Clerk", "DaizyUI", "MongoDB", "JavaScript"],
    github: "https://github.com/rishantsingh0707/DevHub",
    demo: "https://dev-hub-nu-ten.vercel.app"
  },
  {
    id: 3,
    title: "Blogging Application",
    description: "A comprehensive REST API for a blogging platform built with Node.js,MongoDB and Express, featuring user authentication, post management, and comment functionality,like functionality.",
    image: BlogingImage,
    technologies: ["MongoDB", "Node.js", "Express", "Bootstrap", "JavaScript"],
    github: "https://github.com/rishantsingh0707/bloging",
    demo: "https://bloging-webpage.onrender.com"
  },
  {
    id: 4,
    title: "Hirely",
    description: "An interactive dashboard for data visualization with real-time updates and beautiful charts.",
    image: Hirely,
    technologies: ["EJS", "MongoDB", "Node.js", "Express", "Bootstrap", "JavaScript"],
    github: "https://github.com/rishantsingh0707/Hirely",

  },
];
