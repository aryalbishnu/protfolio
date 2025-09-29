import { useEffect, useState } from "react";
import { Briefcase, FolderOpen, Award } from "lucide-react";
import profilePic from "../images/test.jpg";
import { motion } from "framer-motion";

function About() {
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
        <section id="about" className="about bg-gradient-hero text-white py-5">
            <div className="container">
                
                <div className="text-center">
                    <h2 className="display-6 fw-bold mb-2">
            About <span className="text-info"> Me</span>
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
                            I’m a <strong className="text-info">Java Developer</strong> with{" "}
                            <strong>{targetValues.years}+ years</strong> of experience building backend systems.
                            Passionate about <strong className="text-info">automation</strong> and{" "}
                            <strong className="text-info">cloud technologies</strong>, aiming to
                            grow into a <strong>Python full-stack developer</strong>. Currently at eSTACK Corporation, contributing to projects in banking, credit card systems, and management accounting.
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
                                {/* Glow ring */}
                                <span className="glow-ring" />
                                {/* Shine sweep */}
                                <span className="shine" />
                                <div className="fs-3 fw-bold fancy-number">{years}+</div>
                                <div className="d-flex align-items-center small">
                                    <Briefcase className="me-2 text-info" />
                                    Years
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
                                <span className="glow-ring" />
                                <span className="shine" />
                                <div className="fs-3 fw-bold fancy-number">{projects}+</div>
                                <div className="d-flex align-items-center small">
                                    <FolderOpen className="me-2 text-success" />
                                    Projects
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
                                <span className="glow-ring" />
                                <span className="shine" />
                                <div className="fs-3 fw-bold fancy-number">{certificates}+</div>
                                <div className="d-flex align-items-center small">
                                    <Award className="me-2 text-warning" />
                                    Certificates
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
