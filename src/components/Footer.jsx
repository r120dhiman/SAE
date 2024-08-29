import React from 'react'
import iitbhu from "../images/iitbhu.png"
import img2 from "../images/img2.png"
import facebook from "../images/facebook.svg"
import insta from "../images/insta.svg"
import linkedin from "../images/linkedin.svg"
import mail from "../images/mail.png"

const Footer = () => {
    return (
        <div>
            <div className="base bg-gradient-to-t from-[#450800] flex justify-center items-center to-[#EE3A24] w-[100%]">
                <div className="grid grid-cols-4 bg-[#1b1a1b] text-black h-[99%]  w-[100%] mx-1 rounded-xl my-1 px-4 py-4 gap-3 laptop:px-12 tab:px-8  tab:py-7 laptop:py-7 pc:px-16 pc:py-11 pc:gap-10 laptop:gap-6 tab:gap-4 pc1:gap-16">
                    <div className="img flex gap-6 col-start-1  flex-col">
                        <img src={iitbhu} className='pc1:w-64 laptop:w-52 ml-1' alt="" />
                        <div className="flex absloute bg-gradient-to-l w-fit py-3 px-5  pc:rounded-3xl  rounded-xl tab:rounded-2xl from-[#FFC369] via-[#FFD6BC] to-[#FFFFFF] " >
                            <img src={img2} className='pc:h-16 laptop:h-12 '  alt="" />
                        </div>
                    </div>
                    <div className="details text-white gap-4 flex  flex-col col-start-2">
                        <h1><span className='bg-gradient-to-r from-[#E25420] h-20 w-20 laptop:text-2xl pc: pc:text laptop:text-lg-3xl font-bold text-transparent to-[#F69448] bg-clip-text col-start-2 tab:text-lg'>SAE</span>
                            <span className='pc:text-3xl laptop:text-2xl tab:text-lg text-[15px]'>            Collegiate Club</span></h1>
                        <h2 className='pc:text-xl tab:text-sm text-[9px] '> TACK Ka full form Or pura tack ka address</h2>
                        <h2 className='pc:text-xl tab:text-sm text-[9px]  '> IIT (BHU) Varanasi. India PIN: 221005
                        </h2>
                    </div >
                    <div className="link col-start-3 text-white tab:gap-7 laptop:gap-10 gap-4 flex flex-col">
                        <h1 className='pc:text-3xl laptop:text-2xl tab:text-xl  text-sm'>Socials</h1>
                        <div className="grid laptop:gap-6 gap-4 flex-col text-white">
                            <div className="insta grid items-center align-middle">
                                <div className="imgpart relative ">
                                 <img src={insta} className=' z-10 absolute top-[-4px] left-[-4px] laptop:w-[40px] tab:w-[30px]  w-[24px]' alt="" /></div>
                                <h2 className="laptop:text-xl tab:text-lg pc:text-2xl laptop:pl-16  pl-10 text-[9px]">Instagram</h2>
                            </div>
                            <div className="insta grid items-center align-middle">
                                <div className="imgpart relative ">
                                  <img src={facebook} className=' z-10 absolute top-[-4.9px] pc:w-[50px]  left-[-4.9px] laptop:w-[40px] tab:w-[30px] w-[24px] ' alt="" /></div>
                                <h2 className="laptop:text-xl tab:text-lg pc:text-2xl laptop:pl-16  pl-10 text-[9px] ">Facebook</h2>
                            </div>
                            <div className="insta grid items-center align-middle">
                                <div className="imgpart relative ">
                                    <img src={linkedin} className=' z-10 absolute top-[-4px] left-[-4px]  laptop:w-[40px] tab:w-[30px] w-[24px]' alt="" /></div>
                                <h2 className="laptop:text-xl tab:text-lg pc:text-2xl laptop:pl-16  pl-10 text-[9px] ">Linkedin</h2>
                            </div>
                            <div className="insta grid items-center align-middle">
                                <div className="imgpart relative ">
                             <img src={mail} className=' z-10 absolute  pc:w-[30px] pc:left-[5px] pc:top-[5px] laptop:w-[30px] tab:w-[30px] w-[20px] ' alt="" /></div>
                                <h2 className="laptop:text-xl tab:text-lg pc:text-2xl  laptop:pl-16  pl-10 text-[9px] ">E-mail</h2>
                            </div>
                        </div>
                    </div>
               
                <div className="uptodate col-start-4 flex flex-col gap-[20%]">
<h1 className="pc:text-3xl laptop:text-2xl text-sm text-white">Stay up to date</h1>
<input type="email" placeholder='Your email address' className='bg-[#494849] laptop:lg pc:text-2xl py-1 text-[9px] px-2 rounded-2xl' />
                </div> </div>
            </div>
        </div>
    )
}

export default Footer
