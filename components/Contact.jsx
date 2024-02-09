import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function Contact() { 
  return (
    <div className='h-auto  ml-[30px] md:ml-[60px] xl:px-[200px] xl:ml-0 2xl:px-[200px] my-12 lg:my-[150px]' id='contact'>
        <h1 className='text-[#ebe7d7ea] font-medium text-3xl md:text-4xl'>Contact me</h1>
        <div className='flex space-x-3 mt-4'>
            <EmailIcon sx={{color:'#e94134'}}/>
            <h4 className='text-[#ebe7d7ea] font-medium'>eduardosanchezcidron@gmail.com</h4>
        </div>
        <Link href='https://www.linkedin.com/in/eduardoscidron/' target="_blank" rel="noreferrer" className='flex space-x-3 mt-4'>
            <LinkedInIcon sx={{color:'#0a66c2'}}/>
            <h4 className='text-[#ebe7d7ea] font-medium'>www.linkedin.com/in/eduardoscidron/</h4>
        </Link>
        <div className='flex space-x-3 mt-4'>
            <WhatsAppIcon sx={{color:'#005c4b'}}/>
            <h4 className='text-[#ebe7d7ea] font-medium'>+55 (11) 9 4880-8454</h4>
        </div>
    </div>
  )
}
