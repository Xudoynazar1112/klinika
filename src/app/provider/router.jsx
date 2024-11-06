import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import NotFound from "../../pages/notFound/NotFound";
import Urolog from "../../pages/doctor/Urolog";
import Ginikolog from "../../pages/doctor/Ginikolog";
import Endokrinolog from "../../pages/doctor/Endokrinolog";
import Lor from "../../pages/doctor/Lor";
import Nevrolog from "../../pages/doctor/Nevrolog";
import Pediator from "../../pages/doctor/Pediator";
import Stamotolog from "../../pages/doctor/Stamotolog";
import Services from "../../pages/Services/Services";


const router = createBrowserRouter(
    MainWrapper([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/urologiya",
            element: <Urolog />
        },
        {
            path: "/gnikologiya",
            element: <Ginikolog />
        },
        {
            path: "/endokrinologiya",
            element: <Endokrinolog />
        },
        {
            path: "/nevrologiya",
            element: <Nevrolog />
        },
        {
            path: "/pediatriya",
            element: <Pediator />
        },
        {
            path: "/lor",
            element: <Lor />
        },
        {
            path: "/stamotologiya",
            element: <Stamotolog />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
)

export default router;