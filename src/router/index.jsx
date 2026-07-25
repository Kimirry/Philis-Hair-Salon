import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Services from "../pages/Services/Services";

import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
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
        path: "blog",
        element: <Blog />,
      },

      {
        path: "booking",
        element: <Booking />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "gallery",
        element: <Gallery />,
      },

      {
        path: "services",
        element: <Services />,
      },

      // Catch all unknown routes
      {
        path: "*",
        element: <NotFound />,
      },

    ],
  },
]);


export default router;
