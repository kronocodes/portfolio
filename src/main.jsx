import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/About/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Design from "./Components/Design";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Components/Others/Error";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/Others/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import CustomCursor from "./CustomCursor";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ScrollToTop />
        {/* <CustomCursor /> */}
        <SpeedInsights />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
