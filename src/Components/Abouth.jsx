import React from "react";
import Aboutme from '../assets/aboutme.jpg'

const Abouth = () => {
  return (
    <>
      <div className="">
        <div className="text-[82px] pl-4">About me</div>
        <div className="flex flex-col md:flex-row px-6">
        <div><img className="rounded-xl md:max-w-[50vw]" src={Aboutme}></img></div>
        <div className="text-2xl pt-6 pr-4 md:pl-12">I am a full stack developer & a UI/UX designer based in Bangalore, India. I specialize in crafting elevated, intuitive, and minimalistic designs for startups and businesses to help them stand out in the digital landscape with a powerful impact.😎<br></br>When I am not developing or designing, I enjoy riding around the city late night 📸</div>
      </div>
      </div>
    </>
  );
};

export default Abouth;
