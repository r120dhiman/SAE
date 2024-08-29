import React from 'react'
import img1 from "../images/img10.png"
import img2 from "../images/img8.png"
import img3 from "../images/img4.png"
import team from "../images/team.png"

const Sponsers = () => {
  return (
    <div className='absloute flex justify-center flex-col items-center'>
      <div className="sponsers bg-black  flex justify-center w-full flex-col items-center pb-24">
        <h1 className="font-semibold text-white text-[40px] tab:text-[60px] pc:text-[80px] ">Our Sponsers</h1>
        <div className="flex flex-row justify-center gap-3 tab:gap-10 items-end pb-5 h-fit" >
          <img src={img1} className=' tab:h-20 phoneh:h-12 laptop:h-24 pc:h-32  h-8' alt="" />
          <img src={img2} className=' tab:h-20 phoneh:h-12 laptop:h-24 pc:h-36  h-8' alt="" />
          <img src={img3} className='tab:h-20 phoneh:h-16 laptop:h-28  pc:h-44 h-10' alt="" />
        </div>
      </div>
      <div className="team relative h-[26rem] tab:w-[90%] w-[96%] lapotp:w-[85%] pc:w-[70%] border-[3px] p-5 border-black rounded-3xl bg-white text-black top-[-80px]">
        <h1 className=" text-[40px]">Meet Our Team</h1>
        <div className="flex laptop:gap-6 phoneh:gap-3 gap-1 tab:flex-row flex-col pc:gap-10">
          <div className="leftpart flex flex-row  tab:flex-col pc1:flex-col pc:flex-col gap-1 phoneh:gap-4">
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1" >Helm</div>
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1" >Aerodynamic</div>
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1" >Vechile  Dynamics</div>
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1" >Structures</div>
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1">Marketing</div>
            <div className="teams border-[1px] rounded-md bg-[rgb(253 252 252)] border-slate-200  pc:w-56 laptop:w-44 pc1:w-64 pc1:text-xl pc:text-lg tab:text-sm text-[10px] font-semibold p-1" >Web Team</div>
          </div>
          <div className="rightpart flex flex-col">
            <div className="upper w-[100%] h-8 bg-[#f3f3f3]"></div>
            <div className="team flex overflow-x-scroll">

            <img src={team} className='laptop:h-72  h-56' alt="" />
            <img src={team} className='laptop:h-72  h-56' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsers
