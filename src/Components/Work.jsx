import React from 'react'
import Foodle from '../assets/Foodle.png'
import Youtube from '../assets/Youtube.png'
import Portfolio from '../assets/Portfolio.png'
import FACT from '../assets/FACT.png'
import NMK from '../assets/NMK.png'
import Referral from '../assets/Referral.png'

const Work = () => {
  return (
    <>
    <div className='bg-black'>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Foodle}></img>
      </div>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Youtube}></img>
      </div>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill border bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Portfolio}></img>
      </div>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={FACT}></img>
      </div>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={NMK}></img>
      </div>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Referral}></img>
      </div>
    </div>
    </div>
    </>
  )
}

export default Work