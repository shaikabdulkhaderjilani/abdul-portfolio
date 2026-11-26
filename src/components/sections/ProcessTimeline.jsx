import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Layers, Sparkles, ArrowRight } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    id: "01",
    phase: "Phase 01",
    title: "Discovery & Blueprint",
    duration: "Days 1 – 2",
    summary:
      "We lock down exact user flows, database schema, API integrations, and UI wireframes before writing a single line of production code.",
    deliverables: [
      "Complete Feature & Architecture Roadmap",
      "Interactive Wireframe & User Flow Map",
      "Fixed Milestone Timeline & Transparent Quote",
    ],
    tools: ["Figma", "System Design", "API Spec"],
  },
  {
    id: "02",
    phase: "Phase 02",
    title: "Full-Stack & AI Build",
    duration: "Days 3 – 10",
    summary:
      "Rapid sprint development with clean React/Vite UI, Node.js/MongoDB backend, and Python AI automation pipelines—with live staging previews every 48 hours.",
    deliverables: [
      "Responsive Apple-Grade Frontend & Animations",
      "Secure Auth (OTP/JWT), Payments & Database",
      "Custom Python / Gemini AI Automation Hooks",
    ],
    tools: ["React", "Node.js", "Python", "MongoDB"],
  },
  {
    id: "03",
    phase: "Phase 03",
    title: "Launch, SEO & Scale",
    duration: "Days 11 – 14",
    summary:
      "Zero-downtime deployment on Vercel/Hostinger, custom domain SSL setup, Core Web Vitals optimization, and complete source-code handover.",
    deliverables: [
      "Production Cloud Deployment & Domain Setup",
      "Speed, Mobile & Technical SEO Optimization",
      "100% Code Ownership + Walkthrough Video",
    ],
    tools: ["Vercel", "Hostinger", "GitHub", "Analytics"],
  },
];

const PACKAGES = [
  {
    name: "High-Converting Landing / Portfolio",
    timeline: "4 – 6 Days",
    idealFor: "Founders, Creators & Local Businesses",
    highlights: [
      "Custom Apple-style animations",
      "Mobile-first & SEO ready",
      "WhatsApp / Email lead capture",
    ],
  },
  {
    name: "Full-Stack Web App / E-Commerce",
    timeline: "10 – 18 Days",
    idealFor: "D2C Brands & Startups",
    highlights: [
      "React + Node/MongoDB stack",
      "OTP Login, Cart & Order tracking",
      "Admin dashboard & payment/shipping APIs",
    ],
    featured: true,
  },
  {
    name: "AI & Python Business Automation",
    timeline: "5 – 10 Days",
    idealFor: "Agencies & Sales Teams",
    highlights: [
      "Automated lead scraping & outreach",
      "Gemini AI document/content workflows",
      "Custom Streamlit / Web control panel",
    ],
  },
  {
    name: "Content Management & Brand Growth",
    timeline: "Monthly Retainer / Sprint",
    idealFor: "Creators, Founders & D2C Brands",
    highlights: [
      "High-retention carousels & Reels editing",
      "Comment-to-DM inbound lead capture funnels",
      "Visual brand system & organic growth analytics",
    ],
    isContent: true,
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Scroll-linked progress beam across the 3 phases
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  const current = WORKFLOW_STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative border-t border-white/10 bg-apple-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-apple-blue">
              How We Ship
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Precision process.{" "}
              <span className="text-apple-muted">Zero guesswork.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-apple-muted">
            Click any stage below to inspect deliverables, sprint timelines, and engineering stack.
          </p>
        </motion.div>

        {/* Scroll-Linked Progress Track + Interactive Step Tabs */}
        <div className="relative mb-8">
          {/* Background Track */}
          <div className="hidden h-[2px] w-full bg-white/10 md:block" />
          {/* Scroll-Animated Blue Beam */}
          <motion.div
            style={{ scaleX: lineScaleX, transformOrigin: "left" }}
            className="hidden h-[2px] w-full -translate-y-[2px] bg-gradient-to-r from-apple-blue via-cyan-400 to-emerald-400 md:block"
          />

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {WORKFLOW_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`relative rounded-2xl border p-5 text-left transition-all ${
                    isActive
                      ? "border-apple-blue/60 bg-apple-card shadow-lg shadow-apple-blue/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePhaseGlow"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-apple-blue/10 to-transparent"
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-apple-blue">
                      {step.phase}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-apple-muted">
                      <Clock className="h-3 w-3" />
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="relative z-10 mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Deliverable Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-apple-card p-7 md:p-10"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-apple-blue">
                  <Layers className="h-4 w-4" />
                  <span>
                    {current.phase} • {current.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-apple-muted md:text-base">
                  {current.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-apple-text"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-black/50 p-6 md:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  What You Get In This Stage
                </p>
                <ul className="mt-4 space-y-3">
                  {current.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Freelance Engagement Models (Scope & Timelines) */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-apple-muted">
            <Sparkles className="h-4 w-4 text-apple-blue" />
            <span>Engagement Models</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PACKAGES.map((pkg) => {
              const isContent = Boolean(pkg.isContent);

              return (
                <div
                  key={pkg.name}
                  className={`flex flex-col justify-between rounded-3xl border p-7 transition-colors ${
                    pkg.featured
                      ? "border-apple-blue/50 bg-gradient-to-b from-apple-blue/10 to-apple-card"
                      : isContent
                        ? "border-amber-400/35 bg-gradient-to-b from-amber-400/[0.07] to-apple-card hover:border-amber-400/50"
                        : "border-white/10 bg-apple-card hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-medium ${
                          isContent ? "text-amber-300" : "text-apple-blue"
                        }`}
                      >
                        {pkg.timeline}
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full bg-apple-blue/20 px-2.5 py-0.5 text-[10px] font-semibold text-apple-blue">
                          Most Popular
                        </span>
                      )}
                      {isContent && (
                        <span className="rounded-full border border-amber-400/35 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300">
                          ★ Content &amp; Growth
                        </span>
                      )}
                    </div>
                    <h4 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      {pkg.name}
                    </h4>
                    <p className="mt-1 text-xs text-apple-muted">
                      Best for: {pkg.idealFor}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                      {pkg.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-xs text-zinc-300"
                        >
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              isContent ? "bg-amber-300" : "bg-apple-blue"
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-7 inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80 ${
                      isContent ? "text-amber-300" : "text-apple-blue"
                    }`}
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}