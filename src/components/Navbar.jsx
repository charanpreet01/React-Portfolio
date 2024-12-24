import React, { useState } from 'react'
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='bg-gray-950 -mb-7 z-50 w-full py-3 fixed'>
      <div className='flex items-center justify-end max-w-7xl mx-auto px-4 md:px-0'>
        {/* Menu section  */}
        <nav className='hidden md:block'>
           <ul className='flex gap-7 text-xl items-center font-semibold text-white mx-5'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <a href="#skills"><li className='cursor-pointer'>Skills</li></a>
            <a href="#education"><li className='cursor-pointer'>Education & Training</li></a>
            <a href="#project"><li className='cursor-pointer'>Projects</li></a>
            <a href="#contact"><button className='cursor-pointer'>Contact</button></a>
           </ul>
        </nav>
        <div className='md:hidden text-white text-4xl'>
            {
                showMenu ? <HiMenuAlt3 onClick={toggleMenu}/> : <HiMenuAlt1 onClick={toggleMenu} />
            }
        </div>
      </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar
