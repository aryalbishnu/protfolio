import { useEffect, useState } from "react";
import profilePic from "../images/aryal.jpg";

function Hero() {
  const roles = ["Backend Developer", "Full-Stack Engineer", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

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
              Hi, I’m Bishnu Aryal
            </h1>
            <h2 className="h4 fw-light mb-3">{roles[currentRole]}</h2>
            <p className="lead mb-4 mb-md-5">
              I build scalable backends, automate workflows, and create smooth user
              experiences with modern technologies.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <a href="#projects" className="btn btn-light btn-lg shadow">
                🚀 View Projects
              </a>
              <a
                href="mailto:bishnu.aryal@estack.co.jp"
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
