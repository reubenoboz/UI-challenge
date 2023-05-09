import AboutUs from "../pages/about-us";
import Contact from "../pages/contact";
import Home from "../pages/home";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
];
