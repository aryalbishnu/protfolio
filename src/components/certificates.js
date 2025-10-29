// Certificates.jsx
import { motion } from "framer-motion";
import {
  Award, BadgeCheck, Calendar, Building2, Link2, ExternalLink
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import allCertificates from "./text/certificate.json";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.45, ease: "easeOut" }
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Certificates() {
  const { language } = useLanguage();

  // Get certificates based on language
  const items = allCertificates[language] || allCertificates.en;

  // Get localized text
  const text = {
    en: {
      title: "Certificates",
      subtit: "Badges",
      subtitle: "Proof of skills and continuous learning."
    },
    jp: {
      title: "証明書",
      subtit: "バッジ",
      subtitle: "スキルと継続的な学習の証明"
    }
  };

  const { title, subtit, subtitle } = text[language] || text.en;

  return (
    <section id="certificates" className="certificates cert-scope bg-gradient-hero text-white py-4">
      <div className="container" key={language}>
        {/* Heading with entrance */}
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

        {/* Grid */}
        <motion.div
          key={`certs-${language}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="row g-4"
        >
          {items.map((c, i) => (
            <div key={`${language}-${c.title}-${i}`} className="col-12 col-md-6 col-lg-4 d-flex">
              <motion.div
                variants={card}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="cert-card glass p-4 h-100 w-100 position-relative overflow-hidden"
              >

                {/* Header */}
                <div className="d-flex align-items-start gap-2 mb-2">
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <Award size={18} className="text-info me-2 flex-shrink-0" />
                    <h3 className="h5 fw-bold mb-0 text-truncate-multiline">{c.title}</h3>
                  </div>
                  <span className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 flex-shrink-0 align-self-start">
                    <BadgeCheck size={14} className="me-1" />
                    Verified
                  </span>
                </div>

                <div className="text-white-50 small mb-3 d-flex flex-wrap gap-3">
                  <span><Building2 size={14} className="me-1" /> {c.issuer}</span>
                  <span><Calendar size={14} className="me-1" /> {c.date}</span>
                </div>

                {/* Skills chips (staggered) */}
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {c.skills?.map((s, idx2) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: idx2 * 0.05 }}
                      className="chip"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .cert-scope .glass {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }

        .cert-scope .chip {
          padding: 6px 10px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          font-size: .85rem; color:#fff;
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        }

        /* Ensure badge stays on right side */
        .cert-scope .min-width-0 {
          min-width: 0;
        }

        .cert-scope .text-truncate-multiline {
          overflow-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
        }

        /* Badge positioning */
        .cert-scope .badge {
          white-space: nowrap;
          margin-top: 2px;
        }

        /* Responsive badge adjustments */
        @media (max-width: 575.98px) {
          .cert-scope .badge {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
