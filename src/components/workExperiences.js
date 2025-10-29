// WorkExperience.jsx
import { motion } from "framer-motion";
import {
  Briefcase, Building2, Calendar, MapPin, Award, Sparkles, GitBranch, Server, Database
} from "lucide-react";
import workExperience from "./text/workExperience.json";
import { useLanguage } from "../contexts/LanguageContext";

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.45, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function WorkExperience() {

    const { language } = useLanguage();

    // Get work experience data based on language
    const items = workExperience[language] || workExperience.en;
  
    // Get localized text
    const text = {
      en: {
        title: "Professional Work Experience",
        subtit: "Training",
        subtitle: "Impact-focused roles, shipped with quality and speed.",
        achievement: "Key Achievements",
      },
      jp: {
        title: "専門的な職歴",
        subtit: "トレーニング",
        subtitle: "成果に重きを置き、品質とスピードを両立して成果物を提供しています。",
        achievement: "主な成果",
      }
    };
  
    const { title, subtit, subtitle, achievement } = text[language] || text.en;
  return (
    <section id="experience" className="experience exp-scope bg-gradient-hero text-white py-4">
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
            {title} <span className="text-info">& { subtit }</span>
          </h2>
          <p className="text-white-50 mb-0">{subtitle}</p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={`exp-${language}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="row g-4"
        >
          {items.map((job, idx) => (
            <div key={`${language}-${job.role}-${idx}`} className="col-12 col-lg-6 d-flex">
              <motion.div
                variants={card}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass p-4 h-100 w-100 position-relative overflow-hidden"
              >

                {/* Header */}
                <div className="d-flex align-items-start gap-2 mb-2">
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <Briefcase size={18} className="text-info me-2 flex-shrink-0" />
                    <h3 className="h5 fw-bold mb-0 text-truncate-multiline">{job.role}</h3>
                  </div>
                  {job.type && (
                    <span className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 flex-shrink-0 align-self-start">
                      <Sparkles size={14} className="me-1" />
                      {job.type}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="text-white-50 small d-flex flex-wrap gap-3 mt-2">
                  <span><Building2 size={14} className="me-1" /> {job.company}</span>
                  <span><Calendar size={14} className="me-1" /> {job.period}</span>
                  <span><MapPin size={14} className="me-1" /> {job.location}</span>
                </div>

                {/* Summary */}
                {job.summary && <p className="mt-3 mb-3 text-white-75">{job.summary}</p>}

                {/* KPIs mini tiles */}
                {job.kpis?.length > 0 && (
                  <div className="row g-2 mb-3">
                    {job.kpis.map((k, i) => (
                      <div key={k.label + i} className="col-4">
                        <div className="mini glass-mini p-2 text-center h-100">
                          <div className="small text-white-50">{k.value}</div>
                          <div className="fw-bold">{k.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements */}
                {job.achievements?.length > 0 && (
                  <>
                    <h4 className="h6 fw-bold d-flex align-items-center mb-2">
                      <Award size={16} className="me-2 text-info" /> { achievement }
                    </h4>
                    <ul className="mb-3 list-unstyled d-grid gap-2">
                      {job.achievements.map((a, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25, delay: 0.05 * i }}
                          className="d-flex"
                        >
                          <span className="bullet me-2" />
                          <span>{a}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Tech stack chips */}
                {job.stack?.length > 0 && (
                  <div className="d-flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span key={t} className="chip">
                        {iconForTech(t)} {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
      .experience {
  background: linear-gradient(to right, #0d6efd, #6610f2);
}
        .exp-scope .glass {
          background: rgba(15,23,42,0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .exp-scope .glass-mini {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 12px;
        }
        .exp-scope .text-white-75 { color: rgba(255,255,255,0.78); }

        .exp-scope .chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 10px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          font-size: .85rem; color:#fff;
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        }

        .exp-scope .bullet {
          width: 10px; height: 10px; border-radius: 50%;
          margin-top: 6px; flex: 0 0 auto;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          box-shadow: 0 0 0 4px rgba(99,102,241,0.18);
        }

        /* Ensure badge stays on right side */
        .exp-scope .min-width-0 {
          min-width: 0;
        }

        .exp-scope .text-truncate-multiline {
          overflow-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
        }

        /* Badge positioning */
        .exp-scope .badge {
          white-space: nowrap;
          margin-top: 2px;
        }

        /* Responsive badge adjustments */
        @media (max-width: 575.98px) {
          .exp-scope .badge {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}

/** Small helper to show a tiny icon for common techs */
function iconForTech(t) {
  const key = t.toLowerCase();
  if (key.includes("spring") || key.includes("java")) return <Server size={14} />;
  if (key.includes("sql") || key.includes("mongo") || key.includes("postgres") || key.includes("mysql")) return <Database size={14} />;
  if (key.includes("git")) return <GitBranch size={14} />;
  return <Sparkles size={14} />;
}
