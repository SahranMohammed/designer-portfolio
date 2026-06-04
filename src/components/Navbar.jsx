import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Used to coordinate the sliding glass active indicator

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-6 transition-all duration-500">
        <div
          className={`
            max-w-7xl mx-auto
            rounded-full
            transition-all duration-500 ease-out
            backdrop-blur-xl
            border
            relative
            ${
              scrolled
                ? "bg-white/40 border-white/40 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05),inset_0_1px_2px_rgba(255,255,255,0.6)]"
                : "bg-white/15 border-white/25 shadow-[0_4px_30px_rgba(0,0,0,0.01),inset_0_1px_1px_rgba(255,255,255,0.4)]"
            }
          `}
        >
          {/* Micro-Prismatic Top Highlight Rail */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between h-16 px-6">
            
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-black tracking-widest text-slate-900 relative group"
            >
              LUMINA<span className="text-indigo-500">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500/50 transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-950/5 border border-slate-950/5 rounded-full p-1.5 backdrop-blur-md relative">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="text-sm font-semibold tracking-tight transition-colors duration-300 px-5 py-2 rounded-full relative z-10"
                    style={({ isActive }) => ({
                      color: isActive ? "#0f172a" : "#64748b"
                    })}
                  >
                    <span className="relative z-20">{item.name}</span>
                    
                    {/* Sliding Glass Active Pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white/80 border border-white/50 rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,1)] z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                className="
                  bg-slate-900/90
                  text-white
                  text-sm
                  font-semibold
                  rounded-full
                  px-6
                  py-3
                  flex
                  items-center
                  gap-2
                  hover:bg-slate-900
                  hover:shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)]
                  transform hover:-translate-y-[1px]
                  active:translate-y-0
                  transition-all duration-200
                  border border-white/10
                "
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={15} className="opacity-80" />
              </button>
            </div>

            {/* Mobile Toggle Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/40 border border-transparent hover:border-white/40 transition-all duration-200 text-slate-800"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-28 left-4 right-4 z-40 max-w-lg mx-auto"
          >
            <div
              className="
                bg-white/40
                backdrop-blur-2xl
                border border-white/50
                rounded-[32px]
                p-6
                shadow-[0_40px_60px_-15px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,0.6)]
                relative
              "
            >
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
              
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      rounded-2xl
                      px-5
                      py-3.5
                      font-semibold
                      text-sm
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-slate-900/90 border border-white/10 text-white shadow-md"
                          : "text-slate-600 hover:bg-white/50 border border-transparent hover:border-white/40"
                      }
                    `
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <button
                onClick={() => setMenuOpen(false)}
                className="
                  mt-5
                  w-full
                  bg-white/80
                  text-slate-900
                  font-bold
                  text-sm
                  border border-white/60
                  rounded-2xl
                  py-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_1px_rgba(255,255,255,1)]
                  hover:bg-white
                  transition-colors duration-200
                "
              >
                <span>Start Project</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}