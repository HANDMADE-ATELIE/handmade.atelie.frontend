import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Home from './pages/home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: 'login', element: <Login/>}, 
      {path: 'home', element: <Home/>}
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
