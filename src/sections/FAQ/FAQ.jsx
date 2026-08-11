import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 sm:py-6 text-left group" aria-expanded={isOpen}>
        <span className={`text-base sm:text-lg pr-8 transition-colors duration-300 ${isOpen ? "text-gray-900 font-medium" : "text-gray-700 group-hover:text-gray-900"}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-pink-500 rotate-45" : "bg-gray-100 group-hover:bg-gray-200"}`}>
          <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <p className="text-gray-500 leading-relaxed pb-6 pr-12 text-sm sm:text-base">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-4">{t.faq.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            {t.faq.title1}{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{t.faq.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">{t.faq.desc}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50/50 rounded-3xl px-6 sm:px-8 border border-gray-100"
        >
          {t.faq.items.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-3">{t.faq.still}</p>
          <a
            href="https://wa.me/97455257237?text=%20Hi%2C%20I%20have%20a%20question%20about%20Philis%20Salon."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.faq.askWhatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
