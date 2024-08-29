import React from 'react'
import img3 from "../images/img3.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img1 from "../images/img1.png"

const Advancing = () => {
    return (
        <div className="header tab:h-[500px] laptop:h-[600px] h-[400px] bg-[#1b1a1b] flex justify-center font-popins">
            <div className="grid   phoneh:w-[90%] h-[95%] grid-cols-3 grid-rows-4 px-7  py-10  text-white">
                <div className="relative col-start-1 col-end-6 row-start-1 row-end-6  m-[15px] phoneh:m-[30px] phoneh:top-[30px] left-[5px] z-[100] bg-center rounded-3xl">
                    <img src={img1} className='absloute z-10 phoneh:h-[70%]  tab:h-[78%] h-[120%] laptop:h-[85%] object-cover w-full rounded-3xl' alt="" />
                    <div className="w-full phoneh:h-[70%]  tab:h-[78%] h-[120%] laptop:h-[85%] rounded-3xl  absolute top-0 flex flex-col justify-center items-center bg-gradient-to-l from-[rgba(130,52,23,0.8)] to-[rgba(0,0,0,0.8)]">
                        <div className="head pc1:text-3xl laptop:text-2xl tab:text-xl phoneh:text-lg text-sm w-[80%] self-center  font-morebold mt-[2.75rem] ">
                            <span>Advancing &nbsp;</span>
                            <span className="bg-[#e25421]  text-transparent bg-clip-text">Innovation &nbsp;</span>
                            <span>with the technology</span> 
                        </div>
                        <div className="flex below pc1:px-20 phoneh:flex-row flex-col items-center  laptop:px-12 tab:px-8 pt-0 phoneh:pt-10 h-[80%] gap-5 pc:gap-20 pc1:gap-32 pc1:w-[80%] pc:[85%] w-[95%]  justify-center phoneh:justify-end">
                            <p className='pc1:text-xl w-[80%] laptop:text-lg  phoneh:text-sm flex pc1:py-5 laptop:py-4  text-[9px]'>The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of Science and Technology among the IIT BHU community. </p>
                            <img src={img3} className=' pc1:h-48 laptop:h-40 tab:h-28 phoneh:h-24 h-[20%]' alt="" />
                        </div>
                    </div>
                </div>
                <img
                    src={img3}
                    alt=""
                    className="col-start-3 relative  row-start-1 tab:right-6 pc1:left-28  h-[150px]"
                />
                <img
                    src={img5}
                    alt=""
                    className="col-start-3 row-start-4 top-12 phoneh:top-0  laptop:left-0 laptop:bottom-5 tab:right-11 tab:bottom-7 pc1:left-20 relative h-20 phoneh:h-40 self-end"
                />
                <img
                    src={img6}
                    alt=""
                    className="col-start-1 relative  top-5 phoneh:top-0  tab:left-7 laptop:bottom-16 tab:bottom-24 pc1:bottom-20 pc1:left-6 h-20 phoneh:h-40 row-start-4"
                />
            </div></div>
    )
}

export default Advancing
