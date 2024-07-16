import React, { useState, useEffect } from "react";

const Youtube=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/work/Youtube_zrbwre.png`;
const Portfolio=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/work/Portfolio_oar7bc.png`;
const FACT=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/work/FACT_lrrhjr`;
const Foodle=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/work/Foodle_d6hqto.png`;
const NMK=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/work/NMK_vk0gnv.png`;
const Proxy=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/work/hoba1ggdupq8defq3gt1`;
const project = [
  {
    id: 1,
    name: "Food Delivery Web Application",
    repo: "https://github.com/kronocodes/swiggy",
    live: "https://notswiggy.vercel.app/",
    figma: "",
    year: "2023",
    tagline:
      "A food delivery web application fething real time data using swiggy's limited public Api.",
    src: Foodle,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/bjtcusynfjh7wuxom0iv`,
    gradientColor: "from-blue-900",
  },
  {
    id: 2,
    name: "YouTube Clone",
    repo: "https://github.com/kronocodes/youtube-clone",
    live: "https://notyoutube-rust.vercel.app/",
    figma: "",
    year: "2023",
    tagline: "YouTube clone built using react fething real time data.",
    src: Youtube,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/ggmqe3ooio6qvkuxctqk`,
    gradientColor: "from-red-800",
  },
  {
    id: 3,
    name: "Multithreaded Proxy Web Server",
    repo: "https://github.com/kronocodes/MultiThreadedProxyServerClient",
    live: "",
    figma: "",
    year: "2024",
    tagline: "A multithreaded proxy server with caching, handling multiple client requests.",
    src: Proxy,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/by7huxlpxvg0dpm2uc2n`,
    gradientColor: "from-purple-800",
  },
  {
    id: 4,
    name: "Portfolio",
    repo: "",
    live: "",
    figma: "",
    year: "2024",
    tagline: "A Showcase of my creations.",
    src: Portfolio,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/jxzri3zmsx1p0yofefco`,
    gradientColor: "from-zinc-700",
  },
  {
    id: 5,
    name: "Nasha Mukti Kendra",
    repo: "",
    live: "",
    figma:
      "https://www.figma.com/file/BI3iu3zMaEy4lmvYe5SfCr/Nasha-Mukti-Kendra?type=design&t=uqLQxD7daILh7yQu-6",
    year: "2023",
    tagline:
      "Smart India Hackathon's project, built an centralized database of all the medical centers in India.",
    src: NMK,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/qvnlglbuldb4qi1xswdk`,
    gradientColor: "from-green-700",
  },
  {
    id: 6,
    name: "College Clubs Portal",
    repo: "https://github.com/nihar8262/FACTS-N",
    live: "https://facts-nce.vercel.app/",
    figma:
    "https://www.figma.com/file/zKRavYnWGsSuKWOelcCnwz/Untitled?type=design&t=uqLQxD7daILh7yQu-6",
    year: "2024",
    tagline:
    "A portal for all the societies and clubs in our college to use and keep the members posted on the plans and upcomming events",
    src: FACT,
    toolbar: `https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto/v1/Toolbar/ekxp1nuykykb5npw4irn`,
    gradientColor: "from-orange-600",
  },
];

const Work = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-black flex flex-col items-center gap-y-44 pb-20 text-white">
        <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] w-full flex flex-col gap-y-14 px-5">
        <div className="flex items-center gap-x-3 pt-20 md:pt-28">
          <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className="text-white text-7xl md:text-8xl grad">Work</div>
        </div>
          {project.map((project, id) => (
            <div className="rounded-3xl bg-zinc-800 group p-[7px] md:mb-14">
              <div className="h-[1px] bg-gradient-to-r from-zinc-800 mx-auto via-white to-zinc-800 w-11/12 -translate-y-[6.5px]"></div>
              <div className="h-[1px] bg-gradient-to-r from-zinc-800 mx-auto via-white to-zinc-800 w-11/12 translate-y-[0.1px]"></div>
              <div className={`transition-all duration-500 rounded-2xl overflow-hidden border-[1px] border-zinc-600 group-hover:border-zinc-500 ${project.gradientColor} ${ isSmallScreen? "bg-gradient-to-b to-black"  : "bg-zinc-900 md:hover:bg-gradient-to-b hover:to-black"}`}>
                <div className="flex flex-col rounded-3xl justify-center">
                  <div className="flex justify-between items-center pt-8 md:pt-10 px-8">
                    <div className="text-2xl md:font-semibold font-[500]">
                      {project.name}
                    </div>

                    {/* <div className='bg-zinc-600 w-fit h-fit text-center px-1 py-1 mt-1 border-2 border-zinc-600 rounded-md'>Design & Development</div> */}
                  </div>
                  <div className="px-8 md:pt-5 pt-3 pb-5 text-sm md:text-lg text-zinc-300">
                    <span className="text-white">
                      {project.year} -{" "}
                    </span>
                    {project.tagline}
                  </div>
                  <div className="flex flex-col justify-between px-8 md:px-14">
                    {project.repo !== "" && (
                      <a
                        className="border-b text-center border-zinc-600 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium"
                        href={project.repo}
                      >
                        <button>Goto GitHub Repo</button>
                        
                      </a>
                    )}
                    {project.live !== "" && (
                      <a
                        className="border-b text-center border-zinc-600 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium"
                        href={project.live}
                      >
                        <button>View Live Website</button>
                      </a>
                    )}
                    {project.figma !== "" && (
                      <a
                        className="border-b text-center border-zinc-600 hover:rounded-lg py-2 hover:bg-white hover:text-black hover:font-medium"
                        href={project.figma}
                      >
                        <button>View Figma File</button>
                      </a>
                    )}
                  </div>
                  <div className="mx-auto object-fill group-hover:translate-y-1 shadow-xl shadow-black translate-y-6 transition-all duration-500 w-[86%] mt-6 md:mt-10">
                    <img src={project.toolbar}/>
                    <img src={project.src}/>
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
