"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";
import Background from "@/components/Background";

/* ─────────────────────────── helpers ─────────────────────────── */

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.15, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeSlide}
      custom={0}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#003366]/10 text-[#003366]">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

/* ─────────────────────────── data ─────────────────────────── */

const NAV_LINKS = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
] as const;

interface Project {
  title: string;
  badge?: string;
  description: string;
  stack: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    title: "Sentinel",
    badge: "1st Place — DINACOM 11.0",
    description:
      "AI-driven stunting mitigation platform leveraging KNN classification models, containerized with Docker for scalable deployment and real-time health monitoring.",
    stack: ["Python", "KNN", "Docker", "REST API", "PostgreSQL"],
    github: "https://github.com/faawibowo/dinacom-steikon",
  },
  {
    title: "PAKTA",
    badge: "3rd Place — UNPAD IFEST 2025",
    description:
      "AI-integrated Contract Lifecycle Management (CLM) system with RAG-based Indonesian law assessment for automated legal compliance checking.",
    stack: ["Next.js", "LangChain", "RAG", "Python", "TypeScript"],
    github: "https://github.com/faawibowo/PAKTA",
  },
  {
    title: "Votely",
    description:
      "Decentralized e-voting platform built on Solidity smart contracts with real-time biometric verification using MediaPipe for secure, transparent elections.",
    stack: ["Solidity", "Ethereum", "MediaPipe", "React", "Web3.js"],
    github: "https://github.com/faawibowo/votely-platform",
  },
  {
    title: "Scholar Classifier",
    description:
      "Machine learning classification algorithms (SVM, ID3, Logistic Regression) implemented from scratch using only NumPy for educational transparency.",
    stack: ["Python", "NumPy", "SVM", "Decision Tree", "Logistic Regression"],
    github: "https://github.com/faawibowo/scholar-classifier",
  },
  {
    title: "Nimonspedia",
    description:
      "Full-stack e-commerce platform with hybrid PHP MVC backend, Node.js microservices, and a React frontend supporting real-time auction bidding.",
    stack: ["PHP", "Node.js", "React", "WebSocket", "Docker"],
    github: "https://github.com/faawibowo/Nimonspedia",
  },
];

interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Associate of IT",
    org: "TEC ITB",
    period: "2024 — Present",
    description:
      "Guided Data Science learning programs and mentored students through hands-on workshops in machine learning and data analysis.",
    tags: ["Data Science", "Mentoring", "Python"],
  },
  {
    role: "Staff of Capital Catalyst",
    org: "HMIF ITB",
    period: "2024 — Present",
    description:
      "Developing e-commerce platform for official merchandise, managing the full product lifecycle from ideation to deployment.",
    tags: ["E-Commerce", "Full-Stack", "Product"],
  },
  {
    role: "Head of Operations",
    org: "ITB JAZZ",
    period: "2024 — Present",
    description:
      "Led 20+ members for Kroyokeanjes operations, coordinating logistics, scheduling, and cross-team collaboration for large-scale events.",
    tags: ["Leadership", "Operations", "Event Management"],
  },
  {
    role: "IT Staff",
    org: "Parade Wisuda Oktober",
    period: "2024",
    description:
      "Developed TypeScript backend services for the graduation ceremony web platform, handling real-time data and high-traffic loads.",
    tags: ["TypeScript", "Backend", "REST API"],
  },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "Go", "Solidity", "C/C++", "PHP", "SQL"],
  "Frameworks & AI": [
    "Next.js",
    "React",
    "TensorFlow",
    "LangChain",
    "Hugging Face",
    "Node.js",
    "Express",
    "Flask",
  ],
  Tools: ["Docker", "Git", "GCP", "AWS", "PostgreSQL", "MongoDB", "Linux", "Figma"],
};

