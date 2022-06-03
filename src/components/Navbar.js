import React,{useState} from 'react'

import { NavLink } from 'react-router-dom';
import {CgMenu,CgMenuHotdog} from 'react-icons/cg'
import { motion,AnimatePresence } from 'framer-motion';
import {AiOutlineHome,AiOutlineUser,AiOutlineMail,AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook}  from 'react-icons/ai'
import {ImBriefcase} from 'react-icons/im'

const Navbar = () => { 

  const[isOpen,setIsOpen]=useState(false)
  // toggle menu bar
  const toggleBar=()=>{
    setIsOpen(prevIsOpen=>!prevIsOpen)
  }

    
    const homeVariantsA={
      hidden:{
        y:-1000,
        transition:{
          type:"spring",
          stiffness:50,
          delay:0.5
        }
      },
      visible:{
        y:100,
        transition:{
          type:"spring",
          stiffness:50
        }
      }     
    }

    const homeVariantsB={
      hidden:{
        y:-1000,
        transition:{
          type:"spring",
          stiffness:50        
        }
      },
      visible:{
        y:100,
        transition:{
          type:"spring",
          stiffness:50,
          delay:0.5
        }
      }     
    }

  return (
    <div className='w-full h-[60px] md:h-[70px]  bg-slate-900 md:bg-white  font-gabriella '>
        <nav className='w-full h-full flex justify-between items-center px-3 border-2 md:border-0 border-slate-800 relative'>
            <span className='text-md font-semibold text-slate-100 md:text-slate-800' >AndroyT1</span>
            <ul className='hidden md:block text-slate-300 md:text-slate-800'>
                <li className='inline-block ml-6 relative'  ><NavLink to='/' className={({isActive})=>(isActive ? 'after:block  after:h-[1px] after-w-[100%] after:bg-red-600 ' : '')}>Home</NavLink></li>
                <li className='inline-block ml-6 relative' ><NavLink to='/about' className={({isActive})=>(isActive ? 'after:block after:h-[1px] after-w-[100%] after:bg-red-600 ' : '')}>About</NavLink></li>
                <li className='inline-block ml-6' >Portfolio</li>
                <li className='inline-block ml-6' >Contact</li>
            </ul>
            <button className='bg-red-600 text-slate-200 text-sm py-2 px-5 rounded-full'>Download Cv</button>
            {
              isOpen ?  <CgMenuHotdog className='z-[100] block md:hidden text-2xl text-slate-100 fixed top-[70px] right-4' onClick={toggleBar}/>
              :
              <CgMenu className='z-[100] block md:hidden text-2xl text-slate-100 fixed top-[70px] right-4' onClick={toggleBar}/>
        }
        </nav>  

         {/*Mobile Menu bar */}
         <AnimatePresence  exitBeforeEnter initial={false}>
        <motion.div variants={homeVariantsB} animate={isOpen ? 'visible':'hidden'} key='one' className='md:hidden  fixed top-[30%] w-[15%] right-0  h-[50vh] transition-colors duration-300 ease-linear hover:bg-slate-900 grid grid-cols-1 border-l-2 border-red-600 z-50 '>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000]  transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <NavLink to='/'><AiOutlineHome className='text-3xl text-slate-100 cursor-pointer'/></NavLink>
          </div>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
             <NavLink to='/about'> <AiOutlineUser className='text-3xl text-slate-100 cursor-pointer'/></NavLink>
          </div>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <ImBriefcase className='text-3xl text-slate-100 cursor-pointer'/>
          </div>
          <div className='border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
               <AiOutlineMail className='text-3xl text-slate-100 cursor-pointer bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'/>
          </div>
          
        </motion.div>     
        </AnimatePresence>

        {/* Social Links */}
          {/* For smaller screens */}
          <AnimatePresence  exitBeforeEnter initial={false}>
          <motion.div variants={homeVariantsA} animate={isOpen ? 'visible':'hidden'} key='two' className='md:hidden  fixed top-[30%] w-[15%] left-0  h-[50vh] transition-colors duration-300 ease-linear hover:bg-slate-900 grid grid-cols-1 border-r-2 border-red-600 z-50 '>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineGithub className='text-3xl text-slate-100 cursor-pointer'/>
          </div>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000] selection:transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineLinkedin className='text-3xl text-slate-100 cursor-pointer'/>
          </div>
          <div className=' border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
              <AiOutlineInstagram className='text-3xl text-slate-100 cursor-pointer'/>
          </div>
          <div className='border-b-2 border-red-600 flex justify-center items-center bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'>
               <AiOutlineFacebook className='text-3xl text-slate-100 cursor-pointer bg-[#000] transition-colors duration-300 ease-linear  rounded-r-2xl'/>
          </div>
         
        </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Navbar