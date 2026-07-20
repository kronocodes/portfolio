import React from 'react';

const Education = () => {
  const edu = [
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Nalanda College of Engineering",
      sub:"Nalanda, Bihar.",
      duration: "(2024 graduate)",
      description: "Bachelor of Technology in Computer Science Engineering",
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Laxman Public School",
      sub:"Hauz Khas, New Delhi.",
      duration: "",
      description: "Class XI-XII - Science stream (PCM).",
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Kendriya Vidyalaya",
      sub:"Morigaon, Assam.",
      duration: "",
      description: "Class I-X",
    }
  ];

  return (
    <div className='text-white bg-zinc-900 md:rounded-2xl flex pb-4'>
      <div className='max-w-[1300px] w-full'>
        <div className='flex items-center px-6 pt-5'>
        <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className='px-4 text-sm text-zinc-300'>E D U C A T I O N</div>
        </div>
        <div className="px-2 pt-10">
            {edu.map((ed, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between rounded-xl px-4 lg:px-9 md:hover:translate-x-4 transition duration-200">
                  <div className='text-2xl md:text-3xl font-semibold md:w-[50%] sm:pb-2 mb-1'>{ed.title}</div>
                <div className='flex flex-col md:w-[50%]'>
                  <div className=' font-semibold text-xl sm:pt-1 pb-2 sm:pb-0'>{ed.description}</div>
                  <div className='text-sm md:text-base text-zinc-400 sm:pb-2'>{ed.duration}</div>
                  <div className='text-sm md:text-base pt-1 pb-6 text-zinc-300'>{ed.sub}</div>
                  {ed.title != "Kendriya Vidyalaya" && (
                    <div className="bg-zinc-700 w-full h-[1px] mb-6"></div>
                  )}
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
