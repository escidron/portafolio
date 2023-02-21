import Image from 'next/image'
// import Link from 'next/link'
import logoReact from '../public/react.png'
import nextLogo from '../public/next.png'
import typescriptLogo from '../public/typscript.png'
import javascriptLogo from '../public/javascript.png'
import htmlLogo from '../public/html.png'
import cssLogo from '../public/css.png'
import tailwindLogo from '../public/tailwind.png'
import nodeLogo from '../public/node.png'
import expressLogo from '../public/express.png'
import mongooLogo from '../public/mongoo.png'
import mysqlLogo from '../public/mysql.png'
import materialuiLogo from '../public/materialui.jpg'
import reduxLogo from '../public/redux.jpg'
import gitLogo from '../public/git.png'
import npmLogo from '../public/npm.png'
import SouthIcon from '@mui/icons-material/South';
// import Typewriter from 'typewriter-effect';
import {  heroVariants,heroVariants2 } from '../utils/motion';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


export default function Hero() {
  return (
    <div className='h-screen  flex flex-col xl:flex-row 2xl:items-center  px-[30px] xl:px-[200px] my-auto relative'>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          
        >
        <h1 className='font-sans md:text-[45px] xl:text-[35px] 2xl:text-[50px] xl:leading-11 font-medium space-x-0 text-[#ebe7d7ea] xl:w-[70%] 2xl:w-[50%] mt-10 xl:mt-[100px] 2xl:mt-0' ><p className='text-[#7de24e] text-4xl md:text-[55px] xl:text-[45px] mb-3'>Software Development</p> it&apos;s about creating solutions that make a difference.</h1>
        {/* <Link href='#' className='button_slide slide_right'>VIEW PROJECTS</Link> */}
        <Link activeClass="active" to="projects"  smooth={true} offset={-10} duration={300} className='button_slide slide_right'><h1 className='links'>VIEW PROJECTS</h1></Link>

      </motion.div>
      <motion.div
          variants={heroVariants2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          
        >
      <div id="circle-orbit-container" className='flex justify-center items-center 2xl:mr-[250px] mx-auto md:mt-[250px] mt-[180px] 2xl:mt-0'>

        <div id="inner-orbit">
          <Image className="inner-orbit-cirlces1" src={nextLogo} alt='react logo' height={40} width={40} />
          <Image className="inner-orbit-cirlces2" src={typescriptLogo} alt='react logo' height={38} width={38}/>
        </div>

        <div id="middle-orbit">
          <Image className="middle-orbit-cirlces1" src={javascriptLogo} alt='react logo' height={40} width={40}/>
          <Image className="middle-orbit-cirlces2" src={htmlLogo} alt='react logo' height={45} width={45}/>
          <Image className="middle-orbit-cirlces3" src={cssLogo} alt='react logo' height={45} width={45}/>
          <Image className="middle-orbit-cirlces4 rounded-full" src={tailwindLogo} alt='react logo' height={43} width={43}/>

        </div>

        <div id="outer-orbit">
          <Image className="outer-orbit-cirlces1" src={nodeLogo} alt='react logo' height={40} width={40}/>
          <Image className="outer-orbit-cirlces2" src={expressLogo} alt='react logo' height={38} width={38}/>
          <Image className="outer-orbit-cirlces3" src={mongooLogo} alt='react logo' height={45} width={45}/>
          <Image className="outer-orbit-cirlces4" src={mysqlLogo} alt='react logo' height={40} width={40}/>
          <Image className="outer-orbit-cirlces5 rounded-full" src={materialuiLogo} alt='react logo' height={40} width={40} />
          <Image className="outer-orbit-cirlces6 rounded-full" src={reduxLogo} alt='react logo' height={45} width={45} />
          <Image className="outer-orbit-cirlces7" src={gitLogo} alt='react logo' height={40} width={40}/>
          <Image className="outer-orbit-cirlces8 rounded-md" src={npmLogo} alt='react logo' height={35} width={35}/>
        </div>
        <Image src={logoReact} alt='react logo' height={60} width={60} className='logoReact'/>
      </div>
      </motion.div>
      <motion.div 
        className='absolute left-[50%] bottom-[180px]'
        animate={{y:20}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
          type: "spring"

        }}
      >
        {/* <Link href='#' ><SouthIcon fontSize='large' sx={{color:'#7de24e'}}/></Link> */}
        <Link activeClass="active" to="about"  smooth={true} offset={-10} duration={300} ><SouthIcon fontSize='large' sx={{color:'#7de24e',cursor:'pointer'}}/></Link>

      </motion.div>

    </div>
  )
}

