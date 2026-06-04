import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
}) {
  const ref = useRef();

  const handleMouseMove = (e) => {
    const rect =
      ref.current.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    ref.current.style.transform =
      `translate(${x * 0.2}px, ${
        y * 0.2
      }px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform =
      "translate(0px,0px)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="
      bg-slate-900
      text-white
      rounded-full
      px-8
      py-4
      transition-transform
    "
    >
      {children}
    </motion.button>
  );
}