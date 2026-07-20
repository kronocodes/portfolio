import React from "react";
const Img1=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img1_c3dpon.png`;
const Img2=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img2_wihdqi.png`;
const Img3=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img3_hmikpr.png`;
const Img5=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img5_tpbwum.png`;
const Img6=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img6_ikhb0u.png`;
const Img7=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img7_piosgz.png`;
const t1=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t1_ydqobt.png`;
const t2=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t2_g09x12.png`;
const t3=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t3_jmdtlz.jpg`;
const t4=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t4_i0o7sp.png`;
const t5=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t5_ydtlty.png`;
const t6=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t6_vusq2h.png`;
const t7=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t7_pge5bo.png`;
const t8=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t8_x06faz.jpg`;
const t9=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t9_wurghe.png`;
const t10=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t10_mt93bo.png`;

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
  // { src: Img8, year: "(2023)", type: "Thumbnail" },
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
    <div className="bg-black flex flex-col items-center text-white">
      <div className="w-full h-full top-0 left-0 absolute bg-[radial-gradient(ellipse_160%_140%_at_50%_50%,_var(--tw-gradient-stops))] from-[#2B2B2B] via-black to-black"></div>
      <div className="max-w-[1100px] md:px-12 flex flex-col items-center justify-center mx-auto z-10">
        <div className="py-[21vh] tracking-[-.03em] w-3/5 text-center xl:leading-[120%] leading-[120%] text-2xl md:text-3xl lg:text-[2.1vw] z-10">
          Welcome to my playground, my personal collection of random designs,
          explorations, rejected versions or any thing that I could not find a
          place to show...
        </div>

        <div className="photo-grid-container pb-32">
          {images.map((image, index) => (
            <div className="photo-grid-item" key={index}>
              <img className="rounded" class="gscale" src={image.src} />
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
