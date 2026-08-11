import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Scissors, Hand, Eye, Waves, Smile, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const icons = [Hand, Heart, Sparkles, Scissors, Smile, Waves, Sparkles, Eye, Heart, Scissors];

export default function Services() {
  const { t } = useLanguage();

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[62vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-pink-100 blur-3xl opacity-80" />
          <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-rose-100 blur-3xl opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-pink-50/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-500 font-medium mb-5">
              <Sparkles className="w-4 h-4" />
              {t.services.eyebrow}
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tight text-gray-900 leading-[0.95]">
              {t.services.title1}<br />
              <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{t.services.title2}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-500 leading-relaxed">{t.services.desc}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pink-300">
                {t.services.bookBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3.5 text-sm font-medium text-gray-800 transition-all duration-300 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600">
                {t.services.exploreBtn}
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-t border-pink-100 pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{t.footer.address1}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{t.hero.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="lg:col-span-5">
              <span className="text-xs tracking-[0.25em] uppercase text-pink-500 font-medium">{t.services.introEyebrow}</span>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
                {t.services.introTitle1}<br />
                <span className="font-medium text-pink-500">{t.services.introTitle2}</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="lg:col-span-7 lg:pt-5">
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{t.services.introDesc}</p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {t.services.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 sm:py-20 lg:py-24 bg-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-2xl mb-10 sm:mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-pink-500 font-medium">{t.services.gridEyebrow}</span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">
              {t.services.gridTitle1}<br />
              <span className="font-medium text-pink-500">{t.services.gridTitle2}</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">{t.services.gridDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pink-100 border border-pink-100 overflow-hidden rounded-3xl">
            {t.services.items.map((service, index) => {
              const Icon = icons[index];
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }} className="group bg-white p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:bg-pink-50/60">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs tracking-[0.15em] text-pink-400 font-medium">{service.number}</span>
                    <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="mt-7 text-xl sm:text-2xl font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
              <span className="text-xs tracking-[0.25em] uppercase text-pink-500 font-medium">{t.services.expEyebrow}</span>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
                {t.services.expTitle1}<br />
                <span className="font-medium text-pink-500">{t.services.expTitle2}</span><br />
                {t.services.expTitle3}
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-6">
              <div className="pb-6 border-b border-pink-100">
                <p className="text-gray-500 text-lg leading-relaxed">{t.services.expDesc}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-light text-pink-500">01</div>
                  <h3 className="mt-2 font-medium text-gray-900">{t.services.exp1Title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t.services.exp1Desc}</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-pink-500">02</div>
                  <h3 className="mt-2 font-medium text-gray-900">{t.services.exp2Title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t.services.exp2Desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-pink-50 border border-pink-100 px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 right-0 w-80 h-80 bg-pink-200/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs tracking-[0.25em] uppercase text-pink-500 font-medium">{t.services.ctaEyebrow}</span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              {t.services.ctaTitle1}<br />
              <span className="font-medium text-pink-500">{t.services.ctaTitle2}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-gray-500 leading-relaxed">{t.services.ctaDesc}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-300">
                {t.services.bookBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a href="https://wa.me/97455257237?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20Philis%20Hair%20%26%20Beauty." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3.5 text-sm font-medium text-gray-800 transition-all duration-300 hover:border-pink-400 hover:bg-pink-100 hover:text-pink-600">
                {t.services.ctaWhatsapp}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
