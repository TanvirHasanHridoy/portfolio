
import React, { useState } from 'react'
import {useTheme} from "next-themes"
import {Ri24HoursLine, Ri4KLine, RiMoonFill, RiSunLine} from "react-icons/ri"

const Navbar = () => {
  
const {systemTheme, theme, setTheme}=useTheme()
const currentTheme=theme==="system"? systemTheme:theme
const [navbar, setNavbar] = useState(false);
  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:border-b dark:border-stone-600'>
     <div className=' justify-between md:flex md:items-center '>
      <div>
        <div className='flex items-center justify-between py-3'>
          <div className='md:py-5 md:block'>
            <h2 className='text-4xl font-bold'>Dev-Hridoy</h2>
          </div>
          <div className='md:hidden'>
            <button>{navbar?<Ri24HoursLine/>:<Ri4KLine/> }</button>
          </div>
        </div>
      </div>
      <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar?"block":"hidden"}`}>
      <div className='items-center justify-between md:flex md:space-x-6'> 
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        {currentTheme==="dark"?(
          <button onClick={()=> setTheme("light")} className='bg-slate-500 p-2 rounded-xl'>
          <RiSunLine size={24} color='black'/>
        </button>
        )
      :
      (
        <button onClick={()=> setTheme("dark")} className='bg-slate-500 p-2 rounded-xl'>
            <RiMoonFill size={24} color='white' />
          </button>
      )
            
        }
      </div>
      </div>
     
     </div>
     </header>
  )
}

export default Navbar