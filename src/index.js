import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/pages/home/Home';


const router =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <h1> Sorry .........................</h1>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);