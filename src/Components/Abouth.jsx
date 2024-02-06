import React from "react";
import Aboutme from '../assets/aboutme.jpg'

const Abouth = () => {
  return (
    <div className="flex justify-center bg-black">
      <div className=" text-zinc-300 px-5 pb-20 max-w-[1300px]">
        <div className="flex flex-col text-white py-10">
          <div className="text-7xl pr-4">About me</div>
          <div className="text-4xl italic"> In bullet points</div>
        </div>
        <div className="flex flex-col md:flex-row">
        {/* <div className="rounded-xl object-cover md:max-h-[1920px]">
          <img src={Aboutme}></img>
        </div> */}
        <div className="text-2xl md:text-[2vw] md:leading-[3.6vw] pt-10 md:pt-0 pr-2">I am a full stack developer & a UI/UX designer based in Bangalore, India. I specialize in crafting elevated, intuitive, and minimalistic designs for startups and businesses to help them stand out in the digital landscape with a powerful impact. When I am not developing or designing, I enjoy riding around the city late night </div>
      </div>
      </div>
    </div >
  );
};

export default Abouth;
