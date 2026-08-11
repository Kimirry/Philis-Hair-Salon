import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import door from "../../assets/door.jpeg";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-pink-50/60 via-white to-white overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">
            {t.about.eyebrow}
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            {t.about.title1}{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">{t.about.title2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t.about.desc}
          </motion.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/30">
                <img src={door} alt="Entrance to Philis Hair & Beauty Salon in Doha" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-100/50 rounded-2xl -z-10" />
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-rose-400">{t.footer.brand}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{t.footer.address1}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">{t.about.beginning}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-7 leading-tight">
                {t.about.title3} <span className="font-medium">{t.about.title4}</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
              <div className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium transition-colors duration-300 group">
                  {t.about.discoverMore}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILIS EXPERIENCE */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">{t.about.experienceEyebrow}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                {t.about.title5} <span className="font-medium">{t.about.title6}</span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">{t.about.experienceDesc}</p>
              <div className="mt-8 h-px w-24 bg-rose-200" />
              <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-lg">{t.about.experienceSub}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {t.about.philosophy.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm font-medium mb-4">{item.number}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY / CARE */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl bg-pink-50/60 border border-pink-100 p-8 sm:p-12 text-center">
            <span className="text-rose-400 text-2xl">✦</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-light text-gray-900">{t.about.privacyTitle}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">{t.about.privacyDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-rose-400 text-3xl">✦</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              {t.about.closingTitle1} <span className="font-medium text-rose-500">{t.about.closingTitle2}</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg">{t.about.closingDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-5">
              {t.about.ctaTitle1}{" "}
              <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">{t.about.ctaTitle2}</span>
            </h2>
            <p className="text-gray-500 mb-8 text-lg">{t.about.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/97455257237?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20Philis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.371-.57.372-.792.372-.272 1.04-1.016 1.04-2.479 0-1.462-1.065-2.875-1.213-3.074-.149-.198-2.096-3.2-5.077-4.487-.709-.306-1.262-.489-1.694-.625-.712-.227-1.36-.195-1.871-.118-.571-.085-1.758-.719-2.006-1.413-.248-.694-.248-1.289-.173-1.413.074-.124.272-.198.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.about.ctaBtn1}
              </a>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300">
                {t.about.ctaBtn2}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
