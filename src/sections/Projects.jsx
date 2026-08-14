import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// IMPORT GAMBAR LU DI SINI
import project1 from "../assets/projects/Web1.png";
import project2 from "../assets/projects/Web2.png";
import project3 from "../assets/projects/Web3.png";
import project4 from "../assets/projects/Web4.png";
import project5 from "../assets/projects/Web5.png";

const projects = [
  {
    number: "01",
    title: "Kopi Senja",
    category: "Coffee Shop",
    image: project1,
    link: "https://phenomenal-gnome-b3f3f8.netlify.app/",
    description:
      "A warm digital experience designed to introduce a modern coffee brand and its products.",
    tags: ["Branding", "Responsive", "Business"],
  },

  {
    number: "02",
    title: "Barber House",
    category: "Barbershop",
    image: project2,
    link: "https://elaborate-tartufo-c97f1d.netlify.app/",
    description:
      "A bold business website focused on services, visual identity, and customer conversion.",
    tags: ["UI Design", "Booking", "Responsive"],
  },

  {
    number: "03",
    title: "Studio 27",
    category: "Creative Studio",
    image: project3,
    link: "https://prismatic-cuchufli-c8badc.netlify.app/",
    description:
      "A minimal portfolio website built around strong typography and visual storytelling.",
    tags: ["Portfolio", "Creative", "Modern UI"],
  },

  {
    number: "04",
    title: "Project Four",
    category: "Business Website",
    image: project4,
    link: "https://symphonious-horse-9c99e2.netlify.app/",
    description:
      "A modern digital presence designed to showcase a business and build customer trust.",
    tags: ["Web Design", "Responsive", "Development"],
  },

  {
    number: "05",
    title: "Project Five",
    category: "Landing Page",
    image: project5,
    link: "https://endearing-toffee-27e385.netlify.app/",
    description:
      "A conversion-focused landing page designed to present a product or service clearly.",
    tags: ["Landing Page", "UI Design", "Responsive"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
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
          <span>SELECTED WORK</span>
        </motion.div>

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
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({ project }) {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-20, 20]
  );

  return (
    <motion.article
      className="project-card"
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
        amount: 0.15,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* PROJECT VISUAL */}

      <motion.div
        ref={imageRef}
        className="project-visual"
        initial="initial"
        whileHover="hover"
      >

        {/* IMAGE */}

        <motion.div
          className="project-background"
          style={{
            y: imageY,
          }}
          variants={{
            initial: {
              scale: 1,
            },
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src={project.image}
            alt={project.title}
          />
        </motion.div>


        {/* HOVER OVERLAY */}

        <motion.div
          className="project-hover"
          variants={{
            initial: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-view"
            variants={{
              initial: {
                scale: 0.7,
                rotate: -20,
              },
              hover: {
                scale: 1,
                rotate: 0,
              },
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ArrowUpRight size={28} />
          </motion.a>

          <span>VIEW PROJECT</span>
        </motion.div>

      </motion.div>


      {/* PROJECT INFORMATION */}

      <div className="project-details">

        <div className="project-name">

          <span className="project-number">
            {project.number}
          </span>

          <h3>
            {project.title}
          </h3>

          <span className="project-category">
            {project.category}
          </span>

        </div>


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

      </div>

    </motion.article>
  );
}