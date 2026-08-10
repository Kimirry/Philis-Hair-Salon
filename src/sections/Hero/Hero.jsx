import nailsImage from "../../assets/nails3.jpeg";

const WHATSAPP_URL =
  "https://wa.me/97455257237?text=" +
  encodeURIComponent(
    "Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
  );

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 py-8 sm:py-10 lg:grid-cols-2 lg:gap-16 xl:gap-20 xl:py-10">

          {/* LEFT — TEXT */}
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-pink-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
                Philis Hair & Beauty Salon
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-7 font-serif text-5xl font-medium leading-[0.94] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
              Beauty,
              <span className="block text-pink-500">
                beautifully
              </span>
              expressed.
            </h1>

            {/* Location */}
            <p className="mt-7 text-sm uppercase tracking-[0.24em] text-gray-500">
              Doha, Qatar
            </p>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-md text-base leading-8 text-gray-500 sm:text-lg lg:mx-0">
              Hair, beauty, nails and lashes crafted with care, creativity
              and a touch of Philis elegance.
            </p>

            {/* Services */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
              {["Hair", "Beauty", "Nails", "Lashes"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="text-xs text-gray-500 sm:text-sm">
                    {item}
                  </span>

                  {index < 3 && (
                    <span className="h-1 w-1 rounded-full bg-pink-300" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-pink-500 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/25"
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
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-pink-50/40 hover:text-pink-500"
              >
                Explore Services
              </a>

            </div>

            {/* Reassurance */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-gray-400 lg:justify-start">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                ✓
              </span>

              <span>
                Your beauty. Your moment.
              </span>
            </div>

          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex w-full justify-center lg:justify-end">

            <div className="relative w-full max-w-md xl:max-w-lg">

              {/* Decorative Line */}
              <div className="absolute -left-4 top-10 bottom-10 hidden w-px bg-gradient-to-b from-transparent via-pink-300 to-transparent sm:block lg:-left-6" />

              {/* Image */}
              <div className="relative mx-auto aspect-[4/4.6] w-full overflow-hidden rounded-[2rem] bg-pink-50 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">

                <img
                  src={nailsImage}
                  alt="Beauty treatment at Philis Hair & Beauty Salon"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Subtle Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Discover Philis */}
      <a
        href="#services"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-gray-400 transition-colors hover:text-pink-500 lg:flex"
      >
        <span>Discover Philis</span>

        <span className="h-px w-8 bg-gray-300" />
      </a>

    </section>
  );
}
