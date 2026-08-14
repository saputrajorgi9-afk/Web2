import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a href="#" className="logo">
        WebDEV<span>.</span>
      </a>

      <nav>
        <a href="#why">Why Website</a>
        <a href="#projects">Projects</a>
        <a href="#process">Process</a>
      </nav>

     <div className="navbar-actions">

  <ThemeToggle />

  <a
    href="/contact"
    className="contact-button"
  >
    <span>LET'S TALK</span>

    <ArrowUpRight size={28} />
  </a>

</div>
    </motion.header>
  );
}