import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import BooksShelf from './pages/BooksShelf.tsx';
import RegisterPage from './pages/register/RegisterPage.tsx';
import LoginPage from './pages/login/LoginPage.tsx';
import Home from './pages/Home.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/home",
    element: <div><Home/><BooksShelf/></div>
  },
  {
    path: "/login",
    element: <div><LoginPage/></div>
  },
  {
    path: "/register",
    element: <div><RegisterPage/></div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
