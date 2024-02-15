import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Foodle from "../assets/Foodle.png";
import Youtube from "../assets/Youtube.png";
import Portfolio from "../assets/Portfolio.png";
import FACT from "../assets/FACT.png";
import NMK from "../assets/NMK.png";
import Referral from "../assets/Referral.png";
import Prod from "../assets/prod.png";
import toolbar from '../assets/toolbar.png'

const project=[
  {
    id:1,
    name: "Food Delivery Web",
    repo: "https://github.com/kronocodes/swiggy",
    live: "https://notswiggy.vercel.app/",
    figma: "",
    year: "2023",
    tagline: "A food delivery web application fething real time data using swiggy's limited public Api.",
    src: Foodle,
    gradientColor: "from-blue-900",
  },
  {
    id:2,
    name: "YouTube Clone Web",
    repo: "https://github.com/kronocodes/youtube-clone",
    live: "https://notyoutube-rust.vercel.app/",
    figma: "",
    year: "2023",
    tagline: "YouTube clone built using react fething real time data.",
    src: Youtube,
    gradientColor: "from-red-800",
  },
  {
    id:4,
    name: "College Clubs Portal",
    repo: "https://github.com/nihar8262/FACTS-N",
    live: "https://facts-iota.vercel.app/",
    figma: "",
    year: "2024",
    tagline: "A portal for all the societies and clubs in our college to use and keep the members posted on the plans and upcomming events",
    src: FACT,
    gradientColor: "from-yellow-600",
  },
]
const Workh = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center bg-black">
      <div className="max-w-[1300px] text-white">
        <div className="flex justify-between px-4 py-4 items-center">
          <div className="text-7xl">Work</div>
          <Link to="/work">
            <button className="flex items-center justify-center rounded-full bg-orange-500 bg-opacity-100 p-5 text-xl ">
              See all projects
            </button>
          </Link>
        </div>
        {isSmallScreen ? (
          <div className="bg-black flex flex-col items-center gap-y-44 text-white">
          <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] w-full py-10 flex flex-col lg:gap-y-36 gap-y-12 px-6">
          {project.map((project, id) => (
            <div className="border border-zinc-700 rounded-3xl bg-zinc-800 md:p-2 p-2">
            <div className={`rounded-3xlbg-zinc-900 hover:bg-gradient-to-b ${project.gradientColor} to-black shadow-sm shadow-zinc-600 border-[1px] border-zinc-500`}>
            <div className="flex flex-col rounded-3xl justify-center">
              <div className="flex justify-between items-center pt-8 md:pt-10 px-8">
                <div className="text-2xl md:text-3xl md:font-semibold font-[500]">
                  {project.name}
                </div>
  
                {/* <div className='bg-zinc-600 w-fit h-fit text-center px-1 py-1 mt-1 border-2 border-zinc-600 rounded-md'>Design & Development</div> */}
              </div>
              <div className="px-8 md:pt-5 pt-3 pb-5 text-sm md:text-lg text-zinc-300">
                <span className="text-sm font-bold md:text-xl text-white">{project.year} - </span>{project.tagline}
              </div>
              <div className="flex flex-col justify-between px-8">
              {project.repo !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.repo}>
                <button >Goto GitHub Repo</button>
                </a>
              )}
              {project.live !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.live}>
                <button>View Live Website</button>
                </a>
                )}
              {project.figma !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.figma}>
                <button >View Figma File</button>
                </a>
              )}
              </div>
                <div className="mx-auto object-fill w-[85%] mt-10 md:mt-16 border border-zinc-600 rounded-lg">
                  <img src={toolbar}></img>
                  <img src={project.src}></img>
                </div>
            </div>
          </div>
          </div>
          ))}
            
          </div>
        </div>
        ) : (
          <div className="pb-4">
            <div class="grid grid-cols-3 gap-5 px-4">
          {project.map((project, id) => (
            <div className="border border-zinc-700 rounded-3xl bg-zinc-800 p-1">
            <div className={`rounded-3xl bg-zinc-900 hover:bg-gradient-to-b ${project.gradientColor} to-black shadow-sm shadow-zinc-600 border-[1px] border-zinc-500`}>
            <div className="flex flex-col rounded-3xl justify-between">
              <div className="flex py-8 md:pt-10 px-8">
                <div className="text-2xl font-[500]">
                  {project.name}
                </div>
  
                {/* <div className='bg-zinc-600 w-fit h-fit text-center px-1 py-1 mt-1 border-2 border-zinc-600 rounded-md'>Design & Development</div> */}
              </div>
              <div className="flex flex-col justify-between px-8">
              {project.repo !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.repo}>
                <button >Goto GitHub Repo</button>
                </a>
              )}
              {project.live !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.live}>
                <button>View Live Website</button>
                </a>
                )}
              {project.figma !== "" && (
                <a className="border-b text-center border-zinc-500  py-2 hover:bg-white hover:text-black hover:font-medium" href={project.figma}>
                <button >View Figma File</button>
                </a>
              )}
              </div>
                <div className="mx-auto object-fill w-[85%] relative mt-10 md:mt-16 border border-zinc-600 rounded-lg">
                  <img src={toolbar}></img>
                  <img src={project.src}></img>
                </div>
            </div>
          </div>
          </div>
          ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workh;
