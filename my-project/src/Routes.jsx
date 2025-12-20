import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";
import AuthLayout from "./LayOut/AuthLayout";


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
                element: <CategoryNews></CategoryNews>,
                loader:()=> fetch('/news.json'),
            }
        ]
    },
    {
        path: '/news',
        element: <h1>This news page</h1>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Eorror 404</h1>
    }
]);


export default routes;