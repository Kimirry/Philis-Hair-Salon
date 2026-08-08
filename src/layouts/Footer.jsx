import { Link } from "react-router-dom";

const quickLinks = [
{ to: "/", label: "Home" },
{ to: "/about", label: "Our Story" },
{ to: "/services", label: "Services" },
{ to: "/gallery", label: "Gallery" },
{ to: "/booking", label: "Book Now" },
{ to: "/contact", label: "Contact" },
{ label: "Beauty Journal" },
];

const serviceLinks = [
"Manicure",
"Pedicure",
"Makeup",
"Lash Extensions",
"Facial Treatment",
"Waxing",
"Massage",
"Braiding",
"Wig Installation",
];

const hours = [
{ day: "Sun – Thu", time: "9 AM – 8 PM" },
{ day: "Friday", time: "2 PM – 8 PM" },
{ day: "Saturday", time: "9 AM – 8 PM" },
];

const socialLinks = [
{
name: "Instagram",
username: "@philis_hair_salon",
href: "https://www.instagram.com/philis_hair_salon/",
icon: ( <svg
     className="w-5 h-5"
     fill="none"
     stroke="currentColor"
     viewBox="0 0 24 24"
     aria-hidden="true"
   > <rect
       x="3"
       y="3"
       width="18"
       height="18"
       rx="5"
       strokeWidth="1.6"
     /> <circle cx="12" cy="12" r="4.2" strokeWidth="1.6" /> <circle
       cx="17.4"
       cy="6.7"
       r="1"
       fill="currentColor"
       stroke="none"
     /> </svg>
),
},
{
name: "TikTok",
username: "@philishairsalon",
href: "https://www.tiktok.com/@philishairsalon",
icon: ( <svg
     className="w-5 h-5"
     viewBox="0 0 24 24"
     fill="currentColor"
     aria-hidden="true"
   > <path d="M15.5 3c.35 1.95 1.45 3.28 3.5 3.4v3.05c-1.2.12-2.3-.28-3.47-.95v6.35c0 3.7-2.1 5.8-5.25 5.8-3.1 0-5.28-2.02-5.28-5.05 0-3.1 2.35-5.08 5.48-5.08.32 0 .65.03.97.08v3.13a3.8 3.8 0 00-.9-.12c-1.32 0-2.3.78-2.3 2.03 0 1.17.85 2 2.08 2 1.4 0 2.25-.93 2.25-2.68V3h2.92z" /> </svg>
),
},
{
name: "Facebook",
username: "Philis Hair Salon",
href: "https://www.facebook.com/Philishairsalon",
icon: ( <svg
     className="w-5 h-5"
     viewBox="0 0 24 24"
     fill="currentColor"
     aria-hidden="true"
   > <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.45V10H7v3h2.87v8h3.63z" /> </svg>
),
},
];

export default function Footer() {
return ( <footer className="relative bg-neutral-950 text-white overflow-hidden border-t border-white/5">
{/* Ambient pink glow */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.04),transparent_60%)]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main footer grid */}
    <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
      {/* Brand column */}
      <div className="lg:col-span-4">
        <Link to="/" className="inline-block mb-5">
          <span className="text-3xl font-light tracking-wider text-white">
            PHILIS
          </span>
        </Link>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs italic">
          "I'm just a girl who loves making other girls feel awesome"
        </p>

        {/* Social links */}
        <div className="mb-7">
          <p className="text-xs tracking-[0.2em] uppercase text-pink-400/70 font-medium mb-4">
            Follow Philis
          </p>

          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Philis Hair Salon on ${social.name}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-gray-400 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-white"
              >
                <span className="text-pink-400 transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>

                <span className="text-xs">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-3 space-y-1">
            <p className="text-[11px] text-gray-600">
              Instagram: @philis_hair_salon
            </p>

            <p className="text-[11px] text-gray-600">
              TikTok: @philishairsalon
            </p>

            <p className="text-[11px] text-gray-600">
              Facebook: Philis Hair Salon
            </p>
          </div>
        </div>

        {/* WhatsApp booking */}
        <a
          href="https://wa.me/97455257237?text=Hi%2C%20I'd%20like%20to%20book%20at%20Philis%20Hair%20Salon."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-0.5"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book on WhatsApp
        </a>
      </div>

      {/* Quick Links */}
      <div className="lg:col-span-2">
        <h3 className="text-xs tracking-[0.2em] uppercase text-pink-400/70 font-medium mb-5">
          Navigate
        </h3>

        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link
                  to={link.to}
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-200 inline-block"
                >
                  {link.label}
                </Link>
              ) : (
                <span className="text-gray-500 text-sm inline-block">
                  {link.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="lg:col-span-3">
        <h3 className="text-xs tracking-[0.2em] uppercase text-pink-400/70 font-medium mb-5">
          Services
        </h3>

        <ul className="space-y-3">
          {serviceLinks.map((service) => (
            <li key={service}>
              <span className="text-gray-500 text-sm inline-block">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visit Us */}
      <div className="lg:col-span-3">
        <h3 className="text-xs tracking-[0.2em] uppercase text-pink-400/70 font-medium mb-5">
          Visit Us
        </h3>

        <div className="space-y-4 mb-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=25.268516540527344,51.54402160644531"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <p className="text-white text-sm font-medium mb-1 group-hover:text-pink-400 transition-colors">
              Philis Hair Salon
            </p>

            <p className="text-gray-500 text-xs">
              Najma, Doha, Qatar
            </p>

            <p className="text-gray-600 text-[11px] mt-1">
              Al Khalidiya St
            </p>
          </a>

          <a
            href="https://wa.me/97455257237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors inline-block"
          >
            +974 5525 7237
          </a>
        </div>

        <h4 className="text-xs tracking-[0.15em] uppercase text-pink-400/70 font-medium mb-3">
          Hours
        </h4>

        <div className="space-y-2">
          {hours.map((h) => (
            <div
              key={h.day}
              className="flex justify-between text-sm"
            >
              <span className="text-gray-500">{h.day}</span>
              <span className="text-gray-300">{h.time}</span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-gray-600 mt-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-pink-500/60 rounded-full" />
          Last booking: 6:00 PM
        </p>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-center sm:text-left text-xs text-gray-600">
        © {new Date().getFullYear()} Philis Hair & Beauty. All rights reserved.
      </p>

      <p className="text-xs text-gray-700">
        Najma · Doha · Qatar
      </p>
    </div>
  </div>
</footer>

);
}
   
