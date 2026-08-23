import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const projectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-50, 50]
  );

  const isEven = index % 2 === 1;

  return (
    <motion.article
      ref={projectRef}
      className={`project-card ${isEven ? "project-reverse" : ""}`}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* PROJECT TEXT */}

      <div className="project-content">
        <div className="project-top">
          <span className="project-number">
            {project.number}
          </span>

          <span className="project-category">
            {project.category}
          </span>
        </div>

        <motion.h3
          className="project-title"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {project.title}
        </motion.h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          whileHover={{
            x: 10,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <span>VIEW PROJECT</span>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
          >
            <ArrowUpRight size={22} />
          </motion.div>
        </motion.a>
      </div>

      {/* PROJECT IMAGE */}

      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual"
        whileHover="hover"
      >
        <div className="project-image-wrapper">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              y: imageY,
            }}
            variants={{
              hover: {
                scale: 1.08,
              },
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>

        <motion.div
          className="project-image-overlay"
          variants={{
            hover: {
              opacity: 1,
            },
          }}
        />

        <motion.div
          className="project-floating-button"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -30,
          }}
          variants={{
            hover: {
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <ArrowUpRight size={28} />
        </motion.div>
      </motion.a>
    </motion.article>
  );
}