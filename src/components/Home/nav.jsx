import React, { useState } from 'react';
import pic from '../../assets/logo_cd.png';
import { FaAngleDown, FaPhoneAlt } from "react-icons/fa";
import { CiMenuBurger, CiSearch } from 'react-icons/ci';
import { IoMdCart } from 'react-icons/io';

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(null); 
  const [menubar, setmenubar] = useState(false); 

  const pages = [
    { name: "Home" ,subPages:"sabeer"},
    { name: "Pages",subPages:"khan" },
    { name: "Portfolio" },
    { name: "Blog" },
    { name: "Contacts" },
  ];

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleMenuBar = () => {
    setmenubar(!menubar);
  };

  return (
    <nav className='flex justify-center gap-[5%] lg:gap-[%] lg:h-28 items-center text-secondary h-24 z-20 bg-white  lg:px-12   lg:ml-0  top-0 sticky '>
      {/* Logo and Hamburger Menu for Mobile */}
      <div className='flex items-center justify-between  w-full xl:w-fit lg:h-auto ' >
        <img className=" h-8 lg:w-full pl-10 lg:pl-3 lg:h-full xl:w-[100%] lg:object-contain" src={pic} alt='logo' />
        <div className='lg:hidden mr-5 lg:mr-0'>
          <CiMenuBurger className='text-3xl cursor-pointer text-primary' onClick={handleMenuBar} />
        </div>
        </div>

      {/* Mobile Menu (Hamburger) */}
      <div className={`fixed z-10 left-0 h-full w-[250px]  bg-white transition-all duration-300 ease-in-out ${menubar ? 'top-20' : '-top-full'}`}>
        <ul className='flex flex-col gap-8 p-6 text-black'>
          {pages.map((item, index) => (
            <li key={item.name} className='nav-item'>
              <a href='#' className='flex items-center'>
                {item.name}
                {item.subPages && <FaAngleDown className="ml-1" />} {/* Dropdown Icon */}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Full Menu for Larger Screens */}
      <ul className='hidden lg:flex gap-8 items-center text-[14px] text-primary'>
        {pages.map((item, index) => (
          <li
            key={item.name}
            className='nav-item relative text-[12px] font-semibold'
            onMouseEnter={() => item.subPages && handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href='#' className='flex items-center'>
              {item.name}
              {item.subPages && <FaAngleDown className="ml-1" />} {/* Dropdown Icon */}
            </a>
            {/* Dropdown for Larger Screens */}
            {item.subPages && dropdownOpen === index && (
              <ul className='absolute top-full left-0 bg-white shadow-lg p-2'>
                {item.subPages.map((subItem) => (
                  <li key={subItem} className="hover:bg-gray-100 p-1">
                    <a href='#'>{subItem}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Contact and Icons Section (Visible on Larger Screens) */}
      <div className='hidden lg:flex gap-5 items-center'>
        <div className='flex items-center gap-4'>
          <a href="#">
            <div className=' rounded-full h-10 w-10 flex items-center justify-center ' style={{
            background: "linear-gradient(60deg, rgba(0,102,255,1) 9%, rgba(4,158,253,1) 69%, rgba(0,102,255,1) 100%)",
          }}>
              <FaPhoneAlt className='text-white text-xl' />
            </div>
          </a>
          <div>
            <p className='text-gray text-[13px]'>Hotline 24/7</p>
            <p className='text-m font-bold text-[14px] text-primary'>(+91 xxxxx xxxxx)</p>
          </div>
        </div>
        <span className="border-l border-black h-5 inline-block mx-4"></span>

        <div className='flex items-center gap-4'>
          <CiSearch className='w-5 h-5 cursor-pointer' />
          <IoMdCart className='w-5 h-5 cursor-pointer' />
          <button className='border-2 text-white py-2 px-4 rounded-lg text-[13px]' style={{
            background: "linear-gradient(60deg, rgba(0,102,255,1) 9%, rgba(4,158,253,1) 69%, rgba(0,102,255,1) 100%)",
          }}>Free Quote</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
