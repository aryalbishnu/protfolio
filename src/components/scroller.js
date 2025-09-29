// ScrollProgress.jsx
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sp-bar">
        <div className="sp-fill" style={{ width: `${progress}%` }} />
      </div>
      <style>{`
        .sp-bar{
          position: fixed; top: 0; left: 0; right: 0; height: 4px; z-index: 9999;
          background: rgba(255,255,255,0.08); backdrop-filter: blur(6px);
        }
        .sp-fill{
          height: 100%;
          background: linear-gradient(90deg, #22d3ee, #6366f1, #8b5cf6);
          box-shadow: 0 0 12px rgba(99,102,241,0.45);
          transition: width .12s ease-out;
        }
      `}</style>
    </>
  );
}
