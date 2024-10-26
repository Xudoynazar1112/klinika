import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../../global/MainWrapper";
import Home from '../../pages/home/Home'


const router = createBrowserRouter(
    MainWrapper([
        {
            path: "/",
            element: <Home />
        },
    ])
)

export default router;