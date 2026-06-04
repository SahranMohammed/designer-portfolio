import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understanding your brand, audience and goals."
  },
  {
    icon: Lightbulb,
    title: "Research",
    desc: "Finding opportunities and creative directions."
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Crafting meaningful visual experiences."
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Delivering polished designs ready for growth."
  }
];

export default function CreativeProcess() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="tracking-[0.3em] text-slate-400 text-sm">
            PROCESS
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-4">
            Creative Workflow
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  glass
                  rounded-[32px]
                  p-8
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/60
                  flex
                  items-center
                  justify-center
                  mb-6
                "
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-4">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}