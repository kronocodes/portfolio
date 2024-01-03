import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
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
        <div className="fixed right-8 z-50 my-8">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 bg-opacity-40 backdrop-blur-[6px] hover:bg-neutral-[750] p-[5px] text-white">
              <img width="24" height="24" src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" alt="Menu icon"/>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px] p-2 rounded-md text-white">
                <Link to="/" className="block bg-opacity-40 hover:bg-neutral-600 rounded-md py-1 px-2" onClick={closeDropdown}>
                  Home
                </Link>
                <Link to="/work" className="block hover:bg-neutral-600 rounded-md py-1 px-2" onClick={closeDropdown}>
                  Work
                </Link>
                <Link to="/about" className="block hover:bg-neutral-600 rounded-md py-1 px-2" onClick={closeDropdown}>
                  About
                </Link>
                <Link to="/arena" className="block hover:bg-neutral-600 rounded-md py-1 px-2" onClick={closeDropdown}>
                  Arena
                </Link>
                <Link to="/contact" className="block hover:bg-neutral-600 rounded-md py-1 px-2" onClick={closeDropdown}>
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative z-50">
          <div className="flex fixed left-0 right-0 my-8 mx-auto w-[414px] justify-center bg-neutral-800 bg-opacity-40 backdrop-blur-[6px] hover:bg-neutral-[750] p-[5px] items-center rounded-full text-white text-sm">
            <Link to="/" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-2">
              Home
            </Link>
            <Link to="/work" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-2">
              Work
            </Link>
            <Link to="/about" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-2">
              About
            </Link>
            <Link to="/arena" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-2">
              Arena
            </Link>
            <Link to="/contact" className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
