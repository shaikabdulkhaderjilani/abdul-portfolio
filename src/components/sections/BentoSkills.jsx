import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Bot, ShoppingBag, Rocket } from "lucide-react";
import { SKILLS_BENTO } from "../../data/portfolioData";

const ICONS = {
  fullstack: Code2,
  "ai-automation": Bot,
  ecommerce: ShoppingBag,
  "rapid-mvp": Rocket,
};

function BentoCard({ skill, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = ICONS[skill.id] || Code2;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const spanClass =
    skill.size === "large"
      ? "md:col-span-7"
      : skill.size === "wide"
      ? "md:col-span-7"
      : "md:col-span-5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-apple-card p-7 transition-colors hover:border-white/20 md:p-9 ${spanClass}`}
    >
      {/* Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(41, 151, 255, 0.14), transparent 70%)`,
        }}
      />

      {/* Subtle Ambient Gradient */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-60`}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-apple-blue transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-5 w-5" />
          </div>

          <p className="text-xs font-medium uppercase tracking-wider text-apple-blue">
            {skill.subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {skill.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-apple-muted md:text-base">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoSkills() {
  return (
    <section id="skills" className="relative bg-apple-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for speed. <span className="text-apple-muted">Engineered to convert.</span>
          </h2>
          <p className="mt-4 text-base text-apple-muted sm:text-lg">
            Every layer—from pixel-accurate UI to automated backend workflows—is crafted for real business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {SKILLS_BENTO.map((skill, idx) => (
            <BentoCard key={skill.id} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}