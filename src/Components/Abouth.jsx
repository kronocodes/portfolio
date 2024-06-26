import React from 'react'
import Slider from './Slider'
const Aboutme=`https://res.cloudinary.com/dw2fhd58a/image/upload/f_auto,q_auto:/v1/Design/about/1_xmeudn.jpg`;

const Abouth = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-8 px-6 md:px-0 gap-y-5">
          <div className="xl:px-12 md:px-7 px-6 flex flex-col xl:gap-y-6 md:gap-y-2 gap-y-2 pt-7 border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black rounded-3xl">
            <div className="md:pt-3 md:text-2xl text-xl">
              Hey! I'm Abhishek Nandan
            </div>
            <div className="xl:text-5xl md:text-4xl text-3xl font-medium">
              Passionate to pursue the technology.
            </div>
            <div className="xl:w-full pb-10 md:pb-0 md:text-lg text-sm text-zinc-300">
            On a journey to explore the intersection of technology, design and innovation. With a background in Computer Science and a knack for problem-solving, I thrive on turning ideas into reality through code and design. 
            </div>
          </div>
          <div className="md:min-w-fit md:h-[410px] h-[90vw] flex gap-x-2 md:border border-zinc-600 rounded-3xl">
            <img
              className="rounded-3xl aspect-auto border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black"
              src={Aboutme}
              style={{ height: "100%", width: "auto" }}
            />
            <Slider/>
          </div>
        </div>
  )
}

export default Abouth