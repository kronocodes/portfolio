import React from 'react'
// import im from '../assets/hero.jpeg'
import im from '../assets/hero5.jpg'
import her from '../assets/anshu.jpg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center bg-black z-10'>
        <div className='w-full mt-3 mx-3 h-[97vh] border border-zinc-600 rounded-xl gradient-box flex justify-center items-center'>
          <div className='text-white px-10 mx-auto max-w-[1220px] text-[28px] leading-[40px] md:text-[38px] md:leading-[50px] md:px-24 lg:text-[46px] lg:leading-[66px]'>
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
                <div>New Delhi,</div>
                <div>India</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src="https://images.unsplash.com/photo-1616585592371-1515b1e558d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div>. I</div>
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
                {/* <div>Currently I</div>
                <div>am</div>
                <div>dating</div>
                <div>the</div>
                <div>prettiest</div>
                <div>girl</div>
                <div>I</div>
                <div>Know</div>
                <div className='italic font-light'>Anshuli</div>
                <div className='italic font-light'>Gautam.</div>
                <div class='xl:h-11 xl:mt-3 xl:w-24 md:w-16 md:h-10 md:mt-2 h-6 w-10 mt-1'>
                  <img className='h-full w-full object-cover rounded-full ' src={her}></img>
                </div> */}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero