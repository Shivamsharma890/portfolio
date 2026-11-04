import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiOutlineExternalLink, HiMenu, HiX } from "react-icons/hi";
import photo from "./assets/shivam.jpg";
import resume from "./assets/Shivam-Resume.pdf";
import { motion } from "framer-motion";

const L = {
  email: "ss7614103@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivam-sharma-6496712b6",
  github: "https://github.com/Shivamsharma890",
  leetcode: "https://leetcode.com/u/Shivamsharma11/",
  resume,
};
const SOCIALS = [
  ["GitHub", L.github, FaGithub],
  ["LinkedIn", L.linkedin, FaLinkedin],
  ["LeetCode", L.leetcode, SiLeetcode],
  ["Email", `mailto:${L.email}`, MdEmail],
];
const NAV = ["About", "Skills", "Projects", "Journey", "Contact"];
const ROLES = [
  "multi-agent AI systems",
  "RAG pipelines",
  "FastAPI backends",
  "React interfaces",
];

const SKILLS = [
  ["Programming", ["C", "C++", "Python", "JavaScript"]],
  ["Frontend", ["HTML/CSS", "React.js", "Vite", "Tailwind CSS", "Streamlit"]],
  [
    "Backend & Services",
    ["FastAPI", "Flask", "SQLAlchemy", "REST APIs", "JWT Auth", "Google OAuth"],
  ],
  [
    "Agentic / GenAI",
    [
      "LangChain",
      "LangGraph",
      "Multi-Agent Systems",
      "RAG",
      "LLM Tool Calling",
      "Sentence Transformers",
      "Groq API",
    ],
  ],
  [
    "Databases",
    ["MySQL", "PostgreSQL", "pgvector", "MongoDB", "Redis", "SQLite"],
  ],
  [
    "Tools & Cloud",
    ["Git", "GitHub", "Pytest", "Vercel", "Supabase", "Razorpay"],
  ],
];
const TICKER = [
  "Python",
  "FastAPI",
  "React",
  "LangGraph",
  "LangChain",
  "RAG",
  "pgvector",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "Flask",
  "Supabase",
  "Razorpay",
  "JWT",
  "Docker-ready",
  "C++",
  "JavaScript",
];

const PROJECTS = [
  {
    name: "CampusLoop AI",
    sub: "Multi-Agent Campus Borrowing",
    href: "https://github.com/Shivamsharma890/CampusLoopAI",
    flow: [
      "React UI",
      "FastAPI",
      "Supervisor Agent",
      "Discovery · Lending · Policy · General",
      "Evaluator",
      "Response",
    ],
    tech: [
      "React.js",
      "Tailwind",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "PostgreSQL",
      "pgvector",
      "Supabase",
    ],
    pts: [
      "Campus marketplace to list, discover, request and lend items, with borrow-request approval/rejection and unread-notification tracking.",
      "Supervisor-based multi-agent assistant (LangGraph + LangChain) routing queries to Discovery, Lending, Policy and General agents, with an evaluator step checking each response.",
      "RAG pipeline (PDF loading, chunking, Sentence Transformers, pgvector search) grounds policy answers in the campus policy document.",
      "JWT authentication, server-side authorization and image upload via Supabase Storage.",
    ],
  },
  {
    name: "Interxora.ai",
    sub: "AI Interview Practice & Performance Platform",
    href: "https://github.com/Shivamsharma890/Interxora.ai",
    flow: [
      "Resume + Job Description",
      "Embeddings",
      "pgvector Retrieval",
      "LLM Question Generation",
      "Timed Session + Speech",
      "LLM Evaluation",
      "Performance Report",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "LLM APIs",
      "RAG",
      "PostgreSQL",
      "pgvector",
      "JWT",
      "Google OAuth",
    ],
    pts: [
      "Generates personalized technical and behavioral interviews from a candidate’s resume and target job description using embeddings, pgvector retrieval and LLMs.",
      "Timed sessions with speech input, LLM-based answer evaluation, a final performance report and a dashboard of past interviews.",
      "JWT with refresh tokens, Google OAuth and email password reset (Gmail SMTP) with an enumeration-safe forgot-password flow.",
    ],
  },
  {
    name: "Money Fintrack",
    sub: "Full-Stack Finance Management App",
    href: "https://github.com/Shivamsharma890/Money-Fintrack",
    flow: [
      "React UI",
      "Redis Rate Limiter",
      "Flask REST API",
      "MongoDB",
      "Razorpay Gateway",
      "Transaction History",
    ],
    tech: ["React.js", "Tailwind", "Flask", "MongoDB", "Redis", "Razorpay"],
    pts: [
      "Responsive finance app with registration/login, balance management, money transfer, transaction history and profile management.",
      "REST APIs in Flask with MongoDB; Razorpay payment gateway integrated and tested with real payments.",
      "Redis used for login and payment caching with rate limiting.",
    ],
  },
];
const STATS = [
  [3, "AI / full-stack projects"],
  [4, "specialised AI agents"],
  [5, "internship web projects"],
  [300, "Questions on Leetcode"],
  [45, "day SDE Sheet challenge"],
];
const TERM = [
  { t: "$ whoami", c: "text-white" },
  { t: "shivam.sharma  # AI & Full-Stack Developer", c: "text-teal-300" },
  { t: "$ cat stack.json", c: "text-white" },
  {
    t: '{ "agents": "LangGraph", "retrieval": "RAG + pgvector", "api": "FastAPI", "ui": "React" }',
    c: "text-indigo-300",
  },
  { t: "$ status", c: "text-white" },
  { t: "● open_to_internships", c: "text-emerald-400" },
];

/* ---------- styling: plain Tailwind classes, no custom CSS / config needed ---------- */
const CARD =
  "rounded-2xl border border-white/10 bg-[#121926]/80 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-[0_14px_40px_-18px_rgba(45,212,191,0.45)]";
const GLASS =
  "rounded-2xl border border-white/10 bg-[#121926]/85 backdrop-blur-xl";
const CHIP =
  "inline-block rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-200";
const BTN =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5";
const BTN_P = `${BTN} bg-teal-400 text-[#05201c] hover:bg-teal-300 hover:shadow-[0_10px_28px_-10px_rgba(45,212,191,0.8)]`;
const BTN_O = `${BTN} border border-slate-600 text-white hover:border-teal-400 hover:text-teal-300`;
const GRAD =
  "bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent";
const ICON =
  "grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:-translate-y-1 hover:border-teal-400 hover:text-teal-300";

const KEYFRAMES = `
html{scroll-behavior:smooth}
body{background:#0b0f17;color:#cbd5e1;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
::selection{background:rgba(45,212,191,.3)}
::-webkit-scrollbar{width:8px}::-webkit-scrollbar-thumb{background:#243044;border-radius:8px}
@keyframes fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes marq{to{transform:translateX(-50%)}}
@keyframes blink{50%{opacity:0}}
@keyframes float{50%{transform:translateY(-10px)}}
@keyframes node{0%,16%,100%{border-color:rgba(255,255,255,.1);box-shadow:none;color:#cbd5e1}6%,10%{border-color:#2dd4bf;box-shadow:0 0 18px -4px #2dd4bf;color:#fff}}
`;

