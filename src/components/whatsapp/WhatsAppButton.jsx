import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97455257237"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="
      fixed
      bottom-6
      right-6
      z-50
      group
      "
    >
      <div
        className="
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-2xl
        bg-white/95
        backdrop-blur-md
        shadow-xl
        border
        border-white
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
          w-11
          h-11
          rounded-xl
          bg-green-500
          text-white
          "
        >
          <MessageCircle size={22} />
        </div>

        <div className="hidden md:block">
          <p className="text-xs text-gray-500 leading-none">
            Book Now
          </p>

          <p className="font-semibold text-gray-900 leading-tight">
            WhatsApp
          </p>
        </div>
      </div>
    </a>
  );
}
