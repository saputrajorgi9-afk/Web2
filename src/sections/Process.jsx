import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We start by understanding your business, audience, goals, and what your website needs to achieve.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "We create a visual direction that matches your brand and gives your business a strong digital identity.",
  },
  {
    number: "03",
    title: "DEVELOP",
    description:
      "The design is transformed into a fast, responsive, and interactive website that works across devices.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description:
      "After everything is refined and tested, your website goes live and is ready to represent your business.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="process-section"
    >
      <div className="process-container">

        {/* LABEL */}

        <motion.div
          className="process-label"
          initial={{
            opacity: 0,
            y: 25,
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
          <span>03 /</span>
          <span>THE PROCESS</span>
        </motion.div>


        {/* HEADING */}

        <div className="process-heading">

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
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            FROM IDEA
            <span>TO DIGITAL</span>
            EXPERIENCE.
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
            A simple and transparent process
            designed to turn your idea into
            a digital experience.
          </motion.p>

        </div>


        {/* PROCESS LIST */}

        <div className="process-list">

          {process.map((item, index) => (

            <motion.div
              className="process-item"
              key={item.number}

              initial={{
                opacity: 0,
                x: -60,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* NUMBER */}

              <span className="process-number">
                {item.number}
              </span>


              {/* TITLE */}

              <div className="process-title">

                <h3>
                  {item.title}
                </h3>

                <ArrowDownRight
                  className="process-icon"
                  size={28}
                />

              </div>


              {/* DESCRIPTION */}

              <p>
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}