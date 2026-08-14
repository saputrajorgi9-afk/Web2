import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    question: "WHAT DO YOU NEED?",
    options: [
      "Business Website",
      "Landing Page",
      "Portfolio",
      "E-Commerce",
      "Other",
    ],
  },
  {
    id: 2,
    question: "WHAT'S YOUR BUDGET?",
    options: [
      "< Rp1.000.000",
      "Rp1.000.000 — Rp3.000.000",
      "Rp3.000.000 — Rp5.000.000",
      "Rp5.000.000+",
      "Let's Discuss",
    ],
  },
];

export default function Contact() {
  const [step, setStep] = useState(1);
const navigate = useNavigate();
  const [form, setForm] = useState({
    service: "",
    budget: "",
    name: "",
    business: "",
    message: "",
  });

  const currentStep = steps.find(
    (item) => item.id === step
  );

  function selectOption(value) {
    if (step === 1) {
      setForm((prev) => ({
        ...prev,
        service: value,
      }));
    }

    if (step === 2) {
      setForm((prev) => ({
        ...prev,
        budget: value,
      }));
    }

    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function goBack() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  function submitWhatsApp() {
    const phone = "6285943561240";

    const message = `
Hello, I want to start a website project.

Name:
${form.name}

Business / Brand:
${form.business}

Website Type:
${form.service}

Budget:
${form.budget}

Project Details:
${form.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${phone}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="contact-page">

      {/* =====================================
          BACK HOME
      ====================================== */}

      <motion.button
  type="button"
  className="contact-back"
  onClick={() => navigate(-1)}

        initial={{
          opacity: 0,
          x: -20,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          duration: 0.6,
        }}
      >
        <ArrowLeft size={16} />

        <span>
          BACK HOME
        </span>
      </motion.button>


      {/* =====================================
          HEADER
      ====================================== */}

      <header className="contact-page-header">

        <motion.div
          className="contact-page-label"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >
          04 / LET'S TALK
        </motion.div>


        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          LET'S BUILD

          <span>
            SOMETHING
          </span>

          GREAT.
        </motion.h1>


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
            delay: 0.2,
            duration: 0.7,
          }}
        >
          Tell me a little about your project.
          I'll get back to you and we'll figure
          out the next step.
        </motion.p>

      </header>


      {/* =====================================
          FORM AREA
      ====================================== */}

      <section className="contact-form-area">

        {/* PROGRESS */}

        <div className="contact-progress">

          <span>
            0{step}
          </span>


          <div className="progress-line">

            <motion.div
              animate={{
                width: `${(step / 4) * 100}%`,
              }}

              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

          </div>


          <span>
            04
          </span>

        </div>


        {/* =====================================
            STEP CONTENT
        ====================================== */}

        <AnimatePresence
          mode="wait"
        >

          {/* ===================================
              STEP 1 & 2
          ==================================== */}

          {step <= 2 && currentStep && (

            <motion.div
              key={`step-${step}`}
              className="contact-step"

              initial={{
                opacity: 0,
                x: 80,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: -80,
              }}

              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="step-label">
                STEP 0{step}
              </span>


              <h2>
                {currentStep.question}
              </h2>


              <div className="option-list">

                {currentStep.options.map(
                  (option, index) => (

                    <motion.button
                      key={option}
                      type="button"

                      className="option-button"

                      onClick={() =>
                        selectOption(option)
                      }

                      initial={{
                        opacity: 0,
                        y: 20,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay:
                          index * 0.06,
                        duration: 0.4,
                      }}

                      whileHover={{
                        x: 12,
                      }}

                      whileTap={{
                        scale: 0.98,
                      }}
                    >

                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>


                      <strong>
                        {option}
                      </strong>


                      <ArrowUpRight
                        size={18}
                      />

                    </motion.button>

                  )
                )}

              </div>

            </motion.div>

          )}


          {/* ===================================
              STEP 3
          ==================================== */}

          {step === 3 && (

            <motion.div
              key="step-3"
              className="contact-step"

              initial={{
                opacity: 0,
                x: 80,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: -80,
              }}

              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="step-label">
                STEP 03
              </span>


              <h2>
                TELL ME

                <span>
                  ABOUT YOU.
                </span>
              </h2>


              {/* INPUT GRID */}

              <div className="input-grid">

                <div className="input-group">

                  <label>
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />

                </div>


                <div className="input-group">

                  <label>
                    BUSINESS / BRAND
                  </label>

                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your business"
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="input-group">

                <label>
                  TELL ME ABOUT YOUR PROJECT
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to build?"
                  rows={5}
                />

              </div>


              {/* CONTINUE */}

              <motion.button
                type="button"
                className="next-button"

                onClick={() =>
                  setStep(4)
                }

                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.97,
                }}
              >

                <span>
                  CONTINUE
                </span>

                <ArrowUpRight
                  size={20}
                />

              </motion.button>

            </motion.div>

          )}


          {/* ===================================
              STEP 4
          ==================================== */}

          {step === 4 && (

            <motion.div
              key="step-4"
              className="contact-step final-step"

              initial={{
                opacity: 0,
                scale: 0.95,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 1.05,
              }}

              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="step-label">
                STEP 04
              </span>


              <h2>
                READY

                <span>
                  TO START?
                </span>
              </h2>


              <p>
                Your project brief is ready.
                Send it through WhatsApp and
                let's talk about your project.
              </p>


              <motion.button
                type="button"
                className="send-button"

                onClick={submitWhatsApp}

                whileHover={{
                  scale: 1.04,
                }}

                whileTap={{
                  scale: 0.97,
                }}
              >

                <span>
                  SEND INQUIRY
                </span>

                <ArrowUpRight
                  size={24}
                />

              </motion.button>

            </motion.div>

          )}

        </AnimatePresence>


        {/* =====================================
            PREVIOUS STEP
        ====================================== */}

        {step > 1 && (

          <motion.button
            type="button"
            className="step-back"

            onClick={goBack}

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}
          >

            <ArrowLeft size={15} />

            <span>
              PREVIOUS STEP
            </span>

          </motion.button>

        )}

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="contact-footer">

        <span>
          WEB DESIGN & DEVELOPMENT
        </span>

        <span>
          AVAILABLE FOR PROJECTS
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </main>
  );
}