
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Services from "../pages/services/page";
import Development from "../pages/development/page";
import WebDesign from "../pages/web-design/page";
import Contact from "../pages/contact/page";
import Booking from "../pages/booking/page";
import PaymentPortal from "../pages/payment-portal/page";
import PaymentSuccess from "../pages/payment-success/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/development",
    element: <Development />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/payment-portal",
    element: <PaymentPortal />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
