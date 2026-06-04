import { useState } from "react";
import { 
  Calendar, 
  Layers, 
  Target, 
  TrendingUp, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectOverview() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
  // Mock dataset for mock items inside the layout
  const metrics = [
    { label: "Conversion Lift", value: "+38%", icon: TrendingUp, desc: "Surpassed initial quarterly benchmarks" },
    { label: "Load Efficiency", value: "0.4s", icon: Cpu, desc: "Core web vitals brought into optimal range" },
    { label: "Asset Architecture", value: "100%", icon: Layers, desc: "Fully tokenized multi-platform design system" },
  ];

  const milestones = [
    { phase: "Phase 01", title: "Discovery & Vector Strategy", status: "Completed", date: "Jan - Feb 2026" },
    { phase: "Phase 02", title: "Liquid Design Framework", status: "Completed", date: "Feb - Apr 2026" },
    { phase: "Phase 03", title: "High-Fidelity Engineering Integration", status: "In Progress", date: "Apr - Jun 2026" },
    { phase: "Phase 04", title: "Deployment & Optimization Matrix", status: "Upcoming", date: "July 2026" },
  ];

  return (
    <main className=" min-h-screen relative overflow-hidden border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>

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
      
      {/* Persistent Fluid Glow Environment */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-10
            left-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-indigo-200/25
            blur-[150px]
          "
        />
        <div
          className="
            absolute
            bottom-20
            right-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-200/20
            blur-[140px]
          "
        />
      </div>

      {/* Hero Header & Structural Metadata Block */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-flex px-5 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            CASE STUDY
          </span>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight text-slate-900">
                Aura Commerce
                <br />
                Ecosystem
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed font-medium">
                Complete digital transformation, luxury marketplace deployment, and liquid brand scaling strategies designed to unite complex consumer pipelines into a singular, fluid interface.
              </p>
            </div>

            {/* Quick Meta Infobox Platter */}
            <div className="lg:col-span-4 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 p-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.5)] relative">
              <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent" />
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Project Metadata</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
                  <span className="text-sm font-semibold text-slate-400">Client</span>
                  <span className="text-sm font-bold text-slate-800">Aura Global Inc.</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
                  <span className="text-sm font-semibold text-slate-400">Timeline</span>
                  <span className="text-sm font-bold text-slate-800">6 Months (2026)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-400">Role</span>
                  <span className="text-sm font-bold text-slate-800">Lead Design Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monolithic Hero Showcase Media Plate */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/80 shadow-[0_50px_100px_-40px_rgba(15,23,42,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] relative aspect-[16/9] max-h-[600px]">
            <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/40 z-10 mix-blend-multiply" />
            {/* Replace source path with your environment image resource */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Project Display Plate"
              className="w-full h-full object-cover transform scale-100 hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* High-Impact Performance Metrics Deck */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, i) => (
              <div 
                key={i} 
                className="rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] relative flex flex-col justify-between group"
              >
                <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white to-transparent" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{metric.label}</span>
                  <div className="w-9 h-9 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
                    <metric.icon size={16} />
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-5xl font-black text-slate-900 tracking-tight">{metric.value}</h4>
                  <p className="mt-2 text-sm font-medium text-slate-500">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Block: Strategic Intent vs. Process Roadmap */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Axis: Objectives and Description */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">THE VISION</p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none">Core Objectives & Solutions</h2>
            </div>
            
            <div className="rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/60 p-10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] relative space-y-6">
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white to-transparent" />
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-indigo-500"><Target size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">System Modernization</h4>
                  <p className="text-slate-600 text-sm font-medium mt-1 leading-relaxed">Transitioning fragmentation patterns into an integrated environment running optimized design patterns.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 text-indigo-500"><CheckCircle2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Scalability Calibration</h4>
                  <p className="text-slate-600 text-sm font-medium mt-1 leading-relaxed">Engineered to cleanly manage transactional surges without fracturing visual styling layouts.</p>
                </div>
              </div>
            </div>

            <a 
              href="#live-deployment"
              className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-slate-800 shadow-md shadow-slate-900/5 group w-fit"
            >
              <span>Explore Live Platform</span>
              <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-y-[-1px] group-hover:translate-x-[1px]" />
            </a>
          </div>

          {/* Right Axis: The Roadmap Pipeline Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">THE JOURNEY</p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none">Execution Roadmap</h2>
            </div>

            <div className="space-y-4 w-full">
              {milestones.map((milestone, idx) => (
                <div 
                  key={idx}
                  className="rounded-[28px] bg-white/30 backdrop-blur-xl border border-white/50 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] relative flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent" />
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-900/5 border border-slate-900/10 text-slate-500 font-mono uppercase shrink-0">
                      {milestone.phase}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base tracking-tight">{milestone.title}</h4>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">{milestone.date}</p>
                    </div>
                  </div>
                  
                  <span className={`text-xs font-bold px-4 py-1.5 rounded-full border w-fit ${
                    milestone.status === "Completed" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600" :
                    milestone.status === "In Progress" ? "bg-amber-500/10 border-amber-500/20 text-amber-600 animate-pulse" :
                    "bg-slate-500/5 border-slate-500/10 text-slate-400"
                  }`}>
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}