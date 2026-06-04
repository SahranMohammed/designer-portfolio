import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Strategic visual systems that create recognition, trust, and consistency across every touchpoint.",
  },
  {
    number: "02",
    title: "Logo Design",
    description: "Distinctive logo concepts crafted to communicate your brand's personality and values.",
  },
  {
    number: "03",
    title: "Packaging Design",
    description: "Premium packaging experiences that attract attention and improve product perception.",
  },
  {
    number: "04",
    title: "Social Media Design",
    description: "Creative visual content designed to increase engagement and brand awareness.",
  },
  {
    number: "05",
    title: "Creative Direction",
    description: "Visual leadership and creative strategy for campaigns, launches, and brand growth.",
  },
  {
    number: "06",
    title: "Print Design",
    description: "High-quality marketing materials, brochures, posters, business cards and more.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding your business, audience, goals and vision.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Building a clear creative direction and visual framework.",
  },
  {
    step: "03",
    title: "Design",
    description: "Creating concepts, refining ideas and crafting the final solution.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Providing polished assets ready for real-world implementation.",
  },
];

const packages = [
  {
    name: "Starter",
    subtitle: "Perfect For Startups",
    features: ["Logo Design", "Brand Colors", "Typography System", "Brand Guidelines"],
  },
  {
    name: "Professional",
    subtitle: "Growing Businesses",
    featured: true,
    features: ["Full Brand Identity", "Marketing Assets", "Social Media Kit", "Brand Guidelines", "Priority Support"],
  },
  {
    name: "Premium",
    subtitle: "Complete Brand System",
    features: ["Brand Strategy", "Identity System", "Packaging Design", "Creative Direction", "Launch Assets"],
  },
];

export default function Services() {
     const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <main className="relative overflow-hidden  border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })} >

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
      
      {/* Ambient Liquid Sub-Layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[700px] w-[700px] rounded-full bg-indigo-200/40 blur-[160px]" />
        <div className="absolute top-[30%] right-[-20%] h-[800px] w-[800px] rounded-full bg-blue-200/30 blur-[180px]" />
        <div className="absolute bottom-[10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-purple-200/20 blur-[140px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-flex px-6 py-2.5 rounded-full bg-white/[0.22] backdrop-blur-xl border border-white/80 text-sm font-semibold tracking-wide shadow-[0_4px_12px_rgba(0,0,0,0.01),inset_0_1px_1px_rgba(255,255,255,0.8)]">
              CREATIVE SERVICES
            </span>
            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Design Solutions
              <br />
              Built For Modern
              <br />
              Brands
            </h1>
            <p className="mt-10 max-w-3xl mx-auto text-lg text-slate-600 font-medium leading-relaxed">
              Strategic design services that help businesses create memorable brands, stronger engagement and meaningful
              customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.number}
                whileHover={{ 
                  y: -8, 
                  backgroundColor: "rgba(255, 255, 255, 0.32)",
                  boxShadow: "0 30px 60px -15px rgba(15, 23, 42, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.8)"
                }}
                className="
                  relative 
                  p-12 
                  rounded-[40px] 
                  bg-white/[0.16] 
                  backdrop-blur-3xl 
                  border border-white/70
                  overflow-hidden
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                  transition-all duration-300
                  group
                  cursor-pointer
                "
              >
                {/* Structural Glass Beveled Corner Accent */}
                <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-white to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                
                {/* Etched Glass Number Index */}
                <div className="absolute top-8 right-10 text-6xl font-black text-slate-400 select-none transition-transform duration-500 group-hover:scale-105">
                  {service.number}
                </div>
                
                <h3 className="text-3xl font-black tracking-tight relative z-10">
                  {service.title}
                </h3>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed max-w-md relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Creative Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {process.map((item) => (
              <div 
                key={item.step} 
                className="
                  p-10 
                  rounded-[32px] 
                  bg-white/[0.14] 
                  backdrop-blur-2xl 
                  border border-white/50 
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
                  relative
                "
              >
                {/* Liquid connecting filament lines */}
                <div className="absolute top-10 right-0 w-12 h-px bg-slate-200/40 hidden xl:block last:hidden" />
                
                <span className="text-sm text-slate-400 font-bold tracking-widest">{item.step}</span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-slate-600 font-medium text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Panel Block */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="
            relative
            rounded-[48px] 
            bg-white/[0.15] 
            backdrop-blur-3xl 
            border border-white/60 
            p-12 md:p-20
            overflow-hidden
            shadow-[0_40px_80px_-30px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.7)]
          "
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                  Why Work
                  <br />
                  With Me
                </h2>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 space-y-5">
                {[
                  "Strategic Design Thinking",
                  "Premium Visual Quality",
                  "Clear Communication",
                  "Fast Turnaround",
                  "Long-Term Partnership",
                ].map((item) => (
                  <motion.div 
                    key={item} 
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 py-3.5 px-6 rounded-2xl bg-white/[0.15] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white shrink-0 shadow-sm shadow-slate-900/10">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Tiering Section */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Service Packages</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                whileHover={{ y: -6 }}
                className={`
                  rounded-[40px] 
                  backdrop-blur-3xl 
                  p-12 
                  flex flex-col
                  relative
                  overflow-hidden
                  ${pkg.featured 
                    ? "bg-white/[0.35] border-white shadow-[0_40px_80px_-20px_rgba(15,23,42,0.05),inset_0_1px_4px_rgba(255,255,255,0.9)] border-2" 
                    : "bg-white/[0.15] border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] border"
                  }
                `}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200/40 via-blue-200/20 to-transparent blur-xl pointer-events-none" />
                )}

                <h3 className="text-3xl font-black tracking-tight">{pkg.name}</h3>
                <p className="mt-3 text-slate-500 font-medium text-sm">{pkg.subtitle}</p>

                <div className="w-full h-px bg-slate-200/40 my-8" />

                <div className="space-y-4.5 flex-grow">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3.5 text-slate-700 font-medium text-sm">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full ${pkg.featured ? 'bg-slate-900 text-white' : 'bg-slate-200/60 text-slate-600'} shrink-0`}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Closing Action CTA */}
      <section className="pb-44 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="
            relative 
            rounded-[48px] 
            bg-white/[0.18] 
            backdrop-blur-3xl 
            border border-white/70 
            p-12 md:p-24 
            text-center 
            overflow-hidden
            shadow-[0_50px_100px_-30px_rgba(15,23,42,0.05),inset_0_1px_4px_rgba(255,255,255,0.8)]
          "
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight relative z-10">
              Ready To Build
              <br />
              A Stronger Brand?
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-slate-600 text-lg font-medium relative z-10 leading-relaxed">
              Let's create a visual identity that helps your business stand out and connect with the right audience.
            </p>
            
            <button className="mt-12 inline-flex items-center gap-3 bg-slate-900 text-white px-9 py-4.5 rounded-full font-semibold hover:bg-slate-800 transition duration-300 relative z-10 shadow-lg shadow-slate-900/10">
              Start Your Project
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}