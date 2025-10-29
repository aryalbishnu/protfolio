// Skills.jsx
import { motion } from "framer-motion";
import {
  Code2, Server, Database, Cloud, Wrench, GitBranch, Terminal, Workflow
} from "lucide-react";
import { createLucideIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// TODO: replace the placeholder paths below with the official SVG paths
export const Asteria = createLucideIcon("Asteria", [
  ["path", { d: "M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z", key: "p1" }], // placeholder
]);

export const DataSpider = createLucideIcon("DataSpider", [
  ["circle", { cx: "12", cy: "12", r: "2", key: "c" }],
  ["path", { d: "M12 4v4M12 16v4M4 12h4M16 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6", key: "p2" }],
]);

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, duration: 0.4 }
  },
};
const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const techPills = [
"Java", "Spring Boot", "Node.js", "Express", "Java Script", "React", "Python",
  "PostgreSQL", "MySQL", "MongoDB", "Oracle", "Thymeleaf", "Asteria", "DataSpider", "JP1",
  "AWS", "Docker", "Linux", "Git", "SVN"
];

const categories = [
  {
    title: "Languages",
    icon: <Code2 size={18} className="me-2 text-info" />,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript / TypeScript", level: 78 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={18} className="me-2 text-primary" />,
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={18} className="me-2 text-warning" />,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 65 },
      { name: "Oracle", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={18} className="me-2 text-info" />,
    skills: [
      { name: "Docker", level: 76 },
      { name: "Linux", level: 60 },
      { name: "AWS (EC2/S3/RDS)", level: 40 },
      { name: "CI/CD (GitHub Actions/Jenkins)", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={18} className="me-2 text-success" />,
    skills: [
      { name: "Git & GitFlow", level: 84, icon: <GitBranch size={16} className="me-1" /> },
      { name: "Terminal", level: 65, icon: <Terminal size={16} className="me-1" /> },
    ],
  },
  {
    title: "Low Code",
    icon: <Workflow size={18} className="me-2 text-success" />,
    skills: [
      { name: "Data Spider", level: 82, icon: <DataSpider size={16} className="me-1" /> },
      { name: "Asteria", level: 75, icon: <Asteria size={16} className="me-1" /> },
    ],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  // Get localized text
  const text = {
    en: {
      title: "Skills",
      subtit: "Technologies",
      subtitle: "A snapshot of what I use to build and ship backend systems."
    },
    jp: {
      title: "スキル",
      subtit: "テクノロジー",
      subtitle: "バックエンド システムの構築と出荷に使用しているもののスナップショットです。"
    }
  };

  const { title, subtit, subtitle } = text[language] || text.en;
  return (
    <section id="skills" className="skills skills-scope bg-gradient-hero text-white py-4">
      <div className="container">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold mb-2">
              {title} <span className="text-info">&amp; {subtit}</span>
            </h2>
            <p className="text-white-50 mb-0">{subtitle}</p>
          </div>

          {/* Tech pills */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
            {techPills.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
                whileHover={{ y: -2, scale: 1.04 }}
                className="tech-pill"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Category cards */}
          <div className="row g-4">
            {categories.map((cat) => (
              <div key={cat.title} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  variants={card}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="skill-card glass p-4 h-100"
                >
                  <div className="d-flex align-items-center mb-3">
                    {cat.icon}
                    <h3 className="h5 fw-bold mb-0">{cat.title}</h3>
                  </div>

                  <div className="d-grid gap-3">
                    {cat.skills.map(({ name, level, icon }) => (
                      <div key={name}>
                        <div className="d-flex justify-content-between align-items-center mb-1 small">
                          <div className="d-flex align-items-center">
                            {icon}
                            <span className="fw-semibold">{name}</span>
                          </div>
                          <span className="text-white-50">{level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="skill-fill"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        /* Glass card styling (scoped) */
        .skills-scope .skill-card.glass {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        /* Tech pills */
        .skills-scope .tech-pill {
          position: relative;
          padding: 8px 14px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 0.9rem;
          color: #fff;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow: hidden;
        }

        /* Skill progress bar */
        .skills-scope .skill-bar {
          position: relative;
          height: 10px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.12);
          overflow: hidden;
        }
        .skills-scope .skill-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          border-radius: 9999px;
          background: linear-gradient(90deg, #22d3ee 0%, #6366f1 50%, #8b5cf6 100%);
          box-shadow: 0 0 18px rgba(99,102,241,0.45);
        }
      `}</style>
    </section>
  );
}
