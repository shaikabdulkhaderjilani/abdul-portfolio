import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-apple-card p-6 text-apple-text shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: `${project.color}18`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-apple-muted">{project.tagline}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-apple-muted transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-300 md:text-base">
              {project.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Key Outcome: {project.metrics}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-apple-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-apple-blue px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-blue-500"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-apple-text transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}