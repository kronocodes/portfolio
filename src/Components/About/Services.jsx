import React, { useState } from 'react';

const Services = () => {

  const servicesData = [
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Software Developer",
      description: "Proficient in C/C++, Java & Python, with a strong grasp of data structures and algorithms. Demonstrated commitment to continuous learning and excellence through coding contest on leetcode.",
      badgeText: "700+ problems"
    },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "Web Developer",
      description: "Combining my frontend development skills in HTML, CSS, and JS with my expertise in modern frameworks like React, I possess a comprehensive skill set to excel as a web developer.",
      badgeText: "5+ Projects"
    },
    // {
    //   imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
    //   title: "Graphic Designer",
    //   description: "Proficient in Adobe Photoshop, Illustrator, and other design tools, with a strong foundation in graphic design principles. Portfolio showcases a diverse range of design projects.",
    //   badgeText: "20+ work"
    // },
    {
      imageSrc: "https://assets-global.website-files.com/6547600aa272d0cc570e8feb/654f6f6decb3359349b05046_View-all.svg",
      title: "UI/UX Designer",
      description: "As a creative thinker with proficiency in tools like Figma, Blender, and Adobe Suite, I bring a unique blend of artistic flair and technical expertise to the realm of UI/UX design.",
      badgeText: "5+ Designs"
    }
  ];

  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);
  const [iconChanging, setIconChanging] = useState(false);

  const toggleDescription = (index) => {
    if (iconChanging) return;
    
    setIconChanging(true);
    
    setTimeout(() => {
      setVisibleDescriptionIndex((prevIndex) => prevIndex === index ? null : index);
      setIconChanging(false);
    }, 100); // Set the delay to 200ms
  };

  return (
    <div className='text-white md:rounded-2xl bg-zinc-900 flex justify-center pb-8'>
      <div className='max-w-[1300px]'>
        <div className='flex items-center px-6 pt-5'>
          <div className="w-3 h-3 rounded-full bg-white glow"></div>
          <div className='px-4 text-zinc-300'>S E R V I C E S</div>
        </div>
        <div className="md:px-4 px-2 pt-8">
          <div className="flex flex-col gap-6">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col md:rounded-xl group md:hover:translate-x-2 transition duration-200 pl-4 pr-5 lg:px-9">
                <div className='flex items-center'>
                  <img className='w-12 md:flex hidden -ml-3 group-hover:rotate-45 transition-all duration-300' src={service.imageSrc} alt="service icon" />
                  <div className='md:text-3xl text-2xl font-semibold md:py-1 md:pl-1'>{service.title}</div>
                </div>
                <div className={`md:pb-8 pb-1 pt-2 text-zinc-300 ${visibleDescriptionIndex === index ? 'max-h-none' : 'max-h-0 overflow-hidden relative md:max-h-none md:overflow-visible'}`}>
                  {service.description}
                  {visibleDescriptionIndex !== index && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 to-transparent md:hidden"></div>
                  )}
                </div>
                <button 
                  className='text-zinc-300 mx-auto text-sm hover:underline md:hidden'
                  onClick={() => toggleDescription(index)}
                >
                  {visibleDescriptionIndex === index ? 
                    <svg fill="#dedede" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.00 330.00" xml:space="preserve" stroke="#fafafa" stroke-width="0.0033"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.98"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
                    :
                    <svg fill="#dedede" height="10px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.00 330.00" xml:space="preserve" stroke="#fafafa" stroke-width="0.0033" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.98"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
                  }
                </button>
                {service.title != "UI/UX Designer" && (
                    <div className="bg-zinc-700 w-full h-[1px] hidden md:flex"></div>
                  )}
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
