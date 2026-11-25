import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "../../data/portfolioData";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen overflow-x-clip overflow-y-hidden bg-apple-black pt-20 pb-12 md:flex md:items-center md:pt-24 md:pb-16">
      {/* Subtle Apple ambient spotlight */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-apple-blue/10 blur-[140px]" />

      {/* Right Edge Full-Bleed Portrait on Desktop, Clean Stacked Block on Mobile */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none relative order-2 z-0 mx-auto mt-8 h-[420px] w-full max-w-md px-6 sm:h-[480px] md:order-none md:mt-0 md:h-[90vh] md:w-[44vw] md:max-w-none md:px-0 md:absolute md:top-12 md:right-0"
      >
        {!imgError ? (
          <img
            src="/profile.png"
            alt={PROFILE.name}
            onError={() => setImgError(true)}
            className="h-full w-full rounded-2xl object-cover object-top md:rounded-none"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-white/20">
            AK
          </div>
        )}

        {/* Smooth bottom & left edge blend into black background */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-apple-black via-transparent to-transparent md:rounded-none" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-apple-black to-transparent md:block" />
      </motion.div>

      {/* Hero Left Content: Big Highlighted Name + Role & Details */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full py-4 text-left md:w-[58%] md:py-16"
        >
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-apple-muted">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            <span>{PROFILE.availability}</span>
            <span>•</span>
            <span className="text-white">{PROFILE.location}</span>
          </div>

          {/* Primary Highlight: Full Name */}
          <h1 className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-3xl font-bold leading-[1.12] tracking-tight text-transparent sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            {PROFILE.name}
          </h1>

          {/* Secondary Highlight: Designation & Brand */}
          <p className="mt-4 text-lg font-semibold leading-snug tracking-tight text-apple-blue sm:text-2xl">
            {PROFILE.role}
          </p>
          <p className="mt-1.5 text-sm font-medium text-white/90 sm:text-base">
            {PROFILE.brand} • {PROFILE.location}
          </p>

          {/* Tagline & Summary */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-apple-muted sm:mt-5 sm:text-lg">
            {PROFILE.tagline} — {PROFILE.subTagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-apple-blue px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 sm:px-6"
            >
              Explore Selected Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-apple-text transition-colors hover:bg-white/10 sm:px-6"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}