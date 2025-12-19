import { createBrowserRouter } from "react-router-dom";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<h1>This is home layout</h1>
    },
    {
        path:'/news',
        element:<h1>This news page</h1>
    },
    {
        path:'/auth',
        element:<h1>This is authentication page</h1>
    },
    {
        path:'/*',
        element:<h1>Eorror 404</h1>
    }
]);


export default routes;