import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

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
          <Link to="/" className="w-24 h-9 rounded-full text-center pt-2">
            <div className="fixed mt-7 left-8 text-3xl opacity-90 font-semibold text-white">
              <div className="flex flex-col text-sm items-start">
                <div>ABHISHEK</div>
                <div className="-mt-1">NANDAN</div>
              </div>
            </div>
          </Link>
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
              className="fixed right-8 top-[72px] flex flex-col items items-start rounded-2xl p-2 transition-all duration-500 text-white border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px]"
            >
              <div className="rounded-xl hover:shadow-xl hover:backdrop-blur-[1px] w-full py-3 px-10">
                <Link to="/work" onClick={closeDropdown}>
                  WORK
                </Link>
              </div>
              <div className="rounded-xl hover:shadow-xl hover:backdrop-blur-[1px] w-full py-3 px-10">
                <Link to="/about" onClick={closeDropdown}>
                  ABOUT
                </Link>
              </div>
              <div className="rounded-xl hover:shadow-xl hover:backdrop-blur-[1px] w-full py-3 px-10">
                <Link to="/design" onClick={closeDropdown}>
                  DESIGN
                </Link>
              </div>
              <div className="rounded-xl hover:shadow-xl hover:backdrop-blur-[1px] w-full py-3 px-10">
                <Link to="/contact" onClick={closeDropdown}>
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="fixed z-[999]">
          <Link to="/" className="w-24 h-9 rounded-full text-center pt-2">
            <div className="fixed flex flex-col leading-4 items-start mt-6 left-8 text-lg opacity-80 font-semibold text-white">
              <div>ABHISHEK</div>
              <div>NANDAN</div>
            </div>
          </Link>
          <div className="flex gap-x-2 fixed left-0 right-0 my-4 mx-auto w-[360px] justify-center border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px] hover:bg-neutral-[750] p-2 items-center rounded-full text-white">
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
        </div>
      )}
    </>
  );
};

export default Header;
