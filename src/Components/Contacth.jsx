import React from "react";
import { Link } from "react-router-dom";

const Contacth = () => {
  return (
    <div className="flex justify-center bg-black px-4">
      <div className="max-w-[1300px] w-full text-white px-5 py-10 border-[1px] border-neutral-700 bg-zinc-900 rounded-3xl">
        <div className=" min-h-[50vh] flex flex-col items-center justify-center">
          <div className="text-3xl md:text-4xl xl:text-5xl md:pb-14 pb-8">Got something for me?</div>
          <div className="md:text-xl py-2 px-3 rounded-lg bg-orange-500 text-white">
            <Link to="/contact">
            <button>Let's connect and make it happen!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacth;
