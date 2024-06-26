import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login.tsx';
import Home from './pages/home/home.tsx';
import Register from './pages/register/register.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: 'login', element: <Login/>}, 
      {path: 'home', element: <Home/>},
      {path: 'register', element: <Register/>}
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
