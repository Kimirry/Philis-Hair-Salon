import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Hair Styling",
    slug: "/services/manicure",
    description: "Precision cuts, color, and styling for every occasion",
    image: "https://picsum.photos/seed/philis-svc-hair/600/700.jpg",
  },
  {
    name: "Manicure",
    slug: "/services/manicure",
    description: "Flawless nails with gel, acrylic, and classic finishes",
    image: "https://picsum.photos/seed/philis-svc-manicure/600/700.jpg",
  },
  {
    name: "Pedicure",
    slug: "/services/pedicure",
    description: "Relaxing foot care with premium products and polish",
    image: "https://picsum.photos/seed/philis-svc-pedicure/600/700.jpg",
  },
  {
    name: "Makeup",
    slug: "/services/makeup",
    description: "Bridal, editorial, and everyday glam by expert artists",
    image: "https://picsum.photos/seed/philis-svc-makeup/600/700.jpg",
  },
  {
    name: "Lash Extensions",
    slug: "/services/lash-extensions",
    description: "Custom lash lifts, sets, and volume enhancements",
    image: "https://picsum.photos/seed/philis-svc-lashes/600/700.jpg",
  },
  {
    name: "Facial Treatment",
    slug: "/services/facial",
    description: "Deep cleansing, hydrating, and anti-aging facials",
    image: "https://picsum.photos/seed/philis-svc-facial/600/700.jpg",
  },
  {
    name: "Waxing",
    slug: "/services/waxing",
    description: "Gentle, effective hair removal for silky smooth skin",
    image: "https://picsum.photos/seed/philis-svc-waxing/600/700.jpg",
  },
  {
    name: "Massage",
    slug: "/services/massage",
    description: "Therapeutic body and scalp massages for total relaxation",
    image: "https://picsum.photos/seed/philis-svc-massage/600/700.jpg",
  },
  {
    name: "Braiding",
    slug: "/services/braiding",
    description: "Intricate braids, cornrows, and protective styles",
    image: "https://picsum.photos/seed/philis-svc-braiding/600/700.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function SignatureServices() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(244,163,185,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,207,232,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            Signature Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From head to toe, every service at Philis is designed to elevate your natural beauty. Discover treatments crafted with care, premium products, and expert technique.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link
                to={service.slug}
                className="group block relative rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} at Philis Salon, Al Khalidiya Qatar`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium transition-colors duration-300 group"
          >
            View All Services & Pricing
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
