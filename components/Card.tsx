import Image, { StaticImageData } from 'next/image'
import React from 'react'
import img from '../public/planet2.jpg'
import {Button} from '@mui/material'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';

export interface Project {
  id:string,
  name:  string;
  tools: string[];
  image: StaticImageData;
  link:  string;
}

export default function Card({project}:{project:Project}) {
  return (
    <div className='h-auto xl:h-[480px]  bg-[#1a1b26] w-[90%] xl:w-[80%]  2xl:w-1/2  rounded-[30px] p-8 mt-11 2xl:mt-[150px] xl:mt-[100px] flex flex-col xl:flex-row xl:justify-between'>
        <div className=' xl:w-1/2 h-full'>
          <Image
            src={project.image}
            alt={project.name}
            className="w-full rounded-[40px] z-10 max-h-[200px] min-h-[200px] object-cover
            md:min-h-[350px]
            xl:h-[100%] xl:min-h-full xl:max-h-full 
           "
          />
          
        </div>
        <div className='flex flex-col lg:w-[45%] '>
          <p className='text-3xl md:text-4xl mx-auto mt-5 lg:mt-0 text-[#ebe7d7ea] text-center'>{project.name}</p>
          <div className='flex w-full flex-wrap space-x-4 justify-center mt-4 lg:mt-20 md:mt-10'>
            {project.tools.map((tool)=>(
              <h4 key={tool} className="text-slate-400 font-mono font-bold  text-[12px] md:text-[16px]">{tool}</h4>
            ))}
            {/* <h4 className="text-slate-400 font-mono font-bold  text-[12px]">REACT.JS</h4>
            <h4 className="text-slate-400 font-mono font-bold  text-[12px]">TAILWIND CSS</h4>
            <h4 className="text-slate-400 font-mono font-bold  text-[12px]">MATERIAL UI</h4> */}
          </div>
          <GitHubIcon className='mt-[20px] lg:mt-[80px]' fontSize='large' sx={{color:'#ebe7d7ea' ,marginInline:'auto',"&:hover": { transform: 'scale(1.2)' }}}/>

          <Link href={project.link} className='h-[40px] mx-auto mt-5 bg-[#7de24e] lg:mt-auto mb-5 max-w-[200px] rounded-lg text-[#1a1b26] font-bold px-4 py-2 flex justify-center items-center transition-transform hover:scale-110'>VISIT THE WEBSITE</Link>
        </div>

    </div>
   )
}
