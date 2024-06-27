import React from 'react';
import Up from '../assets/up.svg';

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
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
      <div className="md:rounded-t-2xl bg-gradient-to-b border border-zinc-600 from-black to-neutral-800 mt-5 w-full px-4 md:mx-6 max-w-[1200px]">
      <div className="h-[1px] bg-gradient-to-r from-zinc-800 mx-auto via-white to-zinc-800 w-11/12"></div>
        <div className="py-10">
          <div className="flex md:gap-x-2 justify-center text-xl">
              <div className="hover:bg-neutral-600 group flex items-center transition-all duration-300 hover:pl-4 hover:pr-2 py-2 rounded-xl" 
              onClick={() => handleLinkClick('https://github.com/kronocodes')}>
                <div>Github</div>
                <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="hover:bg-neutral-600 group flex items-center transition-all duration-300 hover:pl-4 hover:pr-2 py-2 rounded-xl" 
              onClick={() => handleLinkClick('https://www.linkedin.com/in/abhisheknandan2013/')}>
                <div>LinkedIn</div>
                <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="hover:bg-neutral-600 group flex items-center transition-all duration-300 hover:pl-4 hover:pr-2 py-2 rounded-xl" 
              onClick={() => handleLinkClick('https://twitter.com/RakNandan')}>
                <div>Twitter</div>
                <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <button onClick={handleCopy} className="hover:bg-neutral-600 group flex items-center transition-all duration-300 hover:px-4 py-2 rounded-xl">
                <div>Email</div>
                {/* <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img> */}
              </button>
              
          </div>
        </div>
        <div>
          <div className='text-center text-[20px] md:text-2xl italic pb-10'>Made with love, peer pressure & react</div>
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
