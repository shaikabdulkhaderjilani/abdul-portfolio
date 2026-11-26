import { motion } from "framer-motion";
import { Layout, Server, Cpu, Wrench, Sparkles } from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "frontend",
    title: "Frontend & UI",
    subtitle: "Interfaces & Motion",
    icon: Layout,
    items: [
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis Smooth Scroll",
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    subtitle: "APIs, Auth & Databases",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB & Mongoose",
      "OTP & JWT Auth",
      "Nodemailer",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    subtitle: "Workflows, Bots & Data",
    icon: Cpu,
    items: [
      "Python",
      "Gemini API",
      "Google Maps Places API",
      "Streamlit",
      "Automated Outreach",
      "Data Auditing",
    ],
  },
  {
    id: "tools-deploy",
    title: "Tools & Deployment",
    subtitle: "Shipping & Hosting",
    icon: Wrench,
    items: [
      "Git & GitHub",
      "Vercel",
      "Hostinger",
      "Cursor & AI Workflows",
      "SEO & Performance",
    ],
  },
  {
    id: "content-brand",
    title: "Content Management & Brand Systems",
    subtitle: "Visual Storytelling, Conversion Copy & Lead Funnels",
    icon: Sparkles,
    featured: true,
    items: [
      "Canva & Visual Design",
      "Figma System Design",
      "High-Retention Carousels",
      "Hook & Conversion Copy",
      "Comment-to-DM Funnels",
      "Content Strategy & Analytics",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 bg-apple-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-apple-blue">
            Technical &amp; Creative Stack
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills
          </h2>
          <p className="mt-3 text-base text-apple-muted sm:text-lg">
            Tools, languages, and frameworks I use to build and ship production web apps, automation systems, and{" "}
            <span className="font-medium text-amber-300">
              high-converting content systems
            </span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            const isFeatured = Boolean(group.featured);

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-3xl border p-7 transition-colors ${
                  isFeatured
                    ? "border-amber-400/30 bg-amber-400/[0.04] hover:border-amber-400/50 md:col-span-2"
                    : "border-white/10 bg-apple-card hover:border-white/20"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                        isFeatured
                          ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                          : "border-white/10 bg-white/5 text-apple-blue"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs text-apple-muted">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  {isFeatured && (
                    <span className="rounded-full border border-amber-400/35 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      ★ Content &amp; Brand Growth
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        isFeatured
                          ? "border-amber-400/20 bg-white/[0.04] text-zinc-100 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-200"
                          : "border-white/10 bg-white/[0.04] text-zinc-200 hover:border-apple-blue/40 hover:bg-apple-blue/10 hover:text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}