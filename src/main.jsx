import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Design from "./Components/Design";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Components/Error";
import Foodle from "./Components/Work/Foodle";
import Youtube from "./Components/Work/Youtube";
import NMK from "./Components/Work/Nmk";
import FACT from "./Components/Work/FACT";
import Portfolio from "./Components/Work/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./Components/Privacy";
import Tos from "./Components/Tos";
import Cancellation from "./Components/Cancellation";
import Support from "./Components/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ScrollToTop />
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
        path: "work/foodle",
        element: <Foodle />,
      },
      {
        path: "work/youtube",
        element: <Youtube />,
      },
      {
        path: "work/portfolio",
        element: <Portfolio />,
      },
      {
        path: "work/fact",
        element: <FACT />,
      },
      {
        path: "work/nmk",
        element: <NMK />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "privacy-policy",
        element: <Privacy/>,
      },
      {
        path: "terms-of-service",
        element: <Tos />,
      },
      {
        path: "cancellation",
        element: <Cancellation />,
      },
      {
        path: "support",
        element: <Support />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
