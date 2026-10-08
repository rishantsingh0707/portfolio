import { useEffect, useRef, useState } from "react";
import Background from "./Background";
import { CFG, SKILLS, ROLES, PROJECTS, EDU } from "./data";

const LINKS = ["home", "about", "projects", "education", "contact"];

// Fades an element in the first time it scrolls into view.
function Rv({ as: T = "div", className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <T ref={ref} className={`rv ${className}`}>{children}</T>;
}

function Count({ to }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let t;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let n = 0;
      t = setInterval(() => { n++; setV(n); if (n >= to) clearInterval(t); }, 90);
    });
    io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(t); };
  }, [to]);
  return <b ref={ref}>{v}</b>;
}

function Typer({ words }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, j = 0, del = false, t;
    const tick = () => {
      const w = words[i];
      setText(w.slice(0, j));
      if (!del && j < w.length) j++;
      else if (!del) { del = true; t = setTimeout(tick, 1500); return; }
      else if (j > 0) j--;
      else { del = false; i = (i + 1) % words.length; }
      t = setTimeout(tick, del ? 35 : 70);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return <div className="role">{text}</div>;
}

function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { threshold: 0.5 });
    LINKS.forEach((id) => io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);
  return (
    <nav>
      <b>Rishant</b>
      <ul>
        {LINKS.map((id) => (
          <li key={id}><a href={`#${id}`} className={active === id ? "on" : ""}>{id[0].toUpperCase() + id.slice(1)}</a></li>
        ))}
      </ul>
    </nav>
  );
}

// 3D-tilting photo. Click it to swap in a different image for this visit.
function PhotoCard() {
  const [src, setSrc] = useState(CFG.PHOTO);
  const [bad, setBad] = useState(false);
  const card = useRef(null), file = useRef(null);
  const move = (e) => {
    const r = card.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height, s = card.current.style;
    s.transform = `rotateY(${(x - 0.5) * 26}deg) rotateX(${(0.5 - y) * 26}deg) scale(1.04)`;
    s.setProperty("--mx", x * 100 + "%"); s.setProperty("--my", y * 100 + "%");
  };
  const pick = (e) => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { setBad(false); setSrc(r.result); };
    r.readAsDataURL(f);
  };
  return (
    <div className="photo">
      <div className="card3d" ref={card} role="button" tabIndex={0} aria-label="Profile photo. Click to change it."
        onClick={() => file.current.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); file.current.click(); } }}
        onMouseMove={move} onMouseLeave={() => (card.current.style.transform = "")}>
        {src && !bad ? (
          <img src={src} alt="Rishant" onError={() => setBad(true)} />
        ) : (
          <svg viewBox="0 0 200 250">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8B5CF6" /><stop offset="1" stopColor="#A78BFA" /></linearGradient></defs>
            <rect width="200" height="250" fill="url(#g)" opacity=".35" />
            <circle cx="100" cy="96" r="42" fill="#F4F4F5" opacity=".9" />
            <path d="M28 250c0-52 32-82 72-82s72 30 72 82z" fill="#F4F4F5" opacity=".9" />
          </svg>
        )}
        <div className="sheen" />
      </div>

      <input ref={file} type="file" accept="image/*" hidden onChange={pick} />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <h1>Hi, I'm <span className="grad">Rishant</span>.</h1>
        <Typer words={ROLES} />
        <p className="lead">I build modern full-stack products with MERN, AI, and a focus on performance, usability, and real-world impact.</p>
        <div className="chips">{SKILLS.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        <div className="btns">
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn" href={CFG.RESUME_URL} download="Rishant_Resume.pdf">Download resume</a>
        </div>
      </div>
      <PhotoCard />
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <Rv as="h2">About me</Rv>
      <Rv className="about">
        <div>
          <p>I'm a Computer Applications student in Pune who learns by building. Most of what I know comes from creating real projects, breaking things, and figuring out how to make them work better.</p>

          <p>I enjoy taking an idea from concept to a working product—from React interfaces and Node.js APIs to databases, authentication, and AI-powered features. I've built everything from AI study tools to business and invoicing platforms.</p>

          <p>I'm looking for fresher or junior full-stack roles, remote within India or based in Pune, where I can keep building, learning, and contributing to real products.</p>
        </div>
        <div className="stats">
          <div className="stat"><Count to={PROJECTS.length} /><span>projects shipped</span></div>
          <div className="stat"><Count to={SKILLS.length} /><span>technologies in daily use</span></div>
          <div className="stat"><b>MERN</b><span>my home stack</span></div>
        </div>
      </Rv>
    </section>
  );
}

function ProjectCard({ p }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  };
  return (
    <Rv as="article" className="proj">
      <div ref={ref} className="proj-in" onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = "")}>
        <h3>{p.t}</h3>
        <p>{p.d}</p>
        <div className="tags">{p.s.map((x) => <span key={x}>{x}</span>)}</div>
        <div className="links">
          <a className="btn p" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
          <a className="btn" href={p.gh} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Rv>
  );
}

function Projects() {
  return (
    <section id="projects">
      <Rv as="h2">Projects</Rv>
      <div className="grid">{PROJECTS.map((p) => <ProjectCard key={p.t} p={p} />)}</div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <Rv as="h2">Education</Rv>
      <div className="tl">
        {EDU.map((e) => (
          <Rv key={e.t}>
            <small>{e.y}</small>
            <h3>{e.t}</h3>
            <small className="mute">{e.s}</small>
            <p>{e.d}</p>
          </Rv>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const f = e.target, a = document.createElement("a");
    a.href = `mailto:${CFG.EMAIL}?subject=${encodeURIComponent("Portfolio message from " + f.n.value)}&body=${encodeURIComponent(f.m.value + "\n\n" + f.e.value)}`;
    a.click();
  };
  return (
    <section id="contact" className="contact">
      <Rv as="h2">Let's build something</Rv>
      <form onSubmit={submit}>
        <input name="n" placeholder="Your name" required aria-label="Your name" />
        <input name="e" type="email" placeholder="Your email" required aria-label="Your email" />
        <textarea name="m" placeholder="What are you working on?" required aria-label="Message" />
        <button className="btn p" type="submit">Send message</button>
      </form>
      <div className="soc">
        <a className="btn" href={CFG.GH} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn" href={CFG.LI} target="_blank" rel="noopener noreferrer">LinkedIn</a>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>Built with React, Vite and Three.js by Rishant. The background reacts to your mouse and scroll.</footer>
    </>
  );
}
