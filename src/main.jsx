import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from "./Components/About";
import About2 from "./Components/About2";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import Design from "./Components/Design";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Offline from './Components/Offline';
import ScrollToTop from "./Components/ScrollToTop";
import Error from "./Components/Error";
import Foodle from "./Components/Work/Foodle"
import Youtube from "./Components/Work/Youtube"
import NMK from "./Components/Work/Nmk"
import FACT from "./Components/Work/FACT"
import Portfolio from "./Components/Work/Portfolio"


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
                path: "work/foodle",
                element: <Foodle/>,
            },
            {
                path: "work/youtube",
                element: <Youtube/>,
            },
            {
                path: "work/portfolio",
                element: <Portfolio/>,
            },
            {
                path: "work/fact",
                element: <FACT/>,
            },
            {
                path: "work/nmk",
                element: <NMK/>,
            },
            {
                path: "design",
                element: <Design/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "about2",
                element: <About2/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "*",
                element: <Error/>,
            },
            
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        {/* <ScrollToTop/> */}
    </React.StrictMode>
)
