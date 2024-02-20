import React from "react";
import Aboutme from "../assets/4.png";
import Carousel from "./Carousel";
import Foodle from "../assets/Foodle.png";
import Youtube from "../assets/Youtube.png";
import Portfolio from "../assets/Portfolio.png";
import FACT from "../assets/FACT.png";
import NMK from "../assets/NMK.png";

const About2 = () => {
  const playlistId = '3cTTZ3jNUasv7OMZHNIrQa';
  const images = [Foodle, Youtube, Portfolio, FACT, NMK];
  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-10 w-full py-36 flex flex-col px-6">
      <div className="w-full h-72 flex border border-zinc-600 bg-zinc-900 rounded-3xl relative">
        <div className="absolute font-semibold left-0 text-2xl flex flex-col justify-center items-start pt-10 pl-4">
          <div>Hi there!</div>
          <div>This is not my resume</div>
          <div>Just real talk.</div>
        </div>
        <div className="absolute right-0 h-full">
          <img className="rounded-r-3xl" src={Aboutme} style={{ height: "100%", width: "auto" }} />
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
        <div className="w-full aspect-[2/3] bg-zinc-600 p-2 border border-zinc-400 rounded-2xl">
          <Carousel images={images} />
        </div>
        <div>
        <iframe className="w-full h-[50vh] border border-zinc-400 rounded-2xl p-2" src="https://open.spotify.com/embed/playlist/0oRActjFDEhtOG8eCteVkC?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        />
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
        <div className="text-center">
          <div className="text-3xl font-semibold">BECAUSE THERE'S</div>
          <div className="text-3xl font-semibold">MUCH MORE TO LIFE</div>
          <div>Than pushing pixels</div>
        </div>
      </div>
    </div>
  );
};

export default About2;
