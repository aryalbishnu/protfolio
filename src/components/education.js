// Education.jsx
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Building2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import allEducation from "./text/education.json";

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

export default function Education() {
  const { language } = useLanguage();

  // Get education data based on language
  const items = allEducation[language] || allEducation.en;

  // Get localized text
  const text = {
    en: {
      title: "Education",
      subtit: "Training",
      subtitle: "Formal studies and ongoing learning."
    },
    jp: {
      title: "学歴",
      subtit: "トレーニング",
      subtitle: "正規教育と継続的な学習"
    }
  };

  const { title, subtit, subtitle } = text[language] || text.en;

  return (
    <section id="education" className="education edu-scope bg-gradient-hero text-white py-4">
      <div className="container" key={language}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4"
        >
          <h2 className="display-6 fw-bold mb-2">
            {title} <span className="text-info">&amp; {subtit}</span>
          </h2>
          <p className="text-white-50 mb-0">{subtitle}</p>
        </motion.div>

        {/* Grid (side-by-side on lg) */}
        <motion.div
          key={`edu-${language}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="row g-4"
        >
          {items.map((e, idx) => (
            <div key={`${language}-${e.degree}-${idx}`} className="col-12 col-lg-6 d-flex">
              <motion.div
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass t-card p-3 h-100 w-100 position-relative overflow-hidden"
              >

                <div className="d-flex align-items-start gap-2 mb-2">
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <GraduationCap size={18} className="text-info me-2 flex-shrink-0" />
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      className="h5 fw-bold mb-0"
                    >
                      {e.degree}
                    </motion.h3>
                  </div>
                  {e.badge && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.1 }}
                      className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 flex-shrink-0 align-self-start"
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

        /* Ensure badge stays on right side */
        .edu-scope .min-width-0 {
          min-width: 0;
        }

        /* Badge positioning */
        .edu-scope .badge {
          white-space: nowrap;
          margin-top: 2px;
        }

        /* Responsive badge adjustments */
        @media (max-width: 575.98px) {
          .edu-scope .badge {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
