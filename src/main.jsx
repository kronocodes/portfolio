import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/About/About";
import Home from "./Components/Home";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Components/Others/Error";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/Others/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import CustomCursor from "./CustomCursor";
import { ThemeProvider } from "./ThemeContext";


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
        path: "about",
        element: <About />,
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
    <ThemeProvider>
      <Analytics/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
