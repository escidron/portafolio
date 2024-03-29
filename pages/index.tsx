import Head from 'next/head'
import Image from 'next/image'
import BasicBreadcrumbs from "../components/bredcrums";

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '../components/NavBar'
import Header from '@/components/Header';
import Contact from '../components/Contact'
import About from '@/components/About';
import Projects from '@/components/Projects';



export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo´s Portfolio</title>
        <meta name="description" content="Eduardo Sanchez´s portafolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ES_LOGO.ico" />
      </Head>
      {/* <main className='bg-gradient-to-br from-[#10101a] to-zinc-800 h-full'> */}
      <main className='bg-[#10101a] h-auto '>
        <NavBar/>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
