import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        key={theme}
        initial={{
          rotate: -90,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        {isDark ? (
          <Moon size={17} />
        ) : (
          <Sun size={17} />
        )}
      </motion.span>
    </motion.button>
  );
}