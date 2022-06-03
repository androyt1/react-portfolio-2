import React from 'react'
import './home.css'
import {AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'

import { motion } from 'framer-motion';

const Home = () => {
   



  return (
    <motion.div initial={{y:1000}} animate={{y:0}} transition={{duration:1}}  className='w-full min-h-[100vh]    relative bg-slate-900 font-gabriella md:overflow-hidden'>
       
        <header className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center'>
            <div initial={{opacity:0,x:1000}} animate={{opacity:1,x:150}} transition={{type:'spring',duration:3}} className=' min-h-[60vh] hidden md:flex flex-col justify-center items-start pl-3  md:translate-x-[120px] px-3'  >
                
                <h5 className='text-slate-100 text-md uppercase mb-2 md:mb-8'>Hi, I am</h5>
               <h1 className='text-slate-300 text-3xl md:text-6xl uppercase tracking-tight font-bold mb-5 md:mb-8' style={{textShadow:'2px 2px 3px #fff'}}>Aghoghovwia</h1>
               <h3 className='text-2xl md:text-3xl uppercase tracking-widest mb-5  text-red-600'>Andrew</h3>
               <p className='mb-10 md:mb-10 text-slate-300 md:leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo voluptatibus velit dignissimos aliquid nesciunt.</p>

               <button className='mb-3 px-16 md:px-20 py-2 md:py-3 border-[1px] border-red-600 text-slate-200  shadow-md shadow-red-500 bg-red-600 font-semibold hover:bg-slate-300 hover:text-slate-800 transition-colors duration-500 ease-linear rounded-2xl'>Download CV</button>
          
          
          
            </div>

            <div className='min-h-[100vh] md:min-h-[60vh] relative flex flex-col justify-center items-center'>
                <img src='images/me.png' alt=""className='relative z-10 mt-28 md:mt-0'  />

               

              












 





       























                <div  className='w-full sm:w-full flex flex-col justify-center items-start md:hidden top-0 left-0 px-3 py-4 bg-[#ffffff00] absolute z-50 text-slate-50'>
                    <p className='text-sm text-slate-300'>Hi, I am</p>
                  <h1 className='text-4xl uppercase mt-3'>Aghoghovwia</h1>
                  <h4 className='text-2xl uppercase mt-2'>Andrew</h4>
                  <p className='text-red-200 mt-2 text-sm font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse similique ducimus deleniti. Cupiditate </p>
                  
                </div>        
                <div className='one w-[10em] h-[10em] rounded-full bg-[#adc2ee62] blur-[10px] z-1 absolute top-[10%] left-[10%]'>               
        </div>
        <div className='two w-[10em] h-[10em] rounded-full bg-[#e6a9a962] blur-[10px] z-1 absolute top-[25%] left-[10%]'>            
        </div>
        <div className='three w-[10em] h-[10em] rounded-full bg-[#b6d19d62]  blur-[10px] z-1 absolute top-[15%] left-[20%]'>  
        <div className='one w-[10em] h-[10em] rounded-full bg-[#adc2ee62] blur-[10px]  absolute top-[10%] left-[10%]'>            
        </div>
        <div className='two w-[10em] h-[10em] rounded-full bg-[#e6a9a962] blur-[10px]  absolute top-[25%] left-[10%]'>            
        </div>
        <div className='three w-[10em] h-[10em] rounded-full bg-[#b6d19d62]  blur-[10px] absolute top-[15%] left-[20%]'>            
        </div>          
        </div>
            </div>            
        </header>

        {/*For bigger screens  */}
        <motion.div initial={{y:1000}} animate={{y:0}} transition={{delay:1,duration:1}} div  className='hidden  absolute top-[70px] w-[8%] left-0  h-full transition-colors duration-300 ease-linear bg-slate-900 md:grid grid-cols-1 border-r-0 border-red-600 '>
          <div className=' border-b-4 border-red-600 flex justify-center items-center bg-[#000] hover:bg-slate-900  transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineLinkedin className='text-3xl text-red-600 cursor-pointer'/>
          </div>
          <div className=' border-b-4 border-red-600 flex justify-center items-center bg-[#000] hover:bg-slate-900 transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineGithub className='text-3xl text-red-600 cursor-pointer'/>
          </div>
          <div className=' border-b-4 border-red-600 flex justify-center items-center bg-[#000] hover:bg-slate-900 transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineFacebook className='text-3xl text-red-600 cursor-pointer'/>
          </div>
          <div className='border-b-4 border-red-600 flex justify-center items-center bg-[#000] hover:bg-slate-900 transition-colors duration-300 ease-linear  rounded-r-2xl'>
               <AiOutlineInstagram className='text-3xl text-red-600 cursor-pointer bg-[#000] hover:bg-slate-900 transition-colors duration-300 ease-linear  rounded-r-2xl'/>
          </div>
          <div className=' flex justify-center items-center '>
            
          </div>
          <div className=' flex justify-center items-center '>
              
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Home