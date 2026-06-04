import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { MessageSquare, Send, User, ArrowRight, Clock } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { blogs } from "../../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();

  // Scroll tracking mechanics for the fluid liquid-glass progress bar
  const { scrollYProgress } = useScroll();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  // Derive the next chronological post to construct a perfect reader retention bridge
  const currentIndex = blogs.findIndex((item) => item.slug === slug);
  const nextBlog = blogs[(currentIndex + 1) % blogs.length];

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "June 2, 2026",
      text: "This breakdown of strategic typography completely shifts how I'm approaching our current brand refresh. Incredible insight on spacing hierarchy."
    },
    {
      id: 2,
      name: "Marcus Chen",
      date: "May 28, 2026",
      text: "The point about balancing residual visual space with high-impact color constraints is exactly what most modern design systems miss."
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const freshComment = {
      id: Date.now(),
      name: newName,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      text: newComment
    };

    setComments([freshComment, ...comments]);
    setNewName("");
    setNewComment("");
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="rounded-[28px] bg-white/40 backdrop-blur-xl border border-white/60 p-8 text-center font-semibold">
          Article not found
        </div>
      </div>
    );
  }

  return (
    <main className=" min-h-screen relative overflow-hidden border-slate-200" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>

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

      {/* Persistent Fluid Glow Environment */}
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

      {/* Main Splitted Content Ecosystem */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Column: High-Fidelity Sticky Media showcase */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 w-full">
            <div
              className="
                overflow-hidden
                rounded-[40px]
                border border-white/80
                shadow-[0_50px_100px_-40px_rgba(15,23,42,0.08),inset_0_1px_3px_rgba(255,255,255,0.8)]
                relative
                h-[450px] md:h-[600px] lg:h-[680px]
                w-full
              "
            >
              {/* Edge Prism Glare Effect */}
              <div className="absolute top-0 left-0 w-40 h-[1px] bg-gradient-to-r from-white to-transparent z-10" />
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* Right Side Column: Editorial Reader Panel */}
          <div className="lg:col-span-7 space-y-8 w-full">
            
            {/* Context & Heading Cluster */}
            <div>
              <p className="text-slate-400 font-medium uppercase tracking-wider">
                {blog.category}
              </p>

              <h1
                className="
                  mt-4
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                "
              >
                {blog.title}
              </h1>

              {/* Combined Engagement Meta Indicators */}
              <div className="mt-6 flex items-center gap-4 text-slate-500">
                <span>{blog.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider">
                  <Clock size={13} className="text-slate-400" />
                  <span>4 min read</span>
                </div>
              </div>
            </div>

            {/* Master Content Glass Block */}
            <div
              className="
                rounded-[40px]
                bg-white/40
                backdrop-blur-xl
                border
                border-white/60
                p-10 md:p-12
                shadow-[0_30px_60px_-25px_rgba(0,0,0,0.02),inset_0_1px_3px_rgba(255,255,255,0.6)]
                relative
              "
            >
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-white to-transparent" />
              
              <p
                className="
                  text-lg
                  leading-relaxed
                  text-slate-700
                "
              >
                {blog.content}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Lower Feed & Retention Blocks (Unified Container) */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Spacer to push lower interactive elements directly aligned with the Reader axis */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Core Feature Column */}
          <div className="lg:col-span-7 space-y-16 w-full">
            
            {/* Retention Bridge: "Next Up" Article Teaser Block */}
            {nextBlog && (
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-4">
                  Continue Reading
                </p>
                
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-[32px]
                    overflow-hidden
                    bg-white/40
                    backdrop-blur-xl
                    border border-white/60
                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_20px_40px_-20px_rgba(0,0,0,0.02)]
                    group
                    relative
                  "
                >
                  <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white to-transparent z-20" />
                  
                  <Link to={`/blog/${nextBlog.slug}`} className="flex flex-col sm:flex-row items-stretch">
                    <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[140px] overflow-hidden">
                      <img 
                        src={nextBlog.image} 
                        alt={nextBlog.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-8 sm:w-2/3 flex flex-col justify-center">
                      <span className="text-slate-400 text-xs font-medium uppercase tracking-wider block">
                        Next Entry — {nextBlog.category}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-indigo-600">
                        {nextBlog.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 font-medium text-slate-700 text-sm">
                        <span>Read Next Story</span>
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Integrated Interactive Commenting Interface */}
            <div className="space-y-12">
              
              {/* Glass Form Platter */}
              <div className="rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/60 p-10 md:p-12 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] relative">
                <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-white to-transparent" />
                
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare size={22} className="text-slate-800" />
                  <h3 className="text-2xl font-bold tracking-tight">Join the Discussion</h3>
                </div>

                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">Your Name</label><br></br>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="e.g., Alex Rivera"
                        className="w-full max-w-md px-5 py-3.5 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400 font-medium transition duration-200 shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1">Commentary</label>
                    <textarea
                      rows={4}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your perspective or questions..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400 font-medium transition duration-200 resize-none shadow-[inset_0_1px_1px_rgba(0,0,0,0.01)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-slate-800 shadow-md shadow-slate-900/5"
                  >
                    <span>Post Comment</span>
                    <Send size={14} />
                  </button>
                </form>
              </div>

              {/* Dynamic Feed List */}
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-2">
                  Discussion Feed ({comments.length})
                </h4>

                <div className="space-y-4">
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="rounded-[32px] bg-white/30 backdrop-blur-xl border border-white/50 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_30px_-15px_rgba(0,0,0,0.01)] relative"
                    >
                      <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-white to-transparent" />
                      
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-white/80 text-slate-700 shadow-sm shrink-0">
                          <User size={16} />
                        </div>
                        
                        <div className="space-y-2 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span className="font-bold text-slate-900 text-base">{comment.name}</span>
                            <span className="text-xs font-semibold text-slate-400">{comment.date}</span>
                          </div>
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                            {comment.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}