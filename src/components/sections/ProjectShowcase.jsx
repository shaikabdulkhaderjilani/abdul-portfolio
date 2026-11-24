import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/portfolioData";

export default function ProjectShowcase({ onSelectProject }) {
  return (
    <section
      id="work"
      className="relative border-t border-white/10 bg-apple-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-apple-blue">
              Selected Works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Real products. Real execution.
            </h2>
          </div>
          <p className="max-w-md text-sm text-apple-muted">
            Full-stack storefronts, internal operations tools, and automated lead-gen systems built from ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              onClick={() => onSelectProject?.(project)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-apple-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: `${project.color}18`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>

                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                        {project.status}
                      </span>
                    )}
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-apple-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-apple-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-medium text-emerald-400">
                  ★ {project.metrics}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-apple-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}