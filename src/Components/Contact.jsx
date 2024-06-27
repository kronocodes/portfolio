import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ShinyButton from './Others/button';

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_9ymic2h', form.current, {
        publicKey: 'zqd-_sv9YceyVsPOq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsEmailSent(true);
          // Clear input fields
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='flex justify-center bg-black pt-6'>
      <div className='flex flex-col gap-y-[5vw] max-w-[1200px] w-full pt-8 px-6'>
        <form ref={form} onSubmit={sendEmail} className='w-full gap-y-[20px] ml-auto pt-10'>
          <div className='flex flex-col'>
            <div className='py-2 font-semibold text-xl text-white'>[ NAME ]</div>
            <input type="text" name="user_name" className='p-3 rounded-xl' placeholder='Your name' required />
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl text-white'>[ EMAIL ADDRESS ]</div>
            <input className='p-3 rounded-xl' name="user_email" type='email' placeholder='not@fake-email.com' required />
          </div>
          <div className='flex flex-col py-5 '>
            <div className='py-2 font-semibold text-xl text-white'>[ SUBJECT ]</div>
            <input className='p-3 rounded-xl' name="subject" placeholder='Attention: Important Yeti Sighting Report' required />
          </div>
          <div className='flex flex-col w-full items-center'>
            <div className='flex flex-col py-5 w-full'>
              <div className='py-2 font-semibold text-xl text-white'>[ MESSAGE ]</div>
              <textarea name='message' className='p-3 h-36 bg-zinc-200 rounded-xl' placeholder='Example Text' required />
            </div>
            <button type='submit' value="Send"><ShinyButton/></button>
            {isEmailSent && <div className="text-white mt-2">Email sent successfully!</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
