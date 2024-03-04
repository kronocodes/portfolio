import React from 'react'
// import im from '../assets/hero.jpeg'
import im from '../assets/hero5.jpg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[98vh] bg-black z-10'>
        <div className='w-full h-full mt-4 mx-2 border border-zinc-600 rounded-2xl gradient-box flex justify-center items-center'>
          <div className='text-white px-10 mx-auto max-w-[1220px] text-[25px] leading-[33px] md:text-[40px] md:leading-[54px] md:px-24 lg:text-[45px] lg:leading-[70px]'>
              <div class="flex flex-wrap gap-x-2 ">
                <div>Hello!</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src={im}></img>
                </div>
                <div>I'm</div>
                <div>Abhishek,</div>
                <div>a Software Developer</div>
                <div>and a</div>
                <div>Web</div>
                <div className='italic md:pl-1 font-light'>User</div>
                <div className='italic pr-2 font-light'>Interface</div>
                <div>Designer</div>
                <div>based</div>
                <div>in</div>
                <div >Patna,</div>
                <div>India.</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src="https://images.pexels.com/photos/9823892/pexels-photo-9823892.jpeg?cs=srgb&dl=pexels-chandan-suman-%F0%9F%87%AE%F0%9F%87%B3-9823892.jpg&fm=jpg"></img>
                </div>
                <div>I</div>
                <div>am</div>
                <div>currently</div>
                <div>a</div>
                <div>final</div>
                <div>year</div>
                <div>student</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src="https://www.collegebatch.com/static/clg-gallery/aryabhatta-knowledge-university-patna-275733.jpg"></img>
                </div>
                <div>majoring</div>
                <div>in</div>
                <div className='italic font-light'>Computer</div>
                <div className='italic font-light'>Science</div>
                <div>Engineering.</div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero