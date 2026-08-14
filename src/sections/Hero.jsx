import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import MagneticButton from "../components/MagneticButton";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    y: "110%",
  },

  visible: {
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-glow" />

      <div className="hero-top">

        <span>
          INDEPENDENT WEB DEVELOPMENT STUDIO
        </span>

        <span className="availability">
          <i />
          AVAILABLE FOR PROJECTS
        </span>

      </div>

      <motion.h1
        className="hero-title"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <span>
          <motion.span variants={item}>
            WE BUILD
          </motion.span>
        </span>

        <span>
          <motion.span variants={item}>
            DIGITAL
          </motion.span>
        </span>

        <span className="accent">
          <motion.span variants={item}>
            EXPERIENCES.
          </motion.span>
        </span>

      </motion.h1>

      <div className="hero-bottom">

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          We create modern websites that help
          businesses look professional, build trust,
          and grow online.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
        >
          <MagneticButton>
            Explore Projects
            <ArrowUpRight size={18} />
          </MagneticButton>
        </motion.div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight size={17} />
      </div>

    </section>
  );
}