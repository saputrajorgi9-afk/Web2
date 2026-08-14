import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "CREDIBILITY",
    text: "Build trust before your customers even contact you.",
  },
  {
    number: "02",
    title: "VISIBILITY",
    text: "Give your business a digital home that's easy to find.",
  },
  {
    number: "03",
    title: "EXPERIENCE",
    text: "Create a better first impression for every visitor.",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Build a digital platform that grows with your business.",
  },
];

const titleWords = [
  "YOUR",
  "BUSINESS",
  "DESERVES",
  "MORE",
  "THAN",
  "JUST",
  "A",
  "SOCIAL",
  "MEDIA",
  "PROFILE.",
];

export default function WhyWebsite() {
  return (
    <section id="why" className="why-section">
      <div className="why-container">

        {/* SECTION LABEL */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>01 /</span>
          <span>WHY WEBSITE</span>
        </motion.div>


        {/* BIG TITLE */}
        <motion.h2
          className="why-title"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.055,
              },
            },
          }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={word + index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={
                index % 4 === 0
                  ? "why-muted"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>


        {/* BENEFITS */}
        <div className="benefits-list">

          {benefits.map((benefit, index) => (
            <motion.div
              className="benefit-row"
              key={benefit.number}
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
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >

              <span className="benefit-number">
                {benefit.number}
              </span>

              <h3>
                {benefit.title}
              </h3>

              <p>
                {benefit.text}
              </p>

              <motion.div
                className="benefit-arrow"
                whileHover={{
                  rotate: 45,
                }}
              >
                <ArrowUpRight size={20} />
              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}