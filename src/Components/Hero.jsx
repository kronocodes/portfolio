import React from "react";
import { useEffect } from "react";

const Hero = () => {
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
        <div className="w-full mt-2 mx-2 h-[98vh] border border-zinc-600 rounded-xl gradient-box flex justify-center items-center">
          <div className="text-zinc-400 px-4 sm:px-10 mx-auto md:px-20 max-w-[1000px] text-[40px] leading-[54px] md:text-[64px] md:leading-[84px] lg:text-[74px] lg:leading-[100px]">
            <div class="flex customfont flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6">
            {/* <div className="h-[1px] w-full relative bg-gradient-to-r opacity-40 from-black mx-auto via-white to-black translate-y-[44px] md:translate-y-[67px] xl:translate-y-[78px]"></div> */}
            {/* <div className="h-[1px] w-full relative bg-gradient-to-r opacity-40 from-black mx-auto via-white to-black translate-y-[11px] md:translate-y-[18px] xl:translate-y-[22px]"></div> */}
            
              <div className="relative">Hey,</div>
              <div>I'm</div>
              <div class="lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto">
                <img
                  className="h-full w-full object-cover lg:rounded-[22px] relative z-50 rounded-[10px]"
                  src="https://res.cloudinary.com/dw2fhd58a/image/upload/w_250/q_35/f_auto/v1/About/hero5_uypia5.jpg"
                ></img>
              </div>
              <div className="text-white relative">Abhishek,</div>
              <div className="sm:hidden flex">a</div>
              {/* <div className="h-[1px] w-full relative bg-gradient-to-r opacity-40 from-black mx-auto via-white to-black translate-y-[44px] md:translate-y-[67px] xl:translate-y-[78px]"></div> */}
            {/* <div className="h-[1px] w-full relative bg-gradient-to-r opacity-40 from-black mx-auto via-white to-black translate-y-[11px] md:translate-y-[18px] xl:translate-y-[22px]"></div> */}
              <div className="flex flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6">
                
                <div className="hidden sm:flex">a</div>
                <div className="text-white relative">software developer</div>
              </div>
              <div>and</div>
              <div>a</div>
              <div className="text-white">UI/UX</div>
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
                  <span class="magic-text design relative">designer</span>
                </span>
              </h1>
              <div>based</div>
              <div>in</div>
              <div className="text-white relative">Patna,</div>
              <div class="lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto">
                <img
                  className="h-full w-full object-cover lg:rounded-[22px] relative rounded-[10px]"
                  src="https://res.cloudinary.com/dw2fhd58a/image/upload/w_250/q_35/f_auto/v1/About/patna-skyline-with-spiritual-landmarks_1700197702953-1200x675-20231117104601_aatdil.jpg"
                ></img>
              </div>
              <div className="text-white">IN.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
