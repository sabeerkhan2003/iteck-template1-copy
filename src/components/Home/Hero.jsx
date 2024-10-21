import React from 'react'
import img from '../../assets/head.png'
import bg from '../../assets/head_shape_l.png'
import bg_1 from '../../assets/head_shape_r.png'
import { FiPlayCircle } from 'react-icons/fi'
import { MdOutlinePlayArrow } from 'react-icons/md'

function Hero() {
    return (
        <div className='flex justify-evenly gap-[22%] lg:gap-[15%] lg:mt-20 ' >
        <div className='flex  bg-no-repeat bg-cover bg-center  mt-10  lg:flex lg:left-0  ' style={{
            backgroundImage: `url(${bg},)`
            ,backgroundSize:"750px"
        }}>

            <div className='  flex relative flex-col lg:left-[20%] '>
                <img src={bg} className='object-cover w-100% lg:w-[50%] absolute -left-[20%] top-40 h-50 lg:top-10' style={{backgroundSize:"70px 70px"}} alt="" />
                <h6 className=' text-[13px] text-primary pl-3 tracking-wider font-inter '>ITECK AGENCY</h6>
                <h2 className=' text-[55px] text-[#212529] lg:w-[450px] pl-2'><b className=' '>Technology & IT</b><p >Solutions</p></h2>
                <br></br>
                <div className=' lg:w-[340px] text-gray tracking-wide text-xs p-4 ml-1 mb-9 h-24 font-inter font-medium leading-loose'>We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.</div>
                <div>
                </div>
                <div className='flex gap-5 pl-4'>
                    <div>

                        <button className='text-[16px] border-2 rounded-md inline bg-[#212529] text-white py-3  px-6'>Our Services</button>
                    </div>
                    <div className='flex gap-2 items-center '> <MdOutlinePlayArrow className='  bg-primary text-xl size-[35px] rounded-full  text-white' /><span className='text-primary w-2 text-[12px] tracking-wide'>Iteck’s
                        Showreels</span>
                    </div>
                </div>
            </div>

           
        </div>
         <div className=' hidden lg:inline-block lg:bg-cover lg:bg-center lg:h-[100%] lg:w-[100%]'  style={{
            backgroundImage: `url(${bg_1})`,}}>
                <img className='  lg:w-[60%] h-[60%] lg:relative lg:left-[25%]  ' src={img} alt=''></img>
            </div></div> 
    )
}

export default Hero