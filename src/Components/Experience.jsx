import React from 'react';

const Experience = () => {
  const edu = [
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Streebo Inc.",
      jobtitle:"Intern",
      location:"Remote",
      duration: "June 2024 - Present",
      description: "As an developer intern I contribute in the development of AI Chatbots for clients in various domains.",
    },
  ];

  return (
    <div className='text-white bg-zinc-900 md:rounded-xl flex pb-4'>
      <div className='max-w-[1300px] w-full'>
        <div className='flex items-center px-6 pt-5'>
        <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className='px-4 text-sm text-zinc-300'>E X P E R I E N C E</div>
        </div>
        <div className="px-2 pt-10">
            {edu.map((ed, index) => (
                <div className='flex flex-col'>
              <div key={index} className="flex px-4 lg:px-9">
                <div className='w-[50%]'>
                  <div className='text-2xl md:text-3xl font-semibold'>{ed.title}</div>
                  <div className='text-lg md:text-xl font-semibold pb-2'>{ed.jobtitle}</div>
                  </div>
                    <div className='flex flex-col items-end md:items-start w-[50%]'>
                  <div className='font-semibold text-lg pb-2 md:pb-0'>{ed.location}</div>
                  <div className='text-sm md:text-base text-zinc-400 pb-2'>{ed.duration}</div>
                  <div className='text-sm md:text-base md:flex hidden pt-1 mb-6 text-zinc-300'>{ed.description}</div>
                  </div>
              </div>
                <div className='text-sm md:text-base pt-1 px-4 lg:px-9 mb-6 text-zinc-300 md:hidden'>{ed.description}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
