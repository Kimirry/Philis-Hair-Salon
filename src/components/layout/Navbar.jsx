import { Link } from "react-router-dom";
import LanguageSwitcher from "../language/LanguageSwitcher";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/80
      backdrop-blur-lg
      border-b
      border-pink-100
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}
        <Link
          to="/"
          className="
          text-3xl
          tracking-wide
          text-pink-600
          font-semibold
          "
        >
          PHILIS
        </Link>


        {/* Navigation */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-sm
          "
        >

          <Link to="/">
            Discover
          </Link>

          <Link to="/services">
            Experiences
          </Link>

          <Link to="/gallery">
            Portfolio
          </Link>

          <Link to="/about">
            Our Story
          </Link>

          <Link to="/booking">
            Reserve
          </Link>

          <LanguageSwitcher />

        </div>

      </div>
    </nav>
  );
}
