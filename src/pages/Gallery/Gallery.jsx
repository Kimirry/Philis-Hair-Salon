import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  { src: "https://picsum.photos/seed/philis-g-full-1/800/1000.jpg", alt: "Hair styling result at Philis Salon Qatar", category: "Hair", featured: true },
  { src: "https://picsum.photos/seed/philis-g-full-2/800/800.jpg", alt: "Gel nail art at Philis", category: "Nails" },
  { src: "https://picsum.photos/seed/philis-g-full-3/800/800.jpg", alt: "Bridal makeup by Philis artist", category: "Makeup", featured: true },
  { src: "https://picsum.photos/seed/philis-g-full-4/800/800.jpg", alt: "Volume lash extensions", category: "Lashes" },
  { src: "https://picsum.photos/seed/philis-g-full-5/800/1000.jpg", alt: "Box braids at Philis", category: "Braiding" },
  { src: "https://picsum.photos/seed/philis-g-full-6/800/800.jpg", alt: "Facial treatment glow", category: "Facial" },
  { src: "https://picsum.photos/seed/philis-g-full-7/800/800.jpg", alt: "Wig installation result", category: "Wigs" },
  { src: "https://picsum.photos/seed/philis-g-full-8/800/1000.jpg", alt: "Massage room at Philis", category: "Massage" },
  { src: "https://picsum.photos/seed/philis-g-full-9/800/800.jpg", alt: "Hair coloring transformation", category: "Hair" },
  { src: "https://picsum.photos/seed/philis-g-full-10/800/800.jpg", alt: "French manicure at Philis", category: "Nails" },
  { src: "https://picsum.photos/seed/philis-g-full-11/800/800.jpg", alt: "Party makeup look", category: "Makeup" },
  { src: "https://picsum.photos/seed/philis-g-full-12/800/800.jpg", alt: "Classic lash set", category: "Lashes" },
  { src: "https://picsum.photos/seed/philis-g-full-13/800/1000.jpg", alt: "Knotless braids styling", category: "Braiding", featured: true },
  { src: "https://picsum.photos/seed/philis-g-full-14/800/800.jpg", alt: "Hydrating facial session", category: "Facial" },
  { src: "https://picsum.photos/seed/philis-g-full-15/800/800.jpg", alt: "Frontal wig install", category: "Wigs" },
  { src: "https://picsum.photos/seed/philis-g-full-16/800/800.jpg", alt: "Deep tissue massage", category: "Massage" },
];

const categories = ["All", "Hair", "Nails", "Makeup", "Lashes", "Braiding", "Facial", "Wigs", "Massage"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeCategory === "All" ? allImages : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-pink-50/50 to-white overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
          >
            Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Browse our collection of beauty transformations. Each image represents the skill, care, and artistry we bring to every client.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    img.featured ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4 sm:p-5">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs tracking-widest uppercase text-rose-300">{img.category}</span>
                      <p className="text-white text-sm font-medium">Philis Salon</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
