import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(onComplete, 400);

          return 100;
        }

        return prev + 5;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      exit={{
        y: "-100%",
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="preloader-inner">

        <motion.div
          className="preloader-logo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WebDEV<span>.</span>
        </motion.div>

        <div className="preloader-meta">
          <span>WEB DEVELOPMENT STUDIO</span>
          <span>{progress}%</span>
        </div>

        <div className="loader">
          <motion.div
            className="loader-progress"
            animate={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </motion.div>
  );
}