import React from 'react'
import im from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[96vh] bg-black z-10'>
          <div className='text-white px-5 max-w-[1300px] text-[50px] md:text-[70px] md:leading-[86px] xl:text-[90px] xl:leading-[100px]'>
              <div class="flex flex-wrap justify-between">
                <div>HELLO</div>
                <div>THERE!</div>
              </div>
              <div class="flex flex-wrap justify-between items-center">
                <div className=''>I'AM</div>
                <div class='md:px-3 lg:px-4 xl:h-20 xl:w-44 md:h-16 h-14 w-36'>
                  <img className='h-full w-full object-cover rounded-full' src={im}></img>
                </div>
              </div>
              <div class="flex flex-wrap justify-between">
                <div>ABHISHEK</div>
                <div>NANDAN</div>
              </div>
              <div class="flex flex-wrap gap-x-10 justify-between">
                <div>SOFTWARE</div>
                <div>DEVELOPER</div>
              </div>
              <div class="flex flex-wrap justify-between">
                <div>AND</div>
                <div>WEB</div>
                <div>DESIGNER</div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Hero