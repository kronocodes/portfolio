import React from "react";
import { Link } from "react-router-dom";

const Contacth = () => {
  return (
    <>
      <div className="bg-neutral-900 text-white px-5">
        <div className="border-[1px] border-neutral-700  w-full flex flex-col items-center justify-center rounded-[30px]">
          <div className="text-5xl mb-4">HAVE AN IDEA?
</div>
          <div className="text-5xl p-5 text-orange-500">
            <Link to="/contact">
            <button>Let's Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacth;
