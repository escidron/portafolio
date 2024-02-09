import React from 'react'
import Image from 'next/image'
import logo from '../public/ES_LOGO.jpg'

export default function Footer() {
  return (
    <div className='border-t border-gray-400 h-[80px] flex items-center justify-center bg-[#10101a]' >
        <div className='h-[50px] w-[50px]'>

            <Image
              src={logo}
              alt='logo'
              className="w-full rounded-[8px]  
            "
            />
            </div>
        <div className=' my-auto w-[200px] flex flex-col items-center justify-between'>
            <h1 className='text-[#7de24e] font-medium text-xl'>Eduardo Sanchez</h1>
            <h1 className='text-[#ebe7d7ea] font-medium text-[12px]'>Software Engineer</h1>
        </div>
    </div>
  )
}