const Reveal = ({ children }) => {
  const r = useRef(),
    [show, setShow] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          o.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return (
    <div
      ref={r}
      className={`transition duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      {children}
    </div>
  );
};
function Counter({ to }) {
  const [n, setN] = useState(0),
    r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        o.disconnect();
        let i = 0;
        const t = setInterval(() => {
          i++;
          setN(Math.round((to * i) / 40));
          if (i >= 40) clearInterval(t);
        }, 30);
      },
      { threshold: 0.5 },
    );
    o.observe(r.current);
    return () => o.disconnect();
  }, [to]);
  return <span ref={r}>{n}</span>;
}
const Section = ({ id, n, title, tint, children }) => (
  <section
    id={id}
    className={`scroll-mt-16 ${tint ? "border-y border-white/5 bg-white/[0.02]" : ""}`}
  >
    <div className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="font-mono text-xl text-teal-300">0{n}.</span>
          {title}
          <span className="hidden h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent sm:block" />
        </h2>
        {children}
      </Reveal>
    </div>
  </section>
);
function Terminal() {
  const total = TERM.reduce((a, l) => a + l.t.length, 0);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= total) return;
    const t = setTimeout(() => setN(n + 1), 24);
    return () => clearTimeout(t);
  }, [n, total]);
  let left = n;
  return (
    <div
      className={`${GLASS} mt-8 max-w-xl overflow-hidden font-mono text-[13px] shadow-[0_24px_60px_-30px_rgba(45,212,191,0.4)]`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <i className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <i className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <i className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-slate-500">shivam@portfolio:~</span>
      </div>
      <div
        className={`min-h-[170px] space-y-1 whitespace-pre-wrap break-words p-4 ${n < total ? "[&>div:last-child]:after:ml-0.5 [&>div:last-child]:after:text-teal-300 [&>div:last-child]:after:content-['▍'] [&>div:last-child]:after:animate-[blink_1s_steps(2)_infinite]" : ""}`}
      >
        {TERM.map((l, i) => {
          const s = l.t.slice(0, Math.max(0, left));
          left -= l.t.length;
          return s ? (
            <div key={i} className={l.c}>
              {s}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
function Photo() {
  const [s, setS] = useState({});
  const mv = (e) => {
    const b = e.currentTarget.getBoundingClientRect(),
      x = (e.clientX - b.left) / b.width - 0.5,
      y = (e.clientY - b.top) / b.height - 0.5;
    setS({
      transform: `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`,
    });
  };
  return (
    <div className="mx-auto w-fit animate-[float_6s_ease-in-out_infinite]">
      <div
        onMouseMove={mv}
        onMouseLeave={() => setS({})}
        style={{ ...s, transition: "transform .15s ease" }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-400/30 via-sky-400/10 to-indigo-400/30 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-[#1d2b3f] via-[#131c2b] to-[#0d131d]">
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-teal-400/20 to-transparent" />
          <img
            src={photo}
            alt="Shivam Sharma"
            className="relative h-80 w-64 object-cover object-top sm:h-[26rem] sm:w-80"
          />
        </div>
        <div
          className={`${GLASS} absolute -bottom-4 -left-4 px-4 py-2 text-xs font-semibold text-white`}
        >
          🎓 MITS Gwalior · CSE ’28
        </div>
        <div
          className={`${GLASS} absolute -right-4 top-6 px-4 py-2 font-mono text-xs text-teal-300`}
        >
          &lt;/&gt; AI × Full-Stack
        </div>
      </div>
    </div>
  );
}
function Palette({ open, setOpen, items }) {
  const [q, setQ] = useState("");
  useEffect(() => {
    if (open) setQ("");
  }, [open]);
  if (!open) return null;
  const f = items.filter((i) =>
    i.label.toLowerCase().includes(q.toLowerCase()),
  );
  const run = (i) => {
    setOpen(false);
    i.run();
  };
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 p-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className={`${GLASS} mx-auto w-full max-w-lg overflow-hidden !bg-[#0f1622]`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && f[0] && run(f[0])}
          placeholder="Type a command… (Enter to run, Esc to close)"
          className="w-full border-b border-white/10 bg-transparent px-5 py-4 font-mono text-sm text-white outline-none"
        />
        <ul className="max-h-72 overflow-auto p-2">
          {f.map((i) => (
            <li key={i.label}>
              <button
                onClick={() => run(i)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm hover:bg-white/10"
              >
                <span className="text-white">{i.label}</span>
                <span className="font-mono text-xs text-slate-500">
                  {i.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const GROUP_DOT = [
  "bg-teal-400",
  "bg-sky-400",
  "bg-indigo-400",
  "bg-violet-400",
  "bg-amber-400",
  "bg-emerald-400",
];

export default function App() {
  const [menu, setMenu] = useState(false),
    [pal, setPal] = useState(false),
    [pi, setPi] = useState(0);
  const [role, setRole] = useState(0),
    [prog, setProg] = useState(0),
    [copied, setCopied] = useState(false);
  const spot = useRef();

  useEffect(() => {
    const mm = (e) => {
      if (spot.current)
        spot.current.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(45,212,191,0.08), transparent 60%)`;
    };
    const sc = () =>
      setProg(
        (window.scrollY / (document.body.scrollHeight - innerHeight)) * 100,
      );
    const kd = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPal((p) => !p);
      }
      if (e.key === "Escape") setPal(false);
    };
    addEventListener("mousemove", mm);
    addEventListener("scroll", sc);
    addEventListener("keydown", kd);
    const t = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2200);
    return () => {
      removeEventListener("mousemove", mm);
      removeEventListener("scroll", sc);
      removeEventListener("keydown", kd);
      clearInterval(t);
    };
  }, []);

  const go = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const ext = (u) => () => window.open(u, "_blank");
  const items = [
    ...NAV.map((n) => ({
      label: `Go to ${n}`,
      hint: "section",
      run: go(n.toLowerCase()),
    })),
    ...PROJECTS.map((p) => ({
      label: `Open ${p.name} repo`,
      hint: "github",
      run: ext(p.href),
    })),
    { label: "Open GitHub", hint: "link", run: ext(L.github) },
    { label: "Open LinkedIn", hint: "link", run: ext(L.linkedin) },
    { label: "Open LeetCode", hint: "link", run: ext(L.leetcode) },
    { label: "Open Resume", hint: "pdf", run: ext(L.resume) },
    {
      label: "Send an email",
      hint: "mailto",
      run: () => (location.href = `mailto:${L.email}`),
    },
  ];
  const copy = () => {
    navigator.clipboard?.writeText(L.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const P = PROJECTS[pi];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0f17] font-sans text-slate-300">
      <style>{KEYFRAMES}</style>
      <div
        className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-teal-300 to-indigo-400"
        style={{ width: prog + "%" }}
      />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 20%,#000 20%,transparent 75%)",
            maskImage:
              "radial-gradient(ellipse at 50% 20%,#000 20%,transparent 75%)",
          }}
        />
        <div ref={spot} className="absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/15 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0f17]/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <a href="#home" className="font-mono text-lg">
              <span className={GRAD}>&lt;shivam /&gt;</span>
            </a>
            <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
              {NAV.map((n) => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="transition hover:text-teal-300"
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPal(true)}
                  className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs text-slate-400 hover:text-white"
                >
                  Ctrl K
                </button>
              </li>
              <li>
                <a
                  href={L.resume}
                  target="_blank"
                  rel="noreferrer"
                  className={`${BTN_P} !py-1.5`}
                >
                  Resume
                </a>
              </li>
            </ul>
            <button
              className="text-2xl text-white md:hidden"
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
            >
              {menu ? <HiX /> : <HiMenu />}
            </button>
          </nav>
          {menu && (
            <ul className="space-y-1 border-t border-white/10 px-5 pb-4 md:hidden">
              {NAV.map((n) => (
                <li key={n}>
                  <a
                    onClick={() => setMenu(false)}
                    href={`#${n.toLowerCase()}`}
                    className="block py-2 text-sm"
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={L.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-2 text-sm font-semibold text-teal-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          )}
        </header>

        <section
          id="home"
          className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pt-40"
        >
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" />{" "}
              OPEN TO INTERNSHIPS
            </span>
            <h1 className="mt-5 text-5xl font-serif font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-6xl">
              Shivam <span className={GRAD}>Sharma</span>
            </h1>
            <p
              className={`mt-4 text-sm font-semibold uppercase tracking-[0.25em] ${GRAD}`}
            >
              AI & Full-Stack Developer
            </p>
            <p className="mt-5 text-lg font-light text-slate-300">
              I build{" "}
              <span
                key={role}
                className="inline-block animate-[fade_.6s_ease_both] font-semibold text-white"
              >
                {ROLES[role]}
              </span>
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
              <MdLocationOn className="text-amber-400" /> Gwalior, Madhya
              Pradesh, India
            </p>
            <Terminal />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={BTN_P}>
                View Projects
              </a>
              <a
                href={L.resume}
                target="_blank"
                rel="noreferrer"
                className={BTN_O}
              >
                Open Resume
              </a>
              <a
                href={L.resume}
                download="Shivam-Sharma-Resume.pdf"
                className={BTN_O}
              >
                <FaDownload /> Download
              </a>
            </div>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map(([name, href, Icon]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className={ICON}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Photo />
          </div>
        </section>

        <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-4">
          <div className="flex w-max animate-[marq_40s_linear_infinite] gap-10 font-mono text-sm text-slate-400">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-teal-400">✦</span>
              </span>
            ))}
          </div>
        </div>

        <Section id="about" n={1} title="About">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className={`${CARD} font-mono text-sm leading-7`}>
              <p>
                <span className="text-amber-400">const</span>{" "}
                <span className="text-teal-300">shivam</span> = {"{"}
              </p>
              <p className="pl-5">
                education:{" "}
                <span className="text-emerald-400">
                  "B.Tech CSE, MITS Gwalior (2024–2028)"
                </span>
                ,
              </p>
              <p className="pl-5">
                focus: [
                <span className="text-emerald-400">"Multi-Agent AI"</span>,{" "}
                <span className="text-emerald-400">"RAG"</span>,{" "}
                <span className="text-emerald-400">"Full-Stack"</span>],
              </p>
              <p className="pl-5">
                experience:{" "}
                <span className="text-emerald-400">
                  "Web Developer Intern @ ApexPlanet"
                </span>
                ,
              </p>
              <p className="pl-5">
                dsa:{" "}
                <span className="text-emerald-400">
                  "Striver SDE Sheet — 45-Day Challenge ✔"
                </span>
                ,
              </p>
              <p className="pl-5">
                lookingFor:{" "}
                <span className="text-emerald-400">
                  "Internship opportunities"
                </span>
                ,
              </p>
              <p>{"}"}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(([v, l]) => (
                <div
                  key={l}
                  className={`${CARD} flex flex-col items-center justify-center text-center`}
                >
                  <div className={`text-4xl font-black ${GRAD}`}>
                    <Counter to={v} />
                    {v === 45 ? "" : "+"}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" n={2} title="Skills" tint>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(([g, it], gi) => (
              <div key={g} className={CARD}>
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${GROUP_DOT[gi]}`}
                  />
                  {g}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {it.map((s) => (
                    <span key={s} className={CHIP}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Fundamentals: DSA · OOPs · DBMS · SDLC · Computer Networks ·
            Operating Systems
          </p>
        </Section>

        <Section id="projects" n={3} title="Projects">
          <div className="mb-6 flex flex-wrap gap-2">
            {PROJECTS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setPi(i)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${i === pi ? "border-transparent bg-teal-400 text-[#05201c]" : "border-white/15 text-slate-300 hover:border-teal-400 hover:text-teal-300"}`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div
            key={pi}
            className="grid animate-[fade_.6s_ease_both] gap-6 lg:grid-cols-[1fr_1.1fr]"
          >
            <div className={CARD}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{P.name}</h3>
                  <p className={`text-sm font-semibold ${GRAD}`}>{P.sub}</p>
                </div>
                <a
                  href={P.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-3xl text-white hover:text-teal-300"
                >
                  <FaGithub />
                </a>
              </div>
              <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-6 marker:text-amber-400">
                {P.pts.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {P.tech.map((t) => (
                  <span key={t} className={CHIP}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={P.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-300 hover:underline"
              >
                View source <HiOutlineExternalLink />
              </a>
            </div>
            <div className={`${CARD} overflow-hidden !p-0`}>
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-slate-500">
                <span className="text-emerald-400">●</span> architecture /{" "}
                {P.name.toLowerCase().replace(/\W/g, "-")}.flow
              </div>
              <div className="flex flex-col items-center gap-2 p-6">
                {P.flow.map((n, i) => (
                  <div
                    key={n}
                    className="flex w-full flex-col items-center gap-2"
                  >
                    <div
                      className="w-full max-w-sm animate-[node_8s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#0f1622] px-4 py-3 text-center font-mono text-xs sm:text-sm"
                      style={{ animationDelay: `${i * 1.1}s` }}
                    >
                      {n}
                    </div>
                    {i < P.flow.length - 1 && (
                      <span className="text-indigo-300">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="journey" n={4} title="The Journey So Far" tint>
          <div className="relative mx-auto max-w-5xl py-8">
            {/* Header */}
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-300">
                  From learning to building
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Every step builds the next.
                </h3>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 font-mono text-xs text-slate-400">
                2024 — 2028
              </span>
            </div>

            {/* Journey rail */}
            <div className="relative">
              <div className="absolute bottom-8 left-5 top-5 w-px bg-slate-800 sm:left-1/2 sm:-translate-x-1/2" />
              <div className="absolute left-5 top-5 h-[65%] w-px origin-top bg-gradient-to-b from-violet-400 via-teal-400 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-12">
                {/* 2024 — Education */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[1fr_60px_1fr] sm:gap-6"
                >
                  <div className="absolute left-[13px] top-6 z-10 h-4 w-4 rounded-full border-[3px] border-violet-400 bg-[#0b0f17] shadow-[0_0_18px_#818cf8] sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="hidden items-center justify-end sm:flex">
                    <div className="pr-8 text-right">
                      <span className="font-mono text-xs tracking-widest text-violet-300">
                        THE BEGINNING
                      </span>
                      <h4 className="mt-2 text-2xl font-bold text-white">
                        2024
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        Starting the journey
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block" />

                  <div className="col-start-2 sm:col-start-3">
                    <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/[0.10] to-slate-900/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-widest text-violet-300">
                          EDUCATION
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          2024–2028
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-white">
                        B.Tech in Computer Science
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Madhav Institute of Technology & Science
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Gwalior, India
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {["DSA", "OOP", "DBMS", "OS", "Networks"].map((x) => (
                          <span
                            key={x}
                            className="rounded-md border border-violet-400/15 bg-violet-400/5 px-2.5 py-1 text-xs text-slate-400"
                          >
                            {x}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2025 — Internship */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[1fr_60px_1fr] sm:gap-6"
                >
                  <div className="absolute left-[13px] top-6 z-10 h-4 w-4 rounded-full border-[3px] border-teal-300 bg-[#0b0f17] shadow-[0_0_18px_#2dd4bf] sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="col-start-2 sm:col-start-1">
                    <div className="rounded-2xl border border-teal-400/25 bg-gradient-to-br from-teal-400/[0.10] to-slate-900/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-[0_15px_45px_-25px_rgba(45,212,191,0.5)]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-widest text-teal-300">
                          INTERNSHIP
                        </span>
                        <span className="rounded-full bg-teal-400/10 px-2.5 py-1 text-[10px] font-semibold text-teal-300">
                          COMPLETED
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-white">
                        Web Development Intern
                      </h3>
                      <p className="mt-1 text-sm text-teal-300">
                        ApexPlanet Software Pvt. Ltd.
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Bihar, India · June – August 2025
                      </p>

                      <div className="my-5 h-px bg-gradient-to-r from-teal-400/30 to-transparent" />

                      <p className="text-sm leading-6 text-slate-300">
                        My first industry experience, translating web
                        development fundamentals into practical projects and
                        interactive interfaces.
                      </p>

                      <div className="mt-4 space-y-2.5">
                        {[
                          "Developed five hands-on web projects.",
                          "Built responsive layouts and interactive UI features.",
                          "Applied DOM manipulation and JavaScript event handling.",
                          "Maintained project code using Git and GitHub.",
                        ].map((x) => (
                          <div
                            key={x}
                            className="flex gap-2.5 text-sm text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                            {x}
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "Git", "GitHub"].map(
                          (x) => (
                            <span
                              key={x}
                              className="rounded-md border border-teal-400/15 bg-teal-400/5 px-2.5 py-1 text-xs text-slate-400"
                            >
                              {x}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block" />

                  <div className="hidden items-center sm:flex">
                    <div className="pl-8">
                      <span className="font-mono text-xs tracking-widest text-teal-300">
                        FIRST MILESTONE
                      </span>
                      <h4 className="mt-2 text-2xl font-bold text-white">
                        2025
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        Learning through experience
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 2028 — Graduation */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[1fr_60px_1fr] sm:gap-6"
                >
                  <div className="absolute left-[13px] top-6 z-10 h-4 w-4 rounded-full border-[3px] border-indigo-300 bg-[#0b0f17] shadow-[0_0_18px_#818cf8] sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="hidden items-center justify-end sm:flex">
                    <div className="pr-8 text-right">
                      <span className="font-mono text-xs tracking-widest text-indigo-300">
                        NEXT MILESTONE
                      </span>
                      <h4 className="mt-2 text-2xl font-bold text-white">
                        2028
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        The next chapter
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block" />

                  <div className="col-start-2 sm:col-start-3">
                    <div className="rounded-2xl border border-indigo-400/20 bg-slate-900/50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/40">
                      <span className="text-xs font-semibold tracking-widest text-indigo-300">
                        UPCOMING MILESTONE
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-white">
                        Graduation
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        B.Tech · Computer Science & Engineering
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        Continuing to build, learn and grow through software
                        engineering and AI-powered projects.
                      </p>
                      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-violet-400 to-indigo-400" />
                      </div>
                      <p className="mt-2 text-[10px] text-slate-500">
                        A journey in progress · Expected July 2028
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs font-mono tracking-[0.25em] text-slate-500">
                LEARN <span className="text-teal-400">·</span> BUILD
                <span className="text-teal-400"> · </span> EVOLVE
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" n={5} title="Contact">
          <div className={`${CARD} relative overflow-hidden text-center`}>
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-teal-400/15 blur-3xl" />
            <h3 className="relative text-2xl font-bold text-white sm:text-3xl">
              Let’s build something <span className={GRAD}>intelligent</span>.
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-slate-400">
              I’m actively looking for internship opportunities. My inbox is
              always open.
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${L.email}`} className={BTN_P}>
                <MdEmail /> {L.email}
              </a>
              <button onClick={copy} className={BTN_O}>
                {copied ? (
                  <>
                    <FaCheck /> Copied
                  </>
                ) : (
                  <>
                    <FaRegCopy /> Copy email
                  </>
                )}
              </button>
            </div>
            <div className="relative mt-8 flex justify-center gap-4">
              {SOCIALS.map(([name, href, Icon]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className={ICON}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-8 text-center font-mono text-xs text-slate-500">
          Designed & built by Shivam Sharma · React + Tailwind · press{" "}
          <kbd className="rounded border border-white/20 px-1.5">Ctrl</kbd> +{" "}
          <kbd className="rounded border border-white/20 px-1.5">K</kbd> for
          commands
        </footer>
      </div>
      <Palette open={pal} setOpen={setPal} items={items} />
    </div>
  );
}