/* ─────────────────────────── components ─────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-[#003366] tracking-tight hover:opacity-80 transition-opacity"
        >
          MFW<span className="text-[#003366]/40">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#003366] rounded-lg hover:bg-[#003366]/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-[#003366]/5 text-slate-600"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mx-4 mt-2 rounded-2xl p-3"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#003366] rounded-xl hover:bg-[#003366]/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <Section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeSlide} custom={0} className="max-w-3xl">
          {/* Greeting tag */}
          <motion.div
            variants={fadeSlide}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-[#003366] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <motion.h1
            variants={fadeSlide}
            custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4"
          >
            Muhammad Farrel{" "}
            <span className="text-[#003366]">Wibowo</span>
          </motion.h1>

          <motion.p
            variants={fadeSlide}
            custom={2}
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-2"
          >
            3rd-year{" "}
            <span className="font-semibold text-slate-700">
              Informatics Engineering
            </span>{" "}
            student at{" "}
            <span className="font-semibold text-[#003366]">
              Institut Teknologi Bandung
            </span>
          </motion.p>

          <motion.p
            variants={fadeSlide}
            custom={3}
            className="text-base md:text-lg text-slate-400 mb-8"
          >
            Specialized in{" "}
            <span className="text-slate-600 font-medium">
              Artificial Intelligence
            </span>{" "}
            and{" "}
            <span className="text-slate-600 font-medium">
              Full-Stack Web Development
            </span>
          </motion.p>

          {/* Socials */}
          <motion.div
            variants={fadeSlide}
            custom={4}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="https://github.com/faawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-slate-700 hover:text-[#003366] transition-all"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/muhammadfarrel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-slate-700 hover:text-[#003366] transition-all"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:faawibowo@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-slate-700 hover:text-[#003366] transition-all"
            >
              <Mail size={16} />
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          icon={<GraduationCap size={20} />}
          title="Education"
        />

        <motion.div
          variants={fadeSlide}
          custom={1}
          className="glass glass-hover rounded-2xl p-6 md:p-8 max-w-2xl transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#003366]/10 flex items-center justify-center text-[#003366] font-bold text-lg">
              ITB
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Institut Teknologi Bandung
              </h3>
              <p className="text-sm text-[#003366] font-semibold mt-0.5">
                Bachelor of Informatics Engineering
              </p>
              <p className="text-sm text-slate-400 mt-1">
                2023 — Present · 3rd Year
              </p>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Focused coursework in artificial intelligence, machine learning,
                algorithms, software engineering, and distributed systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          icon={<Briefcase size={20} />}
          title="Experience & Organizations"
        />

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-[#003366]/10" />

          <div className="space-y-4">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.org}
                variants={fadeSlide}
                custom={i + 1}
                className="relative pl-10 md:pl-14"
              >
                {/* Dot on timeline */}
                <div className="absolute left-2.5 md:left-3.5 top-6 w-3 h-3 rounded-full bg-[#003366] ring-4 ring-white/80" />

                <div className="glass glass-hover rounded-2xl p-5 md:p-6 transition-all group">
                  {/* Top row: role + period */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#003366] font-semibold mt-0.5">
                        {exp.org}
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] font-mono font-medium text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mt-2.5">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[#003366]/5 text-[#003366] text-xs font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Project Carousel ── */
const carouselVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function ProjectsSection() {
  const [[activeIndex, direction], setPage] = useState([0, 0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = useCallback(
    (newDir: number) => {
      setPage(([prev]) => {
        const next = (prev + newDir + PROJECTS.length) % PROJECTS.length;
        return [next, newDir];
      });
    },
    [],
  );

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(() => paginate(1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paginate]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => paginate(1), 5000);
  }, [paginate]);

  const goTo = useCallback(
    (idx: number) => {
      setPage(([prev]) => [idx, idx > prev ? 1 : -1]);
      resetTimer();
    },
    [resetTimer],
  );

  const handlePrev = useCallback(() => {
    paginate(-1);
    resetTimer();
  }, [paginate, resetTimer]);

  const handleNext = useCallback(() => {
    paginate(1);
    resetTimer();
  }, [paginate, resetTimer]);

  const project = PROJECTS[activeIndex];

  return (
    <Section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={<Code2 size={20} />} title="Featured Projects" />

        {/* Carousel container */}
        <div className="relative">
          {/* Card viewport */}
          <div className="overflow-hidden rounded-2xl min-h-[320px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) { handleNext(); }
                  else if (info.offset.x > 80) { handlePrev(); }
                }}
                className="glass rounded-2xl p-7 md:p-9 flex flex-col cursor-grab active:cursor-grabbing"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-semibold whitespace-nowrap">
                      <Award size={12} />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#003366]/5 text-[#003366] text-xs font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#003366] hover:text-[#004a99] transition-colors group/link w-fit"
                >
                  <Github size={15} />
                  View on GitHub
                  <ChevronRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 transition-transform"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-[#003366] hover:bg-white/60 transition-all shadow-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-[#003366] hover:bg-white/60 transition-all shadow-md"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 h-2.5 bg-[#003366]"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          icon={<Code2 size={20} />}
          title="Skills & Technologies"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([category, items], ci) => (
            <motion.div
              key={category}
              variants={fadeSlide}
              custom={ci + 1}
              className="glass glass-hover rounded-2xl p-6 transition-all"
            >
              <h3 className="text-sm font-bold text-[#003366] uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-xl bg-[#003366]/5 text-slate-700 text-sm font-mono font-medium hover:bg-[#003366]/10 hover:text-[#003366] transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl py-8 px-6">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Muhammad Farrel Wibowo. Built with{" "}
            <span className="font-mono text-[#003366]/70">Next.js</span> &amp;{" "}
            <span className="font-mono text-[#003366]/70">TailwindCSS</span>.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com/faawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#003366] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/muhammadfarrel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#003366] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:faawibowo@gmail.com"
              className="text-slate-400 hover:text-[#003366] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── page ─────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Glassmorphism Background (Aurora Blobs + Grid) */}
      <Background />

      <main>
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}
