import { motion } from 'framer-motion';
// import Link from 'next/link';
import { Link } from 'react-scroll'


import { navVariants } from '../utils/motion';

export default function NavBar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className= "py-8 px-6 md:px-[200px] relative h-[80px] flex items-center"
  >
   {/* <Link href='#' className='text-[#ebe7d7ea]  text-lg font-medium '><h1 className='links'>Home</h1></Link>
   <Link href='#' className='text-[#ebe7d7ea]  text-lg font-medium ml-8'><h1 className='links'>Projects</h1></Link>
   <Link href='#' className='text-[#ebe7d7ea]  text-lg font-medium ml-8'><h1 className='links'>Contact</h1></Link> */}
   <Link activeClass="active" to="#"  smooth={true} offset={50} duration={300} className='text-[#ebe7d7ea]  md:text-lg font-medium'    ><h1 className='links'>Home</h1></Link>
   <Link activeClass="active" to="projects"  smooth={true} offset={-10} duration={300} className='text-[#ebe7d7ea]  md:text-lg font-medium ml-8'><h1 className='links'>Projects</h1></Link>
   <Link activeClass="active" to="contact"  smooth={true} offset={50} duration={300} className='text-[#ebe7d7ea]  md:text-lg font-medium ml-8'><h1 className='links'>Contact</h1></Link>
   <Link activeClass="active" to="about"  smooth={true} offset={-10} duration={300} className='text-[#ebe7d7ea]  md:text-lg font-medium ml-8'><h1 className='links'>About me</h1></Link>

  </motion.nav>
  )
}
