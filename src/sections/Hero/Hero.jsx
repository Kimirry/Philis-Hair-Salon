import nailsImage from "../../assets/nails3.jpeg";

const WHATSAPP_URL = `https://wa.me/97455257237?text=${encodeURIComponent(
  "Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
)}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background - Shifted right so bright nails don't cover text */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: `url(${nailsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.64), rgba(0,0,0,.68), rgba(0,0,0,.74))",
        }}
      />

      {/* Pink Luxury Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,.20),transparent_55%)]" />

      {/* Hero Content - Floating directly on image */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="h-px w-14 bg-pink-400/60" />
            <span className="uppercase tracking-[0.28em] text-sm text-pink-200 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Philis Hair & Beauty Salon
            </span>
            <div className="h-px w-14 bg-pink-400/60" />
          </div>

          {/* Heading - Luminous Off-White with Deep Shadows */}
          <h1
            className="font-serif font-bold leading-[0.92] tracking-tight"
            style={{
              // Multi-layered shadow creates a "wonder" 3D pop effect without looking cheap
              textShadow: "0 4px 30px rgba(0,0,0, 1), 0 2px 10px rgba(0,0,0, 0.8)"
            }}
          >
            {/* Pure bright white for contrast */}
            <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Luxury Hair &
            </span>

            {/* "Not really white" - A soft, warm, luminous blush-white */}
            <span className="block mt-2 text-[#FFEEF2] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Beauty Salon
            </span>
          </h1>

          {/* Location with Script Font & Dividers */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-pink-300/40 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" />
            <p
              className="
                text-3xl
                md:text-4xl
                text-pink-200
                font-light
                italic
                tracking-wide
              "
              style={{
                fontFamily: "'Allura', cursive",
                textShadow: "0 2px 15px rgba(0,0,0, 0.9)"
              }}
            >
              In Doha, Qatar
            </p>
            <div className="h-px w-20 bg-pink-300/40 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Description */}
          <p 
            className="mt-10 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-white/90"
            style={{ textShadow: "0 2px 12px rgba(0,0,0, 0.7)" }}
          >
            Experience premium hair styling, nail artistry, lash extensions, 
            makeup, waxing, and luxury beauty treatments tailored to help you 
            look and feel your absolute best.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-rose-500
                hover:from-pink-600
                hover:to-rose-600
                px-10
                py-4
                text-white
                font-semibold
                shadow-2xl
                shadow-pink-900/50
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-pink-900/60
              "
            >
              Book via WhatsApp
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a
              href="#services"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/40
                bg-white/5
                backdrop-blur-sm
                hover:bg-white/15
                px-10
                py-4
                text-white
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Explore Services
            </a>
          </div>

          {/* Rating */}
          <div className="mt-14 flex flex-col items-center">
            <div 
              className="text-pink-300 text-3xl tracking-[0.35em]"
              style={{ textShadow: "0 2px 10px rgba(0,0,0, 0.8)" }}
            >
              ★★★★★
            </div>
            <p 
              className="mt-3 text-white/80 text-base"
              style={{ textShadow: "0 2px 8px rgba(0,0,0, 0.7)" }}
            >
              Trusted by clients across Doha for exceptional beauty experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
