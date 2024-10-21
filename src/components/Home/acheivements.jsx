import React from 'react'
import a1 from "../../assets/ACH1.png"
import a2 from "../../assets/ACH2.png"
import a3 from "../../assets/ACH3.png"
import a4 from "../../assets/ACH4.png"
import a5 from "../../assets/ACH5.png"

function Acheivements() {
  return (
    <>
      <div className='m-4 lg:m-28 bg-gradient-to-r from-blue-600 to-[#049efd] via-blue-600  border-2 rounded-md border-none lg:pr-2 brd-light'>
      <div className=' lg:p-0  lg:m-[0] flex m-[5%]  items-center lg:pl-[7%]  pt-8 lg:pt-10 '>
            <a className='border-2 border-yellow-600 lg:border-none p-[2%] lg:p-[1.3%] border-dashed border-spacing-[3px] lg:w-[100%]  ' href='#'><img src={a1}></img></a>
            <div className='border-2  border-yellow-600 lg:invisible border-dashed border-spacing-[2px] w-[50%] h-[18px] text-[18px] flex justify-center items-center text-yellow-600 hidden lg:block lg:w-[110px] lg:h-[41px] lg:text-[2.5em] lg:flex'>////////</div>
            <a className='border-2 border-yellow-600 lg:border-none p-[0.3%] lg:p-[0.5%] border-dashed border-spacing-[3px] lg:w-[100%]' href='#'><img src={a2}></img></a>
            <div className='border-2  border-yellow-600 lg:invisible border-dashed border-spacing-[2px] w-[50%] h-[18px] text-[18px] flex justify-center items-center text-yellow-600 hidden lg:block lg:w-[110px] lg:h-[40px] lg:text-[2.5em] lg:flex'>////////</div>
            <a className='border-2 border-yellow-600 lg:border-none p-[1.5%] lg:p-[0.6%] border-dashed border-spacing-[3px] lg:w-[100%]' href='#'><img src={a3}></img></a>
            <div className='border-2  border-yellow-600 lg:invisible border-dashed border-spacing-[2px] w-[50%] h-[18px] text-[18px] flex justify-center items-center text-yellow-600 hidden lg:block lg:w-[110px] lg:h-[41px] lg:text-[2.5em] lg:flex'>////////</div>
            <a className='border-2 border-yellow-600 lg:border-none p-[1.2%] lg:p-[1%] border-dashed border-spacing-[3px] lg:w-[100%]' href='#'><img src={a4}></img></a>
            <div className='border-2  border-yellow-600 lg:invisible border-dashed border-spacing-[2px] w-[50%] h-[18px] text-[18px] flex justify-center items-center text-yellow-600 hidden lg:block lg:w-[110px] lg:h-[40px] lg:text-[2.5em] lg:flex'>////////</div>
            <a className='border-2 border-yellow-600 lg:border-none p-[1.6%] lg:p-[1%] border-dashed border-spacing-[3px] lg:w-[100%]' href='#'><img src={a5}></img></a>
            <div className='border-2  border-yellow-600 lg:invisible border-dashed border-spacing-[2px] w-[50%] h-[18px] text-[18px] flex justify-center items-center text-yellow-600 hidden lg:block lg:w-[110px] lg:h-[40px] lg:text-[2.5em] lg:flex'>////////</div>
        </div>

        <hr className='m-[4%] w-[90%] lg:w-[85%] lg:ml-[7%] text-[#FFFF] lg:relative bottom-5'></hr>
        <div className='lg:flex justify-center lg:pl-[9%] '>
          <div className='lg:flex lg:flex-col gap-12 '>
            <h3 className='text-[30px] font-inter text-[#FFFF] m-[10%] font-bold lg:m-0' >“Technology is best when it brings people together.”</h3>
            <small className='text-[11px]  text-[#FFFF] ml-[10%] font-bold lg:ml-[0]'>Patricia Cross</small>
          </div>
          <div className='lg:ml-16 lg:mr-24 lg:mt-2 lg:flex lg:flex-col gap-2'>
            <h6 className='text-[14px]  text-[#FFFF] m-[10%] font-bold lg:mt-[0%]'>We can help to maintain and modernize your IT infrastructure & solve various infrastructure-specific issues a business may face.</h6>
            <h6 className='text-[14px] text-[#C7E9FF] m-[10%] lg:mt-[0%]'>Itck Co is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</h6>
            <button className='border-2 rounded-md px-2 py-1 border-[#F8F9FA] m-[10%] lg:w-fit lg:px-7 lg:m-[0] lg:ml-16' ><span className='text-[12px] text-[#F8F9FA]'>More About Us</span></button>
          </div>
        </div>
        <div className='mt-[20%] flex flex-col gap-2 items-center pb-[10%] lg:mt-16 lg:flex-row lg:w-fit lg:pl-[7%]' >
          <div className=' border-2 border-gray  flex items-center w-[90%] p-1 lg:pl-5 lg:w-[70%] lg:border-none'>
            <span className='text-[32px] text-[#ffff] px-5 py-2 lg:py-0 lg:px-2 lg:w-24 font-semibold' >20 +</span>
            <div className='text-[14px] font-semibold text-[#ffff]  py-2 lg:px-0'>Years of Experiencs</div>
          </div>
          <div className=' border-2 border-gray  flex items-center w-[90%] p-1 lg:pl-5 lg:w-[70%] lg:border-none'>
            <span className='text-[32px] font-semibold text-[#ffff] px-5 py-2 lg:py-0 lg:px-0 lg:w-24'>15 K</span>
            <div className='text-[14px] font-semibold text-[#ffff]  py-2'>Projects completed</div>
          </div>
          <div className=' border-2 border-gray  flex items-center w-[90%] p-1 lg:pl-5 lg:w-[70%] lg:border-none'>
            <span className='text-[32px] font-semibold text-[#ffff] px-5 py-2'>240</span>
            <div className='text-[14px] font-semibold text-[#ffff]  py-2 lg:py-0 lg:px-0 lg:w-24'>Awards acheived</div>
          </div>
          <div className=' border-2 border-gray  flex items-center w-[90%] p-1 lg:pl-5 lg:w-[70%] lg:border-none'>
            <span className='text-[32px] font-semibold text-[#ffff] px-5 py-2'>180</span>
            <div className='text-[14px] font-semibold text-[#ffff]  py-2 lg:py-0 lg:px-0 lg:w-24'>Satisfied clients on 24 countries</div>
          </div>
        </div>


      </div>

    </>
  )
}
export default Acheivements