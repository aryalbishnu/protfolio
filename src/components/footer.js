// Footer.jsx
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-scope text-white pt-5">
      <div className="container">
        {/* Social buttons row (centered) */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-wrap justify-content-center gap-2 text-center">
              <a
                className="btn btn-sm btn-light d-inline-flex align-items-center gap-2"
                href="mailto:ariyalbishnu@gmail.com"
                aria-label="Email"
              >
                <Mail size={16} /> Email
              </a>
              <a
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-2"
                href="https://github.com/aryalbishnu"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-2"
                href="https://www.linkedin.com/in/bishnu-aryal-37413b28b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="hr-soft my-4" />

        {/* bottom bar (centered) */}
        <div className="pb-4">
          <p className="small text-white-50 text-center mb-0">
            © {year} Bishnu Aryal. Built with care <Heart size={12} className="mx-1 text-danger" /> in Tokyo.
          </p>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .footer-scope {
          background: radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,.25), transparent),
                      radial-gradient(1200px 600px at 80% 110%, rgba(34,211,238,.18), transparent),
                      #0f172a;
        }
        .footer-scope .hr-soft { border-color: rgba(255,255,255,0.15); opacity: 1; }
      `}</style>
    </footer>
  );
}
