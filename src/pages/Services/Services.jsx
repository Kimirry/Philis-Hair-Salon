import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const serviceData = {
  manicure: {
    name: "Manicure",
    tagline: "Nail Art & Care",
    description: "Keep your hands looking polished and elegant with our range of manicure treatments using premium nail products. From classic polish to intricate nail art, our nail technicians deliver flawless results every time.",
    image: "https://picsum.photos/seed/philis-detail-manicure/800/500.jpg",
    services: [
      { name: "Classic Manicure", description: "Shape, cuticle care, hand massage, and polish.", duration: "45 min" },
      { name: "Gel Manicure", description: "Long-lasting gel polish with a flawless shine.", duration: "60 min" },
      { name: "Acrylic Nails", description: "Full set of sculpted acrylic extensions.", duration: "90 min" },
      { name: "Nail Art", description: "Custom hand-painted designs for a unique look.", duration: "60–90 min" },
      { name: "French Manicure", description: "Timeless French tip style with a modern finish.", duration: "50 min" },
      { name: "Nail Repair", description: "Fix broken or damaged nails with expert care.", duration: "30 min" },
    ],
    seoTitle: "Manicure Services in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Professional manicure services in Al Khalidiya, Qatar. Gel, acrylic, nail art, and classic manicures by expert nail technicians at Philis Hair & Beauty Salon.",
  },
  pedicure: {
    name: "Pedicure",
    tagline: "Foot Care & Polish",
    description: "Relaxing pedicure treatments that leave your feet soft, smooth, and beautifully polished. Our pedicures include foot soaks, exfoliation, and premium polish application.",
    image: "https://picsum.photos/seed/philis-detail-pedicure/800/500.jpg",
    services: [
      { name: "Classic Pedicure", description: "Foot soak, exfoliation, nail care, and polish.", duration: "50 min" },
      { name: "Spa Pedicure", description: "Luxury pedicure with mask, hot stones, and extended massage.", duration: "75 min" },
      { name: "Gel Pedicure", description: "Long-lasting gel polish for perfectly polished toes.", duration: "60 min" },
      { name: "Foot Scrub & Mask", description: "Deep exfoliation and hydrating foot mask treatment.", duration: "40 min" },
      { name: "Callus Treatment", description: "Gentle removal of hard skin for smooth, comfortable feet.", duration: "30 min" },
    ],
    seoTitle: "Pedicure Services in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Relaxing pedicure treatments in Al Khalidiya, Qatar. Spa pedicures, gel polish, and foot care at Philis Hair & Beauty Salon.",
  },
  makeup: {
    name: "Makeup",
    tagline: "Glam & Bridal",
    description: "Professional makeup application for weddings, events, photo shoots, or everyday glam. Our makeup artists use premium products to create looks that enhance your natural beauty and last all day.",
    image: "https://picsum.photos/seed/philis-detail-makeup/800/500.jpg",
    services: [
      { name: "Bridal Makeup", description: "Complete bridal look with trial session recommended.", duration: "120 min" },
      { name: "Event Makeup", description: "Glamorous makeup for parties, galas, and special occasions.", duration: "60–90 min" },
      { name: "Party Glam", description: "Bold, expressive makeup for nights out and celebrations.", duration: "60 min" },
      { name: "Natural Makeup", description: "Subtle, fresh-faced look for everyday confidence.", duration: "45 min" },
      { name: "Makeup Trial", description: "Test your look before the big day.", duration: "60 min" },
    ],
    seoTitle: "Professional Makeup Artist in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Bridal and event makeup services in Al Khalidiya, Qatar. Professional makeup artists at Philis Hair & Beauty Salon.",
  },
  "lash-extensions": {
    name: "Lash Extensions",
    tagline: "Lifts & Sets",
    description: "Enhance your eyes with custom lash extensions, lifts, and volume sets. Our lash artists work with precision to create a naturally beautiful look that complements your eye shape.",
    image: "https://picsum.photos/seed/philis-detail-lashes/800/500.jpg",
    services: [
      { name: "Classic Lashes", description: "One extension per lash for a natural enhancement.", duration: "90 min" },
      { name: "Volume Lashes", description: "Handmade fans for a fuller, more dramatic look.", duration: "120 min" },
      { name: "Hybrid Lashes", description: "A mix of classic and volume for textured dimension.", duration: "105 min" },
      { name: "Lash Lift", description: "Semi-permanent curl that lasts 6–8 weeks.", duration: "60 min" },
      { name: "Lash Tint", description: "Darkens natural lashes for a defined look without mascara.", duration: "30 min" },
      { name: "Lash Fills", description: "Maintenance refresh for existing extensions.", duration: "60–75 min" },
    ],
    seoTitle: "Lash Extensions in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Classic, volume, and hybrid lash extensions in Al Khalidiya, Qatar. Lash lifts and fills at Philis Hair & Beauty Salon.",
  },
  waxing: {
    name: "Waxing",
    tagline: "Smooth & Silky",
    description: "Gentle and effective waxing for silky smooth skin. We use premium wax formulas designed for minimal discomfort and maximum results.",
    image: "https://picsum.photos/seed/philis-detail-waxing/800/500.jpg",
    services: [
      { name: "Full Body Wax", description: "Complete body waxing from head to toe.", duration: "120 min" },
      { name: "Half Leg Wax", description: "Waxing from knee to ankle or thigh to knee.", duration: "30 min" },
      { name: "Bikini Wax", description: "Bikini line waxing with precision and care.", duration: "30 min" },
      { name: "Underarm Wax", description: "Quick, effective underarm hair removal.", duration: "15 min" },
      { name: "Upper Lip Wax", description: "Gentle removal of upper lip hair.", duration: "10 min" },
      { name: "Full Arm Wax", description: "Complete arm waxing for smooth, hair-free skin.", duration: "30 min" },
    ],
    seoTitle: "Waxing Services in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Professional waxing services in Al Khalidiya, Qatar. Full body, bikini, and facial waxing at Philis Hair & Beauty Salon.",
  },
  massage: {
    name: "Massage",
    tagline: "Relax & Rejuvenate",
    description: "Unwind with our therapeutic massages designed to relieve tension, improve circulation, and restore your energy. Each session is tailored to your comfort level and needs.",
    image: "https://picsum.photos/seed/philis-detail-massage/800/500.jpg",
    services: [
      { name: "Full Body Massage", description: "Head-to-toe relaxation massage.", duration: "60–90 min" },
      { name: "Back & Shoulder Massage", description: "Focused relief for tension-prone areas.", duration: "30 min" },
      { name: "Scalp Massage", description: "Deep scalp stimulation for relaxation and hair health.", duration: "20 min" },
      { name: "Aromatherapy Massage", description: "Essential oil-infused massage for holistic relaxation.", duration: "60 min" },
      { name: "Deep Tissue Massage", description: "Firm pressure massage targeting deep muscle tension.", duration: "60 min" },
    ],
    seoTitle: "Massage Therapy in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Relaxing massage therapy in Al Khalidiya, Qatar. Full body, deep tissue, and aromatherapy massages at Philis Hair & Beauty Salon.",
  },
  braiding: {
    name: "Braiding",
    tagline: "Protective Styles",
    description: "Intricate braids, cornrows, and protective styles crafted with care and creativity. Our braiding specialists work with all hair types and textures.",
    image: "https://picsum.photos/seed/philis-detail-braiding/800/500.jpg",
    services: [
      { name: "Cornrows", description: "Classic straight-back or patterned cornrows.", duration: "90–150 min" },
      { name: "Box Braids", description: "Individual box braids in your preferred length and size.", duration: "180–300 min" },
      { name: "Knotless Braids", description: "Lightweight, tension-free knotless braid installation.", duration: "180–360 min" },
      { name: "Twist Styles", description: "Two-strand twists or flat twists for a versatile look.", duration: "90–180 min" },
      { name: "Braided Updo", description: "Elegant braided updo for events and special occasions.", duration: "90–120 min" },
    ],
    seoTitle: "Braiding Services in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Professional braiding services in Al Khalidiya, Qatar. Box braids, cornrows, knotless braids at Philis Hair & Beauty Salon.",
  },
  facial: {
    name: "Facial Treatment",
    tagline: "Skincare & Glow",
    description: "Rejuvenate your skin with our curated facials. From deep cleansing to hydrating and anti-aging treatments, each facial is customized to your skin type and concerns.",
    image: "https://picsum.photos/seed/philis-detail-facial/800/500.jpg",
    services: [
      { name: "Deep Cleansing Facial", description: "Purifying facial to remove impurities and unclog pores.", duration: "60 min" },
      { name: "Hydrating Facial", description: "Intense moisture boost for dry, dehydrated skin.", duration: "60 min" },
      { name: "Anti-Aging Facial", description: "Firming and lifting treatment to reduce fine lines.", duration: "75 min" },
      { name: "Brightening Facial", description: "Evens skin tone and restores radiant glow.", duration: "60 min" },
      { name: "Acne Treatment", description: "Targeted treatment for acne-prone and congested skin.", duration: "60 min" },
    ],
    seoTitle: "Facial Treatment in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Professional facial treatments in Al Khalidiya, Qatar. Deep cleansing, hydrating, and anti-aging facials at Philis Hair & Beauty Salon.",
  },
  "wig-installation": {
    name: "Wig Installation",
    tagline: "Flawless Fits",
    description: "Professional wig installation for a natural, secure look. We work with all wig types — frontal, closure, and full wigs — ensuring a seamless blend with your hairline.",
    image: "https://picsum.photos/seed/philis-detail-wig/800/500.jpg",
    services: [
      { name: "Wig Install (Glueless)", description: "Secure glueless installation for easy removal.", duration: "45 min" },
      { name: "Wig Install (Adhesive)", description: "Long-lasting adhesive install for a natural hairline.", duration: "60–90 min" },
      { name: "Wig Customization", description: "Cut, style, and customize your wig to suit your face.", duration: "60 min" },
      { name: "Wig Cut & Style", description: "Professional cut and styling for a finished look.", duration: "45 min" },
      { name: "Frontal Install", description: "Melted frontal installation for the most natural result.", duration: "90–120 min" },
    ],
    seoTitle: "Wig Installation in Al Khalidiya, Doha | Philis Salon",
    seoDescription: "Professional wig installation in Al Khalidiya, Qatar. Frontal, glueless, and adhesive wig installs at Philis Hair & Beauty Salon.",
  },
};

