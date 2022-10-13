import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import menuLogo from '../public/menu.svg'
import userImage from '../public/man.png'

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <nav className='px-5 py-4 flex justify-between items-center bg-white max-w-md mx-auto border-b border-darkLighter'>
        <div className='flex items-center'>
          <button className='flex items-center' onClick={toggleClass}>
            <Image src={menuLogo} alt='menu' width="24px" height="24px" />
          </button>
          <h1 href="" className='text-xl text-slate-800 ml-4'>WeeNote</h1>
        </div>
        <Image src={userImage} alt="user" width="30px" height="30px" />
      </nav>
      <div className={`absolute w-9/12 h-screen bg-background shadow-md shadow-[#2c2c2c] z-20 ${isActive ? "active" : "inActive"} transition-all duration-300`}>
        <ul className='py-3 pr-8 flex flex-col items-start'>
          <li className='py-3 px-5 w-full text-sm bg-primary rounded-r-2xl  mt-2'>Home</li>
          <li className='py-3 px-5 w-full text-sm bg-[#171717] mt-2'>Add Note</li>
          <li className='py-3 px-5 w-full text-sm bg-[#171717] mt-2'>Arsip</li>
        </ul>
      </div>
    </header>
  )
}

export default Header