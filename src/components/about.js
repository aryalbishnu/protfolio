import { useEffect, useState } from "react";
import { Briefcase, FolderOpen, Award } from "lucide-react";
import profilePic from "../images/test.jpg";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function About() {

      const { language } = useLanguage();
        // Get localized text
        const text = {
          en: {
            title: "About",
            subtitle: "Me",
            text1: "I’m a Java Developer with",
            text2: "+ years of experience",
            text3: "building backend systems. Passionate about ",
            text4: "automation and cloud technologies",
            text5: ", aiming to grow into a Python full-stack developer. ",
            text6: "Currently at eSTACK Corporation,",
            text7: " contributing to projects in banking, credit card systems, and management accounting.",
            certificate: "Certificates",
            project: "Projects",
            year: "Years"
          },
          jp: {
            title: "私に",
            subtitle: "ついて",
            text1: "私は、バックエンドシステムの開発に",
            text2: "年以上の経験を持つ",
            text3: "Java開発者です。",
            text4: "自動化やクラウド技術に情熱を持ち、",
            text5: "将来的にはPythonのフルスタック開発者として成長することを目指しています。",
            text6: "現在は eSTACK株式会社 にて、",
            text7: "銀行、クレジットカードシステム、管理会計などのプロジェクトに携わっています。",
            certificate: "証明書",
            project: "プロジェクト",
            year: "年数"
          }
        };

        const { title, subtitle, text1, text2, text3, text4, text5, text6, text7, certificate, project, year } = text[language] || text.en;

    // target values
    const targetValues = {
        years: 4,
        projects: 10,
        certificates: 5,
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.4, ease: "easeOut" },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 20, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    };

    // state for counters
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [certificates, setCertificates] = useState(0);

    // increment effect
 useEffect(() => {
  const duration = 1500;      // ms
  const stepTime = 30;        // ms
  const steps = duration / stepTime;

  let count = 0;
  const interval = setInterval(() => {
    count++;
    setYears(Math.min(Math.round((targetValues.years / steps) * count), targetValues.years));
    setProjects(Math.min(Math.round((targetValues.projects / steps) * count), targetValues.projects));
    setCertificates(Math.min(Math.round((targetValues.certificates / steps) * count), targetValues.certificates));

    if (count >= steps) clearInterval(interval);
  }, stepTime);

  return () => clearInterval(interval);
// ✅ include the values you use
}, [targetValues.years, targetValues.projects, targetValues.certificates]);


    return (
        <section id="about" className="about bg-gradient-hero text-white py-4">
            <div className="container">
                
                <div className="text-center">
                    <h2 className="display-6 fw-bold mb-2">
            { title } <span className="text-info"> { subtitle }</span>
          </h2>
                        </div>
                <div className="row align-items-center gy-4">

                    {/* Photo */}
                    <div className="col-12 col-md-5 text-center">
                        <img
                            src={profilePic}
                            alt="Bishnu Aryal"
                            className="img-fluid shadow border-light"
                            style={{ width: "520px", height: "300px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Text */}
                    <div className="col-12 col-md-7 text-center text-md-start">
                        
                        <p className="lead mb-4">
                            { text1 } 
                            <strong  className="text-info"> { targetValues.years }{ text2 }</strong> { text3 }
                            <strong className="text-info">{ text4 }</strong>
                            { text5 } <strong className="text-info"> { text6 } </strong> { text7 }
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="d-flex flex-wrap gap-4 ">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="d-flex flex-wrap justify-content-center gap-4 mx-auto"
                        >
                            {/* Years */}
                            <motion.div
                                variants={card}
                                whileHover={{ y: -6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="position-relative stat-card bg-dark bg-opacity-50 text-white rounded p-3 d-flex flex-column align-items-center shadow"
                                style={{ minWidth: 240 }}
                                id="stat-card-accent"
                                aria-label="Years of experience"
                            >
                                <div className="fs-3 fw-bold fancy-number">{years}+</div>
                                <div className="d-flex align-items-center small">
                                    <Briefcase className="me-2 text-info" />
                                    { year }
                                </div>
                            </motion.div>

                            {/* Projects */}
                            <motion.div
                                variants={card}
                                whileHover={{ y: -6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="position-relative stat-card bg-dark bg-opacity-50 text-white rounded p-3 d-flex flex-column align-items-center shadow"
                                style={{ minWidth: 240 }}
                                id="stat-card-accent"
                                aria-label="Projects"
                            >
                                <div className="fs-3 fw-bold fancy-number">{projects}+</div>
                                <div className="d-flex align-items-center small">
                                    <FolderOpen className="me-2 text-success" />
                                    { project }
                                </div>
                            </motion.div>

                            {/* Certificates */}
                            <motion.div
                                variants={card}
                                whileHover={{ y: -6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="position-relative stat-card bg-dark bg-opacity-50 text-white rounded p-3 d-flex flex-column align-items-center shadow"
                                style={{ minWidth: 240,
                                 }}
                                id="stat-card-accent"
                                aria-label="Certificates"
                            >
                                <div className="fs-3 fw-bold fancy-number">{certificates}+</div>
                                <div className="d-flex align-items-center small">
                                    <Award className="me-2 text-warning" />
                                    { certificate }
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
