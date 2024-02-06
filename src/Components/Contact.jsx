import React from 'react'
import linkedIn from '../assets/linkedIn.svg'
import email from '../assets/email.png'
import up from '../assets/up.svg'

const Contact = () => {
  return (
    <div className='flex justify-center bg-black pt-6'>
      <div className='flex flex-col gap-y-[6vw]  max-w-[1300px] w-full pt-8 px-6'>
        <div className='w-full gap-y-[20px] ml-auto'>
        <div className='text-7xl w-full text-white' >CONTACT</div>
          <div className='flex flex-col'>
            <div className='py-2 font-semibold text-xl text-white'>[ NAME ]</div>
            <input className='p-4' placeholder='Your name'></input>
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl text-white'>[ EMAIL ADDRESS ]</div>
            <input className='p-4' placeholder='not@fake-email.com'></input>
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl text-white'>[ SUBJECT ]</div>
            <input className='p-4' placeholder=''></input>
          </div>
          <div className='flex flex-col w-full items-stretch '>
            <div className='flex flex-col py-5'>
              <div className='py-2 font-semibold text-xl text-white'>[ MESSAGE ]</div>
              <input className='p-4 h-36 bg-zinc-200' placeholder='Example Text'></input>
            </div>
            <button className='p-4 bg-orange-500'>SUBMIT</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
    {/* <div className='text-xl'>Have an idea of something we should work on together?<br></br>Tell me about your project.<br></br>Let’s collaborate and make great stuff..<div> */}