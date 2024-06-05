import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

function Routes() {
    return (
        <RouterProvider router={routes} />
    );
}

export default Routes;
