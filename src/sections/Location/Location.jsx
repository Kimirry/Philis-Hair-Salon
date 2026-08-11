import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-pink-50/30 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-4">{t.location.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            {t.location.title1}{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{t.location.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{t.location.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* LEFT — Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              {t.location.info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  {/* Icons based on index */}
                  <div className="flex-shrink-0 w-11 h-11 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                    {i === 0 && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-gray-900 font-medium">{item.value}</p>
                    {item.secondary && <p className="text-gray-500 text-sm mt-1">{item.secondary}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.location.hoursTitle}
              </h3>

              <div className="space-y-3">
                {t.location.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="text-gray-900 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-pink-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                  {t.location.lastAppt}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Exact location map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps?q=25.268516540527344,51.54402160644531&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.mapTitle}
                className="absolute inset-0"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg max-w-xs">
                <p className="font-semibold text-gray-900 text-sm">{t.footer.address1}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.footer.address2}</p>
                <p className="text-[11px] text-gray-400 mt-1">{t.footer.address3}</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=25.268516540527344,51.54402160644531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-pink-500 font-medium mt-3 hover:text-pink-600 transition-colors"
                >
                  {t.location.getDirections}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
