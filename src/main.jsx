import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/login',
        element:<Login/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />

  </StrictMode>,
)
