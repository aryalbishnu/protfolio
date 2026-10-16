// Events.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import awsSummitPic from "../images/aws-summit-japan-2026.jpg";

export default function Events() {
  const { language } = useLanguage();

  // Get localized text
  const text = {
    en: {
      title: "Events",
      subtit: "Community",
      subtitle: "Learning from the community and staying close to the latest tech.",
      eventTitle: "AWS Summit Japan 2026",
      date: "June 25–26, 2026",
      location: "Tokyo, Japan",
      role: "Attendee",
      description: "Attended Japan's largest AWS event, joining sessions on cloud architecture, serverless development, and generative AI on AWS."
    },
    jp: {
      title: "イベント",
      subtit: "コミュニティ",
      subtitle: "コミュニティから学び、最新技術をキャッチアップしています。",
      eventTitle: "AWS Summit Japan 2026",
      date: "2026年6月25日〜26日",
      location: "東京、日本",
      role: "参加者",
      description: "日本最大級のAWSイベントに参加し、クラウドアーキテクチャ、サーバーレス開発、AWS上の生成AIに関するセッションを受講しました。"
    }
  };

  const t = text[language] || text.en;

  return (
    <section id="events" className="events event-scope bg-gradient-hero text-white py-4">
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
            {t.title} <span className="text-info">&amp; {t.subtit}</span>
          </h2>
          <p className="text-white-50 mb-0">{t.subtitle}</p>
        </motion.div>

        {/* Event card */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass p-3 p-md-4"
        >
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-5">
              <img
                src={awsSummitPic}
                alt={t.eventTitle}
                className="event-img w-100 shadow"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-md-7">
              <h3 className="h4 fw-bold mb-3">{t.eventTitle}</h3>
              <div className="text-white-50 small d-flex flex-wrap gap-3 mb-3">
                <span><Calendar size={14} className="me-1" /> {t.date}</span>
                <span><MapPin size={14} className="me-1" /> {t.location}</span>
                <span><Users size={14} className="me-1" /> {t.role}</span>
              </div>
              <p className="text-white-75 mb-3">{t.description}</p>
              <div className="d-flex flex-wrap gap-2">
                {["AWS", "Cloud", "Serverless", "Generative AI"].map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .event-scope .glass {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 16px;
          color: #fff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.35);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .event-scope .event-img {
          border-radius: 12px;
          max-height: 420px;
          object-fit: cover;
        }
        .event-scope .text-white-75 { color: rgba(255,255,255,0.78); }
        .event-scope .chip {
          padding: 6px 10px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          font-size: .85rem; color:#fff;
        }
      `}</style>
    </section>
  );
}
