import React from "react";
import Aboutme from "../assets/hero.jpeg";
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
import GitHubCalendar from "react-github-calendar";

const About2 = () => {
  const images = [];
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

        {/* <div><Leetcode/></div> */}
        {/* <div><Calendar/></div> */}

        {/* <div className="flex flex-col justify-center min-w-xl md:max-w-[50%] px-4 md:px-0">
          <div className="flex items-center pt-5 md:px-4 px-2 md:pl-7">
            <div class="w-3 h-3 rounded-full bg-white glow"></div>
            <div className="md:px-4 pl-3 text-sm text-zinc-300">
              MY S T O R Y
            </div>
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
        </div> */}

        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
          <Education />
        </div>

        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
          <Services />
        </div>
        <div className="border border-zinc-600 md:p-2 py-2 bg md:rounded-2xl">
          <Skills />
        </div>
        {/* Spotify playlist */}
        {/* <div className="bg-zinc-800 border border-zinc-600 md:rounded-2xl">
          <div className="flex items-center px-6 pt-5">
            <div class="w-3 h-3 rounded-full bg-white glow z-10"></div>
            <div className="px-4 text-sm text-zinc-300">
              M Y &nbsp; C O D I N G &nbsp; P L A Y L I S T
            </div>
          </div>
          <iframe
            className="w-full h-[44vh] "
            src="https://open.spotify.com/embed/playlist/0oRActjFDEhtOG8eCteVkC?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div> */}
        {/* <div className="text-center py-10">
          <div className="md:text-3xl text-2xl font-semibold">
            BECAUSE THERE'S MUCH MORE
          </div>
          <div className="md:text-3xl text-2xl font-semibold pb-10">
            TO LIFE THAN PUSHING PIXELS
          </div>
          <Card />
        </div> */}
      </div>
    </div>
  );
};

export default About2;
