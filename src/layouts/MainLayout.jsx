import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/scrollToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
