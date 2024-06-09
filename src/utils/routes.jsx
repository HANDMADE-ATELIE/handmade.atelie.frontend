import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home.jsx';
import Login from "../pages/login/Login.jsx";
// import App from "../App.jsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{
      path: '/Login', 
      element: <Login/>
    }]
  }
])

function Routes() {
    return (
        <RouterProvider router={routes} />
    );
}

export default Routes;
