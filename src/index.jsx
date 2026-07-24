import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
