import React from 'react'
import logo from '../../assets/footer/logo_cl.png'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdPhonePortrait } from 'react-icons/io';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    const list1 = ["IT Consultations",
        "Data Security", ,
        "Website Development",
        "UI / UX Design",
        "Cloud Services",
        "Game Development",
        "CRM & Software"]

    const list2=["About Iteck",
        "Investors",
        "Blog",
        "Career",
        "Contact",
        "Affiliate Program",
        "How It Works",
        "Pricing Plan",
        "Covid-19 Update"]

    

    return (
        <div className='bg-black px-4 text-white p-6 lg:px-16 py-16 '>
            <div className='lg:flex lg:flex-row lg:justify-center '>
                <div>
            <img src={logo} className='w-40 lg:w-44 lg:h-10.5  lg:mt-3 '></img>
            <div className='text-[14px] mt-7 lg:w-2/3  '>Best IT Solutions & Technology WordPress
                Theme for Your Busines</div>
            <div className='flex flex-col gap-3 my-5'>
                <div className='flex items-center text-[13px] text-[#A3A0A0] gap-3'>
                    <IoHomeOutline className='text-blue-800' />
                    <span>58 Howard St, San Francisco, CA 941</span>
                </div>
                <div className='flex items-center text-[13px] text-[#A3A0A0] gap-3'>
                    <HiOutlineMailOpen className='text-blue-800' />
                    <span>contact@Iteck.co</span>
                </div>
                <div className='flex items-center text-[13px] text-[#A3A0A0] gap-3'>
                    <IoMdPhonePortrait className='text-blue-800' />
                    <span>(+23) 5535 68 68</span>
                </div>
                <div className='flex gap-3 lg:my-4 '><FaTwitter className='bg-gray rounded-full w-6 h-6 p-1' /><FaFacebookF className='bg-gray rounded-full w-6 h-6 p-1' /><FaLinkedinIn className='bg-gray rounded-full w-6 h-6 p-1' /><FaGithub className='bg-gray rounded-full w-6 h-6 p-1' /></div>
                </div>
                </div>
            
            

            <div className='lg:flex md:flex md:gap-16  '>
            <div>
                <h6 className='text-[16px] mt-3'>Services</h6>
                <div className='flex flex-col gap-1 mt-2'>
                    {list1.map((item,index)=>(
                        <a className='text-[13px] text-[#AAA7A7] ' key={index} href="#">{item}</a>
                )) }</div>
            </div>
            <div>
                <h6 className='text-[16px] mt-3'>Information</h6>
                <div className='flex flex-col gap-1 mt-2'>
                    {list2.map((item,index)=>(
                        <a className='text-[13px] text-[#AAA7A7] ' key={index} href="#">{item}</a>
                )) }</div>
            </div>
            <div className='flex flex-col gap-2 lg:gap-4'>
                <h6 className='text-[16px] mt-3'>Newsletter</h6>
                <a className='text-[13px] text-[#AAA7A7] ' >Register now to get latest updates on promotions & coupons.</a>
                <div className='flex gap-1'>
                    <input placeholder='Enter your mail' className='text-[13px] placeholder:text-[#FFFFFF] bg-[#1F1F1F] px-3 w-full lg:w-fit md:w-1/2' /><button style={{background: "linear-gradient(174deg, rgba(14,57,123,1) 0%, rgba(0,102,255,1) 51%, rgba(44,157,227,1) 100%)"}}
 className='px-4 py-2'><span className='text-[14px]'>Subscribe</span></button>
                </div>
                <p className='text-[13px] text-[#AAA7A7] font-serif'>By subscribing, you accepted the our <a>Policy</a></p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer