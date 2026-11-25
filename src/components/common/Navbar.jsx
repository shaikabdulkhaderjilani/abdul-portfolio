import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../../data/portfolioData";

const NAV_LINKS = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Work", href: "#work" },
  { id: "process", label: "Process", href: "#process" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY + 180;

      if (window.scrollY < 260) {
        setActiveSection("");
        return;
      }

      let current = "";
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollOffset >= top && scrollOffset < top + height) {
            current = item.id;
            break;
          }
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
      if (nearBottom) {
        current = "contact";
      }

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return false;

    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);

    const headerOffset = 76;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    return true;
  };

  const handleNavClick = (e, id) => {
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      setMobileOpen(false);
      // Mobile drawer close animation start ayyaka smooth scroll trigger avvadaniki small delay
      setTimeout(() => {
        scrollToSection(id);
      }, 80);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-40 border-b border-white/10 bg-apple-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          onClick={() => {
            setActiveSection("");
            setMobileOpen(false);
          }}
          className="truncate pr-2 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80 sm:text-base"
        >
          {PROFILE.brand || "Shaik Abdul Khader Jilani"}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xs transition-colors lg:text-sm ${
                  isActive
                    ? "font-semibold text-white"
                    : "font-medium text-apple-muted hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="rounded-full bg-apple-blue px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-blue-500 sm:text-sm"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-apple-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-white/10 font-semibold text-white"
                        : "font-medium text-apple-muted hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}