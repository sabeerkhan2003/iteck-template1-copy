import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../assets/project/1.jpeg";
import img2 from "../../assets/project/2.png";
import img3 from "../../assets/project/3.jpeg";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="absolute left-10 z-10 p-2 text-white bg-blue-500 rounded-full focus:outline-none hidden lg:block"
      style={{ top: '50%', transform: 'translateY(-50%)' }} 
    >
      ◀
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="absolute lg:right-4 z-10 p-2 text-white bg-blue-500 rounded-full focus:outline-none hidden lg:block"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      ▶
    </button>
  );
};

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    
    handleResize();

 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const imgSrcs = [img1, img2, img3, img2];
  const titles = ['Infrastructure upgrade', 'Project 2', 'Project 3', 'Project 4'];
  const categories = ['IT Consultation', 'IT Consultation', 'IT Consultation', 'IT Consultation'];
  const descriptions = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  ];
  const tags = [
    ['Consultation', 'IT management'],
    ['Consultation', 'IT management'],
    ['Consultation', 'IT management'],
    ['Consultation', 'IT management']
  ];

  return (
    <div className='pt-14 mt-36 bg-[rgb(238,244,248)] lg:mt-0 relative  lg:pb-12 lg:pr-9'>
      <div className='pl-4 lg:pl-32 '>
        <h6 className='text-[#0066FF] text-[13px] mb-2  '>PORTFOLIO</h6>
        <h2 className='text-[25px] tracking-wider mb-3'>
          <b>Latest Projects </b><br className='lg:hidden'></br>
          <span className='font-normal'>From Our Team</span>
        </h2>
      </div>

      
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        customLeftArrow={!isMobile && <CustomLeftArrow />}  
        customRightArrow={!isMobile && <CustomRightArrow />} // Hide arrows on small screens
        showDots={isMobile} // Show dots only on small screens
      >
        {titles.map((title, index) => (
          <div key={index}>
            <div className='flex flex-col justify-center gap-3 border-spacing-2 bg-[#FFFFFF] border-2 m-4 lg:m-0  rounded-lg overflow-hidden lg:mx-14 lg:w-[340px] '>
              <img className='size-[100%] rounded-t-lg lg:h-[210px]' src={imgSrcs[index]} alt={title} />
              <div className='pl-4 pb-3 '>
                <a className='text-[20px] font-bold block lg:'>{title}</a>
                <a className='text-[#0066FF] text-[13px] font-inter'>{categories[index]}</a>
                <div className='text-[14px] text-[#666666] leading-7 m-1'>{descriptions[index]}</div>
                <div className='mt-[5%] text-[11px] flex gap-1'>
                  {tags[index].map((tag, idx) => (
                    <a key={idx} className='border-2 bg-[#EEF4F8] px-2 py-1 border-none'>{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
