import React from "react";
import Aboutme from '../assets/aboutme.jpg'

const Abouth = () => {
  return (
    <>
      <div className="">
        <div>About me</div>
        <div className="flex flex-col md:flex-row px-6">
        <div><img className="rounded-xl" src={Aboutme}></img></div>
        <div className="text-2xl md:pl-12">A brief intro, who am I? I am an full stack developer, UI/UX designer who focuses more on front end based in Bangalore, India. I specialize in crafting elevated, intuitive, and minimalistic designs for startups and businesses to help them stand out in the digital landscape with a powerful impact. 😎When I am not developing or designing, I enjoy riding around the city 📸</div>
      </div>
      </div>
    </>
  );
};

export default Abouth;
