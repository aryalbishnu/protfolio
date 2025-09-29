// Certificates.jsx
import { motion } from "framer-motion";
import {
  Award, BadgeCheck, Calendar, Building2, Link2, ExternalLink
} from "lucide-react";
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

const DEFAULT_CERTS = [
  {
    title: "Driver's License",
    issuer: "National Police Agency",
    date: "April 2022",
    verifyUrl: "#",
    skills: ["Car"]
  },
    {
    title: "Japanese Language Test N2",
    issuer: "- Japan Educational Exchanges and Services",
    date: "Dec 2020",
    verifyUrl: "#",
    skills: ["Reading", "Writing", "Listening"]
  },
  {
    title: "Java programming Level 3",
    issuer: "Certify Information Processing Skills Certification Committee",
    date: "Feb 2020",
    verifyUrl: "#",
    skills: ["Java", "Java syntax and structure", "classes and methods", " Object-Oriented Concepts"]
  },
  {
    title: "ICT Proficiency Test Level 4",
    issuer: "ICT Proficiency Certification Association",
    date: "Jan 2020",
    verifyUrl: "#",
    skills: ["Hardware", "software", "Operating Systems"]
  },
];

export default function Certificates({ items = allCertificates }) {
  return (
    <section id="certificates" className="certificates cert-scope bg-gradient-hero text-white py-5">
      <div className="container">
        {/* Heading with entrance */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4"
        >
          <h2 className="display-6 fw-bold mb-2">
            Certificates <span className="text-info">&amp; Badges</span>
          </h2>
          <p className="text-white-50 mb-0">Proof of skills and continuous learning.</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4"
        >
          {items.map((c, i) => (
            <div key={c.title + i} className="col-12 col-md-6 col-lg-4 d-flex">
              <motion.div
                variants={card}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="cert-card glass p-4 h-100 w-100 position-relative overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="shine" aria-hidden />

                {/* Corner ribbon (animated in) */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="ribbon"
                >
                  <BadgeCheck size={14} className="me-1" /> Verified
                </motion.span>

                <div className="d-flex align-items-start justify-content-between mb-2">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="h5 fw-bold mb-0 d-flex align-items-center"
                  >
                    <Award size={18} className="me-2 text-info" />
                    {c.title}
                  </motion.h3>
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

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="d-flex gap-2"
                >
                  <a
                    href={c.verifyUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-light d-inline-flex align-items-center gap-2"
                  >
                    <ExternalLink size={16} /> Verify
                  </a>
                  <a
                    href={c.verifyUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-2"
                  >
                    <Link2 size={16} /> View
                  </a>
                </motion.div>
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

        /* Shine sweep across card */
        .cert-scope .shine {
          position: absolute;
          top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          animation: cert-sweep 3.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes cert-sweep {
          0% { left: -120%; }
          55% { left: 140%; }
          100% { left: 140%; }
        }

        .cert-scope .chip {
          padding: 6px 10px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          font-size: .85rem; color:#fff;
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        }

        .cert-scope .ribbon {
          position: absolute; top: 12px; right: 12px;
          font-size: .75rem; padding: 6px 10px;
          border-radius: 9999px; color: #e6fbff;
          background: rgba(34,211,238,0.18);
          border: 1px solid rgba(34,211,238,0.35);
          display: inline-flex; align-items: center;
        }
      `}</style>
    </section>
  );
}
