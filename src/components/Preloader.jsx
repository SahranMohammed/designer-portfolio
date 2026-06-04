import { useEffect, useState } from "react";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-50 flex items-center justify-center z-[9999]">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full glass animate-pulse mx-auto mb-6" />

          <h2 className="text-3xl font-bold tracking-[10px]">
            ART
          </h2>

          <p className="mt-3 text-slate-500">
            Loading Creativity...
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default Preloader;