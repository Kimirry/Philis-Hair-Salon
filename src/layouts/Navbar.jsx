import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book Now" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Journal" },
];

const funnyTooltips = {
  "/": "You're already here. Bold move.",
  "/about": "Our origin story (no capes involved)",
  "/services": "All the ways we can make you gorgeous",
  "/gallery": "Proof we're not making this up",
  "/booking": "The most important button on this website",
  "/contact": "Come say hi. We don't bite (unless you ask nicely)",
  "/blog": "Beauty tips so good they should be illegal",
};

const logoTaglines = [
  "Hair • Beauty • Luxury",
  "Yes, we take walk-ins. No, we don't promise miracles.",
  "Your hair called. It wants to come here.",
  "Making bad hair days extinct since Day 1",
  "Trust us with your hair. We trust you with the parking.",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate tagline every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % logoTaglines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm shadow-gray-900/5 border-b border-gray-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-2xl sm:text-3xl font-light tracking-wider text-gray-900 group-hover:text-rose-500 transition-colors duration-300">
                PHILIS
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={taglineIndex}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3 }}
                  className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-gray-400" : "text-gray-400/70"
                  }`}
                >
                  {logoTaglines[taglineIndex]}
                </motion.span>
              </AnimatePresence>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                const isBooking = link.to === "/booking";

                return (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link
                      to={link.to}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isBooking
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-sm shadow-green-500/25 ml-2"
                          : isActive
                          ? "text-rose-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                      {isActive && !isBooking && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-400 rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredLink === link.to && !isBooking && (
                        <motion.div
                          initial={{ opacity: 0, y: 4, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-2 rounded-xl shadow-xl pointer-events-none z-50"
                        >
                          {funnyTooltips[link.to]}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 rounded-sm" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Language toggle */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium tracking-wider">
                  EN <span className="text-gray-300">|</span> العربية
                </button>
              </div>
            </div>

            {/* Mobile: Hamburger + Book button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="https://wa.me/97455257237?text=%20Hi%2C%20I'd%20like%20to%20book%20at%20Philis."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-4">
                  <span className={`absolute left-0 w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    mobileOpen ? "top-1.5 rotate-45" : "top-0"
                  }`} />
                  <span className={`absolute left-0 top-1.5 w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`} />
                  <span className={`absolute left-0 w-5 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Panel header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <span className="text-lg font-light tracking-wider text-gray-900">PHILIS</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto py-4 px-4">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.to;
                    const isBooking = link.to === "/booking";

                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                      >
                        {isBooking ? (
                          <div className="my-3">
                            <a
                              href="https://wa.me/97455257237?text=%20Hi%2C%20I'd%20like%20to%20book%20at%20Philis."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3.5 rounded-2xl font-medium shadow-sm"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Book via WhatsApp
                            </a>
                          </div>
                        ) : (
                          <Link
                            to={link.to}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                              isActive
                                ? "bg-rose-50 text-rose-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span>{link.label}</span>
                            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Panel footer — the funny bit */}
                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50">
                  <p className="text-[11px] text-gray-400 leading-relaxed text-center">
                    Side effects of visiting Philis may include excessive selfies, 
                    unsolicited compliments from strangers, and a sudden urge to 
                    book your next appointment before leaving.
                  </p>
                  <div className="flex justify-center gap-4 mt-3">
                    <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium">EN</button>
                    <span className="text-gray-300">|</span>
                    <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium">العربية</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
