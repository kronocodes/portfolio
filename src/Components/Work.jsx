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
      <a href="https://github.com/kronocodes/swiggy">
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img href="https://github.com/kronocodes/swiggy" src={Foodle}></img>
      </div>
      </a>
    </div>

    <div className='h-[90vh] flex items-center justify-center'>
      <a href='https://github.com/kronocodes/youtube-clone'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Youtube}></img>
      </div>
      </a>
    </div>
    
    <div className='h-[90vh] flex items-center justify-center'>
    <a>
      <div className='object-fill border bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Portfolio}></img>
      </div>
      </a>
    </div>

    <div className='h-[90vh] flex items-center justify-center'>
    <a href='https://www.figma.com/file/zKRavYnWGsSuKWOelcCnwz/Untitled?type=design&node-id=0-1&mode=design&t=zfm2EBaR1xTJIESq-0'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={FACT}></img>
      </div>
      </a>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <a href='https://www.figma.com/file/BI3iu3zMaEy4lmvYe5SfCr/Nasha-Mukti-Kendra?type=design&mode=design&t=zfm2EBaR1xTJIESq-0'>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={NMK}></img>
      </div>
      </a>
    </div>
    <div className='h-[90vh] flex items-center justify-center'>
      <a>
      <div className='object-fill bg-white w-[80vw] lg:w-[1000px]'>
        <img src={Referral}></img>
      </div>
      </a>
    </div>
    </div>
    </>
  )
}

export default Work