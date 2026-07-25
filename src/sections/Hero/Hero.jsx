import heroBg from "../../assets/door.jpeg";

const WHATSAPP_URL = `https://wa.me/97455257237?text=${encodeURIComponent(
  "Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
)}`;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[1000px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.60] saturate-90 scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Softer luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-pink-950/50" />

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-400/10 blur-[180px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
          <div className="max-w-2xl text-center lg:text-left">
            {/* Eyebrow */}
            <span className="inline-block text-xs sm:text-sm tracking-[0.35em] uppercase text-pink-100 font-semibold mb-6 drop-shadow-sm">
              Ladies-Only Beauty Salon
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]">
              Luxury Beauty
              <br />
              <span className="font-semibold bg-gradient-to-r from-pink-100 via-rose-50 to-pink-200 bg-clip-text text-transparent">
                Designed Around You
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-8 text-white/90 text-lg sm:text-xl leading-8 max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
              Premium hair, nail and beauty treatments in the heart of
              Al Khalidiya, Doha — tailored to help you look polished,
              confident and effortlessly radiant.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/35"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Book Your Appointment
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 backdrop-blur-md px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/20"
              >
                Explore Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10">
              <div>
                <h3 className="text-3xl font-semibold text-white">10+</h3>
                <p className="text-white/75 text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">5,000+</h3>
                <p className="text-white/75 text-sm mt-1">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">★★★★★</h3>
                <p className="text-white/75 text-sm mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
