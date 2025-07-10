import React from 'react'
import Slider from './Slider'
const Aboutme=`https://res.cloudinary.com/dw2fhd58a/image/upload/v1752184411/PXL_20241122_162100233_b43pzc.jpg`;

const Abouth = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-8 md:px-0 gap-y-8 z-10 justify-between">
          <div className="xl:px-10 md:px-7 px-6 flex flex-col xl:gap-y-4 gap-y-2 pt-7 md:bg-gradient-to-b md:from-zinc-800 md:to-black md:rounded-2xl w-full">
          {/* <div className="flex flex-col xl:gap-y-3 gap-y-2 pt-5 md:pt-0 border border-zinc-800"> */}
            <div className="md:text-2xl text-xl font-medium">
              I'm Abhishek Nandan,
            </div>
            <div className="xl:text-5xl md:text-4xl text-3xl font-medium flex flex-wrap gap-x-2">
              <div>Software</div>
              <div>developer</div>
              <div>&</div>
              <div className='flex'>design
              <div className='grader xl:text-[42px] md:text-[34px] xl:mt-1 mt-[-1px] text-[30px]'>er.</div>
            </div>
            </div>
            <div className="lg:text-xl md:text-lg hidden md:flex mt-[10px] text-zinc-300">
            In my downtime, I enjoy exploring the city 🏙️, cooking food 🧑🏻‍🍳, playing guitar 🎸 or cheering for Hamilton 🏁. <br></br>I truly believe you are as good as your weakest work
            </div>
            <div className='flex flex-wrap gap-x-4 gap-y-3 sm:hidden lg:flex lg:pt-3 pt-3'>
              <a target="_blank" href="https://www.instagram.com/rakeshnandann/" className='border border-zinc-700 w-[120px] rounded-md flex items-center gap-4 py-2 text-sm px-4 text-zinc-300'><div class="w-1 h-1 rounded-full bg-pink-500 glow"></div>Instagram</a>
              <a target="_blank" href="https://twitter.com/kronocodes" className='border border-zinc-700 w-[120px] rounded-md flex items-center gap-4 py-2 text-sm px-4 text-zinc-300'><div class="w-1 h-1 rounded-full glow"></div>Twitter</a>
              <a target="_blank" href="https://www.linkedin.com/in/abhisheknandan2013/" className='border border-zinc-700 w-[120px] rounded-md flex items-center gap-4 py-2 text-sm px-4 text-zinc-300'><div class="w-1 h-1 rounded-full bg-blue-500 glow"></div>LinkedIn</a>
              <a target="_blank" href="https://github.com/kronocodes" className='border border-zinc-700 w-[120px] rounded-md flex items-center gap-4 py-2 text-sm px-4 text-zinc-300'><div class="w-1 h-1 rounded-full bg-purple-500 glow"></div>Github</a>
            </div>
          </div>
          <div className="md:min-w-fit md:h-[410px] h-[90vw] flex px-6 md:px-0 gap-x-2 md:border border-zinc-600 rounded-3xl">
            <img
              className="rounded-2xl md:hover:grayscale transition-all duration-500 grayscale hover:grayscale-0 md:grayscale-0 aspect-auto border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black"
              src={Aboutme}
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </div>
  )
}

export default Abouth