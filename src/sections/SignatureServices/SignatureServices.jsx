import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import hair1 from "../../assets/hair11.jpeg";
import nails1 from "../../assets/nails11.jpeg";
import makeup1 from "../../assets/makeup1.jpeg";
import nails7 from "../../assets/nails7.jpeg";

const images = [hair1, nails1, makeup1, nails7];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function SignatureServices() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(244,163,185,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,207,232,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-4">{t.signature.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            {t.signature.title1}{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{t.signature.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{t.signature.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {t.signature.items.map((service, i) => (
            <motion.div key={service.name} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
              <Link to="/services" className="group block relative rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={images[i]} alt={`${service.name} at Philis Salon, Al Khalidiya Qatar`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-300">{service.name}</h3>
                    <p className="text-sm text-white/90 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link to="/services" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors duration-300 group">
            {t.signature.viewAll}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
