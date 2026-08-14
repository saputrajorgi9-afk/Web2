import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef(null);

  function handleMove(e) {
    const button = ref.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function handleLeave() {
    if (!ref.current) return;

    ref.current.style.transform =
      "translate(0, 0)";
  }

  return (
    <a
      ref={ref}
      href="#projects"
      className="magnetic-button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
}