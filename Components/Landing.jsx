import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import bg from "../assets/bg.png";
import scrolldown from "../lottie/scrolldown.json";
import scrolldownDARK from "../lottie/scrolldownDARK.json";
import { useHandle } from "../context/HandleContext";
import { Router, useRouter } from "next/router";
import animation from "../lottie/69981-team.json";
import {motion} from 'framer-motion';

function Landing() {
  const { isDark } = useHandle();
  const router = useRouter();
  const headerTextVarient ={
    hidden:{
      opacity:0,
      y:100,
      transition:{
        scale:0
      }
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        scale:1,
        type:"spring",
        delay:0.3
      }
    }
  }

  return (
    <div className='w-full h-[100vh] justify-center items-center  flex flex-col z-10'>
      <div className='md:block hidden absolute'>
        <Image
          className='z-[0] w-screen h-screen dark:opacity-70 opacity-100 md:hidden absolute ease-linear duration-2000'
          alt='bg'
          src={bg}
          height={8000}
          width={8000}
        />
      </div>
      <div className='h-[100px] flex justify-center items-center flex-col '>
        <div className='flex flex-col justify-center items-center'>
          <motion.div variants={headerTextVarient} initial="hidden" animate="visible" className=' ease-linear duration-200 max-w-4xl z-10 text-black drop-shadow-lg  dark:text-white md:text-[5rem] text-4xl font-extrabold text-center leading-[55px] md:leading-[85px]'>
          The best place to <span className='text-[#3dda84]'>build,</span><span className="h-10 z-0">test and develop your code !</span>
          </motion.div>
       
          <div className='absolute mt-6 opacity-75'>
            {/* <Lottie
              animationData={isDark ? scrolldownDARK : scrolldown}
              loop={true}
              autoplay={true}
            /> */}
            <Lottie
              animationData={animation}
              loop={true}
              autoplay={true}
            />
          </div>
            <motion.button variants={headerTextVarient} initial="hidden" animate="visible" onClick={()=>router.push('/home')} className='mt-16 relative inline-flex drop-shadow-lg items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   from-[#0B685A] to-[#3DDA84] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:scale-[0.9] ease-linear duration-100'>
              <span className=' px-14 py-2.5 transition-all ease-linear duration-100 bg-white dark:bg-[#121212] rounded-md group-hover:bg-opacity-0 text-md font-bold tracking-widest'>
                GET STARTED
              </span>
            </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
