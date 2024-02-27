import React from "react";
import { useState, useEffect } from "react";

const Leetcode = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const data = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app/kronocodes"
    );
    const json = await data.json();
    setStats(json);
  };
  {
    /* stats.submissionCalendar */
  }

  return (
    <>
      <div className="flex flex-col items-center gap-y-44 text-white">
        <div className="2xl:max-w-[1300px] md:px-16 lg:max-w-[1000px] gap-y-14 w-full py-36 flex flex-col">
          <div class="min-w-max max-w-full w-full flex-1">
            <div class="bg-zinc-800 rounded-lg xl:h-[186px] min-h-[186px] w-full pb-3 pt-4">
              <div class="px-[13px] font-medium">
                Solved Problems
                <div class="xl:mx-8 mx-3 flex items-center">
                  <div class="mr-8 mt-6 flex min-w-[100px] justify-center">
                    <div class="relative max-h-[100px] max-w-[100px]">
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
                          <div class="text-[24px] font-medium text-zinc-100">
                            {stats.totalSolved}
                          </div>
                          <div class="whitespace-nowrap text-xs text-zinc-400">
                            Solved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="xl:max-w-[228px] flex w-full flex-col space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leetcode;
