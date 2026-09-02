import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Leetcode from "./Leetcode";
import Skills from "./Skills";
import Spotify from "./Spotify";
import Abouth from "./Abouth";
import Card from "./Card";
import Contact from "../Contact";

const designImages = [
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img1_c3dpon.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t3_jmdtlz.jpg` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img2_wihdqi.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t8_x06faz.jpg` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img3_hmikpr.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t5_ydtlty.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t4_i0o7sp.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img5_tpbwum.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img6_ikhb0u.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t1_ydqobt.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/img7_piosgz.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t2_g09x12.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t6_vusq2h.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t7_pge5bo.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t9_wurghe.png` },
  { src: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/t10_mt93bo.png` },
];

const About = () => {
  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="w-full h-full top-0 left-0 absolute bg-[radial-gradient(ellipse_160%_120%_at_50%_50%,_var(--tw-gradient-stops))] from-[#2B2B2B] via-black to-black"></div>
      <div className="md:px-16 max-w-[1100px] gap-y-14 w-full z-10 pb-24 flex flex-col">
        <div className="flex items-center gap-x-3 pt-20 px-5 md:px-0 md:pt-28 z-10">
          <div class="w-3 h-3 rounded-full bg-white glow"></div>
          <div className="text-white text-7xl md:text-8xl grad">About</div>
        </div>
        <Abouth />
        {/* <Story/> */}
        <Leetcode />
        <Experience />
        <Education />
        <Skills />
        <Spotify />
        {/* <Card /> */}

        <div className="bg-zinc-900 md:rounded-2xl overflow-hidden">
          <div className="flex items-center px-6 pt-5 pb-2">
            <div className="w-3 h-3 rounded-full bg-white glow"></div>
            <div className="px-4 text-sm text-zinc-300">D E S I G N &nbsp;&amp;&nbsp; P L A Y G R O U N D</div>
          </div>
          <p className="px-6 pb-4 text-zinc-500 text-sm leading-relaxed">
            Posters, thumbnails and random explorations that couldn't find a home elsewhere.
          </p>
          <div className="scroller pb-6" data-animated="true" data-speed="slow">
            <div className="scroller__inner" style={{ paddingBlock: 0, gap: '0.75rem' }}>
              {[...designImages, ...designImages].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt="design work"
                  style={{ width: 'auto', height: '26rem', borderRadius: '0.5rem', flexShrink: 0, maxWidth: 'none' }}
                />
              ))}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default About;
