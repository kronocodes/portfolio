import React from 'react'
import linkedIn from '../assets/linkedIn.svg'
import email from '../assets/email.png'
import up from '../assets/up.svg'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col gap-y-[6vw] border-2 border-black m-4 p-4'>
        <div className='text-8xl static w-full' >CONTACT</div>
        <div className='w-full gap-y-[20px] ml-auto'>
          <div className='flex flex-col'>
            <div className='py-2 font-semibold text-xl'>[ NAME ]</div>
            <input className='p-4' placeholder='Your name'></input>
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl'>[ EMAIL ADDRESS ]</div>
            <input className='p-4' placeholder='not@fake-email.com'></input>
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl'>[ SUBJECT ]</div>
            <input className='p-4' placeholder=''></input>
          </div>
          <div className='flex flex-col w-full items-stretch '>
            <div className='flex flex-col py-5'>
              <div className='py-2 font-semibold text-xl'>[ MESSAGE ]</div>
              <input className='p-4 h-36' placeholder='Example Text'></input>
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