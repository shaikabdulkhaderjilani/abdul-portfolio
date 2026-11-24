import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const handleNavClick = (e, id) => {
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      setActiveSection(id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-40 border-b border-white/10 bg-apple-black/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          onClick={() => setActiveSection("")}
          className="text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80 sm:text-base"
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

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="rounded-full bg-apple-blue px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-blue-500 sm:text-sm"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}