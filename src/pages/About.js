import React,{useEffect} from 'react'
import {ImBriefcase} from 'react-icons/im'
import { motion,AnimatePresence ,useAnimation,} from 'framer-motion'
import { useInView } from "react-intersection-observer";

const About = () => {

  const html5Variants = {
    visible: { width:'80%', transition: { duration: 1.5 } },
    hidden: { width: 0 }
  };

  const css3Variants = {
    visible: { width:'95%', transition: { duration: 1.5,delay:0.5 } },
    hidden: { width: 0 }
  };

  const javascriptVariants = {
    visible: { width:'75%', transition: { duration: 1.5,delay:1 } },
    hidden: { width: 0 }
  };

  const reactVariants = {
    visible: { width:'75%', transition: { duration: 1.5,delay:1.5 } },
    hidden: { width: 0 }
  };

  const nodeVariants = {
    visible: { width:'87%', transition: { duration: 1.5,delay:2 } },
    hidden: { width: 0 }
  };

  const phytonVariants = {
    visible: { width:'70%', transition: { duration: 1.5,delay:2.5 } },
    hidden: { width: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <AnimatePresence exitBeforeEnter  >
    <motion.div initial={{y:1000}} animate={{y:0}} transition={{duration:1}}  className='w-full min-h-[100vh] bg-slate-900 font-gabriella'>
      <div className='w-full mx-auto'>
      <h3 className='text-4xl text-slate-100 pt-10 md:text-center  px-5'>About <span className='text-4xl text-red-500'>Me</span></h3>
      </div>
        <section className='w-full  grid grid-cols-1 md:grid-cols-2 place-items-center'>         
         <div className=' min-h-[50vh] w-full pt-5 md:pt-10 flex flex-col justify-start items-start px-5 md:px-10'> 
         <h3 className=" text-slate-50 text-2xl md:text-3xl">Information About Me</h3>       
         <p className='text-slate-300 leading-8 tracking-wide '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quod architecto, aperiam tempora voluptas eos, rem vitae voluptatibus ducimus, ab soluta. Porro alias sapiente quod enim consectetur perspiciatis aspernatur reiciendis!</p>

         <p className='text-slate-300 pt-8 leading-8 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut aperiam doloremque inventore quia natus, rem perspiciatis aut consequatur incidunt quos debitis quibusdam deserunt quidem. Asperiores est nulla eius dolorem.</p>

        <button className='px-12 bg-red-600 text-slate-200 mt-6 py-2 rounded-2xl'>Download CV</button>
       
         </div>
         <motion.div initial={{y:1000}} animate={{y:0}} transition={{duration:1,delay:1}}  className=' min-h-[50vh] w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 px-5 pt-16'>
           <div className='border-2 border-slate-700 w-full min-h-[25vh] px-4 py-3 hover:translate-y-[-10px] hover:border-red-100 transition-all duration-300 ease-linear'>
             <span className='block text-4xl md:text-7xl text-red-100 uppercase mb-3 font-bold'>650+</span>
             <span className='block text-xl pl-8 text-white uppercase'>Projects</span>
             <span className='block text-xl pl-8 text-white uppercase'>completed</span>
           </div>
           <div className='border-2 border-slate-700 w-full min-h-[25vh] px-4 py-3 hover:translate-y-[-10px] hover:border-red-100 transition-all duration-300 ease-linear'>
             <span className='block text-4xl md:text-7xl text-red-100 uppercase mb-3 font-bold'>10+</span>
             <span className='block text-xl pl-8 text-white uppercase'>years of</span>
             <span className='block text-xl pl-8 text-white uppercase'>experience</span>
           </div>
           <div className='border-2 border-slate-700 w-full min-h-[25vh] px-4 py-3 hover:translate-y-[-10px] hover:border-red-100 transition-all duration-300 ease-linear'>
             <span className='block text-4xl md:text-7xl text-red-100 uppercase mb-3 font-bold'>300+</span>
             <span className='block text-xl pl-8 text-white uppercase'>happy</span>
             <span className='block text-xl pl-8 text-white uppercase'>clients</span>
           </div>
           <div className='border-2 border-slate-700 w-full min-h-[25vh] px-4 py-3 hover:translate-y-[-10px] hover:border-red-100 transition-all duration-300 ease-linear'>
             <span className='block text-4xl md:text-7xl text-red-100 uppercase mb-3 font-bold'>400+</span>
             <span className='block text-xl pl-8 text-white uppercase'>customer</span>
             <span className='block text-xl pl-8 text-white uppercase'>reviews</span>
           </div>
          
         </motion.div>
        </section>

        
        
        <section className='w-full pt-40 px-5 md:px-10'>
          <div className='w-[60%] border-b-2 border-slate-500 mx-auto'></div>
            <h3 className='text-3xl text-slate-50 uppercase pt-24'>my skills</h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-2  md:gap-x-10 place-items-center'>
              <div className=' w-full py-2 grid grid-cols-1'>
              <div className=''>
                        <span className='text-slate-50 text-md uppercase'>html5</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>80%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={html5Variants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
              <div className=' w-full py-2 grid grid-cols-1'>
              <div className=''>
                        <span className='text-slate-50 text-md uppercase'>css3</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>95%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={css3Variants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
              <div className=' w-full py-2 grid grid-cols-1'>
              <div className=''>
                        <span className='text-slate-50 text-md uppercase'>javascript</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>75%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={javascriptVariants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
              <div className=' w-full py-2 grid grid-cols-1'>
                    <div className=''>
                        <span className='text-slate-50 text-md uppercase'>reactjs</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>75%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={reactVariants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
              <div className=' w-full py-2 grid grid-cols-1'>
                    <div className=''>
                        <span className='text-slate-50 text-md uppercase'>nodejs</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>87%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={nodeVariants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
              <div className=' w-full py-2 grid grid-cols-1'>
                    <div className=''>
                        <span className='text-slate-50 text-md uppercase'>phyton</span>
                      </div>
                      <div className='flex items-center'>
                      <span className='text-slate-400 text-md mr-4'>70%</span>
                      <div className='w-full h-2  bg-slate-700 rounded-md'>
                        <motion.div ref={ref}  animate={controls} initial="hidden"   variants={phytonVariants} className=' bg-green-500 h-full'>
                        </motion.div>
                      </div>
                      </div>
              </div>
            </div>
        </section>


        <section className='w-[94%] mx-auto px-5 md:px-10'>
            <h4 className='text-2xl text-slate-200 uppercase pt-20 mb-10'>my timeline</h4>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center'>
              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>

              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>

              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>
             
              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>

              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>

              <div className='w-full py-3  border-l-2 border-slate-700 relative  min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-start pl-[28px] md:px-[36px]'>
                 <div className='absolute top-0 left-0  flex justify-center items-center bg-red-600 rounded-full h-10 w-10 translate-x-[-20px] translate-y-[-20px] md:h-16 md:w-16 md:translate-x-[-32px] md:translate-y-[-32px]'>
                 <ImBriefcase className='text-xl md:text-2xl text-slate-200'/>                
                 </div>
                 <div className='px-2  bg-slate-700 absolute top-0 left-16 rounded-xl translate-y-[-24px] md:py-1'><span className='text-slate-300 text-sm md:text-md px-2 md:px-3 '>2010-present</span></div>
                 <h3 className='text-slate-200 text-xl mb-2 uppercase font-semibold'>WEB DEVELOPER - VIRCROSOFT</h3>
                 <p className='text-slate-200 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.</p>
              </div>

             </div>          
        </section>
    </motion.div>
    </AnimatePresence>
  )
}

export default About