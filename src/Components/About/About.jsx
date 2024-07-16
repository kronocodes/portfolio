import React from "react";
import Services from "./Services";
import Education from "./Education";
import Experience from "./Experience";
import Leetcode from "./Leetcode";
import Skills from "./Skills";
import Spotify from "./Spotify";
import Abouth from "./Abouth";

const About = () => {

  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-14 w-full pb-24 flex flex-col">
      <div className="flex items-center gap-x-3 pt-20 px-5 md:px-0 md:pt-28">
          <div class="w-3 h-3 rounded-full bg-white glow"></div>
          <div className="text-white text-7xl md:text-8xl grad">About</div>
        </div>
        <Abouth/>
        {/* <Story/> */}
        <Leetcode/>
        <Experience/>
        <Education />
        <Services />
        <Skills />
        <Spotify />
        {/* <div className="text-center py-10">
          <div className="md:text-3xl text-2xl font-semibold">
            BECAUSE LIFE IS MUCH MORE
          </div>
          <div className="md:text-3xl text-2xl font-semibold">
            THAN PUSHING PIXELS
          </div>
        </div>
        <div className="text-center text-2xl flex gap-x-2 justify-center">
          It is about
          <div className="italic">music</div>{" "}
        </div>
        <div className="text-center gap-x-2 text-2xl flex justify-center">
          <div>It is about </div>
          <div className="line-through ">connections</div>
          <div className="italic">friends</div>
        </div>
        <Card />
        <div className="text-center text-3xl italic">
          It is about creating memories
        </div> */}
        <div>
        <div className="text-center italic text-2xl font-semibold">Thanks for stopping by!</div>
        <div className="text-center text-2xl font-semibold">Let's connect.</div>
      </div>
      </div>
    </div>
  );
};

export default About;
