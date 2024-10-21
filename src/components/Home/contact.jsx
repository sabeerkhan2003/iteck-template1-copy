import React from 'react'

const datas = ["name*", "Email Address*", "Your Inquiry About*"]

function Contact() {
    return (
        <div style={{ background: "linear-gradient(174deg, rgba(14,57,123,1) 0%, rgba(0,102,255,1) 51%, rgba(44,157,227,1) 100%)" }} className='text-[#FFFFFF] h-auto'>
            <div className='flex flex-col justify-center gap-3 pt-20 '>
                <h6 className='text-center text-[13px] tracking-widest'>CONTACT US</h6>
                <h2 className='text-center text-[25px] lg:text-[32px] font-bold'>Request Free <br className='lg:hidden'></br><span className='font-normal'>Consultancy</span></h2>
            </div>

            <div className='lg:flex  md:flex md:flex-row md:justify-around lg:justify-around lg:gap-20 lg:h-[450px] xl:items-start lg:mt-5 '>
                <div className='xl:text-sm lg:mt-5'>
                    <div className='text-[#FFFFFF] mx-4'>
                        <div className='lg:flex mt-6 lg:flex-col  lg:gap-2 xl:flex xl:flex-col'>
                            <p className='text-[13px]'>Hotline 24/7</p>
                            <h1 className='text-[21px]'>(+91) XXXXX XXXXX</h1>
                        </div>
                        <br></br>
                    </div>
                    <table className='mx-4 flex flex-col gap-1 text-[13px] lg:my-7 '>
                        <tr><td className='font-semibold'>Address : </td><td>XXXX XXXXX XXXX XXXXXX</td></tr>
                        <tr><td className='font-semibold'>Email :</td><td>Contact@thirdvizion.com</td></tr>
                        <tr><td className='font-semibold'>Fax :</td><td>Faxt@thirdvizion.com</td></tr>
                        <tr><td className='font-semibold'>Work Hour :</td><td>Mon-Sat: 9:00 - 18:00</td></tr>

                    </table>
                    <a href='#' className='text-[13px] underline xl:text-base lg:mx-4 mx-4'>Get Direction</a>
                </div>

                <form className='mt-4 mx-4  xl:mt-9 xl:text-sm w-fit lg:w-[38%] md:h-96 h-[410px] '>
                    <ul className='flex flex-col gap-4 lg:flex lg:flex-col lg:gap-3 xl:flex xl:justify-center '>
                        <div className='lg:flex lg:flex-row lg:gap-2 md:flex md:gap-2 w-full flex flex-col gap-4 '>
                            {datas.slice(0, 2).map((item, index) => (
                                <li key={index} className='w-full lg:w-1/2 '>
                                    <input
                                        className='px-3 py-3 lg:py-4 rounded-sm text-xs  w-full xl:text-[13px] '
                                        placeholder={item}
                                    />
                                </li>
                            ))}
                        </div>
                        {datas.slice(2).map((item, index) => (
                            <li key={index + 2} className='w-full '>
                                <input
                                    className='px-3 py-3  rounded-sm text-xs w-full xl:text-sm '
                                    placeholder={item}
                                />
                            </li>
                        ))}
                    </ul>

                    <textarea placeholder='write you inquiry here' className=' pb-16 pr-4 pt-2 pl-2 w-full my-5 lg:my-3 rounded-lg text-xs xl:text-sm' />
                    <div className='flex gap-2'>
                        <input type='checkbox' className='' />
                        <label className='text-[#F8F9FA] text-[13px]'>By submitting, i’m agreed to the <a className='underline'>Terms & Conditons</a></label>
                    </div>
                    <input type='submit' value='Request Now' className='border-2 bg-[#212529] px-6 py-3 border-none text-[#FFFFFF] mt-4 rounded-sm text-[13px] ' />
                </form>
            </div>
        </div>
    )
}

export default Contact