import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}

      <motion.div
        animate={{
          x: position.x - 24,
          y: position.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          fixed
          top-0
          left-0
          w-12
          h-12
          rounded-full
          bg-white/20
          backdrop-blur-md
          border
          border-slate-300
          pointer-events-none
          z-[999999]
          hidden lg:block
        "
      />

      {/* Inner Dot */}

      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
        }}
        className="
          fixed
          top-0
          left-0
          w-2
          h-2
          rounded-full
          bg-slate-900
          pointer-events-none
          z-[999999]
          hidden lg:block
        "
      />
    </>
  );
}