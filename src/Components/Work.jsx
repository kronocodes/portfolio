import Foodle from "../assets/Foodle.png";
import Youtube from "../assets/Youtube.png";
import Portfolio from "../assets/Portfolio.png";
import FACT from "../assets/FACT.png";
import NMK from "../assets/NMK.png";
import toolbar from '../assets/toolbar.png'
import React, { useState, useEffect } from 'react';

const project=[
  {
    id:1,
    name: "Food Delivery Web Application",
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
    name: "YouTube Clone",
    repo: "https://github.com/kronocodes/youtube-clone",
    live: "https://notyoutube-rust.vercel.app/",
    figma: "",
    year: "2023",
    tagline: "YouTube clone built using react fething real time data.",
    src: Youtube,
    gradientColor: "from-red-800",
  },
  {
    id:3,
    name: "Portfolio",
    repo: "https://github.com/kronocodes/portfolio",
    live: "",
    figma: "",
    year: "2024",
    tagline: "A Showcase of my creations.",
    src: Portfolio,
    gradientColor: "from-zinc-700",
  },
  {
    id:4,
    name: "College Clubs Portal",
    repo: "https://github.com/nihar8262/FACTS-N",
    live: "https://facts-iota.vercel.app/",
    figma: "https://www.figma.com/file/zKRavYnWGsSuKWOelcCnwz/Untitled?type=design&t=uqLQxD7daILh7yQu-6",
    year: "2024",
    tagline: "A portal for all the societies and clubs in our college to use and keep the members posted on the plans and upcomming events",
    src: FACT,
    gradientColor: "from-yellow-600",
  },
  {
    id:5,
    name: "Nasha Mukti Kendra",
    repo: "",
    live: "",
    figma: "https://www.figma.com/file/BI3iu3zMaEy4lmvYe5SfCr/Nasha-Mukti-Kendra?type=design&t=uqLQxD7daILh7yQu-6",
    year: "2023",
    tagline: "Smart India Hackathon's project, built an centralized database of all the medical centers in India.",
    src: NMK,
    gradientColor: "from-green-700",
  },
]

const Work = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    
      <div className="bg-black flex flex-col items-center gap-y-44 text-white">
        <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] w-full py-36 flex flex-col lg:gap-y-36 gap-y-12 px-6">
        {project.map((project, id) => (
          <div className="rounded-3xl bg-zinc-800 md:p-2 p-2">
          <div className={`rounded-2xl border-[1px] border-zinc-600 ${project.gradientColor} ${isSmallScreen ? 'bg-gradient-to-b' : 'bg-zinc-900 md:hover:bg-gradient-to-b hover:to-black'}`}>
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
              <a className="border-b text-center border-zinc-400 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium" href={project.repo}>
              <button >Goto GitHub Repo</button>
              </a>
            )}
            {project.live !== "" && (
              <a className="border-b text-center border-zinc-400 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium" href={project.live}>
              <button>View Live Website</button>
              </a>
              )}
            {project.figma !== "" && (
              <a className="border-b text-center border-zinc-400 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium" href={project.figma}>
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
    </>
  );
};

export default Work;
