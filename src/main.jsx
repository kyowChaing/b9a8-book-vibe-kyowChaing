import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';

import './index.css'
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import Navbar from './components/Navbar/Navbar.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // element: <Navbar></Navbar>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home> 
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
