import React from 'react'
import im from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[96vh] bg-black z-10'>
          <div className='text-white text-[70px] max-w-[1300px] px-5 leading-[86px]'>
              <div class="flex flex-wrap justify-between">
                <div>HELLO</div>
                <div>THERE!</div>
              </div>
              <div class="flex flex-wrap justify-between">
                <div className=''>I'AM</div>
                <div class='px-2 md:px-3 lg:px-4 h-20 w-36'>
                  <img className='h-full w-full object-cover rounded-full' src={im}></img>
                </div>
              </div>
              <div class="flex flex-wrap justify-between">
                <div>ABHISHEK</div>
                <div>NANDAN</div>
              </div>
              <div class="flex flex-wrap gap-x-10 justify-between">
                <div>SOFTWARE</div>
                <div className=''>DEVELOPER</div>
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