import { motion } from "framer-motion";
import { ABOUT_DATA } from "../../data/portfolioData";

function renderHighlightedParagraph(text) {
  const highlights = [
    {
      phrase: "end-to-end content systems",
      className: "font-medium text-amber-300",
    },
    {
      phrase: "high-converting visual carousels",
      className: "font-medium text-white",
    },
    {
      phrase: "inbound lead funnels",
      className: "font-medium text-amber-300",
    },
    {
      phrase: "full-stack web applications",
      className: "font-medium text-white",
    },
    {
      phrase: "D2C e-commerce platforms",
      className: "font-medium text-white",
    },
    {
      phrase: "Python & AI automation workflows",
      className: "font-medium text-white",
    },
  ];

  const pattern = new RegExp(
    `(${highlights
      .map((h) => h.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = highlights.find(
      (h) => h.phrase.toLowerCase() === part.toLowerCase()
    );
    if (match) {
      return (
        <span key={index} className={match.className}>
          {part}
        </span>
      );
    }
    return part;
  });
}

function renderHighlightedValue(value) {
  if (!value.toLowerCase().includes("content management")) return value;

  const parts = value.split(/(Content Management)/i);
  return parts.map((part, index) =>
    part.toLowerCase() === "content management" ? (
      <span key={index} className="font-semibold text-amber-300">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function AboutSection() {
  const hasContentBio = ABOUT_DATA.paragraphs.some((text) =>
    text.toLowerCase().includes("content")
  );

  const paragraphs = hasContentBio
    ? ABOUT_DATA.paragraphs
    : [
        ...ABOUT_DATA.paragraphs,
        "Alongside engineering, I manage end-to-end content systems—turning complex data and brand stories into high-converting visual carousels and inbound lead funnels.",
      ];

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
            <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Engineering, automation &amp;{" "}
              <span className="text-amber-300">content systems.</span>
            </h2>
            <div className="mt-4 inline-flex items-center rounded-lg border border-amber-400/35 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
              ★ Content Manager &amp; Brand Strategy
            </div>
          </div>

          <div className="space-y-5 md:col-span-8">
            {paragraphs.map((text) => (
              <p
                key={text}
                className="text-base leading-relaxed text-zinc-300 sm:text-lg"
              >
                {renderHighlightedParagraph(text)}
              </p>
            ))}

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              {ABOUT_DATA.highlights.map((item) => {
                const isFocusCard = item.value
                  .toLowerCase()
                  .includes("content");

                return (
                  <div
                    key={item.label}
                    className={`flex flex-col justify-between rounded-2xl border p-5 transition-colors duration-300 ${
                      isFocusCard
                        ? "border-amber-400/30 bg-amber-400/[0.04] hover:border-amber-400/50"
                        : "border-white/10 bg-apple-card hover:border-white/20"
                    }`}
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-apple-muted">
                      {item.label}
                    </p>
                    <p className="mt-2.5 text-sm font-medium leading-snug text-white">
                      {renderHighlightedValue(item.value)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}