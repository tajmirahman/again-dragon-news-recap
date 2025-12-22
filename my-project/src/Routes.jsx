import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";
import AuthLayout from "./LayOut/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewsDetails from "./Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=> fetch('/news.json'),
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoutes>
            <NewsDetails></NewsDetails>
        </PrivateRoutes>,
        loader: () => fetch('/news.json')
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Eorror 404</h1>
    }
]);


export default routes;