import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: "https://picsum.photos/seed/philis-gal-1/600/750.jpg", alt: "Hair styling result at Philis Salon", category: "Hair", span: "sm:col-span-2 sm:row-span-2" },
  { src: "https://picsum.photos/seed/philis-gal-2/600/600.jpg", alt: "Nail art design at Philis", category: "Nails", span: "" },
  { src: "https://picsum.photos/seed/philis-gal-3/600/600.jpg", alt: "Bridal makeup by Philis", category: "Makeup", span: "" },
  { src: "https://picsum.photos/seed/philis-gal-4/600/600.jpg", alt: "Lash extension results", category: "Lashes", span: "" },
  { src: "https://picsum.photos/seed/philis-gal-5/600/750.jpg", alt: "Braiding styles at Philis", category: "Braiding", span: "sm:col-span-2" },
  { src: "https://picsum.photos/seed/philis-gal-6/600/600.jpg", alt: "Facial treatment glow", category: "Facial", span: "" },
  { src: "https://picsum.photos/seed/philis-gal-7/600/600.jpg", alt: "Wig installation at Philis Salon", category: "Wigs", span: "" },
  { src: "https://picsum.photos/seed/philis-gal-8/600/750.jpg", alt: "Massage therapy room at Philis", category: "Massage", span: "sm:col-span-2" },
];

const categories = ["All", "Hair", "Nails", "Makeup", "Lashes", "Braiding", "Facial", "Wigs", "Massage"];

export default function FeaturedGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A glimpse into the artistry we create every day. Each look tells a story of confidence, care, and craftsmanship.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4 sm:p-6 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}>
                  <div>
                    <span className="inline-block text-xs tracking-widest uppercase text-rose-300 mb-1">{img.category}</span>
                    <p className="text-white text-sm font-medium">Philis Salon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium transition-colors duration-300 group"
          >
            View Full Portfolio
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
