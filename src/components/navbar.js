// Navbar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText,Menu, X, Rocket, Languages, Sun, Moon } from "lucide-react";

const defaultLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  brand = "Bishnu Aryal",
  links = defaultLinks,
  lang = "en",
  onLanguageChange = () => {},
  languages = [
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
  ],
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const selectLang = (code) => {
    onLanguageChange(code);
    setLangOpen(false);
    setOpen(false);
  };

  return (
    <header className="nav-scope">
      <motion.nav
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`nav-glass ${scrolled ? "nav-scrolled" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-between gap-2">
          <a href="#hero" className="brand d-inline-flex align-items-center gap-2">
            <Rocket size={18} className="text-info" />
            <span className="fw-bold">{brand}</span>
          </a>

          <ul className="d-none d-lg-flex align-items-center gap-3 mb-0">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link d-inline-flex align-items-center">
                  <span>{l.label}</span>
                  <span className="u" />
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2">
            <div className="d-none d-lg-block position-relative">
              <button
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <FileText size={16} />
                {currentLang?.label}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="lang-menu glass p-2 m-0"
                    role="listbox"
                  >
                    {languages.map((l) => (
                      <li key={l.code}>
                        <button
                          className={`lang-item ${l.code === lang ? "active" : ""}`}
                          onClick={() => selectLang(l.code)}
                          role="option"
                          aria-selected={l.code === lang}
                        >
                          {l.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className="d-none d-lg-block position-relative">
              <button
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <Languages size={16} />
                {currentLang?.label}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="lang-menu glass p-2 m-0"
                    role="listbox"
                  >
                    {languages.map((l) => (
                      <li key={l.code}>
                        <button
                          className={`lang-item ${l.code === lang ? "active" : ""}`}
                          onClick={() => selectLang(l.code)}
                          role="option"
                          aria-selected={l.code === lang}
                        >
                          {l.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <button
              className="btn btn-sm btn-outline-light d-none d-lg-inline-flex"
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              className="btn btn-sm btn-light d-inline-flex d-lg-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mobile-wrap d-lg-none"
            >
              <ul className="list-unstyled d-grid gap-2 mb-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="nav-link py-1 px-1" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`btn btn-sm ${l.code === lang ? "btn-light" : "btn-outline-light"} flex-grow-1`}
                    onClick={() => selectLang(l.code)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="shine" aria-hidden />
      </motion.nav>

      <style>{`
        .nav-scope { position: sticky; top: 0; z-index: 1040; }
        .nav-glass {
          position: relative;
          background: rgba(15,23,42,0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(148,163,184,0.18);
          transition: box-shadow .2s ease, background .2s ease;
        }
        .nav-scrolled { box-shadow: 0 10px 28px rgba(0,0,0,0.35); background: rgba(15,23,42,0.78); }

        .nav-glass .container {
          min-height: 64px;
          padding-top: 6px;
          padding-bottom: 6px;
          align-items: center;
        }

        .brand { color: #fff; text-decoration: none; font-size: 1.15rem; }
        .brand:hover { color: #22d3ee; }

        .nav-glass ul { list-style: none; padding-left: 0; margin-bottom: 0; }

        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 8px;
          transition: color .15s ease, background .15s ease;
        }
        .nav-link:hover { color: #22d3ee; background: rgba(255,255,255,0.06); }
        .nav-link .u {
          position: absolute; left: 8px; right: 8px; bottom: 4px; height: 2px;
          background: linear-gradient(90deg,#22d3ee,#6366f1);
          border-radius: 2px; transform: scaleX(0); transform-origin: left; transition: transform .2s ease;
        }
        .nav-link:hover .u { transform: scaleX(1); }

        .mobile-wrap { padding: 8px 16px 14px; }
        .mobile-wrap .nav-link { display: block; border-radius: 10px; }
        .mobile-wrap .nav-link:hover { background: rgba(255,255,255,0.06); }

        .lang-menu {
          position: absolute; right: 0; margin-top: 8px; min-width: 160px; border-radius: 12px;
        }
        .glass {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #fff; box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .lang-item {
          width: 100%; text-align: left; background: transparent; color: #fff;
          border: 0; padding: 8px 10px; border-radius: 10px; cursor: pointer;
        }
        .lang-item:hover { background: rgba(255,255,255,0.06); }
        .lang-item.active { background: rgba(34,211,238,0.15); }

        .nav-glass .shine {
          position: absolute; top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg); animation: nav-sweep 4s ease-in-out infinite; pointer-events: none;
        }
          
        @keyframes nav-sweep { 0%{left:-120%} 55%{left:140%} 100%{left:140%} }

        @media (max-width: 991.98px) {
          .nav-glass .container { min-height: 56px; }
        }
      `}</style>
    </header>
  );
}
