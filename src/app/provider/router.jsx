import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'
import NotFound from "../../pages/notFound/NotFound";


const router = createBrowserRouter(
    MainWrapper([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "*",
            element: <NotFound />
        },
    ])
)

export default router;