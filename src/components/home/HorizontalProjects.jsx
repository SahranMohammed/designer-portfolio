import { motion } from "framer-motion";
import { horizontalProjects } from "../../data/horizontalProjects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HorizontalProjects() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <section className="py-40 overflow-hidden" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
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

      <div className="max-w-7xl mx-auto px-6 mb-16">

        <p className="tracking-[0.3em] text-sm text-slate-400">
          FEATURED CASE STUDIES
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-black">
          Creative

          Showcase
        </h2>

      </div>

      <Link to={`/project-details`}>
        <motion.div
          animate={{
            x: [0, -800],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {[...horizontalProjects, ...horizontalProjects].map(
            (project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />
            )
          )}
        </motion.div>
      </Link>

    </section>
  );
}