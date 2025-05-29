import React from 'react';
import { FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import Header from '@/components/Header';


function Skills() {
  return (
    <>
    <Header />

    
    <div className='flex flex-col items-center justify-center w-full py-20'> {/* Added w-full and padding */}

      {/* First row of skills */}
      <div className='flex flex-wrap justify-between gap-8 mb-8 w-full space-y-12'> {/* Use flex-wrap for responsiveness and gap for spacing */}
        <div className='flex flex-col items-center p-2'>
          <TbBrandCpp size={100}/>
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <FaHtml5 size={100} />
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <IoLogoCss3 size={100} />
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <RiTailwindCssFill size={100} />
          
        </div>
      </div>

      {/* Second row of skills */}
      <div className='flex flex-wrap justify-between gap-8 w-full '> {/* Use flex-wrap for responsiveness and gap for spacing */}
        <div className='flex flex-col items-center p-2'>
          <RiJavascriptFill size={100} />
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <FaReact size={100} />
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <RiNextjsFill size={100} />
          
        </div>
        <div className='flex flex-col items-center p-2'>
          <FaFlutter size={100} />
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;