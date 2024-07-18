import React from 'react'
import Slider from './Slider'
const Aboutme=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/about/1_xmeudn.jpg`;

const Abouth = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-8 px-6 md:px-0 gap-y-8 z-10">
          <div className="xl:px-10 md:px-7 px-6 flex flex-col xl:gap-y-4 gap-y-2 pt-7 border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black rounded-2xl">
          {/* <div className="flex flex-col xl:gap-y-3 gap-y-2 pt-5 md:pt-0 border border-zinc-800"> */}
            <div className="md:text-2xl text-xl font-medium">
              I'm Abhishek Nandan,
            </div>
            <div className="xl:text-5xl md:text-4xl text-3xl font-medium flex flex-wrap gap-x-2">
              <div>Software</div>
              <div>developer</div>
              <div>&</div>
              <div className='flex'>design
              <div className='grader xl:text-[42px] md:text-[34px] xl:mt-1 text-[28px]'>er.</div>
            </div>
            </div>
            <div className="md:pb-0 md:text-base 2xl:text-lg pb-10 text-[15px] text-zinc-300 xl:pr-4">
            With a background in Computer Science and a knack for problem-solving, I thrive on turning ideas into reality through code and design.
            I specialise in web design and front end development. Previously I have worked at an AI startup as an developer Intern.
            </div>
            <div className="2xl:text-lg md:text-base hidden lg:flex mt-[-10px] text-zinc-300 xl:pr-4">
            In my downtime, I enjoy exploring the city, cooking food or cheering for Hamilton.
            </div>
              <div className='text-white hidden 2xl:flex text-2xl grad pt-1 items-center justify-center'>"You are as good as your weakest work"</div>
              <div className='text-zinc-300 hidden 2xl:flex mt-[-12px] font-semibold items-center justify-center'>`quote I live by`</div>
          </div>
          <div className="md:min-w-fit md:h-[410px] h-[90vw] flex gap-x-2 md:border border-zinc-600 rounded-3xl">
            <img
              className="rounded-2xl md:hover:grayscale transition-all duration-500 grayscale hover:grayscale-0 md:grayscale-0 aspect-auto border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black"
              src={Aboutme}
              style={{ height: "100%", width: "auto" }}
            />
            <Slider/>
          </div>
        </div>
  )
}

export default Abouth