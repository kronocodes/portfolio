import React from "react";
import { useState, useEffect } from "react";

const Leetcode = () => {
  const [stats, setStats] = useState([]);
  const [cal, setCal] = useState({ submissionCalendar: {} });
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [daysBetween, setDaysBetween] = useState(0);
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    const targetDate = new Date('2023-03-14');
    const today = new Date();
    const timeDifference = today - targetDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDaysBetween(daysDifference);
  }, []);

  const getStats = async () => {
    const data = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app/kronocodes"
    );
    const json = await data.json();
    setStats(json);
    setCal(json);
  };

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    let total = 0;
    for (const key in cal.submissionCalendar) {
      total += cal.submissionCalendar[key];
    }
    setTotalSubmissions(total);
  }, [cal]);

  const getBackgroundColor = (submissions) => {
    if (submissions === 0) return "bg-zinc-600";
    if (submissions === 1) return "bg-green-800";
    if (submissions === 2) return "bg-green-600";
    if (submissions === 3) return "bg-green-500";
    if (submissions === 4) return "bg-green-400";
    if (submissions >= 5) return "bg-green-300";
  };
  function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }


  return (
    <>
      <div className="flex flex-col items-center text-white">
        <div className="lg:max-w-[1300px] bg-zinc-900 w-full mx-auto flex flex-col md:rounded-xl">
          <div className="flex items-center px-5 pt-5">
            <div class="w-3 h-3 rounded-full bg-white glow"></div>
            <div className="px-4 text-sm text-zinc-300">
              L E E T C O D E &nbsp; S T A T S
            </div>
          </div>

          <div class="min-w-max w-full px-2 flex">
            <div class="rounded-lg min-h-[189px] w-full pb-3 pt-4 flex">
              <div class="md:px-9 px-3 font-medium text-lg w-full pt-3">
                Solved Problems
                <div 
                  onClick={() => handleLinkClick("https://leetcode.com/kronocodes")}class="mx-3 flex items-center">
                  <div class="mr-5 mt-6 flex min-w-[100px] justify-center">
                    <div class="relative max-h-[130px] max-w-[130px]">
                      <svg
                        class="h-full w-full origin-center -rotate-90 transform"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          fill="none"
                          cx="50px"
                          cy="50px"
                          r="46"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke="currentColor"
                          class="text-zinc-700 w-[100px]"
                        ></circle>
                        <circle
                          fill="none"
                          cx="50px"
                          cy="50px"
                          r="46"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke="currentColor"
                          class="cursor-pointer text-orange-500"
                          stroke-dasharray="50.591506522636806 238.43501760762416"
                          stroke-dashoffset="0"
                          data-difficulty="ALL"
                        ></circle>
                      </svg>
                      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                        <div>
                          <div class="text-3xl font-medium text-zinc-100">
                            {stats.totalSolved}
                          </div>
                          <div class="whitespace-nowrap text-sm text-zinc-400">
                            Solved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full flex-col space-y-4">
                    <div class="space-y-2">
                      <div class="flex w-full items-end text-xs">
                        <div class="w-[53px] text-zinc-400">Easy</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.easySolved}
                          </span>
                          <span class="text-xs font-medium text-zinc-400">
                            /{stats.totalEasy}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div class="absolute h-full w-full bg-green-900"></div>
                        <div
                          style={{
                            width: `${
                              (stats.easySolved / stats.totalEasy) * 100
                            }%`,
                          }}
                          class="absolute h-full rounded-full transition-all duration-300 ease-out bg-green-500"
                        ></div>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div class="flex w-full items-end text-xs">
                        <div class="w-[53px] text-zinc-400">Medium</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.mediumSolved}
                          </span>
                          <span class="text-xs font-medium text-zinc-400">
                            /{stats.totalMedium}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div class="absolute h-full w-full bg-yellow-900"></div>
                        <div
                          style={{
                            width: `${
                              (stats.mediumSolved / stats.totalMedium) * 100
                            }%`,
                          }}
                          class="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow-500"
                        ></div>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div class="flex w-full items-end text-xs">
                        <div class="w-[53px] text-zinc-400">Hard</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.hardSolved}
                          </span>
                          <span class="text-xs font-medium text-zinc-400">
                            /{stats.totalHard}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div class="absolute h-full w-full bg-red-900"></div>
                        <div
                          style={{
                            width: `${
                              (stats.hardSolved / stats.totalHard) * 100
                            }%`,
                          }}
                          className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="pt-3 hidden md:flex md:flex-col pr-9">
              <div className="font-medium text-lg mb-1 pl-4">Contest Stats</div>
              <div 
              onClick={() => handleLinkClick("https://leetcode.com/kronocodes2")}
              className="w-[210px] xl:w-[260px] px-4 justify-center flex flex-col gap-y-[8px] py-3 mt-4 text-zinc-400 text-sm font-semibold bg-zinc-800 shadow-zinc-950 shadow-md border-2 border-zinc-700 rounded-xl">
                <div className="flex xl:text-[15px] leading-tight justify-between">CURRENT LEVEL :<div className="text-white font-bold">KNIGHT</div></div>
                <div className="flex xl:text-[15px] leading-tight justify-between">MAX RATING : <div className="text-white font-bold">1954</div></div>
                <div className="flex xl:text-[15px] leading-tight justify-between">NO OF CONTEST : <div className="text-white font-bold">17</div></div>
                <div className="flex xl:text-[15px] leading-tight justify-between">TOP RANK : <div className="text-white font-bold">411</div></div>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-zinc-700 w-[95%] h-[1px] mx-auto mb-6 mt-4"></div>

          <div className="flex flex-col md:px-8 px-3">
          <div className="md:pb-4 px-3">
            <div className="text-lg md:text-xl pb-1">{totalSubmissions} submissions in the past one year</div>
            <div className="text-sm md:text-lg">Current streak: {daysBetween} 🔥</div>
          </div>
          <div
           onClick={() => handleLinkClick("https://leetcode.com/kronocodes")}
           className="flex gap-[3px] md:gap-[4px] overflow-x-auto mx-3 mt-4 md:mb-10 mb-8" style={{ scrollbarWidth: "thin", scrollbarColor: "#727272 #18181B" }}>
            {chunkArray(Object.entries(cal?.submissionCalendar), 7).map(
              (week, index) => (
                <div key={index} className="flex flex-col items-center">
                  {week.map(([timestamp, submissions]) => {
                    const date = new Date(parseInt(timestamp) * 1000);
                    const formattedDate = date.toISOString().split("T")[0];
                    return (
                      <div key={timestamp} className="text-center">
                        <div className="text-xs hidden hover:flex">
                          {formattedDate}
                        </div>
                        <div
                          className={`rounded-sm xl:w-4 xl:h-4 xl:my-[3px] md:w-3 md:h-3 md:my-[2px] w-2 h-2 my-[1px] ${getBackgroundColor(
                            submissions
                          )}`}
                        >
                          {/* <div className="text-lg">{submissions}</div> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leetcode;
