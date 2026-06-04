import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "35+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Design Awards" },
];

const skills = [
  "Brand Identity",
  "Logo Design",
  "Packaging Design",
  "Creative Direction",
  "Social Media Design",
  "Print Design",
  "Motion Graphics",
  "Visual Strategy",
];

const timeline = [
  { year: "2018", title: "Started Freelancing" },
  { year: "2020", title: "Worked With International Brands" },
  { year: "2022", title: "Creative Director" },
  { year: "2026", title: "120+ Projects Completed" },
];

export default function About() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <main 
      className="relative overflow-hidden  border-slate-200" 
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* Dynamic Cursor Light Overlay */}
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

      {/* Deep Liquid Environment Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-[600px] w-[600px] rounded-full bg-indigo-200/40 blur-[150px]" />
        <div className="absolute bottom-40 right-20 h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-[130px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-44 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="mt-6 text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
                Designing
                <br />
                Brands That
                <br />
                People Remember
              </h1>
            </div>

            {/* Liquid Experience Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative 
                rounded-[40px] 
                bg-white/[0.18] 
                backdrop-blur-3xl 
                border border-white/70 
                p-10 
                overflow-hidden
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03),inset_0_1px_3px_rgba(255,255,255,0.8)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.15] pointer-events-none" />
              <h3 className="text-5xl font-black relative z-10">8+</h3>
              <p className="text-slate-500 mt-2 font-medium relative z-10">Years of Experience</p>

              <div className="mt-8 space-y-4 relative z-10">
                {[
                  { name: "Projects", val: "120+" },
                  { name: "Clients", val: "35+" },
                  { name: "Awards", val: "15+" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200/40 text-slate-700 font-medium last:border-0">
                    <span>{row.name}</span>
                    <span className="font-bold">{row.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[40px] bg-white/[0.12] backdrop-blur-2xl border border-white/50 p-12 md:p-16 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight">My Story</h2>
              </div>
              <div className="lg:col-span-8 space-y-8">
                <p className="text-xl leading-relaxed text-slate-600 font-semibold">
                  Great design is not decoration. It is communication.
                </p>
                <p className="text-lg leading-relaxed text-slate-500 font-medium">
                  Over the years, I have worked with startups, agencies and established brands to create memorable visual
                  identities that strengthen trust, improve recognition and help businesses grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                className="
                  relative 
                  rounded-[32px] 
                  bg-white/[0.16] 
                  backdrop-blur-2xl 
                  border border-white/60 
                  p-10 
                  overflow-hidden
                  shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.6)]
                  transition-colors duration-300
                "
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.1] pointer-events-none" />
                <h3 className="text-5xl font-black tracking-tight relative z-10">{item.value}</h3>
                <p className="mt-3 text-slate-500 font-medium relative z-10">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="pb-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="py-20 px-8 rounded-[48px] bg-white/[0.1] backdrop-blur-3xl border border-white/40 shadow-[inset_0_1px_3px_rgba(255,255,255,0.7)]">
            <p className="tracking-[0.3em] text-sm text-slate-400">DESIGN PHILOSOPHY</p>
            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Good Design
              <br />
              Creates Trust
            </h2>
            <p className="mt-10 text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Every visual decision should serve a purpose and create meaningful connections between brands and people.
            </p>
          </div>
        </div>
      </section>

      {/* Skills / Expertise Component */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tight">Expertise</h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.45)" }}
                className="
                  px-7 
                  py-4.5 
                  rounded-full 
                  bg-white/[0.22] 
                  backdrop-blur-xl 
                  border border-white/60 
                  text-slate-800 
                  font-semibold 
                  cursor-pointer
                  shadow-[0_8px_20px_-6px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.6)]
                  transition-colors duration-300
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Structure */}
      <section className="pb-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-20 tracking-tight">Creative Journey</h2>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.26)" }}
                className="
                  relative
                  rounded-[28px] 
                  bg-white/[0.14] 
                  backdrop-blur-2xl 
                  border border-white/50 
                  p-8 
                  flex flex-col sm:flex-row sm:items-center justify-between gap-4
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                  transition-colors duration-300
                  cursor-pointer
                "
              >
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-indigo-400 to-blue-400 rounded-r-full opacity-0 hover:opacity-100 transition-opacity" />
                <div>
                  <p className="text-slate-400 text-sm font-bold tracking-wider">{item.year}</p>
                  <h3 className="text-2xl font-bold mt-1 text-slate-900 tracking-tight">{item.title}</h3>
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-300 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master CTA Card */}
      <section className="pb-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="
            relative 
            rounded-[48px] 
            bg-white/[0.15] 
            backdrop-blur-3xl 
            border border-white/70 
            p-12 md:p-20 
            text-center 
            overflow-hidden
            shadow-[0_40px_80px_-20px_rgba(15,23,42,0.04),inset_0_1px_4px_rgba(255,255,255,0.8)]
          "
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight relative z-10">
              Let's Build
              <br />
              Something Memorable
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-slate-600 text-lg font-medium relative z-10">
              Ready to elevate your brand with strategic design and meaningful visual experiences?
            </p>
            
            <button className="mt-10 inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition duration-300 relative z-10 shadow-lg shadow-slate-900/10">
              Start a Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}