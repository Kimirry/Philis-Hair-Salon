import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book Now" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Slim Floating White Navbar */}
      <nav
        className="
          fixed 
          top-0 
          left-0 
          right-0 
          z-50 
          transition-all 
          duration-300
          bg-white/90 
          backdrop-blur-2xl 
          border 
          border-white/50 
          shadow-lg 
          shadow-black/5 
          rounded-2xl 
          mx-4 
          sm:mx-5 
          mt-3 
          sm:mt-4
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-11 lg:h-12">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={logo}
                alt="Philis Hair Salon"
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                const isBooking = link.to === "/booking";

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-3 py-1.5 rounded-full transition-all duration-300 ${
                      isBooking
                        ? "bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white shadow-lg shadow-pink-500/20 ml-2 hover:-translate-y-0.5 hover:shadow-xl"
                        : isActive
                        ? "text-pink-500"
                        : "text-gray-700 hover:text-pink-500"
                    } ${!isBooking ? "text-sm font-light tracking-wide hover:-translate-y-0.5 hover:scale-[1.02]" : "text-sm font-medium tracking-wide"}`}
                  >
                    {link.label}
                    {isActive && !isBooking && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-3 right-3 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-pink-400 to-rose-400"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger - Clean React Icons */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-pink-50 transition-colors lg:hidden text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiOutlineMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white/90 backdrop-blur-3xl shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-pink-50">
                  <img src={logo} alt="Philis Hair Salon" className="h-9 w-auto object-contain" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-pink-50 transition-colors text-gray-500"
                    aria-label="Close menu"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

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
                              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3.5 rounded-2xl font-medium shadow-lg shadow-pink-500/20"
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
                                ? "bg-pink-50 text-pink-600 font-medium"
                                : "text-gray-700 hover:bg-pink-50/50"
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
