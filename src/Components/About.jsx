import React from "react";
import Aboutme from "../assets/hero.jpeg";
import Services from "./Services";
import Education from "./Education";
import Leetcode from "./Leetcode";
import Calendar from "./Calendar";
import Card from "./Card";
import Skills from "./Skills";
import GitHubCalendar from "react-github-calendar";
import Spotify from "./Spotify";
import Story from "./Story";

const About2 = () => {
  return (
    <div className="bg-black flex flex-col items-center gap-y-44 text-white">
      <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-14 w-full py-36 flex flex-col">
        <div className="flex flex-col md:h-[420px] md:flex-row md:gap-x-8 px-4 md:px-0 gap-y-5">
          <div className="xl:px-12 md:px-8 px-6 flex flex-col xl:gap-y-6 md:gap-y-2 gap-y-2 pt-7 border border-zinc-600 bg-zinc-900 rounded-3xl">
            <div className="pt-4 md:text-2xl text-xl">
              Hey! I'm Abhishek Nandan
            </div>
            <div className="xl:text-5xl md:text-4xl text-3xl font-medium">
              Passionate to pursue the technology.
            </div>
            <div className="xl:w-full pb-10 md:pb-0 md:text-lg text-sm text-zinc-400">
              I enjoy learning new things and try to overcome new challenges
              while analyzing how I improved through them.
            </div>
          </div>
          <div className="md:min-w-fit md:h-[420px] h-[400px] flex justify-center  md:border border-zinc-600 rounded-3xl">
            <img
              className="rounded-3xl"
              src={Aboutme}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </div>

        {/* <div><Leetcode/></div>
        <div><Calendar/></div> */}

        {/* <Story/> */}

        {/* <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl"> */}
          <Education />
        {/* </div> */}

        {/* <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl"> */}
          <Services />
        {/* </div> */}
        {/* <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl"> */}
          <Skills />
        {/* </div> */}
        <div className="text-center py-10">
          <div className="md:text-3xl text-2xl font-semibold">
            BECAUSE LIFE IS MUCH MORE
          </div>
          <div className="md:text-3xl text-2xl font-semibold">
            THAN PUSHING PIXELS
          </div>
        </div>
        <div className="text-center text-2xl flex gap-x-2 justify-center">It is about
        <div className="italic">music</div> </div>
        <Spotify/>
        <div className="text-center gap-x-2 text-2xl flex justify-center">
          <div>It is about </div>
          <div className="line-through ">connections</div>
          <div className="italic">friends</div>
          </div>
          <Card />
          <div className="text-center text-3xl italic">It is about creating memories</div>
      </div>
    </div>
  );
};

export default About2;
