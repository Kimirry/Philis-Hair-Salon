import nailsImage from "../../assets/nails3.jpeg";

const WHATSAPP_URL =
  "https://wa.me/97455257237?text=" +
  encodeURIComponent(
    "Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
  );

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 xl:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-pink-500" />

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-pink-500">
              Philis Hair & Beauty Salon
            </span>
          </div>

          <h1 className="mt-7 font-serif font-medium text-gray-900 leading-[0.94] tracking-tight text-5xl sm:text-6xl lg:text-[4.7rem] xl:text-[5.5rem]">
            Beauty,
            <span className="block text-pink-500">
              beautifully
            </span>
            expressed.
          </h1>

          <p className="mt-7 text-sm uppercase tracking-[0.24em] text-gray-500">
            Doha, Qatar
          </p>

          <p className="mt-5 max-w-md text-base sm:text-lg leading-8 text-gray-500">
            Hair, beauty, nails and lashes crafted
            with care, creativity and a touch of
            Philis elegance.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {["Hair", "Beauty", "Nails", "Lashes"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">

                <span className="text-xs sm:text-sm text-gray-500">
                  {item}
                </span>

                {index < 3 && (
                  <span className="h-1 w-1 rounded-full bg-pink-300" />
                )}

              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/25"
            >
              Book an Appointment

              <svg
                className="ml-2.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-pink-200 hover:text-pink-500 hover:bg-pink-50/40 hover:-translate-y-0.5"
            >
              Explore Services
            </a>

          </div>

          {/* TRUST MESSAGE */}
          <div className="mt-8 flex items-center gap-3 text-xs text-gray-400">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50 text-pink-500">
              ✓
            </span>

            <span>
              Your beauty. Your moment.
            </span>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="absolute -left-3 lg:-left-5 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-pink-300 to-transparent" />

          <div className="relative w-full max-w-[31rem] lg:max-w-[34rem] aspect-[4/5] overflow-hidden rounded-[2rem] bg-pink-50 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

            <img
              src={nailsImage}
              alt="Beauty treatment at Philis Hair & Beauty Salon"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          </div>

          {/* IMAGE LABEL */}
          <div className="absolute -bottom-5 left-2 sm:left-0 lg:-left-10 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10 border border-gray-100">

            <p className="text-[9px] uppercase tracking-[0.25em] text-pink-400 font-medium">
              Beauty services
            </p>

            <p className="mt-1.5 text-sm font-medium text-gray-800">
              Hair · Nails · Lashes
            </p>

          </div>

          {/* PHILIS BADGE */}
          <div className="absolute -top-5 right-4 sm:right-0 lg:-right-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/20">

            <span className="text-[8px] uppercase tracking-[0.2em] text-center leading-4">
              Philis
              <br />
              Doha
            </span>

          </div>

        </div>

      </div>

      {/* DISCOVER PHILIS */}
      <a
        href="#services"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-gray-400 hover:text-pink-500 transition-colors"
      >
        <span>Discover Philis</span>

        <span className="h-px w-8 bg-gray-300" />
      </a>

    </section>
  );
}
