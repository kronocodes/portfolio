import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from "./Components/About";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import Arena from "./Components/Arena";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Offline from './Components/Offline';

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "work",
                element: <Work/>,
            },
            {
                path: "arena",
                element: <Arena/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
