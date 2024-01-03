import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="flex justify-center py-4 sticky top-0">
      <div className="border-[1px] border-neutral-700 bg-neutral-800 hover:bg-neutral-[750] flex h-auto w-auto p-[5px] items-center justify-between rounded-full">
        <Link to="/" class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full text-center pt-2">Home</Link>
        <Link to="/work" class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full text-center pt-2">Work</Link>
        <Link to="/about" class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full text-center pt-2">About</Link>
        <Link to="/playground" class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full text-center pt-2">Playground</Link>
        <Link to="/contact" class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full text-center pt-2">Contact</Link>
      </div>
      </div>
    </>
  );
};

export default Header;
