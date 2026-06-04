import { ArrowRight, Check, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description:
      "Perfect for startups and small businesses looking to establish a professional visual identity.",
    features: [
      "Logo Design",
      "Brand Color Palette",
      "Typography Selection",
      "Basic Brand Guidelines",
      "2 Revision Rounds",
    ],
  },
  {
    name: "Professional",
    price: "$1,299",
    featured: true,
    description:
      "A complete branding solution designed for growing businesses and ambitious startups.",
    features: [
      "Everything in Starter",
      "Full Brand Identity",
      "Social Media Kit",
      "Business Card Design",
      "Brand Guidelines",
      "5 Revision Rounds",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: "$2,999",
    description:
      "Comprehensive brand systems with strategic design and creative direction.",
    features: [
      "Everything in Professional",
      "Brand Strategy Workshop",
      "Packaging Design",
      "Creative Direction",
      "Marketing Assets",
      "Launch Materials",
      "Unlimited Revisions",
    ],
  },
];

const faqItems = [
  {
    question: "How long does a project take?",
    answer:
      "Most branding projects take between 2–6 weeks depending on complexity and revision requirements.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes. Every brand is unique, so custom solutions can be tailored to specific business needs.",
  },
  {
    question: "What files will I receive?",
    answer:
      "You'll receive all final assets in industry-standard formats suitable for digital and print use.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Additional support and design retainers are available after project completion.",
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  

  return (
    <div
      className="
        rounded-[28px]
        bg-white/[0.14]
        backdrop-blur-2xl
        border
        border-white/50
        overflow-hidden
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
        transition-colors
        duration-300
        hover:bg-white/[0.22]
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          p-7
          text-left
        "
      >
        <span className="font-semibold text-lg tracking-tight">
          {item.question}
        </span>

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/40 border border-white/60 shadow-sm shrink-0">
          <Plus
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-40 opacity-100 pb-7 px-7" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600 font-medium text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Pricing() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <main className="relative overflow-hidden  border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
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
      
      {/* Environment Liquid Color Nodes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] h-[700px] w-[700px] rounded-full bg-indigo-200/40 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-15%] h-[800px] w-[800px] rounded-full bg-blue-200/30 blur-[170px]" />
        <div className="absolute top-[40%] left-[20%] h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-[130px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className="
              inline-flex
              px-6
              py-2.5
              rounded-full
              bg-white/[0.22]
              backdrop-blur-xl
              border
              border-white/80
              text-sm
              font-semibold
              tracking-wide
              shadow-[0_4px_12px_rgba(0,0,0,0.01),inset_0_1px_1px_rgba(255,255,255,0.8)]
            "
          >
            PRICING PLANS
          </span>

          <h1
            className="
              mt-8
              text-6xl
              md:text-8xl
              font-black
              leading-[0.9]
              tracking-tight
            "
          >
            Flexible Packages
            <br />
            For Every Brand
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              mx-auto
              text-lg
              text-slate-600
              font-medium
              leading-relaxed
            "
          >
            Professional design services tailored to businesses that value creativity, strategy, and long-term brand growth.
          </p>
        </div>
      </section>

      {/* Pricing Interactive Grid */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                className={`
                  rounded-[40px]
                  backdrop-blur-3xl
                  p-12
                  flex
                  flex-col
                  relative
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    plan.featured
                      ? "bg-white/[0.38] border-white shadow-[0_40px_80px_-20px_rgba(15,23,42,0.06),inset_0_1px_4px_rgba(255,255,255,0.9)] border-2 z-20"
                      : "bg-white/[0.15] border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] border z-10"
                  }
                `}
              >
                {/* Visual Glass Sheen Lines */}
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />

                {plan.featured && (
                  <div
                    className="
                      absolute
                      top-8
                      right-10
                      px-4
                      py-1.5
                      rounded-full
                      bg-slate-900
                      text-white
                      text-[10px]
                      font-bold
                      tracking-widest
                      shadow-sm
                    "
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-black tracking-tight">
                  {plan.name}
                </h3>

                <div className="mt-8 flex items-baseline">
                  <span className="text-6xl font-black tracking-tight">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-6 text-slate-600 font-medium text-sm leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>

                <div className="w-full h-px bg-slate-200/40 my-8" />

                {/* Features List Group */}
                <div className="space-y-4.5 flex-grow">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3.5
                        text-slate-700
                        font-medium
                        text-sm
                      "
                    >
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full ${plan.featured ? 'bg-slate-900 text-white' : 'bg-slate-200/60 text-slate-600'} shrink-0`}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="
                    mt-10
                    w-full
                    py-4
                    rounded-full
                    bg-slate-900
                    text-white
                    font-semibold
                    text-sm
                    shadow-lg
                    shadow-slate-900/5
                    hover:bg-slate-800
                    transition-all
                    duration-300
                  "
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Inclusions Platter Section */}
      <section className="pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
              rounded-[48px]
              bg-white/[0.14]
              backdrop-blur-3xl
              border
              border-white/60
              p-12
              md:p-20
              overflow-hidden
              shadow-[inset_0_1px_3px_rgba(255,255,255,0.7)]
            "
          >
            <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white to-transparent" />
            
            <h2
              className="
                text-5xl
                md:text-6xl
                font-black
                tracking-tight
              "
            >
              Every Project Includes
            </h2>

            <div
              className="
                mt-14
                grid
                grid-cols-1
                md:grid-cols-2
                gap-x-12
                gap-y-5
              "
            >
              {[
                "Creative Discovery Session",
                "Professional Design Process",
                "Multiple Design Concepts",
                "Revision Rounds",
                "High-Resolution Files",
                "Commercial Usage Rights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-3.5 px-6 rounded-2xl bg-white/[0.15] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white shrink-0 shadow-sm shadow-slate-900/10">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="pb-36 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <FAQItem
                key={item.question}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Action Tailored CTA Strip */}
      <section className="pb-44 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
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

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                tracking-tight
                relative z-10
              "
            >
              Need Something
              <br />
              Custom?
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-slate-600
                text-lg
                font-medium
                leading-relaxed
                relative z-10
              "
            >
              Every brand is different. Let's discuss your goals and create a tailored solution.
            </p>

            <button
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                bg-slate-900
                text-white
                px-9
                py-4.5
                rounded-full
                font-semibold
                hover:bg-slate-800
                transition
                duration-300
                relative z-10
                shadow-lg
                shadow-slate-900/10
              "
            >
              Request Custom Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}