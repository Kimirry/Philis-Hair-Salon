import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hair1 from "../../assets/hair1.jpeg";
import hair2 from "../../assets/hair2.jpeg";
import hair3 from "../../assets/hair3.jpeg";
import hair8 from "../../assets/hair8.jpeg";
import hair10 from "../../assets/hair10.jpeg";
import hair14 from "../../assets/hair14.jpeg";
import nails1 from "../../assets/nails1.jpeg";
import nails3 from "../../assets/nails3.jpeg";
import nails5 from "../../assets/nails5.jpeg";
import nails8 from "../../assets/nails8.jpeg";
import nails12 from "../../assets/nails12.jpeg";
import nails15 from "../../assets/nails15.jpeg";
import makeup1 from "../../assets/makeup1.jpeg";
import wig1 from "../../assets/wig1.jpeg";
import wig2 from "../../assets/wig2.jpeg";

const galleryImages = [
  { src: hair1, alt: "Hair styling result at Philis Salon", category: "Hair", span: "sm:col-span-2 sm:row-span-2" },
  { src: nails1, alt: "Nail art design at Philis", category: "Nails", span: "" },
  { src: makeup1, alt: "Bridal makeup by Philis", category: "Makeup", span: "" },
  { src: hair3, alt: "Hair color and styling", category: "Hair", span: "" },
  { src: nails5, alt: "Gel nail design", category: "Nails", span: "sm:col-span-2" },
  { src: wig1, alt: "Wig installation at Philis Salon", category: "Wigs", span: "" },
  { src: hair8, alt: "Braiding and styling", category: "Hair", span: "" },
  { src: nails8, alt: "Nail art detail", category: "Nails", span: "" },
  { src: wig2, alt: "Wig styling result", category: "Wigs", span: "" },
  { src: hair10, alt: "Protective hairstyle", category: "Hair", span: "sm:col-span-2" },
  { src: nails12, alt: "French tip nails", category: "Nails", span: "" },
  { src: hair14, alt: "Sleek hair styling", category: "Hair", span: "" },
  { src: nails15, alt: "Decorated nail set", category: "Nails", span: "" },
  { src: hair2, alt: "Curly hair styling", category: "Hair", span: "" },
  { src: nails3, alt: "Classic manicure result", category: "Nails", span: "" },
];

const categories = ["All", "Hair", "Nails", "Makeup", "Wigs"];

export default function FeaturedGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-pink-400 font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-5">
            Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A glimpse into the artistry we create every day. Each look tells a story of confidence, care, and craftsmanship.
          </p>
        </motion.div>

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
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

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
                    <span className="inline-block text-xs tracking-widest uppercase text-pink-300 mb-1">{img.category}</span>
                    <p className="text-white text-sm font-medium">Philis Salon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors duration-300 group"
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
