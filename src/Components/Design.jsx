import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";

const Design = () => {
  return (
    <>
    <div className="bg-black text-white">
      <div className="flex flex-col items-center min-h-[80vh]">
        <div className="flex items-center h-[45vh] md:text-[5.7vw] text-4xl">My Playground</div>
        <div className="w-1/2 tracking-[-.03em] text-center leading-[110%] text-2xl md:text-[2.083vw]" /*className="text-center max-w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"*/>
          Welcome to my playground, my personal collection of random designs,
          explorations, rejected versions or any thing that I could not find a
          place to show...
        </div>
      </div>

        <div className="photo-grid-container">
          <div className="photo-grid-item">
            <img className="" src={Img1} />
            <div className="flex justify-between">
              <div class="year">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img2}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img3} />
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img4} />
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img5}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img8}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img6}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img7}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
          <div className="photo-grid-item">
            <img className="" src={Img2}/>
            <div className="flex justify-between">
              <div className="">(2020)</div>
              <div className="">Poster</div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Design;
