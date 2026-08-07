import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

import wig2 from "../../assets/wig2.jpeg";

const whatsappUrl =
  "https://wa.me/97455257237?text=Hi%2C%20I'd%20like%20to%20ask%20about%20Philis%20beauty%20services.";

const categories = [
  "All",
  "Hair",
  "Nails",
  "Makeup",
  "Lashes",
  "Skin",
  "Wigs",
  "Wellness",
];

const services = [
  {
    name: "Hair Styling",
    category: "Hair",
    description:
      "Thoughtful styling tailored to your hair, your occasion, and the look you want to leave with.",
    image: hair2,
    tag: "Hair",
  },
  {
    name: "Braiding",
    category: "Hair",
    description:
      "From everyday protective styles to statement braids, created with patience and attention to detail.",
    image: hair4,
    tag: "Hair",
  },
  {
    name: "Weaving",
    category: "Hair",
    description:
      "Professional weaving services designed around your preferred style, finish, and overall look.",
    image: hair5,
    tag: "Hair",
  },
  {
    name: "Hair Care & Styling",
    category: "Hair",
    description:
      "A considered approach to styling and hair care, with recommendations based on your individual needs.",
    image: hair6,
    tag: "Hair",
  },
  {
    name: "Manicure",
    category: "Nails",
    description:
      "Clean, polished nails with classic and contemporary finishes for an effortlessly refined look.",
    image: nails2,
    tag: "Nails",
  },
  {
    name: "Pedicure",
    category: "Nails",
    description:
      "A relaxing nail-care experience focused on neat finishing, comfort, and beautifully maintained feet.",
    image: nails3,
    tag: "Nails",
  },
  {
    name: "Nail Art",
    category: "Nails",
    description:
      "Detailed nail designs ranging from understated elegance to something a little more expressive.",
    image: nails4,
    tag: "Nails",
  },
  {
    name: "Makeup",
    category: "Makeup",
    description:
      "Makeup looks created around your features, occasion, personal style, and the finish you want.",
    image: nails6,
    tag: "Beauty",
  },
  {
    name: "Lash Extensions",
    category: "Lashes",
    description:
      "Lash styling tailored to complement your eyes and create anything from soft definition to a fuller finish.",
    image: nails8,
    tag: "Beauty",
  },
  {
    name: "Facial Treatments",
    category: "Skin",
    description:
      "Dedicated skincare experiences designed around cleansing, refreshing, and caring for your skin.",
    image: nails9,
    tag: "Skin",
  },
  {
    name: "Waxing",
    category: "Skin",
    description:
      "Professional waxing services carried out with care, cleanliness, and attention to your comfort.",
    image: nails10,
    tag: "Beauty",
  },
  {
    name: "Wig Installation",
    category: "Wigs",
    description:
      "Careful wig installation and finishing for a polished result that complements your chosen style.",
    image: wig2,
    tag: "Wigs",
  },
  {
    name: "Hair Finishing",
    category: "Hair",
    description:
      "The final details that bring a hairstyle together — shape, texture, movement, and finish.",
    image: hair7,
    tag: "Hair",
  },
  {
    name: "Hair Styling",
    category: "Hair",
    description:
      "Versatile styling for occasions when you want your hair to feel especially put together.",
    image: hair8,
    tag: "Hair",
  },
  {
    name: "Protective Styling",
    category: "Hair",
    description:
      "Protective styles created with attention to neatness, comfort, and your preferred aesthetic.",
    image: hair9,
    tag: "Hair",
  },
  {
    name: "Hair Transformation",
    category: "Hair",
    description:
      "A considered styling experience for those ready for a refreshed or completely different look.",
    image: hair10,
    tag: "Hair",
  },
];

const journalTopics = [
  {
    number: "01",
    title: "Choosing a hairstyle that feels like you",
    text: "A good beauty appointment starts with knowing what you want — and understanding what works for you.",
  },
  {
    number: "02",
    title: "How to prepare for your beauty appointment",
    text: "A few thoughtful preparations can make your salon experience smoother and more enjoyable.",
  },
  {
    number: "03",
    title: "The little details behind a polished look",
    text: "Great beauty work is often about the finishing details — the things that make a look feel complete.",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-b from-pink-50/60 via-white to-white overflow-hidden">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4"
          >
            The Philis Menu
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
          >
            Beauty,{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Your Way.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Explore the beauty services available at Philis Hair & Beauty
            Salon in Al Khalidiya, Doha. Every appointment is approached with
            care, attention, and an understanding of your personal style.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Not sure what is right for you? That's completely fine. Tell us
            what you're looking for and we'll help you find the service that
            best fits your desired look.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 text-rose-500 hover:text-rose-600 font-medium transition-colors"
          >
            Ask us on WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Filters + Services */}
      <section className="py-20 sm:py-28 bg-neutral-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-pink-50 hover:text-rose-500 border border-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.article
                  key={service.name + service.image}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.name} at Philis Hair & Beauty Salon`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-rose-200 mb-2">
                        {service.tag}
                      </span>

                      <h2 className="text-xl sm:text-2xl font-medium text-white">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <a
                      href={`${whatsappUrl}&service=${encodeURIComponent(
                        service.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      Ask about this service
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Massage / privacy section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 text-center">
            <span className="text-rose-300 text-2xl">✦</span>

            <h2 className="mt-4 text-2xl sm:text-3xl font-light">
              Wellness deserves{" "}
              <span className="font-medium">privacy.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Massage and other private wellness experiences are available by
              appointment. For client privacy and discretion, we do not publish
              treatment photographs from these services.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 bg-white text-gray-900 hover:bg-rose-50 px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Ask about wellness services
            </a>
          </div>
        </div>
      </section>

      {/* Beauty Journal */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-pink-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-rose-400 font-medium mb-4">
              From the Beauty Journal
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
              More than a{" "}
              <span className="font-medium text-rose-500">service menu.</span>
            </h2>

            <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
              Beauty is also about knowing your options, caring for your look,
              and understanding what works for you. Explore our own Beauty
              Journal for practical ideas and salon inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalTopics.map((topic, index) => (
              <motion.div
                key={topic.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-7 border border-rose-100/70 shadow-sm"
              >
                <span className="text-sm text-rose-400 font-medium">
                  {topic.number}
                </span>

                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  {topic.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {topic.text}
                </p>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-rose-500 hover:text-rose-600"
                >
                  Read the journal
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-rose-400 text-2xl">✦</span>

          <h2 className="mt-5 text-3xl sm:text-4xl font-light text-gray-900">
            Found your{" "}
            <span className="font-medium text-rose-500">next look?</span>
          </h2>

          <p className="mt-5 text-gray-500 text-lg">
            Let's talk about what you have in mind.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-pink-500/20 hover:-translate-y-0.5 transition-all"
            >
              Book via WhatsApp
            </a>

            <Link
              to="/gallery"
              className="inline-flex items-center justify-center border border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
