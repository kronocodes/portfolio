// import im from '../assets/hero.jpeg'
// import her from '../assets/anshu.jpg'
import React from 'react'
import { useEffect } from 'react';
import im from '../assets/hero5.jpg'

const Hero = () => {
    useEffect(() => {
      const magic = document.querySelector(".magic");
      if (magic) {
        let timeouts = [];
        let intervals = [];
  
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
        const animate = star => {
          star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
          star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  
          star.style.animation = "none";
          star.offsetHeight;
          star.style.animation = "";
        };
  
        magic.onmouseenter = () => {
          let index = 1;
          for(const star of document.getElementsByClassName("magic-star")) {
            timeouts.push(setTimeout(() => {  
              animate(star);
              intervals.push(setInterval(() => animate(star), 1000));
            }, index++ * 300));
          };
        };
  
        const onMouseLeave = () => {
          for(const t of timeouts) clearTimeout(t);  
          for(const i of intervals) clearInterval(i);
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
      <div className='flex items-center justify-center bg-black z-10'>
        <div className='w-full mt-2 mx- h-[98vh] border border-zinc-600 rounded-xl gradient-box flex justify-center items-center'>
          <div className='text-zinc-400 px-5 sm:px-10 mx-auto md:px-20 max-w-[1000px] text-[40px] leading-[60px] md:text-[64px] md:leading-[90px] lg:text-[74px] lg:leading-[100px] font-light'>
              <div class="flex customfont flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6">
                <div>Hey,</div>
                <div>I'm</div>
                <div class='lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto'>
                  <img className='h-full w-full object-cover lg:rounded-[22px] rounded-[10px]' src={im}></img>
                </div>
                <div className='text-white'>Abhishek,</div>
                <div className='sm:hidden flex'>a</div>
                <div className='flex flex-wrap gap-x-2 md:gap-x-4 xl:gap-x-6'>
                <div className='hidden sm:flex'>a</div>
                <div className='text-white'>software developer</div>
                </div>
                <div>and</div>
                <div>a</div>
                <div className='text-white'>UI/UX</div>
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
                    <span class="magic-text design">designer</span>
                  </span>
                </h1>
                <div>based</div>
                <div>in</div>
                <div className='text-white'>Bangalore,</div>
                <div class='lg:h-20 lg:w-32 md:w-24 md:h-16 h-10 w-14 my-auto'>
                  <img className='h-full w-full object-cover lg:rounded-[22px] rounded-[10px]' src="https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg"></img>
                </div>
                <div className='text-white'>IN.</div>
                {/* <div>I am</div>
                <div>currently</div>
                <div>a</div>
                <div>final</div>
                <div>year</div>
                <div>undergrad.</div>
                <div>student</div>
                <div class='xl:h-12 xl:w-24 md:w-16 md:h-10 h-8 w-14 my-auto'>
                  <img className='h-full w-full object-cover rounded-xl' src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/3689/2019/4/1/Buliding%20of%20Nalanda%20College%20of%20Engineering%20Chandi_Campus-View.jpg"></img>
                </div>
                <div>majoring</div>
                <div>in</div>
                <div className='italic font-light'>Computer</div>
                <div className='italic font-light'>Science</div>
                <div>Engineering.</div>
                // <div>Currently I</div>
                // <div>am</div>
                // <div>dating</div>
                // <div>the</div>
                // <div>prettiest</div>
                // <div>girl</div>
                // <div>I</div>
                // <div>Know</div>
                // <div className='italic font-light'>Anshuli</div>
                // <div className='italic font-light'>Gautam.</div>
                // <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                //   <img className='h-full w-full object-cover rounded-full ' src={her}></img>
                // </div> */}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero