import React from 'react'
import Up from '../assets/up.svg'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black text-white'>

    <div className="max-w-[1300px] w-full px-4">
        <div className="flex justify-center py-16 rounded-t-[30px]">
          <div className="w-1/2 text-xl">
            <div className="flex flex-wrap max-w-[550px] justify-between pl-1">
              <div>Github</div>
              <div>LinkedIn</div>
              <div>Twitter</div>
              <div>Comming Soon</div>
            </div>
            <div className="mt-[20px] w-[318px] border border-neutral-600 px-2 py-2 rounded-full">abhisheknandan2013@gmail.com</div>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-orange-500 w-24 h-24 rounded-full">
              <img className="p-4" src={Up} />
            </button>
          </div>
        </div>
        <div>made with love, peer pressure & react</div>
        <div className="bg-neutral-600 h-[1px]"></div>
        <div className="flex justify-between py-6">
          <div>DESIGNED & DEVELOPED BY THAT GUY OVER THERE ⟿</div>
          <div>© 2023 Abhishek Nandan. All Rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer