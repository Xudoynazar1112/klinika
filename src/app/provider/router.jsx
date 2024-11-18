import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import NotFound from "../../pages/notFound/NotFound";
import Lor from "../../pages/doctor/Lor";
import Contact from "../../pages/contact/Contact";
import Ekg from "../../pages/doctor/Ekg";
import Uzi from "../../pages/doctor/Uzi";


const router = createBrowserRouter(
    MainWrapper([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/lor",
            element: <Lor />
        },
        {
            path: "/ekg",
            element: <Ekg />
        },
        {
            path: "/uzi",
            element: <Uzi />
        },
        {
            path: "/services",
            element: <Lor />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
)

export default router;