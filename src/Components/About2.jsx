import React from 'react'
import Aboutme from '../assets/aboutme.jpg'

const About2 = () => {
  return (
    <>
    <div>
    <img className='pt-20' src={Aboutme}></img>
    </div>
    <div className="flex px-4 flex-col">
        <div className="text-[80px]">My story</div>
        <div className='flex flex-col '>I'm passionate about creating beautiful products that empower people.</div>
    </div>

    <div className="flex px-4 flex-col">
        <div className="text-[80px]">Skills</div>
        I focus on all things design and web related. With each of my services, my goal is to deliver an impactful and elevating digital experience for everyone.
        <div className='flex flex-col'>
          <div>Website design</div>
          <div>Application design</div>
          <div>interactive design</div>
          <div>prototyping</div>
          <div>ecommerce</div>
          <div>illustration</div>
        </div>
        </div>
        <div className="flex px-4 flex-col">
        <div className="text-[80px]">Tech stack</div>
        <div className='flex'>Front End
        <div>HTML 5</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React</div>
        <div>Tailwind</div>
        </div>
        <div className='flex'>Back End
        <div>Python</div>
        <div>Node js</div>
        <div>MongoDB</div>
        <div>Express.js</div>
        </div>
        <div className='flex'>Database
        <div>MySQL</div>
        </div>
      </div>
      <div className="flex px-4 flex-col">
        <div className="text-[80px]">Tools i use</div>
        <div className='flex flex-col '>
          <div>Figma</div>
          <div>Adobe Photoshop</div>
          <div>VS Code</div>
        </div>
    </div>
    </>
  )
}

export default About2

