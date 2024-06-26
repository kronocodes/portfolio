import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "./Slider";
import ShinyButton from "./button";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up to document
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const activeLink='bg-neutral-700 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'
  const inactiveLink='hover:bg-neutral-600  w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'

  return (
    <>
      {isSmallScreen ? (
        <div className="fixed z-50">
          <button
            onClick={toggleDropdown}
            className="fixed right-8 top-6 z-[999] flex items-center justify-center w-12 h-12 rounded-full bg-neutral-500 bg-opacity-40 backdrop-blur-[6px]  p-[5px]">
            <img
              className="w-6"
              src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"
              alt="Menu icon"
            />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="fixed right-8 top-[73px] h-64 w-40 px-[10px] flex flex-col items-center justify-center rounded-2xl transition-all duration-500 text-white border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px]"
            >
              <div className="rounded-2xl font-semibold text-center hover:backdrop-blur-[1px] w-full py-3">
                <Link to="/" onClick={closeDropdown}>
                  Home
                </Link>
              </div>
              <div className="rounded-2xl font-semibold text-center hover:backdrop-blur-[1px] w-full py-3">
                <Link to="/work" onClick={closeDropdown}>
                  Work
                </Link>
              </div>
              <div className="rounded-2xl font-semibold text-center hover:backdrop-blur-[1px] w-full py-3">
                <Link to="/about" onClick={closeDropdown}>
                  About
                </Link>
              </div>
              <div className="rounded-2xl italic text-center hover:backdrop-blur-[1px] w-full py-3">
                <Link to="/design" onClick={closeDropdown}>
                  Design
                </Link>
              </div>
              <div className="rounded-2xl font-semibold text-center hover:backdrop-blur-[1px] w-full py-3">
                <Link to="/contact" onClick={closeDropdown}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="fixed z-[999] text-white">
          <div className="flex gap-x-2 fixed left-0 right-0 my-4 mx-auto px-2 py-[2px] w-[400px] justify-between border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px] hover:bg-neutral-[750] items-center rounded-full">
            <NavLink
              to="/work"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >Work
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >About
            </NavLink>
            <Link>
              <img className="w-8 mx-3" src="https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/About/memoji_udgkhu.png"/>
            </Link>
            <NavLink
              to="/design"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >Design
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive})=>(isActive? activeLink : inactiveLink )}
              >Contact
            </NavLink>
          </div>
              {/* <div className="flex fixed right-0 my-4">
                <ShinyButton/>
              </div> */}
        </div>
      )}
    </>
  );
};

export default Header;
