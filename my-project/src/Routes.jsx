import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: '/news',
        element: <h1>This news page</h1>
    },
    {
        path: '/auth',
        element: <h1>This is authentication page</h1>
    },
    {
        path: '/*',
        element: <h1>Eorror 404</h1>
    }
]);


export default routes;