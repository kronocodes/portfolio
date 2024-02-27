import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.jpg";
import t9 from "../assets/t9.png";
import t10 from "../assets/t10.png";
import { LampContainer } from "./ui/lamp.tsx";

const images = [
  { src: Img1, year: "(2020)", type: "Poster" },
  { src: Img2, year: "(2020)", type: "Poster" },
  { src: Img3, year: "(2020)", type: "Poster" },
  { src: Img4, year: "(2020)", type: "Poster" },
  { src: Img5, year: "(2020)", type: "Poster" },
  { src: Img6, year: "(2020)", type: "Poster" },
  { src: Img7, year: "(2020)", type: "Poster" },
  { src: Img8, year: "(2020)", type: "Poster" },
  { src: t1, year: "(2020)", type: "Poster" },
  { src: t2, year: "(2020)", type: "Poster" },
  { src: t3, year: "(2020)", type: "Poster" },
  { src: t4, year: "(2020)", type: "Poster" },
  { src: t5, year: "(2020)", type: "Poster" },
  { src: t6, year: "(2020)", type: "Poster" },
  { src: t7, year: "(2020)", type: "Poster" },
  { src: t8, year: "(2020)", type: "Poster" },
  { src: t9, year: "(2020)", type: "Poster" },
  { src: t10, year: "(2020)", type: "Poster" },
];

const Design = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1300px] flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center min-h-[70vh]">
          <div className="flex items-center h-[36vh] lg:text-[5.7vw] md:text-5xl text-4xl">
            My Playground
          </div>
          <div
            className="tracking-[-.03em] w-3/5 text-center leading-[110%] text-2xl md:text-3xl lg:text-[2.083vw]" /*className="text-center max-w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"*/
          >
            Welcome to my playground, my personal collection of random designs,
            explorations, rejected versions or any thing that I could not find a
            place to show...
          </div>
        </div>

        <div className="photo-grid-container">
          {images.map((image, index) => (
            <div className="photo-grid-item" key={index}>
              <img className="" src={image.src} />
              <div className="flex justify-between text-xl md:text-[2vw]">
                <div className="">{image.year}</div>
                <div className="">{image.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
