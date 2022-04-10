import Head from "next/head";
import Image from "next/image";

import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useHandle } from "../context/HandleContext";

import bg from "../assets/bg.png";
import leftbg from "../assets/leftbg.png";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const { isDark, setDark } = useHandle();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({
        image: imageSrc,
      }),
    }).then((r) => r.json());

    setUploadData(data.info.ocr.adv_ocr.data[0].textAnnotations[0].description);
    console.log(uploadData);
  }

  const animationControl = useAnimation();
  const {inView,ref} = useInView();
  console.log(inView)
  if(inView){
    animationControl.start({
      y:0,
      opacity:1,
      transition:{
        duration:0.5,
        type:"spring",
        delay:0.5
      }
    })
  }
  


  return (
    <>
      <Head>
        <title>PicoBite</title>
      </Head>
      <body className={isDark ? "dark" : ""}>
        <main className='dark:bg-[#121212] ease-linear duration-200 '>
          <NavBar />
          <Landing />
          <div className='w-full h-[100vh] flex md:flex-row flex-col z-10 '>
            <div className='md:block hidden absolute'>
              <Image
                className='z-[0] first-letter:left-0 w-screen h-screen dark:opacity-70 opacity-100  md:hidden absolute ease-linear duration-2000'
                alt='leftbg'
                src={bg}
                height={600}
                width={900}
              />
            </div>

            <motion.div ref={ref} initial={{y:100,opacity:0}} animate={animationControl} className='flex flex-col justify-center items-center h-full md:w-[40%] w-full'>
              <div className=' ease-linear duration-200 max-w-2xl z-10 text-black drop-shadow-lg  dark:text-white md:text-[4rem] text-4xl font-extrabold text-center leading-[55px] md:leading-[85px]'>
              Image to <span className='text-[#3dda84]'>code</span>
              </div>
              <div className=' ease-linear duration-200 dark:text-gray-100 max-w-sm text-center text-xl'>
              Get your work done quicker by uploading similar images and generating the code out of it !!
              </div>
             
              <button className='mt-8 relative inline-flex drop-shadow-lg items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   from-[#0B685A] to-[#3DDA84] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:scale-[0.9] ease-linear duration-100'>
                <span className='px-14 py-2.5 transition-all ease-linear duration-100 bg-white dark:bg-[#121212] rounded-md group-hover:bg-opacity-0 text-md font-bold tracking-widest'>
                  TRY NOW
                </span>
              </button>
            </motion.div>
            <motion.div ref={ref} initial={{y:100,opacity:0}} animate={animationControl} className='flex justify-center items-center h-auto md:w-[60%] w-full '>
              <div   className=' w-full md:mr-5 mx-5 flex flex-col backdrop-blur-xl bg-[rgba(256,256,256,0.5)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl overflow-hidden drop-shadow-xl shadow-black ease-linear duration-200'>
                <div className='ease-linear duration-200 flex flex-row h-8 w-full items-center bg-slate-100 dark:bg-[#252525]'>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FF605C]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FFBD44]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#00CA4E]'></div>
                </div>
                <div className=" overflow-hidden">
                  <Image alt='' src={require('../assets/h4bs1.png')}/>
                </div>
              </div>
            </motion.div>
          </div>
          <div className='w-full h-[100vh] flex md:flex-row-reverse flex-col z-10'>
            <div className='md:block hidden absolute'>
              <Image
                className='z-[0] w-screen h-screen dark:opacity-70 opacity-100 md:hidden absolute ease-linear duration-2000'
                alt='leftbg'
                src={leftbg}
                height={600}
              />
            </div>

            <div className='flex flex-col justify-center items-center h-full md:w-[40%] w-full'>
              <div className=' ease-linear duration-200 max-w-4xl z-10 text-black drop-shadow-lg  dark:text-white md:text-[4rem] text-4xl font-extrabold text-center leading-[55px] md:leading-[85px]'>
                <span className='text-[#3dda84]'>White </span> Board
              </div>
              <div className=' ease-linear duration-200 dark:text-gray-100 max-w-sm text-center text-xl'>
              Pen down your imaginations into the whiteboard!              </div>
             
              <button className='mt-8 relative inline-flex drop-shadow-lg items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   from-[#0B685A] to-[#3DDA84] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:scale-[0.9] ease-linear duration-100'>
                <span className='px-14 py-2.5 transition-all ease-linear duration-100 bg-white dark:bg-[#121212] rounded-md group-hover:bg-opacity-0 text-md font-bold tracking-widest'>
                  TRY NOW
                </span>
              </button>
            </div>
            <div className='flex justify-center items-center h-auto md:w-[60%] w-full '>
              <div className=' w-full md:ml-5 mx-5  flex flex-col backdrop-blur-xl bg-[rgba(256,256,256,0.5)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl overflow-hidden drop-shadow-xl shadow-black ease-linear duration-200'>
                <div className='ease-linear duration-200 flex flex-row h-8 w-full items-center bg-slate-100 dark:bg-[#252525]'>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FF605C]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FFBD44]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#00CA4E]'></div>
                </div>
                <div className=" overflow-hidden">
                  <Image alt='' objectFit="cover" src={require('../assets/h4bs2.png')}/>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </body>
    </>
  );
}
