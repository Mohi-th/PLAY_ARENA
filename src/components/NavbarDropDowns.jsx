import { ChevronRight } from 'lucide-react';
import React from 'react';

function NavbarDropDowns({ menuItems, isOpen }) {
  return (
    <div
      className={`
        w-full
        lg:absolute top-full left-[15px] z-50 transform origin-top
        transition-all duration-300 ease-in-out
        lg:w-[250px] bg-white border border-black text-black shadow-lg
        flex flex-col gap-0.5
        ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
      `}
    >
      {
        menuItems?.map((item, index) => (
          <div key={index} className='bg-[#f1f1f1] p-4'>
            <div className='flex justify-between items-center'>
              <h1>{item?.title}</h1>
              <ChevronRight />
            </div>
            <p className='text-[13px] font-medium tracking-wide leading-[19px]'>{item?.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default NavbarDropDowns;
