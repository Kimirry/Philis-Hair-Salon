import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-pink-50/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h1 className="text-[10rem] sm:text-[14rem] font-extralight leading-none tracking-tighter text-pink-500/20 select-none">404</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="-mt-8 sm:-mt-14">
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-pink-500 font-medium">{t.notFound.label}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 tracking-tight">
            {t.notFound.title1}<br className="hidden sm:block" /> {t.notFound.title2}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-10">{t.notFound.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
            </svg>
            {t.notFound.btn1}
          </Link>

          <Link to="/services" className="inline-flex items-center gap-2 bg-white border border-pink-200 text-pink-500 hover:bg-pink-50 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300">
            {t.notFound.btn2}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-14 text-xs text-pink-300 italic">
          {t.notFound.slogan}
        </motion.p>
      </div>

      {/* Decorative floating elements */}
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[8%] w-3 h-3 bg-pink-200 rounded-full opacity-40 pointer-events-none" />
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[25%] right-[12%] w-2 h-2 bg-pink-300 rounded-full opacity-30 pointer-events-none" />
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] left-[15%] w-2.5 h-2.5 bg-pink-200 rounded-full opacity-35 pointer-events-none" />
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[30%] right-[8%] w-2 h-2 bg-pink-300 rounded-full opacity-25 pointer-events-none" />
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-[45%] left-[5%] w-1.5 h-1.5 bg-pink-400 rounded-full opacity-20 pointer-events-none" />
    </div>
  );
}
