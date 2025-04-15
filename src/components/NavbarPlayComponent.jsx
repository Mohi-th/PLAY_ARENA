import React from 'react';
import { zonesActivities } from '../config';

function PlayComponent({ isOpen }) {
    return (
        <ul className={`lg:absolute top-full lg:left-[15px] lg:z-10 lg:flex grid grid-cols-2 cursor-pointer bg-gray-50 shadow-sm text-black 
                transform origin-top transition-all duration-300 ease-in-out ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
        >
            {
                zonesActivities?.map((item, idx) => (
                    <li key={idx}>
                        <div className={`${item?.bgColor} flex justify-between font-[700] px-[22px] lg:py-[20px] py-3`}>
                            <p className='text-[16px]'>{item?.title}</p>
                            <figure className='h-[20px] w-[20px] ml-[50px]'>
                                <img src={item?.image} className='h-full w-full' alt="icon" />
                            </figure>
                        </div>
                        <ul className='flex flex-col gap-2 text-[12px] px-[22px] py-[26px] tracking-wide'>
                            {
                                item?.items.map((activity, i) => (
                                    <li key={i} className='hover:text-[rgb(0,123,254)]'>
                                        {activity}
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    );
}

export default PlayComponent;
