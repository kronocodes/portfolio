import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";

const Leetcode = () => {
  const { isLight } = useTheme();
  const [stats, setStats] = useState([]);
  const [cal, setCal] = useState({ submissionCalendar: {} });
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [daysBetween, setDaysBetween] = useState(0);
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    const targetDate = new Date("2023-03-14");
    const today = new Date();
    const timeDifference = today - targetDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDaysBetween(daysDifference);
    getStats();
  }, []);

  const getStats = async () => {
    const res = await fetch('/api/leetcode');
    const json = await res.json();
    setStats(json);
    setCal(json);
  };

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
  console.log(isLight)
  return (
    <>
      <div className={`flex flex-col items-center ${isLight ? "text-black" : "text-white"}`}>
        <div className={`lg:max-w-[1300px] w-full mx-auto flex flex-col md:rounded-2xl ${isLight ? "bg-white border border-zinc-200" : "bg-zinc-900"}`}>
          <div className="flex items-center px-5 pt-5">
            <div className={`w-3 h-3 rounded-full glow ${isLight ? "bg-black" : "bg-white"}`}></div>
            <div className={`px-4 text-sm ${isLight ? "text-white" : "text-zinc-300"}`}>
              L E E T C O D E &nbsp; S T A T S
            </div>
          </div>

          <div class="min-w-max w-full px-2 pb-3 flex">
            <div class="rounded-lg min-h-[189px] w-full pb-3 pt-4 flex">
              <div className={`md:px-9 px-3 font-medium text-sm tracking-widest w-full pt-3`}>
                <p className={`${isLight ? "text-zinc-400" : "text-zinc-500"}`}>SOLVED PROBLEMS</p>
                
                <div
                  onClick={() =>
                    handleLinkClick("https://leetcode.com/kronocodes")
                  }
                  class="mx-3 flex items-center"
                >
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
                          className={`w-[100px] ${isLight ? "text-zinc-600" : "text-zinc-700"}`}
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
                          <div className={`text-3xl font-medium ${isLight ? "text-zinc-900" : "text-zinc-100"}`}>
                            {stats.totalSolved}
                          </div>
                          <div className={`whitespace-nowrap text-sm ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                            Solved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex w-full flex-col space-y-4">
                    <div class="space-y-2">
                      <div class="flex w-full items-end text-xs">
                        <div className={`w-[53px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Easy</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.easySolved}
                          </span>
                          <span className={`text-xs font-medium ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                            /{stats.totalEasy}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div className={`absolute h-full w-full ${isLight ? "bg-green-200" : "bg-green-900"}`}></div>
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
                        <div className={`w-[53px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Medium</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.mediumSolved}
                          </span>
                          <span className={`text-xs font-medium ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                            /{stats.totalMedium}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div className={`absolute h-full w-full ${isLight ? "bg-yellow-200" : "bg-yellow-900"}`}></div>
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
                        <div className={`w-[53px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>Hard</div>
                        <div class="flex flex-1 items-center">
                          <span class="mr-[5px] text-base font-medium leading-[20px]">
                            {stats.hardSolved}
                          </span>
                          <span className={`text-xs font-medium ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                            /{stats.totalHard}
                          </span>
                        </div>
                      </div>
                      <div class="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                        <div className={`absolute h-full w-full ${isLight ? "bg-red-200" : "bg-red-900"}`}></div>
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
              <div className="pt-3 hidden md:flex md:flex-col pr-9 justify-center">
                <div className={`font-medium text-sm tracking-widest mb-3 pl-1 ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
                  CONTEST STATS
                </div>
                <div
                  onClick={() => handleLinkClick("https://leetcode.com/kronocodes2")}
                  className={`w-[210px] xl:w-[240px] grid grid-cols-2 gap-[1px] rounded-2xl overflow-hidden cursor-pointer ${isLight ? "bg-zinc-100 border border-zinc-200" : "bg-zinc-700"}`}
                >
                  {[
                    { label: "LEVEL", value: "KNIGHT" },
                    { label: "MAX RATING", value: "1954" },
                    { label: "CONTESTS", value: "17" },
                    { label: "TOP RANK", value: "#411" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center justify-center py-4 px-2 gap-y-1 ${isLight ? "bg-white hover:bg-zinc-50" : "bg-zinc-800 hover:bg-zinc-700"} transition-colors duration-200`}
                    >
                      <div className={`text-xl font-bold tracking-tight ${isLight ? "text-zinc-800" : "text-white"}`}>
                        {value}
                      </div>
                      <div className={`text-[10px] font-semibold tracking-widest ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-zinc-700 w-[95%] h-[1px] mx-auto mb-6 mt-4"></div> */}

          {/* <div className="flex flex-col md:px-8 px-3">
            {/* <div className="md:pb-4 px-3">
              <div className="text-lg md:text-xl pb-1">
                {totalSubmissions} submissions in the past one year
              </div>
              <div className="text-sm md:text-lg">
                Current streak: {daysBetween} 🔥
              </div>
            </div>
            <div
              onClick={() => handleLinkClick("https://leetcode.com/kronocodes")}
              className="flex gap-[3px] md:gap-[4px] overflow-x-auto mx-3 mt-4 md:mb-10 mb-8"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#727272 #18181B",
              }}
            >
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
                            <div className="text-lg">{submissions}</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Leetcode;
