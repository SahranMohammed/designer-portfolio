import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          glass
          rounded-[48px]
          p-10
          md:p-20
          text-center
        "
        >

          <p className="tracking-[0.3em] text-sm text-slate-400">
            START A PROJECT
          </p>

          <h2
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-black
            leading-tight
          "
          >
            Let's Create
            <br />
            Something Memorable
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-slate-500">
            Elevate your brand with modern design,
            strategic thinking and visual experiences
            that leave lasting impressions.
          </p>

          <button
            className="
            mt-10
            bg-slate-900
            text-white
            px-8
            py-4
            rounded-full
            inline-flex
            items-center
            gap-3
          "
          >
            Start Project

            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}