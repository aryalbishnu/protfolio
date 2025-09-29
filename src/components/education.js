// Education.jsx
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Building2 } from "lucide-react";
import education from "./text/education.json";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.45, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const DEFAULT_EDU = [
  {
    degree: "Faculty of Arts and Science",
    school: "The Open University of Japan",
    period: "2025 — Present",
    location: "Chiba, Japan",
    details: [
      "Spring Boot, Java, Python, REST best practices, Microservices",
      "Docker, Linux, Git, CI/CD (GitHub Actions/Jenkins)",
    ],
    badge: "Ongoing",
  },
  {
    degree: "International IT Department",
    school: "Nihon International IT College",
    period: "2018 — 2021",
    location: "Chiba, Japan",
    details: [
      "Core: Data Structures, Databases, Networks, OS, Java, Php",
      "Capstone: FinTech backend API with security best practices",
    ],
    badge: "Honors",
  },
  {
    degree: "Language School",
    school: "Only One Japanese Language School",
    period: "2016 — 2018",
    location: "Chiba, Japan",
    details: [
      "Core: Japanese Language",
      "Capstone: Language best practice",
    ],
    badge: "Honors",
  },
  {
    degree: "Computer Science",
    school: "Future Brighter Higher Secondary School",
    period: "2012 — 2014",
    location: "Baglung, Nepal",
    details: [
      "Core: Account, Math, Computer",
      "Capstone: C++, Math best practices",
    ],
    badge: "Honors",
  },
];

export default function Education({
  items = education,
  title = "Education",
  subtitle = "Formal studies and ongoing learning.",
}) {
  return (
    <section id="education" className="education edu-scope bg-gradient-hero text-white py-5">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4"
        >
          <h2 className="display-6 fw-bold mb-2">
            {title} <span className="text-info">&amp; Training</span>
          </h2>
          <p className="text-white-50 mb-0">{subtitle}</p>
        </motion.div>

        {/* Grid (side-by-side on lg) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4"
        >
          {items.map((e, idx) => (
            <div key={`${e.degree}-${idx}`} className="col-12 col-lg-6 d-flex">
              <motion.div
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass t-card p-3 h-100 w-100 position-relative overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="shine" aria-hidden />

                {/* Tiny timeline dot on small screens */}
                <span className="t-dot d-lg-none" aria-hidden />

                <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="h5 fw-bold mb-0 d-flex align-items-center"
                  >
                    <motion.span
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                      className="me-2"
                    >
                      <GraduationCap size={16} className="text-info" />
                    </motion.span>
                    {e.degree}
                  </motion.h3>

                  {e.badge && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.1 }}
                      className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50"
                    >
                      <Award size={14} className="me-1" />
                      {e.badge}
                    </motion.span>
                  )}
                </div>

                <div className="text-white-50 small mb-3 d-flex flex-wrap gap-3">
                  {e.school && (
                    <span><Building2 size={14} className="me-1" /> {e.school}</span>
                  )}
                  {e.period && (
                    <span><Calendar size={14} className="me-1" /> {e.period}</span>
                  )}
                  {e.location && (
                    <span><MapPin size={14} className="me-1" /> {e.location}</span>
                  )}
                </div>

                {Array.isArray(e.details) && e.details.length > 0 && (
                  <ul className="mb-0">
                    {e.details.map((d, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.05 * i }}
                        className="d-flex align-items-center"
                      >
                        <BookOpen size={14} className="me-2" /> {d}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .edu-scope .glass {
          background: rgba(15,23,42,0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        /* Shine sweep across card */
        .edu-scope .shine {
          position: absolute;
          top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          animation: edu-sweep 3.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes edu-sweep {
          0% { left: -120%; }
          55% { left: 140%; }
          100% { left: 140%; }
        }

        /* Small-screen timeline dot with soft pulse (hidden on lg) */
        .edu-scope .t-dot {
          position: absolute; left: -10px; top: 16px;
          width: 12px; height: 12px; border-radius: 50%;
          background: linear-gradient(135deg,#22d3ee,#6366f1);
          box-shadow: 0 0 0 4px rgba(99,102,241,0.25), 0 8px 18px rgba(0,0,0,0.35);
          animation: edu-pulse 2.2s ease-in-out infinite;
        }
        @keyframes edu-pulse {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        @media (min-width: 992px) { /* lg and up */
          .edu-scope .t-dot { display: none; }
        }
      `}</style>
    </section>
  );
}
