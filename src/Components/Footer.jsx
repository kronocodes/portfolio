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
    <div className='flex flex-col justify-center bg-zinc-950 text-white border-t border-zinc-700 w-full'>
      <div className="flex justify-around xl:justify-between 2xl:max-w-[1300px] mx-auto md:px-16 lg:max-w-[1000px] w-full px-5 py-20">
        <div className="md:flex md:flex-col text-sm font-medium hidden">
          <div className='text-[20px] md:text-2xl italic pb-3'>Made with love, peer pressure & React</div>
          <div className='text-xs text-zinc-300 pb-1'>Designed & Developed by a Human ⟿</div>
          <div className='text-xs text-zinc-300'>© 2024 Abhishek Nandan. All Rights Reserved.</div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className='text-[12px] font-semibold tracking-wider text-zinc-400'>NAVIGATION</div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://github.com/kronocodes')}>
                <div>Work</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://www.linkedin.com/in/abhisheknandan2013/')}>
                <div>About</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://twitter.com/RakNandan')}>
                <div>Home</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://twitter.com/RakNandan')}>
                <div>Design</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center">
                <div>Contact</div>
                {/* <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img> */}
              </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className='text-[12px] font-semibold tracking-wider text-zinc-400'>CONTACT</div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://github.com/kronocodes')}>
                <div>Github</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://www.linkedin.com/in/abhisheknandan2013/')}>
                <div>LinkedIn</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <div className="flex items-center" 
              onClick={() => handleLinkClick('https://twitter.com/RakNandan')}>
                <div>Twitter</div>
                <img className='pl-2 w-2 h-2' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img>
              </div>
              <button onClick={handleCopy} className="flex items-center">
                <div>Email</div>
                {/* <img className='opacity-0 pl-2 group-hover:opacity-100 transition-opacity' src='https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg'></img> */}
              </button>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 text-sm font-medium md:hidden">
          <div className='text-[20px] md:text-2xl italic pb-10'>Made with love, peer pressure & React</div>
          <div className='text-xs text-zinc-300'>Designed & Developed by a Human.</div>
          <div className='text-xs text-zinc-300'>© 2024 Abhishek Nandan. All Rights Reserved.</div>
        </div>
    </div>
  );
};

export default Footer;
