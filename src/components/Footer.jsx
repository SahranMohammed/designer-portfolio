import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-40 relative overflow-hidden border-t border-white/40 bg-white/[0.12] backdrop-blur-3xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.7)]">
      
      {/* Liquid Color Blowout Behind the Footer Pane */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-200/20 blur-[120px]" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-blue-200/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Pillar Column */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-black mb-4 tracking-tight">
              ART.
            </h3>
            <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
              Creating meaningful visual experiences for ambitious brands.
            </p>
          </div>

          {/* Navigation Links Grid Space */}
          <div className="md:col-span-4 md:col-start-7">
            <h4 className="font-semibold text-slate-800 mb-6 tracking-wide uppercase text-xs">
              Navigation
            </h4>
            <div className="flex flex-col gap-3.5 text-slate-500 font-medium">
              <Link to="/" className="hover:text-slate-900 transition-colors duration-300 w-fit">Home</Link>
              <Link to="/about" className="hover:text-slate-900 transition-colors duration-300 w-fit">About</Link>
              <Link to="/services" className="hover:text-slate-900 transition-colors duration-300 w-fit">Services</Link>
              <Link to="/pricing" className="hover:text-slate-900 transition-colors duration-300 w-fit">Pricing</Link>
              <Link to="/blog" className="hover:text-slate-900 transition-colors duration-300 w-fit">Blog</Link>
              <Link to="/contact" className="hover:text-slate-900 transition-colors duration-300 w-fit">Contact</Link>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-slate-800 mb-6 tracking-wide uppercase text-xs">
              Follow
            </h4>
            <div className="flex flex-col gap-3.5 text-slate-500 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors duration-300 w-fit">Behance</a>
              <a href="#" className="hover:text-slate-900 transition-colors duration-300 w-fit">Dribbble</a>
              <a href="#" className="hover:text-slate-900 transition-colors duration-300 w-fit">Instagram</a>
            </div>
          </div>

        </div>

        {/* Closing Sub-Footer Strip */}
        <div className="pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
          <div>
            © 2026 All Rights Reserved.
          </div>
          <div className="text-[10px] tracking-widest uppercase text-slate-400">
            Liquid Glass Ecosystem
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;