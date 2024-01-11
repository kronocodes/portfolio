import React from 'react'
import linkedIn from '../assets/linkedIn.svg'
import email from '../assets/email.png'
import up from '../assets/up.svg'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col gap-y-[6vw] border m-[2vw] p-[2vw]'>
        <div className='text-8xl static w-full' >CONTACT</div>
        <div className='w-full gap-y-[3vw] ml-auto'>
          <div className='flex flex-col gap-y-[2vw] mb-[1vw]'>
            <div>[ NAME ]</div>
            <input placeholder='Your name'></input>
          </div>
          <div className='flex flex-col gap-y-[2vw] mb-[1vw]'>
            <div>[ EMAIL ADDRESS ]</div>
            <input placeholder='not@fake-email.com'></input>
          </div>
          <div className='flex flex-col gap-y-[2vw] mb-[1vw]'>
            <div>[ SUBJECT ]</div>
            <input placeholder=''></input>
          </div>
          <div className='flex flex-col w-full items-stretch mb-[1vw]'>
            <div className='flex flex-col gap-y-[2vw]'>
              <div>[ MESSAGE ]</div>
              <input placeholder='Example Text'></input>
            </div>
            <button className='h-9'>SUBMIT</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
    {/* <div className='text-xl'>Have an idea of something we should work on together?<br></br>Tell me about your project.<br></br>Let’s collaborate and make great stuff..<div> */}