import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../data/projects";

export default function FeaturedProjects() {
  const [active, setActive] = useState(featuredProjects[0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section className="py-32 border border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
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


      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-sm tracking-[0.3em] text-slate-400">
            SELECTED CREATIONS
          </span>
          <h2 className="mt-4 text-5xl md:text-7xl font-black">
            Featured Work
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Project List */}
          <div>
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActive(project)}
                className="cursor-pointer border-b border-slate-200 py-8 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">
                      {project.number}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-slate-500">
                      {project.category}
                    </p>
                  </div>

                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Image Showcase */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden glass aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}