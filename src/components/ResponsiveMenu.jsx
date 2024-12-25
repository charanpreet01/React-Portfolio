import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
      <div>
        <nav className='mt-12'>
          <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <a href="#skills"><li className='cursor-pointer' onClick={() => setShowMenu(false)}>Skills</li></a>
            <a href="#education"><li className='cursor-pointer' onClick={() => setShowMenu(false)}>Education & Experience</li></a>
            <a href="#project"><li className='cursor-pointer' onClick={() => setShowMenu(false)}>Projects</li></a>
            <a href="#contact"><li className='cursor-pointer' onClick={() => setShowMenu(false)}>Contact</li></a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
