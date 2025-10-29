// MyCommitment.jsx
import { motion } from "framer-motion";
import {
  ShieldCheck, Rocket, Users, Clock, Target, BookOpen, Lock, Award
} from "lucide-react";
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
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.35, ease: "easeOut" } },
};

export default function MyCommitment() {
  const { language } = useLanguage();

  // Get localized text
  const text = {
    en: {
      heading: "My Commitment to Your Company",
      impact: "Impact",
      subheading: "How I'll show up every day to deliver value.",
      promiseTitle: "Promise",
      promiseText: "Ship reliable, secure, and maintainable software—communicating clearly, balancing speed with quality, and focusing on business outcomes.",
      valueDriven: "Value-Driven",
      highlights: [
        { label: "On-time delivery", value: "95%+" },
        { label: "Production incidents", value: "0 Sev-1" },
        { label: "Test coverage", value: "↑ steadily" },
      ],
      bullets: [
        {
          title: "Ownership & Reliability",
          desc: "I take full responsibility for outcomes—delivering what I promise and raising risks early.",
        },
        {
          title: "Timely Delivery",
          desc: "Clear estimates, proactive updates, and on-time releases across sprints.",
        },
        {
          title: "Open Communication",
          desc: "Transparent collaboration with teammates, stakeholders, and customers.",
        },
        {
          title: "Quality & Impact",
          desc: "Tested, observable, secure code that moves business metrics—not just tickets.",
        },
        {
          title: "Continuous Learning",
          desc: "Evolving skills in Java/Spring, Python, cloud, CI/CD, and low-code integrations.",
        },
        {
          title: "Security & Compliance",
          desc: "Following best practices for auth, data handling, and audits in regulated domains.",
        },
      ]
    },
    jp: {
      heading: "あなたの会社へのコミットメント",
      impact: "影響",
      subheading: "価値を提供するために毎日どのように取り組むか",
      promiseTitle: "約束",
      promiseText: "信頼性が高く、安全で、保守可能なソフトウェアを提供します。明確なコミュニケーション、スピードと品質のバランス、そしてビジネス成果に焦点を当てます。",
      valueDriven: "価値駆動",
      highlights: [
        { label: "オンタイム配信", value: "95%+" },
        { label: "本番インシデント", value: "0 Sev-1" },
        { label: "テストカバレッジ", value: "↑ 着実に" },
      ],
      bullets: [
        {
          title: "オーナーシップと信頼性",
          desc: "結果に対する完全な責任を負い、約束を守り、リスクを早期に提起します。",
        },
        {
          title: "タイムリーな配信",
          desc: "明確な見積もり、積極的な更新、スプリント全体でのオンタイムリリース。",
        },
        {
          title: "オープンなコミュニケーション",
          desc: "チームメイト、ステークホルダー、顧客との透明なコラボレーション。",
        },
        {
          title: "品質と影響",
          desc: "テスト済み、観察可能、安全なコードでビジネス指標を動かす—単なるチケットではありません。",
        },
        {
          title: "継続的な学習",
          desc: "Java/Spring、Python、クラウド、CI/CD、ローコード統合におけるスキルの進化。",
        },
        {
          title: "セキュリティとコンプライアンス",
          desc: "規制された領域での認証、データ処理、監査のベストプラクティスに従います。",
        },
      ]
    }
  };

  const { heading, impact, subheading, promiseTitle, promiseText, valueDriven, highlights, bullets: bulletData } = text[language] || text.en;

  const bullets = [
    {
      icon: <ShieldCheck size={18} className="me-2 text-success" />,
      ...bulletData[0]
    },
    {
      icon: <Clock size={18} className="me-2 text-info" />,
      ...bulletData[1]
    },
    {
      icon: <Users size={18} className="me-2 text-warning" />,
      ...bulletData[2]
    },
    {
      icon: <Target size={18} className="me-2 text-primary" />,
      ...bulletData[3]
    },
    {
      icon: <BookOpen size={18} className="me-2 text-cyan" />,
      ...bulletData[4]
    },
    {
      icon: <Lock size={18} className="me-2 text-danger" />,
      ...bulletData[5]
    },
  ];
  return (
    <section id="commitment" className="commitment commit-scope bg-gradient-hero text-white py-4">
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
            {heading} <span className="text-info">&amp; {impact}</span>
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
          <div className="d-flex align-items-center gap-2">
            <Rocket className="text-info" />
            <h3 className="h5 fw-bold mb-0">{promiseTitle}</h3>
          </div>
          <p className="mb-0 text-white-75 small flex-grow-1 ms-md-3">
            {promiseText}
          </p>
          <span className="badge bg-info bg-opacity-25 text-info border border-info border-opacity-50 d-flex align-items-center">
            <Award size={14} className="me-1" /> {valueDriven}
          </span>
        </motion.div>

        {/* Metrics */}
        <motion.div
          key={`highlights-${language}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="row g-3 mb-4"
        >
          {highlights.map((h, i) => (
            <div key={`${language}-${h.label}-${i}`} className="col-12 col-md-4 d-flex">
              <motion.div variants={card} whileHover={{ y: -4, scale: 1.01 }} className="glass p-3 w-100 text-center">
                <div className="fs-4 fw-bold">{h.value}</div>
                <div className="small text-white-50">{h.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Bullet cards */}
        <motion.div
          key={`bullets-${language}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="row g-4"
        >
          {bullets.map((b, i) => (
            <div key={`${language}-${b.title}-${i}`} className="col-12 col-md-6 col-lg-4 d-flex">
              <motion.div
                variants={card}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass p-4 h-100 w-100 position-relative overflow-hidden"
              >
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
      `}</style>
    </section>
  );
}
