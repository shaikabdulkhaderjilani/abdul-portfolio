import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE_DATA } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            Work Experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Where I&apos;ve built &amp; worked.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl border border-white/10 bg-apple-card p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <Briefcase className="h-4 w-4 text-apple-blue" />
                    <h3 className="text-xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-apple-blue">
                    {exp.organization}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-apple-muted">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {exp.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-apple-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}