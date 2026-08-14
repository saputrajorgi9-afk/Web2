import { motion } from "motion/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =====================================
          MAIN CTA
      ====================================== */}

      <div className="footer-cta">

        <motion.span
          className="footer-label"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          HAVE A PROJECT IN MIND?
        </motion.span>


        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          LET'S BUILD
          <span>
            SOMETHING GREAT.
          </span>
        </motion.h2>


        <motion.a
          href="/contact"
          className="footer-talk"

          initial={{
            opacity: 0,
            scale: 0.9,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.2,
            duration: 0.6,
          }}

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.97,
          }}
        >
          <span>LET'S TALK</span>

          <ArrowUpRight size={22} />
        </motion.a>

      </div>


      {/* =====================================
          FOOTER INFO
      ====================================== */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <a
            href="/"
            className="footer-logo"
          >
            WebDEV<span>.</span>
          </a>

          <p>
            Web design & development
            for modern businesses.
          </p>

        </div>


        {/* NAVIGATION */}

        <div className="footer-column">

          <span className="footer-column-title">
            NAVIGATION
          </span>

          <a href="#why">
            Why Website
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#process">
            Process
          </a>

        </div>


        {/* SOCIAL */}

        <div className="footer-column">

          <span className="footer-column-title">
            CONNECT
          </span>

          <a
            href="https://www.instagram.com/webdev5046/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

       

          <a
            href="/contact"
          >
            Let's Talk
          </a>

        </div>


        {/* BACK TO TOP */}

        <div className="footer-top">

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

          <span>
            BACK TO TOP
          </span>

        </div>

      </div>


      {/* =====================================
          BOTTOM
      ====================================== */}

      <div className="footer-bottom">

        <span>
          © 2026 WebDEV. ALL RIGHTS RESERVED.
        </span>

        <span>
          WEB DESIGN / DEVELOPMENT
        </span>

      </div>

    </footer>
  );
}