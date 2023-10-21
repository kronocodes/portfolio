import React from 'react'
import vid1 from '../assets/1.mp4'

const Work = () => {
  return (
    <>
        <div className='bg-black w-full h-full'>
            <div className='text-white font-bold text-[140px]'>PROJECTS</div>
            <video src={vid1}></video>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
  )
}

export default Work