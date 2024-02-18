import React from 'react'
import im from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[96vh] bg-black z-10'>
        <div className='bg-zinc-800 w-full h-full mt-8 mx-3 border border-zinc-600 rounded-2xl gradient-box'>
          <div className=' text-white px-10 max-w-[1220px] mt-[240px] text-[25px] leading-[33px] md:text-[40px] md:leading-[54px] md:px-24  lg:mx-auto lg:text-[45px] lg:leading-[70px]'>
              <div class="flex flex-wrap gap-x-2 ">
                <div>Hey</div>
                <div>there!</div>
                <div>I'm</div>
                <div>Abhishek,</div>
                <div>a Software Developer</div>
                <div>and</div>
                <div>a</div>
                <div>Web</div>
                <div>User</div>
                <div>Interface</div>
                <div>designer</div>
                <div>based</div>
                <div>in</div>
                <div>Patna,</div>
                <div>India.</div>
                <div>I</div>
                <div>am</div>
                <div>currently</div>
                <div>an</div>
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