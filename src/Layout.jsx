import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

function Layout () {
  return (
    <>
      <Analytics/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
