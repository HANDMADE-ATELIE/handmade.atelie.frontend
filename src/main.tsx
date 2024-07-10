import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/user-login/login.tsx';
import Home from './pages/home-page/home.tsx';
import Register from './pages/user-register/register.tsx';
import App from './App.tsx';
import ProductInfo from './pages/product-info/productInfo.tsx';
import FinishOrder from './pages/finish-order/finish-order.tsx';
import SuccessPage from './pages/sucess-page/success-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: 'user-login', element: <Login/>}, 
      {path: 'home', element: <Home/>},
      {path: 'user-register', element: <Register/>},
      {path: 'product-info', element: <ProductInfo/>},
      {path: 'finish-order', element: <FinishOrder/>},
      {path: 'success-order', element: <SuccessPage/>}
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
