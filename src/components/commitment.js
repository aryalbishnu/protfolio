// MyCommitment.jsx
import { motion } from "framer-motion";
import {
  ShieldCheck, Rocket, Users, Clock, Target, BookOpen, Lock, Award
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.45, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.35, ease: "easeOut" } },
};

const bullets = [
  {
    icon: <ShieldCheck size={18} className="me-2 text-success" />,
    title: "Ownership & Reliability",
    desc: "I take full responsibility for outcomes—delivering what I promise and raising risks early.",
  },
  {
    icon: <Clock size={18} className="me-2 text-info" />,
    title: "Timely Delivery",
    desc: "Clear estimates, proactive updates, and on-time releases across sprints.",
  },
  {
    icon: <Users size={18} className="me-2 text-warning" />,
    title: "Open Communication",
    desc: "Transparent collaboration with teammates, stakeholders, and customers.",
  },
  {
    icon: <Target size={18} className="me-2 text-primary" />,
    title: "Quality & Impact",
    desc: "Tested, observable, secure code that moves business metrics—not just tickets.",
  },
  {
    icon: <BookOpen size={18} className="me-2 text-cyan" />,
    title: "Continuous Learning",
    desc: "Evolving skills in Java/Spring, Python, cloud, CI/CD, and low-code integrations.",
  },
  {
    icon: <Lock size={18} className="me-2 text-danger" />,
    title: "Security & Compliance",
    desc: "Following best practices for auth, data handling, and audits in regulated domains.",
  },
];

export default function MyCommitment({
  heading = "My Commitment to Your Company",
  subheading = "How I’ll show up every day to deliver value.",
  highlights = [
    { label: "On-time delivery", value: "95%+" },
    { label: "Production incidents", value: "0 Sev-1" },
    { label: "Test coverage", value: "↑ steadily" },
  ],
}) {
  return (
    <section id="commitment" className="commitment commit-scope bg-gradient-hero text-white py-5">
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
            {heading} <span className="text-info">&amp; Impact</span>
          </h2>
          <p className="text-white-50 mb-0">{subheading}</p>
        </motion.div>

        {/* Promise banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="glass p-4 p-md-5 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4 position-relative overflow-hidden"
        >
          <span className="shine" aria-hidden />
          <div className="d-flex align-items-center gap-2">
            <Rocket className="text-info" />
            <h3 className="h5 fw-bold mb-0">Promise</h3>
          </div>
          <p className="mb-0 text-white-75 small flex-grow-1 ms-md-3">
            Ship reliable, secure, and maintainable software—communicating clearly, balancing speed with quality,
            and focusing on business outcomes.
          </p>
          <span className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 d-flex align-items-center">
            <Award size={14} className="me-1" /> Value-Driven
          </span>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-3 mb-4"
        >
          {highlights.map((h, i) => (
            <div key={h.label + i} className="col-12 col-md-4 d-flex">
              <motion.div variants={card} whileHover={{ y: -4, scale: 1.01 }} className="glass p-3 w-100 text-center">
                <div className="fs-4 fw-bold">{h.value}</div>
                <div className="small text-white-50">{h.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Bullet cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4"
        >
          {bullets.map((b, i) => (
            <div key={b.title + i} className="col-12 col-md-6 col-lg-4 d-flex">
              <motion.div
                variants={card}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass p-4 h-100 w-100 position-relative overflow-hidden"
              >
                <span className="shine" aria-hidden />
                <div className="d-flex align-items-center mb-2">
                  {b.icon}
                  <h4 className="h6 fw-bold mb-0">{b.title}</h4>
                </div>
                <p className="mb-0 text-white-75 small">{b.desc}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
      .commitment {
  background: linear-gradient(to right, #0d6efd, #6610f2);
}
        .commit-scope .glass {
          background: rgba(15,23,42,0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .commit-scope .text-white-75 { color: rgba(255,255,255,0.78); }

        /* Shine sweep */
        .commit-scope .shine {
          position: absolute; top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-20deg);
          animation: commit-sweep 3.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes commit-sweep {
          0% { left: -120%; }
          55% { left: 140%; }
          100% { left: 140%; }
        }
      `}</style>
    </section>
  );
}
