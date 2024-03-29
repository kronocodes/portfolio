import React from 'react';

const Services = () => {
  
  const servicesData = [
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Software Developer",
      description: "Proficient in C/C++, Java & Python, with a strong grasp of data structures and algorithms. Demonstrated commitment to continuous learning and excellence through coding contest on leetcode and academic achievements.",
      badgeText: "700+ problems"
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Web Developer",
      description: "Combining my frontend development skills in HTML, CSS, and JS with my expertise in modern frameworks like React, I possess a comprehensive skill set to excel as a web developer.",
      badgeText: "5+ Projects"
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Graphic Designer",
      description: "Proficient in Adobe Photoshop, Illustrator, and other design tools, with a strong foundation in graphic design principles. Portfolio showcases a diverse range of design projects in design section.",
      badgeText: "20+ work"
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "UI/UX Designer",
      description: "As a creative thinker with proficiency in tools like Figma, Blender, and Adobe Suite, I bring a unique blend of artistic flair and technical expertise to the realm of UI/UX design.",
      badgeText: "5+ Designs"
    }
  ];
  return (
    <div className='text-white md:rounded-xl bg-zinc-900 flex justify-center pb-6'>
      <div className='max-w-[1300px]'>
        <div className='flex items-center px-4 pt-5'>
        <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className='px-6 text-zinc-300'>S E R V I C E S</div>
        </div>
        {/* <div className="h-[1px] bg-zinc-500 mx-6"></div> */}
        <div className="md:px-4 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              
              <div key={index} className="flex flex-col md:rounded-xl md:hover:translate-x-2 md:hover:translate-y-2 transition duration-200 bg-zinc-950 px-5 lg:px-9 ">
                {/* <div className='h-[1px] w-full md:hidden bg-zinc-700'></div> */}
                <div className='pt-1 -ml-2'><img className='w-12' src={service.imageSrc} alt="ar" /></div>
                <div className='flex flex-wrap justify-between py-1'>
                  <div className='text-3xl font-semibold'>{service.title}</div>
                  {/* <div className='bg-neutral-700 w-fit h-fit text-center px-3 py-1 mt-1 border-2 border-zinc-600 rounded-md text-sm'>{service.badgeText}</div> */}
                </div>
                <div className='pb-8 pt-3 text-zinc-300'>{service.description}</div>
                
              </div>
            ))}
          </div>
        </div>
        {/* <div className='text-4xl text-center py-10 text-zinc-200 font-semibold italic'>Yup, I do'em all!</div> */}
      </div>
    </div>
  );
};

export default Services;
