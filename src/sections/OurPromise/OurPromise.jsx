import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function OurPromise() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,207,232,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-4">{t.promise.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            {t.promise.title1}{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{t.promise.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{t.promise.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.promise.items.map((promise, i) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-14 h-14 bg-pink-50 group-hover:bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mx-auto mb-5 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-2">{promise.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
