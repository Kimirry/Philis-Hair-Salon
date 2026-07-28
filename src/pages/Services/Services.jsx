import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    slug: "manicure",
    name: "Manicure",
    tagline: "Nail Art & Care",
    excerpt: "From classic polished elegance to intricate, hand-painted nail art. Our technicians sculpt and care for your hands using premium, long-lasting formulas.",
    image: "https://picsum.photos/seed/philis-svc-manicure/600/800.jpg",
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    tagline: "Foot Care & Polish",
    excerpt: "Surrender your feet to a sanctuary of relaxation. Deep soaks, exfoliation, and flawless polish application leave you walking on air.",
    image: "https://picsum.photos/seed/philis-svc-pedicure/600/800.jpg",
  },
  {
    slug: "makeup",
    name: "Makeup",
    tagline: "Glam & Bridal",
    excerpt: "Whether it's your wedding day or a night out, our artists blend premium pigments to enhance your natural beauty and ensure you look flawless for hours.",
    image: "https://picsum.photos/seed/philis-svc-makeup/600/800.jpg",
  },
  {
    slug: "lash-extensions",
    name: "Lash Extensions",
    tagline: "Lifts & Sets",
    excerpt: "Wake up beautiful. Our custom lash lifts, classic sets, and volume extensions are meticulously applied to complement your unique eye shape.",
    image: "https://picsum.photos/seed/philis-svc-lashes/600/800.jpg",
  },
  {
    slug: "facial",
    name: "Facial Treatment",
    tagline: "Skincare & Glow",
    excerpt: "Breathe life back into your skin. Our curated facials target everything from deep impurities to hydration, leaving your complexion radiant and youthful.",
    image: "https://picsum.photos/seed/philis-svc-facial/600/800.jpg",
  },
  {
    slug: "waxing",
    name: "Waxing",
    tagline: "Smooth & Silky",
    excerpt: "Experience incredibly smooth skin with our gentle, premium wax formulas. Designed for minimal discomfort and maximum, long-lasting results.",
    image: "https://picsum.photos/seed/philis-svc-waxing/600/800.jpg",
  },
  {
    slug: "massage",
    name: "Massage",
    tagline: "Relax & Rejuvenate",
    excerpt: "Melt away the stress of Doha. Our therapeutic massages are tailored to your body's needs, restoring balance, circulation, and deep peace.",
    image: "https://picsum.photos/seed/philis-svc-massage/600/800.jpg",
  },
  {
    slug: "braiding",
    name: "Braiding",
    tagline: "Protective Styles",
    excerpt: "Artistry meets heritage. From knotless box braids to intricate cornrows, our stylists craft protective styles that are as stunning as they are gentle.",
    image: "https://picsum.photos/seed/philis-svc-braiding/600/800.jpg",
  },
  {
    slug: "wig-installation",
    name: "Wig Installation",
    tagline: "Flawless Fits",
    excerpt: "Achieve a completely undetectable hairline. We specialize in frontals, closures, and glueless installs, customizing each wig to frame your face perfectly.",
    image: "https://picsum.photos/seed/philis-svc-wig/600/800.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(244,163,185,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_100%,rgba(251,207,232,0.05),transparent_50%)]" />

      {/* Header / Hero */}
      <div className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-6">
            The Philis Menu
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            Our Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* Brand Quote */}
          <p className="text-xl sm:text-2xl font-serif italic text-gray-400 mb-8">
            "I'm just a girl who loves making other girls feel awesome."
          </p>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            At Philis, we don’t just offer appointments; we curate personalized beauty experiences. 
            Every service is thoughtfully designed to nurture your confidence, celebrate your unique features, 
            and send you back into the world feeling absolutely radiant.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name} at Philis Salon, Doha`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Tagline Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {service.name}
                </h3>
                
                {/* The "Detailed Scripture" */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {service.excerpt}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-stone-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600 border border-gray-100 hover:border-pink-100 py-3 rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                >
                  View Full Menu
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 bg-stone-50 rounded-3xl p-8 sm:p-12 text-center border border-stone-100"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Our team loves helping you build the perfect self-care day. 
            Reach out on WhatsApp, tell us what you're looking for, and we’ll 
            handle the rest.
          </p>
          <a
            href="https://wa.me/97455257237?text=%20Hi%2C%20I'd%20like%20to%20book%20at%20Philis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
