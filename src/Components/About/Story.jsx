import React from 'react'
import Carousel from "../Others/Carousel";


const Story = () => {
  const images = [];

  return (
    <div className="flex flex-col justify-center min-w-xl md:max-w-[50%] px-4 md:px-0">

          <div className="w-full aspect-[2/3] bg-zinc-900 rounded-2xl">
          <div className="flex items-center pt-5 md:px-4 px-2 md:pl-7">
            <div class="w-3 h-3 rounded-full bg-white glow"></div>
            <div className="md:px-4 pl-3 text-sm text-zinc-300">
              M Y &nbsp; S T O R Y
            </div>
          </div>
          <div className="flex justify-between md:pr-4 pb-2">
            <div className="text-sm md:pl-14  pl-8 pt-1 text-zinc-400">
              Everyone has a story, Here's mine :)
            </div>
            <div className="text-sm bg-red-600 mb-1 py-1 px-2 rounded-lg font-semibold text-center w-24">
              True Story
            </div>
          </div>
            <Carousel images={images} />
          </div>
        </div>
  )
}

export default Story