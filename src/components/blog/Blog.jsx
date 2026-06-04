import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";
import { useState } from "react";

export default function Blog() {
  const featured = blogs[0];
  // Organizing the array to prevent the featured post from duplicating in the grid layout below
  const regularBlogs = blogs.slice(1);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <main className="relative overflow-hidden  border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>

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

      {/* Background - Exact Client Finalized Glow Coordinates */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-20
            h-[500px]
            w-[500px]
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
            h-[500px]
            w-[500px]
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
            DESIGN JOURNAL
          </span>

          <h1
            className="
              mt-8
              text-6xl
              md:text-8xl
              font-black
              leading-[0.9]
            "
          >
            Insights &
            <br />
            Creative Thinking
          </h1>
        </div>
      </section>

      {/* Featured Section */}
      {featured && (
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="
                rounded-[40px]
                overflow-hidden
                bg-white/40
                backdrop-blur-xl
                border
                border-white/60
                shadow-[0_40px_80px_-30px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.5)]
                relative
                group
              "
            >
              {/* Liquid Glass Edge Highlights */}
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white to-transparent z-20" />
              <div className="absolute top-0 left-0 w-[1px] h-32 bg-gradient-to-b from-white to-transparent z-20" />

              <Link to={`/blog/${featured.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="overflow-hidden relative h-[500px]">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        ease-out
                        group-hover:scale-[1.02]
                      "
                    />
                  </div>

                  <div className="p-12 flex flex-col justify-center relative z-10">
                    <p className="text-slate-400">
                      Featured Article
                    </p>

                    <h2
                      className="
                        mt-4
                        text-4xl
                        md:text-5xl
                        font-black
                      "
                    >
                      {featured.title}
                    </h2>

                    <p
                      className="
                        mt-6
                        text-slate-600
                      "
                    >
                      {featured.excerpt}
                    </p>

                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        gap-2
                        font-medium
                      "
                    >
                      <span>Read Article</span>
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="
                  rounded-[32px]
                  overflow-hidden
                  bg-white/40
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_-20px_rgba(0,0,0,0.02)]
                  relative
                  group
                  flex
                  flex-col
                "
              >
                {/* Liquid Glass Edge Highlights */}
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent z-20" />
                <div className="absolute top-0 left-0 w-[1px] h-20 bg-gradient-to-b from-white to-transparent z-20" />

                <Link to={`/blog/${blog.slug}`} className="flex flex-col h-full">
                  <div className="h-64 w-full overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        ease-out
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">
                          {blog.category}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {blog.date}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-4
                          text-2xl
                          font-bold
                        "
                      >
                        {blog.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-slate-600
                        "
                      >
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/20 flex items-center gap-2 text-sm font-medium">
                      <span>Read Entry</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
              rounded-[48px]
              bg-white/40
              backdrop-blur-xl
              border
              border-white/60
              p-20
              text-center
              shadow-[0_40px_80px_-30px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.5)]
              relative
              overflow-hidden
            "
          >
            {/* Structural Bevel Accent */}
            <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-white to-transparent" />

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
              "
            >
              Stay Inspired
            </h2>

            <p
              className="
                mt-6
                text-slate-600
              "
            >
              Design insights, creative processes
              and branding strategies.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}