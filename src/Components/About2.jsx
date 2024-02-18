import React from "react";
import Aboutme from "../assets/aboutme.jpg";
import Carousel from "./Carousel";
import Foodle from "../assets/Foodle.png";
import Youtube from "../assets/Youtube.png";
import Portfolio from "../assets/Portfolio.png";
import FACT from "../assets/FACT.png";
import NMK from "../assets/NMK.png";
import Referral from "../assets/Referral.png";
import Prod from "../assets/prod.png";

const About2 = () => {
  const images = [Foodle, Youtube, Portfolio, FACT, NMK];
  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-10 w-full py-36 flex flex-col px-6">
        <div className="w-full h-72 bg-zinc-900 border border-zinc-600 rounded-3xl">
          <div className="">
          <div>Hi there</div>
          <div>I am Abhishek</div>
          <div>Who am I?</div>
          </div>
        </div>
        {/* <div>
          <img className="pt-20" src={Aboutme}></img>
        </div> */}
        <div className="flex flex-col justify-center">
          <div className="py-2">
          <div className="text-3xl font-medium">Everyone has a story,</div>
          <div className="text-xl ">Here's mine :)</div>
          </div>
          <div className=" bg-red-600 py-1 px-2 rounded-lg font-semibold text-lg text-center w-28">True Story</div>
        </div>
        <div className="w-full aspect-[2/3] bg-zinc-600 p-2 border border-zinc-400 rounded-3xl">
          <Carousel images={images} />
        </div>
        <div className="flex px-4 flex-col">
          <div className="text-[80px]">My story</div>
          <div className="flex flex-col ">
            I'm passionate about creating beautiful products that empower
            people.
          </div>
        </div>

        <div className="flex px-4 flex-col">
          <div className="text-[80px]">Skills</div>I focus on all things design
          and web related. With each of my services, my goal is to deliver an
          impactful and elevating digital experience for everyone.
          <div className="flex flex-col">
            <div>Website design</div>
            <div>Application design</div>
            <div>interactive design</div>
            <div>prototyping</div>
            <div>ecommerce</div>
            <div>illustration</div>
          </div>
        </div>
        <div className="flex px-4 flex-col">
          <div className="text-[80px]">Tech stack</div>
          <div className="flex">
            Front End
            <div>HTML 5</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>Tailwind</div>
          </div>
          <div className="flex">
            Back End
            <div>Python</div>
            <div>Node js</div>
            <div>MongoDB</div>
            <div>Express.js</div>
          </div>
          <div className="flex">
            Database
            <div>MySQL</div>
          </div>
        </div>
        <div className="flex px-4 flex-col">
          <div className="text-[80px]">Tools i use</div>
          <div className="flex flex-col ">
            <div>Figma</div>
            <div>Adobe Photoshop</div>
            <div>VS Code</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
