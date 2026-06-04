import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "How quickly do you respond?",
    answer:
      "Most inquiries receive a response within 24 hours during business days.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I collaborate with businesses and startups from around the world.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Tell me about your business, project goals, timeline, and any specific requirements.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Long-term design partnerships and monthly retainers are available.",
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="
        rounded-[28px]
        bg-white/40
        backdrop-blur-xl
        border
        border-white/60
        overflow-hidden
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_30px_-15px_rgba(0,0,0,0.01)]
        relative
      "
    >
      {/* Micro Edge Specular Highlight */}
      <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent" />

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          p-6
          text-left
          outline-none
          group
        "
      >
        <span className="font-semibold text-lg text-slate-900 transition-colors duration-200">
          {item.question}
        </span>

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/50 border border-white/80 shadow-sm transition-transform duration-300">
          <Plus
            size={16}
            className={`transition-transform duration-300 text-slate-800 ${
              open ? "rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 px-6">
              <p className="text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <main className="relative overflow-hidden border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>

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

      {/* Background Glow Environment */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-20
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-200/30
            blur-[140px]
          "
        />
        <div
          className="
            absolute
            bottom-20
            right-20
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-200/20
            blur-[140px]
          "
        />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-white/40
              backdrop-blur-xl
              border
              border-white/60
              text-sm
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
            "
          >
            CONTACT
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
            Let's Create
            <br />
            Something Great
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            Have a project in mind? Let's discuss how thoughtful design can help your brand stand out and grow.
          </p>
        </div>
      </section>

      {/* Interactive Hub & Form Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Column A: Contact Meta Info Plate */}
            <div
              className="
                lg:col-span-2
                rounded-[40px]
                bg-white/40
                backdrop-blur-xl
                border
                border-white/60
                p-10
                shadow-[0_40px_80px_-30px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.5)]
                relative
              "
            >
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-32 bg-gradient-to-b from-white to-transparent" />

              <h2 className="text-3xl font-black tracking-tight">
                Get In Touch
              </h2>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/50 border border-white/80 shadow-sm text-slate-800 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      hello@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/50 border border-white/80 shadow-sm text-slate-800 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/50 border border-white/80 shadow-sm text-slate-800 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      New York, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Availability Badge Plate */}
              <div
                className="
                  mt-12
                  rounded-[24px]
                  bg-white/50
                  border
                  border-white/70
                  p-5
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]
                  relative
                "
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="font-bold text-sm text-slate-800 tracking-tight">
                    Available For New Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Column B: Liquid Glass Form Core */}
            <div
              className="
                lg:col-span-3
                rounded-[40px]
                bg-white/40
                backdrop-blur-xl
                border
                border-white/60
                p-10
                shadow-[0_40px_80px_-30px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.5)]
                relative
              "
            >
              <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-white to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-40 bg-gradient-to-b from-white to-transparent" />

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/50
                      px-5
                      py-4
                      outline-none
                      placeholder-slate-400
                      text-slate-800
                      font-medium
                      backdrop-blur-md
                      focus:border-slate-400
                      transition-all
                      duration-200
                      shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]
                    "
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/50
                      px-5
                      py-4
                      outline-none
                      placeholder-slate-400
                      text-slate-800
                      font-medium
                      backdrop-blur-md
                      focus:border-slate-400
                      transition-all
                      duration-200
                      shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]
                    "
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/50
                    px-5
                    py-4
                    outline-none
                    placeholder-slate-400
                    text-slate-800
                    font-medium
                    backdrop-blur-md
                    focus:border-slate-400
                    transition-all
                    duration-200
                    shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]
                  "
                />

                <div className="relative">
                  <select
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/50
                      px-5
                      py-4
                      outline-none
                      text-slate-700
                      font-medium
                      backdrop-blur-md
                      focus:border-slate-400
                      transition-all
                      duration-200
                      appearance-none
                      shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]
                    "
                  >
                    <option>Select Service</option>
                    <option>Brand Identity</option>
                    <option>Logo Design</option>
                    <option>Packaging Design</option>
                    <option>Social Media Design</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                    <Plus size={16} className="rotate-90" />
                  </div>
                </div>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/50
                    px-5
                    py-4
                    outline-none
                    placeholder-slate-400
                    text-slate-800
                    font-medium
                    backdrop-blur-md
                    focus:border-slate-400
                    transition-all
                    duration-200
                    resize-none
                    shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]
                  "
                />

                <button
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    px-8
                    py-4
                    rounded-full
                    bg-slate-900
                    text-white
                    font-semibold
                    text-sm
                    transition
                    duration-300
                    hover:bg-slate-800
                    shadow-md
                    shadow-slate-900/5
                    group
                  "
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Area */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.question}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lower Conversions CTA Card */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
              rounded-[48px]
              bg-white/40
              backdrop-blur-xl
              border
              border-white/60
              p-12
              md:p-20
              text-center
              shadow-[0_40px_80px_-30px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.5)]
              relative
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-white to-transparent" />

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
              "
            >
              Ready To Elevate
              <br />
              Your Brand?
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-slate-600
                text-lg
                leading-relaxed
              "
            >
              Let's transform your ideas into meaningful visual experiences that connect with your audience.
            </p>

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-2.5
                bg-slate-900
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                text-sm
                transition
                duration-300
                hover:bg-slate-800
                shadow-md
                shadow-slate-900/5
                group
              "
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}