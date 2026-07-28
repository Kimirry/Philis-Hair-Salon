import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97455257237"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Now"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div
        className="
          flex
          items-center
          gap-3
          px-5
          py-2.5
          rounded-full
          bg-white
          shadow-xl
          border
          border-gray-100
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-gradient-to-br
            from-green-500
            to-green-600
            text-white
            shadow-md
            group-hover:scale-110
            transition-transform
            duration-300
          "
        >
          <FaWhatsapp className="text-[22px]" />
        </div>

        <span
          className="
            text-[15px]
            font-semibold
            text-gray-900
            whitespace-nowrap
          "
        >
          WhatsApp Now
        </span>
      </div>
    </a>
  );
}
