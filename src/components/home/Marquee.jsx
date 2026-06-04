export default function Marquee() {
  const items = [
    "Brand Identity",
    "Logo Design",
    "Packaging Design",
    "Creative Direction",
    "Social Media Design",
    "Print Design",
    "Brand Strategy",
    "Motion Graphics",
  ];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* Gradient fade */}

      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f8fafc] to-transparent" />

      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f8fafc] to-transparent" />

      <div className="flex animate-marquee gap-6 whitespace-nowrap">

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              px-8
              py-4
              rounded-full
              bg-white/40
              backdrop-blur-xl
              border
              border-white/60
              shadow-lg
            "
          >
            <span
              className="
                text-lg
                md:text-xl
                font-semibold
                text-slate-700
              "
            >
              {item}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}