import React from 'react';
import Up from '../assets/up.svg';

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopy = () => {
    const email = 'abhisheknandan2013@gmail.com';
    copyToClipboard(email);
    alert('Email copied to clipboard: ' + email);
  };

  return (
    <div className='flex justify-center bg-black text-white'>
      <div className="max-w-[1300px] md:rounded-t-2xl bg-gradient-to-b from-black to-neutral-800 mt-5 w-full px-4 md:mx-4 ">
        <div className="py-10">
          <div className="flex gap-x-8 md:gap-x-12 justify-center text-xl">
              <a className="hover:bg-neutral-600 transition-all duration-300 hover:px-5 py-2 rounded-xl" href="https://github.com/kronocodes">Github</a>
              <a className="hover:bg-neutral-600 transition-all duration-300 hover:px-5 py-2 rounded-xl" href="https://www.linkedin.com/in/abhisheknandan2013/">LinkedIn</a>
              <a className="hover:bg-neutral-600 transition-all duration-300 hover:px-5 py-2 rounded-xl" href="https://twitter.com/RakNandan">Twitter</a>
              <button onClick={handleCopy} className="hover:bg-neutral-600 transition-all duration-300 hover:px-5 py-2 rounded-xl">Email</button>
          </div>
        </div>
        <div>
          <div className='text-center text-[21px] md:text-2xl italic pb-10'>Made with love, peer pressure & react</div>
        </div>
        <div className="bg-neutral-600 h-[1px]"></div>
        <div className="flex md:justify-between justify-center  py-4 text-sm">
          <div className='hidden md:flex text-xs'>DESIGNED & DEVELOPED BY THAT GUY OVER THERE ⟿</div>
          <div className='text-xs text-center'>© 2024 ABHISHEK NANDAN.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
