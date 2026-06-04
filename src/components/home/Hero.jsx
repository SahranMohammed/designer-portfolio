import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Brand Identity",
    top: "12%",
    left: "0%",
  },
  {
    title: "Packaging Design",
    top: "22%",
    right: "0%",
  },
  {
    title: "Social Campaign",
    bottom: "12%",
    left: "5%",
  },
  {
    title: "Creative Direction",
    bottom: "20%",
    right: "5%",
  },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen overflow-hidden border-slate-200"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
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
        /* Changed 'absolute' to 'fixed' */
        className="fixed w-[600px] h-[600px] rounded-full bg-indigo-300/20 blur-[140px] pointer-events-none z-0"
      />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="min-h-screen flex items-center pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full border border-white/60 bg-white/50 backdrop-blur-xl text-sm font-medium">
                PREMIUM DESIGN PORTFOLIO
              </span>

              <h1 className="mt-8 text-5xl md:text-7xl xl:text-[110px] font-black tracking-tight leading-[0.9]">
                Crafting
                <br />
                Visual
                <br />
                Experiences
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl text-slate-600">
                Building memorable brands through strategic design, visual storytelling and modern creative direction.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white rounded-full px-8 py-4 flex items-center gap-2 hover:scale-105 transition duration-300">
                  View Portfolio
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-slate-300 px-8 py-4 hover:bg-white transition duration-300">
                  Start Project
                </button>
              </div>

              {/* Small Stats */}
              <div className="mt-16 flex flex-wrap gap-10">
                <div>
                  <h3 className="text-3xl font-black">120+</h3>
                  <p className="text-slate-500">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black">35+</h3>
                  <p className="text-slate-500">Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black">8+</h3>
                  <p className="text-slate-500">Years</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="relative h-[650px] hidden lg:block">
              {/* Main Orb */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-[420px] h-[420px] rounded-full bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <div className="absolute inset-6 rounded-full border border-white/40" />
                </div>
              </motion.div>

              {/* Floating Cards */}
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + index,
                  }}
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                  }}
                  className="absolute rounded-3xl bg-white/55 backdrop-blur-xl border border-white/60 px-8 py-6 shadow-xl"
                >
                  <p className="text-sm text-slate-500">Project</p>
                  <h3 className="font-bold text-xl mt-2">{card.title}</h3>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}