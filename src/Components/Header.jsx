import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {isSmallScreen ? (

          <div className="fixed z-50">
            <Link to="/" className="w-24 h-9 rounded-full text-center pt-2">
              <div className="fixed mt-8 left-8 text-3xl opacity-90 font-semibold text-white bg-black">AN.</div>
            </Link>
            <button onClick={toggleDropdown} className="fixed right-8 top-6 z-[999] flex items-center justify-center w-12 h-12 rounded-full bg-neutral-500 bg-opacity-40 backdrop-blur-[6px]  p-[5px]">
              <img className="w-6" src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" alt="Menu icon"/>
            </button>
            {isDropdownOpen && (
              <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col items-start justify-center bg-white text-black">
                {/* <div className="py-5 pl-10 pr-10 hover:bg-black w-full hover:text-white">
                <Link to="/" className="text-7xl w-full" onClick={closeDropdown}>
                  <div className="flex justify-between">
                  <div>HOME</div>
                  <div>↗</div>
                  </div>
                </Link>
                </div> */}
                <div className="py-5 pl-10 pr-10 hover:bg-black w-full hover:text-white">                
                <Link to="/work" className="text-7xl w-full" onClick={closeDropdown}>
                <div className="flex justify-between">
                  <div>WORK</div>
                  <div>↗</div>
                  </div>
                </Link>
                </div>
                <div className="py-5 pl-10 pr-10 hover:bg-black w-full hover:text-white">                
                <Link to="/about" className="text-7xl w-full" onClick={closeDropdown}>
                <div className="flex justify-between">
                  <div>ABOUT</div>
                  <div>↗</div>
                  </div>
                </Link>
                </div>
                <div className="py-5 pl-10 pr-10 hover:bg-black w-full hover:text-white">                
                <Link to="/design" className="text-7xl w-full" onClick={closeDropdown}>
                <div className="flex justify-between">
                  <div>DESIGN</div>
                  <div>↗</div>
                  </div>
                </Link>
                </div>
                <div className="py-5 pl-10 pr-10 hover:bg-black w-full hover:text-white">                
                <Link to="/contact" className="text-7xl w-full" onClick={closeDropdown}>
                <div className="flex justify-between">
                  <div>CONTACT</div>
                  <div>↗</div>
                  </div>
                </Link>
                </div>
              </div>
            )}
          </div>
      ) : (
        <div className="fixed z-[999]">
          <Link to="/" className="w-24 h-9 rounded-full text-center pt-2">
              <div className="fixed mt-8 left-8 text-3xl opacity-80 font-semibold text-white">A N.</div>
            </Link>
          <div className="flex fixed left-0 right-0 my-5 mx-auto w-[340px] justify-center border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px] hover:bg-neutral-[750] p-2 items-center rounded-full text-white">
            <Link to="/work" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px]">
              Work
            </Link>
            <Link to="/about" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px]">
              About
            </Link>
            <Link to="/design" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px]">
              Design
            </Link>
            <Link to="/contact" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
