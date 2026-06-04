import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
        relative
        w-[420px]
        h-[550px]
        rounded-[40px]
        overflow-hidden
        shrink-0
        group
        cursor-pointer
      "
    >
      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
      />

      {/* Glass Panel */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          p-6
          rounded-3xl
          bg-white/15
          backdrop-blur-xl
          border
          border-white/20
        "
      >
        <p className="text-white/70 text-sm">
          {project.category}
        </p>

        <div className="flex items-center justify-between mt-2">

          <h3 className="text-white text-3xl font-bold">
            {project.title}
          </h3>

          <ArrowUpRight
            className="
              text-white
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          />

        </div>
      </div>

      {/* Large Number */}

      <div
        className="
          absolute
          top-8
          left-8
          text-white/20
          font-black
          text-7xl
        "
      >
        0{project.id}
      </div>
    </motion.div>
  );
}