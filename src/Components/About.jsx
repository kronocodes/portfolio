import React from "react";
import Aboutme from "../assets/4.png";
import Carousel from "./Carousel";
import Foodle from "../assets/Foodle.png";
import Youtube from "../assets/Youtube.png";
import Portfolio from "../assets/Portfolio.png";
import FACT from "../assets/FACT.png";
import NMK from "../assets/NMK.png";
import Services from "./Services";
import Education from "./Education";
import Leetcode from "./Leetcode";
import Calendar from "./Calendar";
import Card from "./Card";
import Skills from "./Skills";

const About2 = () => {
  const images = [];
  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-14 w-full py-36 flex flex-col">
    Under Construction

        {/* <div className="flex flex-col md:h-[420px] md:flex-row md:gap-x-8 px-4 md:px-0 gap-y-5">
          <div className="xl:px-12 md:px-8 px-6 flex flex-col xl:gap-y-6 md:gap-y-2 gap-y-2 pt-7 border border-zinc-600 bg-zinc-900 rounded-3xl">
            <div className="pt-4 md:text-2xl text-xl">Hey! I'm Abhishek Nandan</div>
            <div className="xl:text-5xl md:text-4xl text-3xl font-medium">Passionate to pursue the technology.</div>
            <div className="xl:w-full pb-10 md:pb-0 md:text-lg text-sm text-zinc-400">I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.</div>
          </div>
          <div className="min-w-fit border border-zinc-600 rounded-3xl">
            <img
              className="rounded-3xl"
              src={Aboutme}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </div>

        <div><Leetcode/></div>
        {/* <div><Calendar/></div>


        <div className="flex flex-col justify-center min-w-xl md:max-w-[50%] px-4 md:px-0">
          <div className="flex items-center pt-5 md:px-4 px-2 md:pl-7">
            <div class="w-3 h-3 rounded-full bg-white glow"></div>
            <div className="md:px-4 pl-3 text-sm text-zinc-300">MY S T O R Y</div>
          </div>

          <div className="flex justify-between md:pr-4 pb-2">
            <div className="text-sm md:pl-14  pl-8 pt-1 text-zinc-400">
              Everyone has a story, Here's mine :)
            </div>
            <div className="text-sm bg-red-600 mb-1 py-1 px-2 rounded-lg font-semibold text-center w-24">
              True Story
            </div>
          </div>
          <div className="w-full aspect-[2/3] bg-zinc-600 p-2 border border-zinc-400 rounded-2xl">
            <Carousel images={images} />
          </div>
        </div>

        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
          <Education />
        </div>

        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
          <Services />
        </div>
        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
        <Skills/>
        </div>
        {/* Spotify playlist 
        <div className="">
          <iframe
            className="w-full h-[44vh] border border-zinc-600 md:rounded-2xl md:p-2 py-2"
            src="https://open.spotify.com/embed/playlist/0oRActjFDEhtOG8eCteVkC?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <div class="w-3 h-3 rounded-full bg-white glow"></div>

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
          <Card/>
        </div> */}
      </div>
    </div>
  );
};

export default About2;
