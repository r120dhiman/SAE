import React from 'react'
import logo from "../images/saelogo.png"

const Navbar = () => {
  return (
    <div >
      <div id='navbar' className="flex justify-between  laptop:px-5 px-2 flex-row gap-2 bg-[rgb(27,26,27)] text-white">
        <img src={logo} alt="./assests" className='pc:w-52  laptop:w-48 tab:w-32 phoneh:w-24  w-16' />
        <div className="flex flex-row laptop:gap-10  tab:gap-2 pc:gap-20 phoneh:gap-3 gap-1 items-center">
          <h2 className='font-bold tab:text-[15px] phoneh:text-[14px] text-[9px] hover:border-b-2 hover:border-[#E25420] '>Home</h2>
          <h2 className='font-bold tab:text-[15px] phoneh:text-[14px] text-[9px] hover:border-b-2 hover:border-[#E25420] '>About</h2>
          <h2 className='font-bold tab:text-[15px] phoneh:text-[14px] text-[9px] hover:border-b-2 hover:border-[#E25420] '>Events</h2>
          <h2 className='font-bold tab:text-[15px] phoneh:text-[14px] text-[9px] hover:border-b-2 hover:border-[#E25420] '>Blogs</h2>
          <h2 className='font-bold tab:text-[15px] phoneh:text-[14px] text-[9px] hover:border-b-2 hover:border-[#E25420] '>Projects</h2>
        </div>
        <div className="btn tab:text-[15px] phoneh:text-[13px] bg-[#E25420]  phoneh:px-2 phoneh:py-1 w-fit px-1 pc:px-5 laptop:px-2 tab:px-2  my-auto h-fit py-0 pc:py-2 laptop:py-1 tab:py-1 font-bold rounded-full text-[9px] hover:border-b-2 hover:border-[]">Trident</div>
      </div>
    </div>
  )
}

export default Navbar
