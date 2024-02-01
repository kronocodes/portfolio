import React from "react";
import { Link } from "react-router-dom";

const Contacth = () => {
  return (
    <>
      <div className="bg-neutral-900 text-white px-5 pt-10">
        <div className="border-[1px] border-neutral-700 min-h-[50vh] w-full flex flex-col items-center justify-center rounded-[30px]">
          <div className="text-4xl pb-14">Got something for me?<br></br> Wanna collab? </div>
          <div className="text-xl p-2 bg-orange-500 text-white">
            <Link to="/contact">
            <button>Let's connect and make it happen!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacth;
