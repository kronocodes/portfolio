import React from 'react'
import Up from '../assets/up.svg'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black text-white'>

    <div className="max-w-[1300px] w-full px-4">
        <div className="py-16 rounded-t-[30px]">
            <div className="flex flex-wrap gap-x-10 justify-between pl-1 text-xl">
              <div>Github</div>
              <div>LinkedIn</div>
              <div>Twitter</div>
              <div>Twitter</div>
              <div className="mt-[20px] md:-mt-2 bg-orange-500 text-black px-2 py-1 rounded-lg">abhisheknandan2013@gmail.com</div>
            </div>
          {/* <div className="w-1/2 flex justify-end">
            <button className="bg-orange-500 w-24 h-24 rounded-full">
              <img className="p-4" src={Up} />
            </button>
          </div> */}
        </div>
        <div className='text-center text-[24px] italic py-2'>Made with love, peer pressure & react</div>
        <div className="bg-neutral-600 h-[0.5px]"></div>
        <div className="flex justify-between py-4">
          <div className='text-sm'>DESIGNED & DEVELOPED BY THAT GUY OVER THERE ⟿</div>
          <div>© 2023 Abhishek Nandan.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer