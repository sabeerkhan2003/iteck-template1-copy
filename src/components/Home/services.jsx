import React from 'react';
import ser1 from "../../assets/services1.png";
import ser2 from "../../assets/services2.png";
import ser3 from "../../assets/services3.png";
import ser4 from "../../assets/services4.png";
import ser5 from "../../assets/services5.png";
import ser6 from "../../assets/services6.png";

const servicesData = [
  { title: "IT Consultation", img: ser1, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." },
  { title: "Data Security", img: ser2, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." },
  { title: "Website Development", img: ser3, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." },
  { title: "UI/UX Design", img: ser4, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." },
  { title: "Cloud Services", img: ser5, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." },
  { title: "Game Development", img: ser6, description: "Trust our top minds to eliminate workflow pain points, implement new tech & app." }
];

function Services() {
  return (
    <>
      <div className='m-[5%]'>
        <h6 className='text-primary text-[13px] tracking-wider'>OUR SERVICES</h6>
        <h2 className='text-[25px] font-inter tracking-wider mr-[10%]'>
          <b className='mr-[3%]'>Perfect IT Solutions </b>
          <span className='tracking-widest font-extralight w-[100%]'>For Your Business</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[5%] m-[5%]'>
        {servicesData.map((service, index) => (
          <div key={index} className='border-2 p-6 border-none'>
            <div className='flex justify-between items-center'>
              <a className='text-[20px] text-[#000000] font-bold'>{service.title}</a>
              <span className='text-[12px] text-primary'>{`0${index + 1}`}</span>
            </div>
            <img className='w-16 pt-8 pb-8 ' src={service.img} alt={service.title} />
            <p className='text-[13px] text-[#666666] tracking-wide leading-6'>{service.description}</p>
            <div className='mt-[10%] text-[11px] flex gap-1'>
              <a className='border-2 bg-[#EEF4F8] px-2 py-1 border-none'>Strategy</a>
              <a className='border-2 bg-[#EEF4F8] px-1 py-1 border-none'>Consultation</a>
              <a className='border-2 bg-[#EEF4F8] px-1 py-1 border-none'>Management</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



export default Services;
