import React from "react";
import Aboutme from '../assets/aboutme.jpg'
import im from '../assets/hero.jpeg'

const Abouth = () => {
  return (
    <div className="flex justify-center bg-black py-20">
      <div className=" text-zinc-300 px-6 pb-20 max-w-[1300px]">
        <div className="flex flex-col text-white py-5 text-7xl pr-4">About me</div>
        <div className="flex flex-col md:flex-row">
        <div className="sm:hidden rounded-2xl m-2 bg-zinc-800 border border-zinc-600"><img className="p-2 rounded-2xl" src={im}></img></div>
        <div className="text-2xl md:text-4xl md:leading-[50px] pt-10 px-1">
        Hello! I'm Abhishek Nandan, a passionate and creative individual on a journey to explore the intersection of technology, design, and innovation. With a background in Computer Science and a knack for problem-solving, I thrive on turning ideas into reality through code and design. My goal is to craft intuitive and engaging digital experiences that leave a lasting impact. When I am not developing or designing, I enjoy riding around the city late night </div>
      </div>
      </div>
    </div >
  );
};

export default Abouth;
