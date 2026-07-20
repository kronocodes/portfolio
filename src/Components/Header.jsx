import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import ShinyButton from "./Others/button";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { isLight, toggle } = useTheme();
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
  

  const activeBase = 'relative bg-neutral-400 border-zinc-800 bg-opacity-30 backdrop-blur-[5px] w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'
  const inactiveBase = 'relative hover:bg-neutral-600 w-20 h-9 rounded-full text-center pt-[6px] transition-all duration-500'

  const tubeColor = isLight ? '#111111' : '#ffffff';
  const tubeGlow = isLight
    ? '0 0px 0px 0px rgba(0,0,0,0.8), 0 4px 14px 4px rgba(0,0,0,0.25), 0 8px 28px 6px rgba(0,0,0,0.10)'
    : '0 0px 0px 0px rgba(255,255,255,0.95), 0 4px 14px 4px rgba(255,255,255,0.45), 0 8px 28px 6px rgba(255,255,255,0.18)';

  const TubeLight = () => (
    <span
      aria-hidden="true"
      className="absolute -top-[10px] z-10 left-[32%] w-[32%] rounded-full"
      style={{ height: '2px', background: tubeColor, boxShadow: tubeGlow }}
    />
  );

  const ThemeToggle = ({ extraClass = '' }) => (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`fixed z-[999] flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${extraClass}`}
      style={{
        background: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.10)',
        border: isLight ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {isLight ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}
    </button>
  );

  return (
    <>
      {isSmallScreen ? (
        <div className="fixed z-50">
          <ThemeToggle extraClass="top-6 right-[5.5rem]" />
          <button
            onClick={toggleDropdown}
            className="fixed right-8 top-6 z-[999] flex items-center justify-center w-9 h-9 rounded-full bg-neutral-500 bg-opacity-40 backdrop-blur-[6px] p-[5px]">
            <img
              className="w-4"
              src={isLight
                ? "https://img.icons8.com/ios/50/111111/menu--v1.png"
                : "https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"}
              alt="Menu icon"
            />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="fixed right-8 top-[73px] z-50 h-40 w-40 px-[10px] flex flex-col items-center justify-center rounded-2xl transition-all duration-500 border backdrop-blur-[6px]"
              style={{
                color: isLight ? '#111111' : '#ffffff',
                borderColor: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(115,115,115,1)',
                background: isLight ? 'rgba(255,255,255,0.85)' : 'rgba(38,38,38,0.5)',
              }}
            >
              <div className="rounded-2xl font-semibold text-center w-full py-3 hover:bg-black/5">
                <Link to="/" onClick={closeDropdown}>Home</Link>
              </div>
              <div className="rounded-2xl font-semibold text-center w-full py-3 hover:bg-black/5">
                <Link to="/work" onClick={closeDropdown}>Work</Link>
              </div>
              <div className="rounded-2xl font-semibold text-center w-full py-3 hover:bg-black/5">
                <Link to="/about" onClick={closeDropdown}>About</Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="fixed z-[999] text-[15px]" style={{ color: isLight ? '#111111' : '#ffffff' }}>
          <ThemeToggle extraClass="top-4 right-6" />
          <div
            className="flex gap-x-2 fixed left-0 right-0 my-4 mx-auto px-2 py-[2px] w-[260px] justify-between items-center rounded-full backdrop-blur-[6px]"
            style={{
              border: isLight ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(64,64,64,1)',
              background: isLight ? 'rgba(255,255,255,0.75)' : 'rgba(38,38,38,0.4)',
            }}
          >
            <NavLink
              to="/work"
              className={({ isActive }) => isActive ? activeBase : inactiveBase}
            >
              {({ isActive }) => <>{isActive && <TubeLight />}Work</>}
            </NavLink>
            <Link to="/">
              <img className="w-8 mx-3" src="https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/About/memoji_udgkhu.png"/>
            </Link>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? activeBase : inactiveBase}
            >
              {({ isActive }) => <>{isActive && <TubeLight />}About</>}
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
