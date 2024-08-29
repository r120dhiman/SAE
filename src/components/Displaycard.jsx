import React from 'react'
import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import card5 from "../images/card5.png"
import card6 from "../images/card6.png"

const Displaycard = () => {
   
    return (
        <div className='bg-gradient-to-t from-[rgb(31,30,31)] to-[#F4F4F4] flex flex-col align-middle items-center py-20 justify-center'>
            <h1 className=' laptop:text-[45px] pc:text-[60px] tab:text-[40px] text-[35px] font-semibold'>Benifts of Contribution</h1>
          <div className="phoneh:grid flex flex-wrap grid-cols-3 grid-rows-2 gap-y-2  phoneh:gap-x-2 tab:h-[550px] pc:h-[850px] laptop:w-[80%] tab:w-[85%] w-[80%] p-2 pc:w-[70%] phoneh:w-[95%] justify-items-center bg-white rounded-2xl tab:p-5 laptop:p-12">
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card1} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12 '/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16 '>Exposure</h1>
                <p className='laptop:text-[13px]  pc:text-xl tab:text-[12px] phoneh:text-[10px]'>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
            </div>
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card2} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12'/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16 pt-2'>R&D and Innovation</h1>
                <p className='laptop:text-[13px] pc:text-xl tab:text-[12px] phoneh:text-[10px]'>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
            </div>
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card3} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12'/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16 '>Networking</h1>
                <p className='laptop:text-[13px] pc:text-xl tab:text-[12px] phoneh:text-[10px]'>Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
            </div>
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card4} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12'/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16'>Enhancing Projects and education</h1>
                <p className='laptop:text-[13px] pc:text-xl tab:text-[12px] phoneh:text-[10px]'>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
            </div>
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card5} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12'/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16'>Opportunities</h1>
                <p className='laptop:text-[13px] pc:text-xl tab:text-[12px] phoneh:text-[10px]'>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
            </div>
            <div className="card flex flex-col text-center justify-center items-center pc:w-60 laptop:w-44 ">
                <img src={card6} alt=""  className='pc:h-44 pc:w-44 laptop:h-36 tab:h-28 phoneh:h-24 h-12'/>
                <h1 className='laptop:text-xl cpc1:text-2xl font-bold h-16'>Practical Applications</h1>
                <p className='laptop:text-[13px] pc:text-xl tab:text-[12px] phoneh:text-[10px]'>We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
            </div>
            
          </div>
        </div>
    )
}

export default Displaycard
