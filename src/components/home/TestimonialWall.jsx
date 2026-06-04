import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Star, ArrowUpRight } from "lucide-react";


export default function TestimonialWall() {
  const testimonials = [
    {
      id: 1,
      name: "Evelyn Thorne",
      role: "Creative Director",
      company: "Aether Digital",
      quote: "The multi-platform token system engineered for our storefront didn't just solve architectural fragmentation—it fundamentally accelerated our engineering deployment velocity by 40%. An absolute masterclass in visual precision.",
      scope: "Brand Infrastructure",
      rating: 5,
      highlighted: true,
    },
    {
      id: 2,
      name: "Devon Zhao",
      role: "Technical Founder",
      company: "Synapse Protocol",
      quote: "Unparalleled alignment between complex functional engineering and cutting-edge interactive design. They brought a rare fluid spatial awareness to our interface that users instantly fall in love with.",
      scope: "Web3 Application",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Sterling",
      role: "VP of Product",
      company: "Vélos Luxury",
      quote: "Thoughtful, high-fidelity micro-interactions that make digital assets feel tangible. Our conversion indices spiked significantly following the implementation of this specific liquid design language.",
      scope: "E-Commerce Suite",
      rating: 5,
    },
    {
      id: 4,
      name: "Clara Vance",
      role: "Head of Brand",
      company: "Lumina Studio",
      quote: "They don't just assemble layouts; they orchestrate light, spacing, and structural typography. It brought an ethereal, premium polish to our global presence that redefined our market tier.",
      scope: "Identity System",
      rating: 5,
    },
    {
      id: 5,
      name: "Soren Kincaid",
      role: "Operations Lead",
      company: "Nova Compute",
      quote: "Most designers struggle when hitting high engineering constraints. Here, the layout logic remained unbreakable even across hyper-dense data streams. Impeccable execution.",
      scope: "Data Dashboard",
      rating: 5,
      highlighted: true,
    },
    {
      id: 6,
      name: "Hana Ishikawa",
      role: "Marketing Specialist",
      company: "Prism Media",
      quote: "The visual pacing of our landing page is brilliant. Our narrative builds step-by-step as users scroll, effortlessly retaining attention up to the absolute closing call to action.",
      scope: "Campaign Asset",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative border-slate-200 overflow-hidden">
      
      {/* Structural Ambient Background Glow Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[160px]" />
        <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Cluster */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-xs font-bold text-slate-500 uppercase tracking-widest shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <Sparkles size={12} className="text-indigo-500" />
            <span>Client Evaluation</span>
          </span>
          
          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Trusted by the Next
            <br />
            Generation of Brands
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Real perspectives from design partners, technical operators, and fast-scaling product leaders.
          </p>
        </div>

        {/* The Glass Wall: Fluid Staggered Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`
                break-inside-avoid
                inline-block
                w-full
                rounded-[32px]
                p-8
                backdrop-blur-xl
                border
                relative
                group
                transition-all
                duration-300
                ${
                  item.highlighted
                    ? "bg-white/50 border-indigo-200/60 shadow-[0_30px_60px_-20px_rgba(99,102,241,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)]"
                    : "bg-white/30 border-white/60 shadow-[0_30px_50px_-25px_rgba(15,23,42,0.02),inset_0_1px_2px_rgba(255,255,255,0.5)]"
                }
              `}
            >
              {/* Micro-Prismatic Top Glare Edge */}
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white to-transparent transition-all duration-500 group-hover:w-40" />
              <div className="absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />

              {/* Scope & Rating Meta Strip */}
              <div className="flex justify-between items-center gap-4 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-900/5 px-3 py-1.5 rounded-xl border border-slate-900/5 font-mono">
                  {item.scope}
                </span>
                
                <div className="flex gap-0.5 text-amber-500 bg-white/40 border border-white/60 px-2 py-1 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>

              {/* Quote Mark Refraction */}
              <div className="text-slate-300 group-hover:text-indigo-400/40 transition-colors duration-300 mb-4 inline-block">
                <Quote size={28} fill="currentColor" stroke="none" className="opacity-40" />
              </div>

              {/* Statement Block */}
              <p className="text-slate-700 font-medium text-base md:text-[17px] leading-relaxed tracking-tight">
                "{item.quote}"
              </p>

              {/* Separator Accent Line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-slate-200/50 via-slate-200/20 to-transparent my-6" />

              {/* Author Info Core */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">
                    {item.role}, <span className="text-slate-500">{item.company}</span>
                  </p>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/60 border border-white/80 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-slate-800 group-hover:border-slate-300 group-hover:bg-white/90 transition-all duration-300 transform group-hover:scale-105">
                  <ArrowUpRight size={15} />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}