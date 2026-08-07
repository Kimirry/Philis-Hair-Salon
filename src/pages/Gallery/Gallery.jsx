import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hair
import hair2 from "../../assets/hair2.jpeg";
import hair4 from "../../assets/hair4.jpeg";
import hair5 from "../../assets/hair5.jpeg";
import hair6 from "../../assets/hair6.jpeg";
import hair7 from "../../assets/hair7.jpeg";
import hair8 from "../../assets/hair8.jpeg";
import hair9 from "../../assets/hair9.jpeg";
import hair10 from "../../assets/hair10.jpeg";
import hair12 from "../../assets/hair12.jpeg";
import hair13 from "../../assets/hair13.jpeg";
import hair14 from "../../assets/hair14.jpeg";

// Nails
import nails2 from "../../assets/nails2.jpeg";
import nails3 from "../../assets/nails3.jpeg";
import nails4 from "../../assets/nails4.jpeg";
import nails6 from "../../assets/nails6.jpeg";
import nails8 from "../../assets/nails8.jpeg";
import nails9 from "../../assets/nails9.jpeg";
import nails10 from "../../assets/nails10.jpeg";
import nails12 from "../../assets/nails12.jpeg";
import nails13 from "../../assets/nails13.jpeg";
import nails14 from "../../assets/nails14.jpeg";
import nails15 from "../../assets/nails15.jpeg";
import nails16 from "../../assets/nails16.jpeg";
import nails17 from "../../assets/nails17.jpeg";
import nails18 from "../../assets/nails18.jpeg";

// Wigs
import wig2 from "../../assets/wig2.jpeg";

const allImages = [
  // ============================================================
  // HAIR
  // ============================================================
  {
    src: hair2,
    alt: "Hair styling work at Philis Hair & Beauty Salon",
    category: "Hair",
    featured: true,
  },
  {
    src: hair4,
    alt: "Hair styling and finishing at Philis Salon",
    category: "Hair",
  },
  {
    src: hair5,
    alt: "Hair beauty styling at Philis Salon Doha",
    category: "Hair",
  },
  {
    src: hair6,
    alt: "Professional hair styling at Philis",
    category: "Hair",
  },
  {
    src: hair7,
    alt: "Hair transformation at Philis Hair & Beauty Salon",
    category: "Hair",
  },
  {
    src: hair8,
    alt: "Hair styling finish by Philis",
    category: "Hair",
  },
  {
    src: hair9,
    alt: "Hair beauty result at Philis Salon",
    category: "Hair",
  },
  {
    src: hair10,
    alt: "Hair styling detail at Philis",
    category: "Hair",
  },
  {
    src: hair12,
    alt: "Hair styling and beauty finish at Philis",
    category: "Hair",
    featured: true,
  },
  {
    src: hair13,
    alt: "Hair styling work at Philis Salon Doha",
    category: "Hair",
  },
  {
    src: hair14,
    alt: "Hair beauty styling result at Philis",
    category: "Hair",
  },

  // ============================================================
  // NAILS
  // ============================================================
  {
    src: nails2,
    alt: "Nail design at Philis Hair & Beauty Salon",
    category: "Nails",
    featured: true,
  },
  {
    src: nails3,
    alt: "Nail styling and finish at Philis",
    category: "Nails",
  },
  {
    src: nails4,
    alt: "Nail beauty work at Philis Salon",
    category: "Nails",
  },
  {
    src: nails6,
    alt: "Nail design created at Philis",
    category: "Nails",
  },
  {
    src: nails8,
    alt: "Manicure finish at Philis Salon Doha",
    category: "Nails",
  },
  {
    src: nails9,
    alt: "Nail art at Philis Hair & Beauty Salon",
    category: "Nails",
  },
  {
    src: nails10,
    alt: "Nail styling detail at Philis",
    category: "Nails",
  },
  {
    src: nails12,
    alt: "Manicure styling at Philis",
    category: "Nails",
    featured: true,
  },
  {
    src: nails13,
    alt: "Nail art and beauty finish at Philis",
    category: "Nails",
  },
  {
    src: nails14,
    alt: "Nail design work at Philis Salon",
    category: "Nails",
  },
  {
    src: nails15,
    alt: "Nail beauty result at Philis",
    category: "Nails",
  },
  {
    src: nails16,
    alt: "Nail styling result at Philis Hair & Beauty Salon",
    category: "Nails",
  },
  {
    src: nails17,
    alt: "Manicure design at Philis Salon Doha",
    category: "Nails",
  },
  {
    src: nails18,
    alt: "Nail art finish at Philis",
    category: "Nails",
  },

  // ============================================================
  // WIGS
  // ============================================================
  {
    src: wig2,
    alt: "Wig styling and installation at Philis Salon",
    category: "Wigs",
    featured: true,
  },
];

const categories = ["All", "Hair", "Nails", "Wigs"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* =========================================================
          PAGE HEADER
      ========================================================= */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-pink-50/60 via-white to-white overflow-hidden">
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
            A selection of the hair, nail, and wig work created at Philis Hair
            & Beauty Salon in Al Khalidiya, Doha.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-rose-500"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={`${img.category}-${img.src}`}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.035,
                  }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    img.featured
                      ? "sm:col-span-2 sm:row-span-2"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-5">
                    <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs tracking-widest uppercase text-rose-300">
                        {img.category}
                      </span>

                      <p className="text-white text-sm font-medium mt-1">
                        Philis Hair & Beauty
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Privacy Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-pink-50 text-rose-400 flex items-center justify-center mx-auto mb-4">
              ✦
            </div>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3">
              Some beauty experiences remain private.
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Our portfolio highlights selected work that can be comfortably
              shared. Certain treatments and personal beauty experiences are
              intentionally not photographed, allowing our clients to enjoy
              their appointments with privacy and discretion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
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
            {/* Image */}
            <motion.img
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            />

            {/* Image Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-rose-300">
                {selectedImage.category}
              </span>

              <p className="text-white text-sm mt-1">
                Philis Hair & Beauty Salon
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              aria-label="Close image"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
