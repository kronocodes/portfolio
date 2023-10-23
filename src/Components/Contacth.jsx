import React from "react";
import Up from "../assets/up.svg";

const Contacth = () => {
  return (
    <>
      <div className="bg-neutral-900 text-white px-20">
        <div className="flex justify-center py-16 rounded-t-[30px]">
          <div className="w-1/2 text-xl">
            <div className="flex max-w-[550px] justify-between">
              <div>Github</div>
              <div>LinkedIn</div>
              <div>Twitter</div>
              <div>Comming Soon</div>
            </div>
            <div className="mt-[20px]">abhisheknandan2013@gmail.com</div>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-orange-500 w-24 h-24 rounded-full">
              <img className="p-4" src={Up} />
            </button>
          </div>
        </div>
        <div className="bg-neutral-600 h-[1px]"></div>
        <div className="flex justify-between py-6 text-sm">
          <div>DESIGNED & DEVELOPED BY THAT FELLOW OVER THERE ⟿</div>
          <div>© 2023 Abhishek Nandan. All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Contacth;
