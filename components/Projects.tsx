
import Link from 'next/link'
import Card from '@/components/Card';
import { projects } from '@/utils/projects';

export interface Project {
    id:string,
    name:  string;
    tools: string[];
    image: string;
    link:  string;
  }

export default function Projects() {
  return (
    <div className='mt-[80px] md:mt-[150px]' id='projects'> 
        <h1 className='text-[#ebe7d7ea] font-medium text-3xl ml-[30px] md:ml-[200px]'>Some Personal Projects</h1>
        <div className=" h-auto flex justify-center flex-col">
            {/* <div className='  h-auto mx-auto bg-[#10101a] w-full flex flex-col items-center gap-10 2xl:grid 2xl:grid-cols-2 2xl:gap-10 px-[100px]'> */}
            <div className='h-auto mx-auto bg-[#10101a] w-full flex flex-col items-center  md:px-[100px]'>
            {projects.map((project)=>(
                <Card key={project.id} project={project}/>
                ))}
            </div>
        </div>
    </div>
  )
}
