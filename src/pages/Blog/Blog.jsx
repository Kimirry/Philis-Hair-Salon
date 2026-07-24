import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "best-bridal-makeup-doha",
    title: "How to Choose the Best Bridal Makeup Artist in Doha",
    excerpt: "Your wedding day deserves a makeup artist who understands your vision. Here's what to look for when choosing a bridal makeup specialist in Qatar.",
    category: "Makeup",
    image: "https://picsum.photos/seed/philis-blog-1/700/450.jpg",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    slug: "keratin-treatment-guide",
    title: "The Complete Guide to Keratin Treatments in Qatar",
    excerpt: "Thinking about a keratin treatment? Learn what it is, how it works, and why it might be the best investment for your hair this season.",
    category: "Hair",
    image: "https://picsum.photos/seed/philis-blog-2/700/450.jpg",
    date: "November 2024",
    readTime: "4 min read",
  },
  {
    slug: "gel-vs-acrylic-nails",
    title: "Gel vs Acrylic Nails: Which Is Right for You?",
    excerpt: "Both gel and acrylic nails have their pros and cons. We break down the differences to help you make the best choice for your lifestyle.",
    category: "Nails",
    image: "https://picsum.photos/seed/philis-blog-3/700/450.jpg",
    date: "November 2024",
    readTime: "3 min read",
  },
  {
    slug: "skincare-routine-qatar",
    title: "Building a Skincare Routine That Works in Qatar's Climate",
    excerpt: "The heat and humidity in Doha require a tailored approach to skincare. Discover the routine that keeps your skin glowing year-round.",
    category: "Skincare",
    image: "https://picsum.photos/seed/philis-blog-4/700/450.jpg",
    date: "October 2024",
    readTime: "6 min read",
  },
  {
    slug: "lash-extensions-first-time",
    title: "Getting Lash Extensions for the First Time? Read This",
    excerpt: "Everything you need to know before your first lash extension appointment — from choosing the right style to aftercare tips.",
    category: "Lashes",
    image: "https://picsum.photos/seed/philis-blog-5/700/450.jpg",
    date: "October 2024",
    readTime: "5 min read",
  },
  {
    slug: "protective-hairstyles",
    title: "5 Protective Hairstyles That Look Amazing",
    excerpt: "Protective styles don't have to be boring. Here are five braiding and twisting styles that protect your hair while turning heads.",
    category: "Hair",
    image: "https://picsum.photos/seed/philis-blog-6/700/450.jpg",
    date: "September 2024",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-pink-50/50 to-white overflow-hidden">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-400 font-medium mb-4"
          >
            Beauty Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
          >
            Beauty{" "}
            <span className="font-medium bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Journal
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Tips, guides, and beauty inspiration from the Philis team. Stay informed about the latest trends and treatments.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-rose-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Coming soon note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm">
              More articles coming soon. Follow us on WhatsApp for beauty tips and updates.
            </p>
            <a
              href="https://wa.me/97455257237?text=%20Hi%2C%20I'd%20love%20to%20follow%20Philis%20for%20beauty%20tips."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium text-sm mt-3 transition-colors"
            >
              Follow on WhatsApp
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
