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

const WHATSAPP_URL =
"https://wa.me/97455257237?text=" +
encodeURIComponent(
"Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
);

const socialLinks = [
{
name: "Instagram",
href: "https://www.instagram.com/philis_hair_salon/",
icon: (
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
<rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.7" />
<circle cx="12" cy="12" r="4.2" strokeWidth="1.7" />
<circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
</svg>
),
},
{
name: "TikTok",
href: "https://www.tiktok.com/@philishairsalon",
icon: (
<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
<path d="M15.5 3c.35 1.95 1.45 3.28 3.5 3.4v3.05c-1.2.12-2.3-.28-3.47-.95v6.35c0 3.7-2.1 5.8-5.25 5.8-3.1 0-5.28-2.02-5.28-5.05 0-3.1 2.35-5.08 5.48-5.08.32 0 .65.03.97.08v3.13a3.8 3.8 0 00-.9-.12c-1.32 0-2.3.78-2.3 2.03 0 1.17.85 2 2.08 2 1.4 0 2.25-.93 2.25-2.68V3h2.92z" />
</svg>
),
},
{
name: "Facebook",
href: "https://www.facebook.com/",
icon: (
<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
<path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.45V10H7v3h2.87v8h3.63z" />
</svg>
),
},
];

export default function Navbar() {
const [mobileOpen, setMobileOpen] = useState(false);
const location = useLocation();

useEffect(() => {
setMobileOpen(false);
}, [location.pathname]);

useEffect(() => {
document.body.style.overflow = mobileOpen ? "hidden" : "";

return () => {
  document.body.style.overflow = "";
};

}, [mobileOpen]);

return (
<>
<nav className="fixed top-5 sm:top-6 left-4 right-4 sm:left-5 sm:right-5 lg:left-6 lg:right-6 z-50 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
<div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
<div className="h-14 sm:h-16 flex items-center justify-between">

        <Link
          to="/"
          className="flex-shrink-0 group"
          aria-label="Philis Hair & Beauty Salon"
        >
          <img
            src={logo}
            alt="Philis Hair & Beauty Salon"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const isBooking = link.to === "/booking";

            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "relative px-3 xl:px-3.5 py-2 rounded-full transition-all duration-300 " +
                  (
                    isBooking
                      ? "ml-2 bg-pink-500 hover:bg-pink-600 text-white shadow-md shadow-pink-500/20 hover:-translate-y-0.5 text-sm font-medium"
                      : "text-gray-600 hover:text-pink-500 hover:bg-pink-50/70 text-sm font-light tracking-wide"
                  )
                }
              >
                {link.label}

                {isActive && !isBooking && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-3 right-3 bottom-0.5 h-px rounded-full bg-pink-500"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-gray-100">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Philis " + social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-pink-50 hover:text-pink-500 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex lg:hidden items-center gap-1">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Philis " + social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-pink-50 hover:text-pink-500 transition-all"
            >
              {social.icon}
            </a>
          ))}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <HiX className="w-5 h-5" />
            ) : (
              <HiOutlineMenu className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>
    </div>
  </nav>

  <AnimatePresence>
    {mobileOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div
          className="absolute inset-0 bg-black/35 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
          className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
        >
          <div className="flex flex-col h-full">

            <div className="flex items-center justify-between px-6 py-5 border-b border-pink-100">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src={logo}
                  alt="Philis Hair & Beauty Salon"
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-gray-600 hover:text-pink-500"
                aria-label="Close menu"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-5 bg-[#fff9fb] border-b border-pink-100">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                Connect with Philis
              </p>

              <div className="mt-4 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-pink-100 bg-white px-3 py-2 text-xs text-gray-600 hover:text-pink-500 hover:border-pink-200 transition-all"
                  >
                    <span className="text-pink-400">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-5 px-4">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                const isBooking = link.to === "/booking";

                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 + i * 0.05,
                      duration: 0.3,
                    }}
                  >
                    {isBooking ? (
                      <div className="my-4">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full rounded-2xl bg-pink-500 hover:bg-pink-600 py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-500/20"
                        >
                          Book via WhatsApp
                        </a>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        className={
                          "flex items-center justify-between px-4 py-3.5 rounded-xl transition-all " +
                          (
                            isActive
                              ? "bg-pink-50 text-pink-600 font-medium"
                              : "text-gray-700 hover:bg-pink-50/60"
                          )
                        }
                      >
                        <span>{link.label}</span>

                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="px-6 py-5 border-t border-pink-100">
              <p className="text-center text-xs text-gray-400">
                Philis Hair & Beauty Salon · Doha, Qatar
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</>

);
}
