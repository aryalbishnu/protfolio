// CareerObjective.jsx
import { motion } from "framer-motion";
import { Target, Rocket, Briefcase, Award, Lightbulb, ExternalLink, Download } from "lucide-react";
import resumePdf from "./text/Bishnu_Aryal_CV.pdf";


const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.45, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function CareerObjective({
  title = "Career Objective",
  objective = `To contribute as a backend/full-stack engineer building secure, reliable, and scalable platforms.
I aim to combine Java/Spring and Python expertise with cloud & CI/CD practices to deliver customer-focused outcomes,
while continuously learning and mentoring teammates.`,
  highlights = [
    { icon: <Briefcase size={16} />, label: "Domain", value: "Banking & Fintech" },
    { icon: <Award size={16} />, label: "Focus", value: "Quality & Reliability" },
    { icon: <Lightbulb size={16} />, label: "Growth", value: "Cloud & Automation" },
  ],
  actions = [
    { type: "view", href: "#", label: "View Resume", icon: <ExternalLink size={16} /> },
    { type: "download", href: "#", label: "Download PDF", icon: <Download size={16} /> },
  ],
}) {
  return (
    <section id="career-objective" className="career-objective co-scope bg-gradient-hero text-white py-5">
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
            {title} <span className="text-info">& Vision</span>
          </h2>
          <p className="text-white-50 mb-0">Where I’m headed and how I’ll add value.</p>
        </motion.div>

        {/* Main content: left text / right highlight card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4 align-items-stretch"
        >
          {/* Objective text */}
          <div className="col-12 col-lg-7 d-flex">
            <motion.div
              variants={card}
              whileHover={{ y: -4, scale: 1.005 }}
              className="glass p-4 p-md-5 w-100 position-relative overflow-hidden"
            >
              <span className="shine" aria-hidden />
              <div className="d-flex align-items-center mb-3">
                <Target className="text-info me-2" />
                <h3 className="h5 fw-bold mb-0">Objective</h3>
              </div>

              {/* Multi-line objective with \n support */}
              <p className="mb-0 text-white-75 lh-lg preline">{objective}</p>

              {/* Actions */}
              {actions?.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {actions.map((a, i) => (
                    a.type === "view" ? (
                      <motion.a
                        key={`${a.label}-${i}`}
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, scale: 1.02 }}
                        className={`btn btn-sm ${i === 0 ? "btn-light" : "btn-outline-light"} d-inline-flex align-items-center gap-2`}
                      >
                        {a.icon} {a.label}
                      </motion.a>
                    ) : (
                      <motion.a
                        key={`${a.label}-${i}`}
                        href={resumePdf}
                        download="Aryal Bishnu CV.pdf"   // don’t combine with target="_blank"
                        whileHover={{ y: -2, scale: 1.02 }}
                        className={`btn btn-sm ${i === 0 ? "btn-light" : "btn-outline-light"} d-inline-flex align-items-center gap-2`}
                      >
                        {a.icon} {a.label}
                      </motion.a>
                    )
                  ))}
                </div>
              )}
            </motion.div>

          </div>

          {/* Value highlights */}
          <div className="col-12 col-lg-5 d-flex">
            <motion.div
              variants={card}
              whileHover={{ y: -4, scale: 1.005 }}
              className="glass p-4 w-100 position-relative overflow-hidden"
            >
              <span className="shine" aria-hidden />
              <div className="d-flex align-items-center mb-3">
                <Rocket className="text-info me-2" />
                <h3 className="h6 fw-bold mb-0">How I’ll Contribute</h3>
              </div>

              <ul className="mb-3 list-unstyled d-grid gap-2">
                <li className="d-flex">
                  <span className="bullet me-2" />
                  Ship secure, observable services with clean, well-tested code.
                </li>
                <li className="d-flex">
                  <span className="bullet me-2" />
                  Improve performance & reliability with data-driven decisions.
                </li>
                <li className="d-flex">
                  <span className="bullet me-2" />
                  Collaborate openly; communicate risks early; mentor juniors.
                </li>
                <li className="d-flex">
                  <span className="bullet me-2" />
                  Automate CI/CD and release pipelines for faster value delivery.
                </li>
              </ul>

              {/* Small highlight tiles */}
              <div className="row g-2">
                {highlights.map((h, i) => (
                  <div key={h.label + i} className="col-12 col-sm-6 d-flex">
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="mini glass-mini p-3 w-100"
                    >
                      <div className="small text-white-50 d-flex align-items-center gap-2 mb-1">
                        {h.icon}
                        <span>{h.label}</span>
                      </div>
                      <div className="fw-bold">{h.value}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
      .career-objective {
  background: linear-gradient(to right, #0d6efd, #6610f2);
}
        .co-scope .glass {
          background: rgba(15,23,42,0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .co-scope .glass-mini {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 12px;
        }
        .co-scope .text-white-75 { color: rgba(255,255,255,0.78); }
        .co-scope .preline { white-space: pre-line; } /* supports \\n in text */

        /* Shine sweep */
        .co-scope .shine {
          position: absolute; top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-20deg);
          animation: co-sweep 3.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes co-sweep {
          0% { left: -120%; }
          55% { left: 140%; }
          100% { left: 140%; }
        }

        .co-scope .bullet {
          width: 10px; height: 10px; border-radius: 50%;
          margin-top: 6px;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          box-shadow: 0 0 0 4px rgba(99,102,241,0.18);
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
}
