import { motion } from "framer-motion";

const clients = [
  "Adobe",
  "Spotify",
  "Airbnb",
  "Figma",
  "Notion",
  "Stripe",
  "Behance",
  "Dribbble",
];

export default function Clients() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section with an ultra-premium wide-tracking layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24 pb-8 border-b border-slate-200/60">
          <div>
            <p className="tracking-[0.3em] text-sm text-slate-400">
              TRUSTED BY
            </p>
            <h2 className="mt-4 text-5xl md:text-6xl font-black tracking-tight">
              Brands I've Worked With
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed lg:text-right font-medium">
            Strategic collaborations building high-impact design ecosystems across global industries.
          </p>
        </div>

        {/* Premium Asymmetric Dynamic Gallery Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[140px]">
          {clients.map((client, index) => {
            // Generates a deliberate structural asymmetry to look custom-designed
            const isLarge = index === 1 || index === 6;
            const isTall = index === 4;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.55)",
                  boxShadow: "0 30px 60px -15px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)"
                }}
                className={`
                  relative 
                  flex 
                  items-center 
                  justify-center 
                  p-8 
                  rounded-[32px] 
                  bg-white/[0.28] 
                  backdrop-blur-xl 
                  border 
                  border-white/70 
                  shadow-[0_12px_34px_-10px_rgba(15,23,42,0.03),inset_0_1px_0px_rgba(255,255,255,0.4)]
                  transition-all 
                  duration-300
                  group
                  overflow-hidden
                  cursor-pointer
                  ${isLarge ? "lg:col-span-2" : ""}
                  ${isTall ? "sm:row-span-2 flex-col justify-between items-start" : ""}
                `}
              >
                {/* Specular Ambient Light Reflection Line inside each card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Micro-Dot luxury grid accent background pattern visible on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                {/* Corner light reflector element */}
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-gradient-to-r from-white/80 to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent" />

                {/* Small indicator tag inside the unique tall grid block to add agency flair */}
                {isTall && (
                  <span className="text-[10px] tracking-[0.2em] text-slate-400 font-bold uppercase block mb-4">
                    Partner [{index + 1}]
                  </span>
                )}

                {/* Client typography is structurally untouched but handles depth gracefully */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight relative z-10 transition-colors duration-300 group-hover:text-slate-900">
                  {client}
                </h3>

                {isTall && <div className="w-1.5 h-1.5 rounded-full bg-slate-400/60 mt-auto" />}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Decorative architectural background element to ground the premium glass aesthetic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/20 to-blue-100/10 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
}