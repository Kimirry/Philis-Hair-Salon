import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/language/LanguageSwitcher";

const WHATSAPP_URL =
  "https://wa.me/97455257237?text=" +
  encodeURIComponent("Hi, I'd like to book an appointment at Philis Hair & Beauty Salon.");

const navLinks = [
  { to: "/", key: "home" },
  { to: "/about", key: "story" },
  { to: "/services", key: "services" },
  { to: "/gallery", key: "gallery" },
  { to: "/booking", key: "booking" },
  { to: "/contact", key: "contact" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/philis_hair_salon/", icon: <FaInstagram /> },
  { name: "TikTok", href: "https://www.tiktok.com/@philishairsalon", icon: <FaTiktok /> },
  { name: "Facebook", href: "https://www.facebook.com/", icon: <FaFacebookF /> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

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
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <nav className="flex h-20 items-center justify-between gap-6">
          {/* LOGO */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Philis Hair & Beauty Salon">
            <img src={logo} alt="Philis Hair & Beauty Salon" className="h-12 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              const isBooking = link.to === "/booking";

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    "relative rounded-full px-3 py-2 xl:px-3.5 transition-all duration-300 " +
                    (isBooking
                      ? "ml-2 bg-pink-500 text-sm font-medium text-white shadow-md shadow-pink-500/20 hover:-translate-y-0.5 hover:bg-pink-600"
                      : "text-sm font-light tracking-wide text-gray-600 hover:bg-pink-50/70 hover:text-pink-500")
                  }
                >
                  {t.nav[link.key]}

                  {isActive && !isBooking && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-3 right-3 h-px rounded-full bg-pink-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Philis ${social.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-pink-50 hover:text-pink-500"
              >
                {social.icon}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-500"
              aria-label={mobileOpen ? t.nav.close : t.nav.open}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

            {/* MOBILE PANEL */}
            <motion.div
              initial={{ x: language === "AR" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: language === "AR" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`absolute inset-y-0 w-full max-w-sm overflow-y-auto bg-white shadow-2xl ${language === "AR" ? "left-0" : "right-0"}`}
            >
              <div className="flex min-h-full flex-col p-6">
                {/* MOBILE HEADER */}
                <div className="flex items-center justify-between">
                  <Link to="/" onClick={() => setMobileOpen(false)}>
                    <img src={logo} alt="Philis Hair & Beauty Salon" className="h-11 w-auto" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-gray-600 transition hover:text-pink-500"
                    aria-label={t.nav.close}
                  >
                    <HiX className="h-5 w-5" />
                  </button>
                </div>

                {/* SOCIAL CONNECTION */}
                <div className="mt-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-pink-500">{t.nav.connect}</p>
                  <div className="mt-4 flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-gray-500 transition-colors hover:text-pink-500"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* MOBILE LINKS */}
                <div className="mt-8 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.to;
                    const isBooking = link.to === "/booking";

                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: language === "AR" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + index * 0.05, duration: 0.3 }}
                      >
                        {isBooking ? (
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center rounded-xl bg-pink-500 px-4 py-3.5 font-medium text-white shadow-md shadow-pink-500/20 transition hover:bg-pink-600"
                          >
                            {t.nav.whatsapp}
                          </a>
                        ) : (
                          <Link
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className={
                              "flex items-center justify-between rounded-xl px-4 py-3.5 transition-all " +
                              (isActive ? "bg-pink-50 font-medium text-pink-600" : "text-gray-700 hover:bg-pink-50/60")
                            }
                          >
                            {t.nav[link.key]}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* MOBILE FOOTER */}
                <div className="mt-auto pt-12 text-center text-xs text-gray-400">{t.nav.footer}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
