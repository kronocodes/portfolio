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
            <div className="fixed mt-7 left-8 text-3xl opacity-90 font-semibold text-white bg-black">
              AN.
            </div>
          </Link>
          <button
            onClick={toggleDropdown}
            className="fixed right-8 top-6 z-[999] flex items-center justify-center w-12 h-12 rounded-full bg-neutral-500 bg-opacity-40 backdrop-blur-[6px]  p-[5px]"
          >
            <img
              className="w-6"
              src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"
              alt="Menu icon"
            />
          </button>
          {isDropdownOpen && (
            <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col items-start  bg-black text-white">
              <div className="mt-32 py-5 pl-10 pr-10 hover:bg-white w-full hover:text-black">
                <Link
                  to="/"
                  className="text-6xl w-full"
                  onClick={closeDropdown}
                >
                  <div className="flex justify-between">
                    <div>HOME</div>
                    <div>↗</div>
                  </div>
                </Link>
              </div>
              <div className="py-5 pl-10 pr-10 hover:bg-white w-full hover:text-black">
                <Link
                  to="/work"
                  className="text-6xl w-full"
                  onClick={closeDropdown}
                >
                  <div className="flex justify-between">
                    <div>WORK</div>
                    <div>↗</div>
                  </div>
                </Link>
              </div>
              <div className="py-5 pl-10 pr-10 hover:bg-white w-full hover:text-black">
                <Link
                  to="/about"
                  className="text-6xl w-full"
                  onClick={closeDropdown}
                >
                  <div className="flex justify-between">
                    <div>ABOUT</div>
                    <div>↗</div>
                  </div>
                </Link>
              </div>
              <div className="py-5 pl-10 pr-10 hover:bg-white w-full hover:text-black">
                <Link
                  to="/design"
                  className="text-6xl w-full"
                  onClick={closeDropdown}
                >
                  <div className="flex justify-between">
                    <div>DESIGN</div>
                    <div>↗</div>
                  </div>
                </Link>
              </div>
              <div className="py-5 mb-10 pl-10 pr-10 hover:bg-white w-full hover:text-black">
                <Link
                  to="/contact"
                  className="text-6xl w-full"
                  onClick={closeDropdown}
                >
                  <div className="flex justify-between">
                    <div>CONTACT</div>
                    <div>↗</div>
                  </div>
                </Link>
              </div>
              <div className="py-16 w-full px-10 border-t border-white">
                <div className="flex gap-x-10 justify-between pl-1 text-xl">
                  <a className="" href="https://github.com/kronocodes">
                    Github
                  </a>
                  <a
                    className=""
                    href="https://www.linkedin.com/in/abhisheknandan2013/"
                  >
                    LinkedIn
                  </a>
                  <a className="" href="https://twitter.com/RakNandan">
                    Twitter
                  </a>
                </div>
                  <div className="my-8 py-2 px-2 font-semibold text-center rounded-xl text-lg text-white bg-orange-500">abhisheknandan2013@gmail.com</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="fixed z-[999]">
          <Link to="/" className="w-24 h-9 rounded-full text-center pt-2">
            <div className="fixed mt-7 left-8 text-3xl opacity-80 font-semibold text-white">
              AN.
            </div>
          </Link>
          <div className="flex fixed left-0 right-0 my-5 mx-auto w-[340px] justify-center border border-neutral-600 bg-neutral-800 bg-opacity-50 backdrop-blur-[6px] hover:bg-neutral-[750] p-2 items-center rounded-full text-white">
            <Link
              to="/work"
              className="hover:bg-neutral-600  w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500"
            >
              About
            </Link>
            <Link
              to="/design"
              className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500"
            >
              Design
            </Link>
            <Link
              to="/contact"
              className="hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
