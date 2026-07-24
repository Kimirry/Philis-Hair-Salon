import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book Now" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Beauty Journal" },
];

const serviceLinks = [
  { to: "/services/manicure", label: "Manicure" },
  { to: "/services/pedicure", label: "Pedicure" },
  { to: "/services/makeup", label: "Makeup" },
  { to: "/services/lash-extensions", label: "Lash Extensions" },
  { to: "/services/facial", label: "Facial Treatment" },
  { to: "/services/waxing", label: "Waxing" },
  { to: "/services/massage", label: "Massage" },
  { to: "/services/braiding", label: "Braiding" },
  { to: "/services/wig-installation", label: "Wig Installation" },
];

const hours = [
  { day: "Sun – Thu", time: "9 AM – 8 PM" },
  { day: "Friday", time: "2 PM – 8 PM" },
  { day: "Saturday", time: "9 AM – 8 PM" },
];

const funnyFacts = [
  "If you're reading this, you've scrolled farther than 97% of visitors. You deserve a treat. Book one.",
  "This footer was designed with love, caffeine, and an unreasonable amount of hairspray.",
  "No developers were harmed in the making of this website. A few egos, maybe.",
  "Our WiFi password is not 'goodhairday'. Or is it? You'll have to visit to find out.",
  "Fun fact: This footer has been scrolled past approximately zero times. You're special.",
  "We'd put a cookie notice here, but the only cookies we care about are the ones with tea after your appointment.",
  "This website is 100% hand-crafted. Much like your future hair.",
  "If this footer were a client, it would ask for 'just a trim' and then show a Pinterest board.",
];

export default function Footer() {
  const [fact, setFact] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFact((prev) => (prev + 1) % funnyFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <span className="text-3xl font-light tracking-wider">PHILIS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Luxury hair and beauty experiences in Al Khalidiya, Qatar. 
              Where every appointment is an act of self-love, and every 
              client leaves feeling like the main character.
            </p>
            <a
              href="https://wa.me/97455257237?text=%20Hi%2C%20I'd%20like%20to%20book%20at%20Philis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-block"
                    onMouseEnter={() => setHoveredService(link.label)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {link.label}
                    {hoveredService === link.label && (
                      <span className="ml-1.5 text-rose-400 text-xs">✨</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium mb-5">
              Visit Us
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-white text-sm font-medium mb-1">Al Khalidiya, Doha</p>
                <p className="text-gray-500 text-xs">Qatar</p>
              </div>
              <a
                href="https://wa.me/97455257237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors inline-block"
              >
                +974 5525 7237
              </a>
            </div>

            <h4 className="text-xs tracking-[0.15em] uppercase text-gray-500 font-medium mb-3">
              Hours
            </h4>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-gray-400">{h.day}</span>
                  <span className="text-gray-300">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-rose-400/70 mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-rose-400/70 rounded-full" />
              Last booking: 6:00 PM
            </p>
          </div>
        </div>

        {/* Funny rotating fact bar */}
        <div className="border-t border-white/5 py-5">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] text-gray-600 leading-relaxed transition-all duration-500" key={fact}>
              {funnyFacts[fact]}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-600">
            <p>
              © {new Date().getFullYear()} Philis Hair & Beauty. All bad hair days forfeited.
            </p>
            <span className="hidden sm:inline text-gray-800">•</span>
            <p>
              Powered by WhatsApp & sheer determination.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-700 tracking-wider uppercase">
              Made with
            </span>
            <span className="text-rose-500 text-sm animate-pulse" title="actual love, not just a heart emoji">
              ♥
            </span>
            <span className="text-[10px] text-gray-700 tracking-wider uppercase">
              in Qatar
            </span>
          </div>
        </div>

        {/* The very bottom — ultimate easter egg */}
        <div className="border-t border-white/5 py-3">
          <p className="text-[10px] text-gray-800 text-center leading-relaxed max-w-3xl mx-auto">
            Fine print that nobody reads: Philis is a ladies-only salon. We do not cut men's hair, 
            fix your ex's mistakes, or do miracles on a Tuesday. Results may vary based on 
            how well you follow our aftercare advice (we know you won't). Parking is free but 
            good spots are first come, first served — just like our appointments. 
            By scrolling this far you've implicitly agreed that Philis is your new favorite salon.
          </p>
        </div>
      </div>
    </footer>
  );
}
