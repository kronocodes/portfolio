import React from "react";
import goto from "../assets/goto.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopy = () => {
    const email = "abhisheknandan2013@gmail.com";
    copyToClipboard(email);
    alert("Email copied to clipboard: " + email);
  };
  const formatTimeInIndia = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <div className="flex flex-col justify-center bg-zinc-950 text-white border-t border-zinc-700 w-full">
      <div className="flex justify-around xl:justify-between 2xl:max-w-[1300px] mx-auto md:px-16 lg:max-w-[1000px] w-full px-5 py-20">
        <div className="md:flex md:flex-col text-sm font-medium hidden">
          <div className="text-[20px] md:text-2xl italic pb-10 h-full">
            Made with love, peer pressure & React
          </div>
          <div className="flex flex-col justify-end">
          <div className="text-white pb-4 flex gap-x-1 items-center">Locale time in Bangalore
          <div className="flex h-3 w-3 gap-y-[2.4px] mt-[4px] justify-center flex-col">
            <div className="w-full h-[2px] bg-orange-600"></div>
            <div className="w-full h-[2px] bg-white"></div>
            <div className="w-full h-[2px] bg-green-600"></div>
          </div>
          <div>: {formatTimeInIndia(currentTime)}</div>
          </div>
            <div className="text-xs text-zinc-300">
              Designed & Developed by a Human.
            </div>
            <div className="text-xs text-zinc-300">
              © 2024 Abhishek Nandan. All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="text-[12px] pb-4 font-semibold tracking-wider text-zinc-400">
            NAVIGATION
          </div>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/design">Design</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="text-[12px] pb-4 font-semibold tracking-wider text-zinc-400">
            CONTACT
          </div>
          <div
            className="flex justify-between"
            onClick={() => handleLinkClick("https://github.com/kronocodes")}
          >
            <div>Github</div>
            <img className="pl-2 w-6" src={goto}></img>{" "}
          </div>
          <div
            className="flex justify-between"
            onClick={() =>
              handleLinkClick("https://www.linkedin.com/in/abhisheknandan2013/")
            }
          >
            <div>LinkedIn</div>
            <img className="pl-2 w-6" src={goto}></img>{" "}
          </div>
          <div
            className="flex justify-between"
            onClick={() => handleLinkClick("https://twitter.com/RakNandan")}
          >
            <div>Twitter</div>
            <img className="pl-2 w-6" src={goto}></img>{" "}
          </div>
          <button onClick={handleCopy} className="flex justify-between">
            <div>Email</div>
            <img className="pl-2 w-6" src={goto}></img>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 text-sm font-medium md:hidden">
        <div className="text-[20px] md:text-2xl italic pb-10">
          Made with love, peer pressure & React
        </div>
        <div className="text-white pb-4 flex gap-x-1 items-center">Locale time in Bangalore
          <div className="flex h-3 w-3 gap-y-[2.4px] mt-[4px] justify-center flex-col">
            <div className="w-full h-[2px] bg-orange-600"></div>
            <div className="w-full h-[2px] bg-white"></div>
            <div className="w-full h-[2px] bg-green-600"></div>
          </div>
          <div>: {formatTimeInIndia(currentTime)}</div>
          </div>
        <div className="text-xs text-zinc-300">
          Designed & Developed by a Human.
        </div>
        <div className="text-xs text-zinc-300">
          © 2024 Abhishek Nandan. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
