import { motion } from "motion/react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* HEADER */}

        <motion.div
          className="projects-label"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>02 /</span>

          <span>
            SELECTED WORK
          </span>
        </motion.div>

        {/* HEADING */}

        <div className="projects-heading">
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
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            SELECTED
            <span>WORK.</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            A collection of digital experiences
            created for modern businesses.
          </motion.p>
        </div>

        {/* PROJECT LIST */}

        <div className="projects-list">
          {projects.map((project, index) => (
  <ProjectCard
    key={project.id}
    project={project}
    index={index}
  />
))}
        </div>

      </div>
    </section>
  );
}