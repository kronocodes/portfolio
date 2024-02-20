import React from "react";
import Aboutme from '../assets/aboutme.jpg'
import im from '../assets/hero.jpeg'

const Abouth = () => {
  return (
    <div className="flex justify-center bg-black pt-24">
      <div className=" text-zinc-300 px-6 pb-20 max-w-[1300px]">
        <div className="text-white py-5 text-7xl pr-4">About</div>
        <div className="h-[1px] bg-zinc-500"></div>
        <div className="text-xl md:text-3xl md:leading-[40px] xl:text-4xl xl:leading-[60px] pt-10 px-1">
        Hello! I'm Abhishek Nandan, a passionate and creative individual on a journey to explore the intersection of technology, design, and innovation. With a background in Computer Science and a knack for problem-solving, I thrive on turning ideas into reality through code and design. My goal is to craft intuitive and engaging digital experiences that leave a lasting impact. When I am not developing or designing, I enjoy riding around the city late night </div>
      </div>
    </div >
  );
};

export default Abouth;
