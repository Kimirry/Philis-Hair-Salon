import doorImage from "../../assets/door.jpeg";

const WHATSAPP_URL = `https://wa.me/97455257237?text=${encodeURIComponent(
  "Hi, I'd like to book an appointment at Philis Hair & Beauty Salon."
)}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${doorImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "118%",
          backgroundPosition: "74% center",
        }}
      />

      {/* Premium Gradient */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(0,0,0,.05) 0%,
              rgba(0,0,0,.10) 18%,
              rgba(0,0,0,.18) 30%,
              rgba(0,0,0,.32) 42%,
              rgba(0,0,0,.52) 54%,
              rgba(0,0,0,.72) 67%,
              rgba(0,0,0,.88) 82%,
              rgba(0,0,0,.96) 100%
            )
          `,
        }}
      />

      {/* Mobile Overlay */}
      <div className="absolute inset-0 bg-black/55 lg:hidden" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-end">

        <div
          className="
            w-full
            lg:w-[36%]
            lg:mr-16
            xl:mr-24
            px-6
            sm:px-10
            pt-16
            pb-16
          "
        >

          <h1
            className="
              font-serif
              font-bold
              leading-[1.05]
              text-5xl
              sm:text-6xl
              xl:text-7xl
            "
          >
            <span className="text-white">
              Luxury Hair
            </span>

            <br />

            <span className="text-white">
              & Beauty
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-pink-200
                via-rose-100
                to-yellow-100
                bg-clip-text
                text-transparent
              "
            >
              Styled To
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-pink-200
                via-rose-100
                to-yellow-100
                bg-clip-text
                text-transparent
              "
            >
              Perfection
            </span>
          </h1>


          <p
            className="
              mt-6
              max-w-md
              text-lg
              leading-8
              text-white/90
            "
          >
            Experience exceptional hair styling, luxury beauty treatments and
            personalised care designed to bring out your confidence and beauty.
          </p>


          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-pink-500
                hover:bg-pink-600
                px-8
                py-4
                text-white
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-xl
                shadow-pink-500/30
              "
            >
              Book Your Appointment
            </a>


            <a
              href="#services"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-white/10
                backdrop-blur-sm
                hover:bg-white/20
                px-8
                py-4
                text-white
                font-semibold
                transition
              "
            >
              Explore Services
            </a>

          </div>


          <div className="mt-10">

            <div className="text-yellow-400 text-3xl tracking-[0.3em]">
              ★★★★★
            </div>

            <p className="mt-2 text-white/80">
              Trusted by clients across Doha.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
