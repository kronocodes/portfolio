import React from 'react';

const Skills = () => {
  return (
    <div className='text-white bg-zinc-900 md:rounded-xl flex pb-4'>
      <div className='max-w-[1300px] w-full'>
        <div className='flex items-center px-6 pt-5'>
        <div class="w-3 h-3 rounded-full bg-white glow"></div>
        <div className='px-4 text-sm text-zinc-300'>S K I L L S</div>
        </div>
        <div className="px-2 pt-10">
            {/* {edu.map((ed, index) => ( */}
              <div  className="flex flex-col md:flex-row md:justify-between rounded-xl px-4 lg:px-9 ">
                  <div className='text-2xl md:text-3xl font-semibold md:w-[50%] pb-2'></div>
                <div className='flex flex-col md:w-[50%]'>
                  <div className='font-semibold text-xl pt-1'></div>
                  <div className='text-sm md:text-base text-zinc-400 pb-2'></div>
                  <div className='text-sm md:text-base pb-14 pt-1 text-zinc-400'></div>
                </div>
              </div>
            {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
