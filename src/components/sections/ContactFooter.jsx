import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../data/portfolioData";

const LINKEDIN_URL = "https://www.linkedin.com/in/shaik-abdul55/";
const GITHUB_URL = "https://github.com/shaikabdulkhaderjilani";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = PROFILE.email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-apple-black pt-24 pb-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-apple-card via-apple-card to-apple-blue/10 p-8 text-center md:p-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-apple-blue">
            Let&apos;s Work Together
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Have a product or automation workflow in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-apple-muted">
            Whether you need a custom storefront, web app, or automated outreach &amp; data pipeline, let&apos;s build something fast and reliable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`mailto:${PROFILE.email}?subject=Freelance%20Project%20Inquiry`}
              className="inline-flex items-center gap-2 rounded-full bg-apple-blue px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              <Mail className="h-4 w-4" />
              <span>Send an Email</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 text-apple-blue" />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-4 w-4 text-apple-blue" />
            </a>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-apple-muted" />
                  <span>{PROFILE.email}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-apple-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} . All rights reserved.
          </p>
          <p>{PROFILE.location}</p>
        </div>
      </div>
    </footer>
  );
}