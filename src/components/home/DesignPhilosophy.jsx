import { motion } from "framer-motion";
import { useState } from "react";

export default function DesignPhilosophy() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <section className="relative py-40 overflow-hidden" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      {/* Mouse Glow */}
      <motion.div
        animate={{
          x: mouse.x - 300,
          y: mouse.y - 300,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="fixed w-[600px] h-[600px] rounded-full bg-indigo-300/20 blur-[140px] pointer-events-none z-0"
      />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-[140px]" />
        <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-[140px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="tracking-[0.3em] text-slate-400 text-sm"
        >
          DESIGN PHILOSOPHY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            mt-8
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-[1]
          "
        >
          Design is not
          <br />
          decoration.
          <br />
          It is communication.
        </motion.h2>

        <p className="max-w-2xl mx-auto mt-10 text-slate-500 text-lg">
          Every visual decision should serve a purpose,
          strengthen perception, and help brands become
          instantly recognizable.
        </p>

      </div>
    </section>
  );
}