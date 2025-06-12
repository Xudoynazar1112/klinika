import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import NotFound from "../../pages/notFound/NotFound";
import Lor from "../../pages/doctor/Lor";
import Contact from "../../pages/contact/Contact";
import Ekg from "../../pages/doctor/Ekg";
import Uzi from "../../pages/doctor/Uzi";

// Route constants
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  LOR: '/lor',
  EKG: '/ekg',
  UZI: '/uzi',
  CONTACT: '/contact',
  ABOUT: '/about',
};

// Route configuration
const routes = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOR,
    element: <Lor />,
  },
  {
    path: ROUTES.EKG,
    element: <Ekg />,
  },
  {
    path: ROUTES.UZI,
    element: <Uzi />,
  },
  {
    path: ROUTES.SERVICES,
    element: <Lor />,
  },
  {
    path: ROUTES.CONTACT,
    element: <Contact />,
  },
  {
    path: ROUTES.ABOUT,
    element: <NotFound />, // TODO: Create About page
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(MainWrapper(routes));

export default router;