import React from "react";
import { motion } from "framer-motion";

//Icons
import { SiPicartodottv } from "react-icons/si";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

//Context
import { useHandle } from "../context/HandleContext";

export default function NavBar() {
  const { isDark, setDark } = useHandle();
  const navVarient = {
    hidden:{
      y:-100,
      opacity:0
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
       duration:0.5,
       type:'spring',
      }
    }
  }


 return (
    <motion.nav variants={navVarient} initial='hidden' animate='visible' className=' fixed  top-0 h-16 w-[100%] z-50  backdrop-blur-md border-b-[1px] dark:border-[#212121] flex flex-row items-center justify-between pl-10 pr-10 ease-linear duration-200'>
      <div className='flex flex-row  items-center'>
        <SiPicartodottv size={45} className=' text-[#000] dark:text-[#fff] ease-linear duration-100 hover:text-[#3ddc84]' />
        <div className='dark:text-white pl-3 text-3xl font-bold text-black ease-linear  duration-200'>
          PicoBite
        </div>
      </div>
      <div className='w-[80px] flex flex-row justify-between'>
        <button className=' ease-linear duration-200 active:scale-50 dark:text-white active:text-[#3ddc84] dark:active:text-[#3ddc84]'>
          <VscGithubInverted size={30} />
        </button>
        <button
          className=' ease-linear duration-200 active:scale-50 dark:text-white active:text-[#3ddc84] dark:active:text-[#3ddc84]'
          onClick={() => setDark(!isDark)}
        >
          {isDark ? <MdLightMode size={30} /> : <MdNightlight size={30} />}
        </button>
      </div>
    </motion.nav>
  );
}
