// Events.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import awsSummitPic from "../images/aws-summit-japan-2026.jpg";
import googleCloudNextPic from "../images/google-cloud-next-tokyo.jpg";

export default function Events() {
  const { language } = useLanguage();

  // Get localized text
  const text = {
    en: {
      title: "Events",
      subtit: "Community",
      subtitle: "Learning from the community and staying close to the latest tech.",
      events: [
        {
          image: awsSummitPic,
          eventTitle: "AWS Summit Japan 2026",
          date: "June 25–26, 2026",
          location: "Tokyo, Japan",
          role: "Attendee",
          description: "Attended Japan's largest AWS event, joining sessions on cloud architecture, serverless development, and generative AI on AWS.",
          tags: ["AWS", "Cloud", "Serverless", "Generative AI"]
        },
        {
          image: googleCloudNextPic,
          eventTitle: "Google Cloud Next Tokyo",
          date: "August 5–6, 2025",
          location: "Tokyo Big Sight, Japan",
          role: "Attendee",
          description: "Attended Google Cloud's flagship event in Japan, joining sessions on Gemini adoption in the enterprise, AI agents, data analytics, and real-world case studies of rolling out generative AI across organizations.",
          tags: ["Google Cloud", "Gemini", "AI Agents", "Data Analytics"]
        }
      ]
    },
    jp: {
      title: "イベント",
      subtit: "コミュニティ",
      subtitle: "コミュニティから学び、最新技術をキャッチアップしています。",
      events: [
        {
          image: awsSummitPic,
          eventTitle: "AWS Summit Japan 2026",
          date: "2026年6月25日〜26日",
          location: "東京、日本",
          role: "参加者",
          description: "日本最大級のAWSイベントに参加し、クラウドアーキテクチャ、サーバーレス開発、AWS上の生成AIに関するセッションを受講しました。",
          tags: ["AWS", "Cloud", "Serverless", "Generative AI"]
        },
        {
          image: googleCloudNextPic,
          eventTitle: "Google Cloud Next Tokyo",
          date: "2025年8月5日〜6日",
          location: "東京ビッグサイト、日本",
          role: "参加者",
          description: "Google Cloud の国内最大級イベントに参加し、企業での Gemini 活用、AI エージェント、データ分析、生成AIの全社導入事例に関するセッションを受講しました。",
          tags: ["Google Cloud", "Gemini", "AI Agents", "Data Analytics"]
        }
      ]
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

        {/* Event cards */}
        <div className="d-flex flex-column gap-4">
          {t.events.map((ev) => (
            <motion.div
              key={ev.eventTitle}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass p-3 p-md-4"
            >
              <div className="row g-4 align-items-center">
                <div className="col-12 col-md-5">
                  <img
                    src={ev.image}
                    alt={ev.eventTitle}
                    className="event-img w-100 shadow"
                    loading="lazy"
                  />
                </div>
                <div className="col-12 col-md-7">
                  <h3 className="h4 fw-bold mb-3">{ev.eventTitle}</h3>
                  <div className="text-white-50 small d-flex flex-wrap gap-3 mb-3">
                    <span><Calendar size={14} className="me-1" /> {ev.date}</span>
                    <span><MapPin size={14} className="me-1" /> {ev.location}</span>
                    <span><Users size={14} className="me-1" /> {ev.role}</span>
                  </div>
                  <p className="text-white-75 mb-3">{ev.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {ev.tags.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
