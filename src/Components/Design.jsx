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

const images = [
  { src: Img1, year: "(2023)", type: "Poster" },
  { src: t3, year: "(2019)", type: "Thumbnail" },
  { src: Img2, year: "(2022)", type: "Poster" },
  { src: t8, year: "(2020)", type: "Thumbnail" },
  { src: Img3, year: "(2022)", type: "Poster" },
  { src: t5, year: "(2020)", type: "Thumbnail" },
  { src: t4, year: "(2020)", type: "Thumbnail" },
  { src: Img5, year: "(2022)", type: "Poster" },
  { src: Img6, year: "(2023)", type: "Thumbnail" },
  { src: Img8, year: "(2023)", type: "Thumbnail" },
  { src: t1, year: "(2019)", type: "Thumbnail" },
  { src: Img7, year: "(2023)", type: "Poster" },
  { src: t2, year: "(2019)", type: "Thumbnail" },
  { src: t6, year: "(2020)", type: "Thumbnail" },
  { src: t7, year: "(2020)", type: "Thumbnail" },
  { src: t9, year: "(2020)", type: "Thumbnail" },
  { src: t10, year: "(2020)", type: "Thumbnail" },
];

const Design = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1300px] flex flex-col items-center justify-center mx-auto">
        <div className="py-[20vh] tracking-[-.03em] w-3/5 text-center leading-[110%] text-2xl md:text-3xl lg:text-[2.083vw]">
          Welcome to my playground, my personal collection of random designs,
          explorations, rejected versions or any thing that I could not find a
          place to show...
        </div>

        <div className="photo-grid-container">
          {images.map((image, index) => (
            <div className="photo-grid-item" key={index}>
              <img className="rounded" src={image.src} />
              <div className="flex justify-between md:text-xl">
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
