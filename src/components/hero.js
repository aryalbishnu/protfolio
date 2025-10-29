import { useEffect, useState } from "react";
import profilePic from "../images/aryal.jpg";
import { useLanguage } from "../contexts/LanguageContext";

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const { language } = useLanguage();
    // Get localized text
    const text = {
      en: {
        title: "Hi, I'm Bishnu Aryal",
        roles: ["Backend Developer", "Full-Stack Engineer", "Tech Enthusiast"],
        subtitle: "I build scalable backends, automate workflows,\n and create smooth user experiences with modern technologies."
      },
      jp: {
        title: "こんにちは、アリヤル・ビシュヌです",
        roles: ["バックエンド開発者", "フルスタックエンジニア", "テクノロジー愛好家"],
        subtitle: "最新の技術を活用して、スケーラブルなバックエンドを構築し、\n ワークフローを自動化し、快適なユーザー体験を実現しています。"
      }
    };

    const { title, roles, subtitle } = text[language] || text.en;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRole((p) => (p + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section id="hero" className="hero d-flex align-items-center text-white">
      <div className="container py-5">
        <div className="row align-items-center gy-4">

            {/* Photo */}
          <div className="col-12 col-md-5 text-center">
            <img
              src={profilePic}
              alt="Bishnu Aryal"
              className="avatar img-fluid rounded-circle shadow border border-3 border-white"
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
            />
          </div>
          
          {/* Text */}
          <div className="col-12 col-md-7 text-center text-md-start">
            <h1 className="display-5 display-md-4 fw-bold mb-2">
              { title }
            </h1>
            <h2 className="h4 fw-light mb-3">{roles[currentRole]}</h2>
            <p className="lead mb-4 mb-md-5"  style={{ whiteSpace: "pre-line" }}>
              {subtitle}
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <a href="#experience" className="btn btn-light btn-lg shadow">
                🚀 View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg shadow"
              >
                📩 Contact Me
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
