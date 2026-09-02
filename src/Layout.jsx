import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PageLoader from "./Components/Others/PageLoader";

function Layout() {
  const navigation = useNavigation();
  const location = useLocation();
  const [imagesReady, setImagesReady] = useState(true);
  const timeoutRef = useRef(null);

  const isNavigating = navigation.state !== "idle";
  const showLoader = isNavigating || !imagesReady;

  // Runs synchronously before paint — prevents the new page from flashing
  // for even one frame before the loader appears
  useLayoutEffect(() => {
    setImagesReady(false);
  }, [location.pathname]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const pending = imgs.filter((img) => !img.complete);

      if (pending.length === 0) {
        setImagesReady(true);
        return;
      }

      // Max 2.5s so a broken image never traps the loader
      timeoutRef.current = setTimeout(() => setImagesReady(true), 2500);

      Promise.all(
        pending.map(
          (img) =>
            new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
            })
        )
      ).then(() => {
        clearTimeout(timeoutRef.current);
        setImagesReady(true);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeoutRef.current);
    };
  }, [location.pathname]);

  return (
    <>
      <PageLoader visible={showLoader} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
