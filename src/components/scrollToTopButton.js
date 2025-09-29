// ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton({
  showAt = 300,          // px scrolled before showing
  bottom = 24,           // px from bottom
  right = 24,            // px from right
  ariaLabel = "Scroll to top",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > showAt);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAt]);

  const scrollTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scrolltop"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollTop}
            aria-label={ariaLabel}
            className="stt-btn d-inline-flex align-items-center justify-content-center"
            style={{ bottom, right }}
          >
            <span className="shine" aria-hidden />
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scoped CSS */}
      <style>{`
        .stt-btn {
          position: fixed;
          z-index: 9999;
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 9999px;
          color: #fff;
          background: rgba(15,23,42,0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          cursor: pointer;
          overflow: hidden;
        }
        .stt-btn:hover { transform: translateY(-2px); }
        .stt-btn:active { transform: translateY(0); }

        /* Shine sweep */
        .stt-btn .shine {
          position: absolute; top: 0; left: -140%;
          width: 70%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-20deg);
          animation: stt-sweep 3.6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes stt-sweep {
          0% { left: -140%; }
          55% { left: 140%; }
          100% { left: 140%; }
        }

        /* Optional: hide when printing */
        @media print { .stt-btn { display: none; } }
      `}</style>
    </>
  );
}
