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
      <div className="max-w-[1300px] w-full px-4 ">
        <div className="py-16 rounded-t-[30px] border-t border-zinc-600">
          <div className="flex gap-x-10 justify-center pl-1 text-xl">
              <a className="" href="https://github.com/kronocodes">Github</a>
              <a className="" href="https://www.linkedin.com/in/abhisheknandan2013/">LinkedIn</a>
              <button onClick={handleCopy} className="">Email</button>
          </div>
        </div>
        <div>
          <div className='text-center text-[22px] italic pb-10'>Made with love, peer pressure & react</div>
        </div>
        <div className="bg-neutral-600 h-[0.5px]"></div>
        <div className="flex sm:justify-between justify-center  py-4 text-sm">
          <div className='hidden'>DESIGNED & DEVELOPED BY THAT GUY OVER THERE ⟿</div>
          <div className='text-xs text-center'>© 2024 ABHISHEK NANDAN.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
