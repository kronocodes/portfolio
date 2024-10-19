import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isActive, setIsActive] = useState(true); // true for green, false for red
  const [isAnimating, setIsAnimating] = useState(false); // to control animation timing

  const handleToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsActive(false); // Turn off (red)

      setTimeout(() => {
        setIsActive(true); // Turn back on (green)
        setTimeout(() => {
          setIsAnimating(false); // Finish the animation after 700ms
        }, 700);
      }, 1000); // Stay off for 1 second
    }
  };

  useEffect(() => {
    const magic = document.querySelector(".magic");
    if (magic) {
      let timeouts = [];
      let intervals = [];

      const rand = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      const animate = (star) => {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
      };

      magic.onmouseenter = () => {
        let index = 1;
        for (const star of document.getElementsByClassName("magic-star")) {
          timeouts.push(
            setTimeout(() => {
              animate(star);
              intervals.push(setInterval(() => animate(star), 1000));
            }, index++ * 300)
          );
        }
      };

      const onMouseLeave = () => {
        for (const t of timeouts) clearTimeout(t);
        for (const i of intervals) clearInterval(i);
        timeouts = [];
        intervals = [];
      };

      magic.onmouseleave = onMouseLeave;
      return () => {
        magic.onmouseenter = null;
        magic.onmouseleave = null;
        onMouseLeave();
      };
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-center bg-black z-10">
        <div class="w-full h-1/2 top-0 absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black"></div>
        <div className="w-full h-[98vh] gradient-box flex flex-col justify-center items-center z-10">
          <div className="text-zinc-400 px-5 sm:px-10 mx-auto md:px-20 max-w-[1000px] text-[40px] leading-[54px] md:text-[64px] md:leading-[80px] lg:text-[74px] lg:leading-[90px] select-none">
            <div class="flex items-center justify-center customfont flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6">
              <div className="relative">Hey,</div>
              <div>I'm</div>
              <div class="lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto lg:rounded-[23px] relative z-50 rounded-[11px]">
                <img
                  className="h-full w-full object-cover lg:rounded-[22px] relative z-50 rounded-[10px] rotate-3 hover:rotate-0 transition-all duration-500"
                  src="https://res.cloudinary.com/dw2fhd58a/image/upload/w_500/q_100/f_auto/v1/About/hero5_uypia5.jpg"
                ></img>
              </div>
              <div className="text-white relative shadow-lg gradhero">
                Abhishek,
              </div>
              <div className="sm:hidden flex">a</div>
              <div className="flex flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6">
                <div className="hidden sm:flex">a</div>
                <div className="text-white relative gradhero">software</div>
                <div
                  data-value="developer"
                  className="text-white relative gradhero"
                >
                  developer
                </div>
              </div>
              <div>and</div>
              <div>a</div>
              <div className="text-white gradhero">UI/UX</div>
              <h1>
                <span class="magic">
                  <span class="magic-star">
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span class="magic-star">
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span class="magic-star">
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span class="magic-text design relative ">designer</span>
                </span>
              </h1>
              <div>based</div>
              <div>in</div>
              <div className="text-white relative gradhero">Bangalore,</div>
              <div class="lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto">
                <img
                  className="h-full w-full object-cover lg:rounded-[22px] relative rounded-[10px] -rotate-3 hover:rotate-0 transition-all duration-300"
                  src="https://res.cloudinary.com/dw2fhd58a/image/upload/w_500/q_100/f_auto/v1/About/vtz7r9uc347anrntrmu3.jpg"
                ></img>
              </div>
              <div className="text-white">IN.</div>
            </div>
          </div>
          <div
            className={`mt-10 flex items-center gap-x-2 bg-zinc-900 hover:bg-zinc-800 md:px-5 px-3 md:py-3 py-2 rounded-full md:border-2 border transition-all duration-1000 md:shadow-[0_0px_40px_0px_rgba(0,0,0,0.3)] shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)] md:shadow-purple-800 shadow-purple-900 border-purple-600 z-50`}
          >
            <div
              className={`md:w-8 w-5 mx-1 md:h-3 h-2 border rounded-md flex items-center transition-all duration-[700ms] ${
                isActive
                  ? "bg-green-500 border-green-800"
                  : "bg-transparent border-zinc-500"
              }`}
              onClick={handleToggle}
            >
              <div
                className={`md:w-4 md:h-4 w-3 h-3 rounded-full bg-white border shadow-2xl transition-transform duration-[750ms] ${
                  isActive
                    ? "md:translate-x-4 translate-x-[10px] border-green-800"
                    : "md:-translate-x-1 -translate-x-[2px] border-zinc-500"
                }`}
              ></div>
            </div>
            <div className="md:text-base text-sm text-white md:opacity-70 opacity-100 md:hover:opacity-100 transition-all duration-200 select-none">
            Open for opportunities
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