export default function Service() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      {/* SEO: document title set via useEffect or helmet — for now the h1 carries SEO weight */}
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 bg-gradient-to-b from-pink-50/50 to-white overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-rose-100/25 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-rose-500 hover:text-rose-600 mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4"
          >
            {service.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
          >
            {service.name}{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-2 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto aspect-[16/7] sm:aspect-[16/6] rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={service.image}
            alt={`${service.name} at Philis Hair & Beauty Salon, Al Khalidiya Qatar`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Service list */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-light text-gray-900 mb-10 text-center"
          >
            Available <span className="font-medium">{service.name}</span> Treatments
          </motion.h2>

          <div className="space-y-4">
            {service.services.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:shadow-md hover:border-rose-100 transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                    {item.duration}
                  </span>
                  <a
                    href={`https://wa.me/97455257237?text=${encodeURIComponent(`Hi, I'd like to book ${item.name} (${item.duration}) at Philis.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm"
                  >
                    Book
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-14 bg-gradient-to-br from-gray-900 to-rose-950 rounded-3xl p-8 sm:p-10 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              Ready for Your {service.name} Appointment?
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Book now on WhatsApp — quick, easy, and personal.
            </p>
            <a
              href={`https://wa.me/97455257237?text=${encodeURIComponent(`Hi, I'd like to book a ${service.name} service at Philis.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-green-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book {service.name} Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
