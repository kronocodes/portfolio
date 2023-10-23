import React from "react";
import vid1 from "../assets/1.mp4";

const Work = () => {
  return (
    <>
      <div className="bg-neutral-900">
        <div className="flex w-full h-screen rounded-2xl">
          <div className="flex flex-col rounded-3xl w-96 max-w-[500px]">
            <div className="text-white font-semibold text-5xl py-4">Projects</div>
            <div className="bg-white mr-7 h-[1px] my-4"></div>
            <ul>
              <li className="text-white text-xl h-12 mb-3">Swiggy Clone</li>
              <li className="text-white text-xl h-12 mb-3">Youtube Clone</li>
              <li className="text-white text-xl h-12 mb-3">Nasha Mukti Kendra</li>
              <li className="text-white text-xl h-12 mb-3">Linked-In clone</li>
              <li className="text-white text-xl h-12 mb-3">Next Project?</li>
            </ul>
            <div className="text-white">Interested to hire me? </div>
            <div className="text-white text-sm p-2 bg-neutral-800 rounded-full">abhisheknandan2013@gmail.com</div>
          </div>
          <div className="w-4/6 h-full border-l border-white rounded-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default Work;
