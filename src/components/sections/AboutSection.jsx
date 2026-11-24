import { motion } from "framer-motion";
import { ABOUT_DATA } from "../../data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-apple-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-widest text-apple-blue">
              {ABOUT_DATA.heading}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Practical engineering, shipped cleanly.
            </h2>
          </div>

          <div className="space-y-5 md:col-span-8">
            {ABOUT_DATA.paragraphs.map((text) => (
              <p
                key={text}
                className="text-base leading-relaxed text-zinc-300 sm:text-lg"
              >
                {text}
              </p>
            ))}

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              {ABOUT_DATA.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-apple-card p-4"
                >
                  <p className="text-xs text-apple-muted">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}