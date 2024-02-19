import React from 'react'
import im from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[96vh] bg-black z-10'>
        <div className='bg-zinc-800 w-full h-full mt-8 mx-3 border border-zinc-600 rounded-2xl gradient-box relative'>
          {/* <div className='w-[15%] rounded-2xl opacity-40 absolute bg-gradient-to-l from-transparent to-black left-0 h-full'></div> */}
          {/* <div className='w-[15%] rounded-2xl opacity-40 absolute bg-gradient-to-l from-black to-transparent right-0 h-full'></div> */}
          {/* <div className='h-[25%] rounded-2xl opacity-40 absolute bg-gradient-to-t from-transparent to-black top-0 w-full'></div>
          <div className='h-[25%] rounded-2xl opacity-40 absolute bg-gradient-to-b from-transparent to-black bottom-0 w-full'></div> */}
          <div className=' text-white px-10 mx-auto max-w-[1220px] mt-[260px] text-[25px] leading-[33px] md:text-[40px] md:leading-[54px] md:px-24  lg:mt-[260px] lg:text-[45px] lg:leading-[70px]'>
              <div class="flex flex-wrap gap-x-2 ">
                <div>Hello!</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src={im}></img>
                </div>
                <div>I'm</div>
                <div>Abhishek,</div>
                <div>a Software Developer</div>
                <div>and</div>
                <div>a</div>
                <div>Web</div>
                <div className='italic md:pl-1 font-light'>User</div>
                <div className='italic pr-2 font-light'>Interface</div>
                <div>Designer</div>
                <div>based</div>
                <div>in</div>
                <div>Patna,</div>
                <div>India.</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src="https://cdn1.tripoto.com/media/filter/tst/img/1820511/TripDocument/1577909575_giant_buddha_1.jpeg.webp"></img>
                </div>
                <div>I</div>
                <div>am</div>
                <div>currently</div>
                <div>a</div>
                <div>final</div>
                <div>year</div>
                <div>student</div>
                <div>majoring</div>
                <div>in</div>
                <div>Computer</div>
                <div>Science</div>
                <div>Engineering.</div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero