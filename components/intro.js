"use client"
import Image from 'next/image'
import React from 'react'
import  {motion} from "framer-motion"

const Intro = () => {
  return (
    <section>
        <div className=' flex justify-center items-center'>
            <div className='relative'> 
    <motion.div
    initial={{ opacity:0, scale:0}}
    animate={{ opacity:1, scale:1}}>

            <Image
            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl '
            width="192"
            priority={true}
            height="192"
            quality="95"
            alt="img"
            src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
    </motion.div>
          <span className='text-2xl absolute bottom-0 right-0 outline-none '>👋</span>
            </div>

        </div> 
    </section>
  )
}

export default Intro