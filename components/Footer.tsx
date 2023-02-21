import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className='border-t border-gray-400 h-[80px] flex items-center justify-center bg-[#10101a]' >
        <div className='mx-auto  my-auto w-[200px] flex flex-col items-center justify-between'>
            <h1 className='text-[#7de24e] font-medium text-xl'>Eduardo Sanchez</h1>
            <h1 className='text-[#ebe7d7ea] font-medium text-[12px]'>Software Developer</h1>
        </div>
    </div>
  )
}
