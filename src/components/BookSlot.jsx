import React from 'react'
import { infoCards } from '../config'

function BookSlot() {
    return (
        <section className='flex justify-center w-full bg-black text-white py-10 lg:py-20'>
            <div className='max-w-[1080px] mx-5 w-full flex flex-col gap-5'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold mb-5'>Book your slots</h1>
                    <p>To find special offers, occupancy rates and free time</p>
                </div>
                <div className='flex lg:flex-row flex-col gap-2 text-gray-400 lg:gap-6'>
                    <div className='flex-1'>
                        <input type="date"  className='w-full text-black p-3 bg-[rgb(237,255,179)]' />
                    </div>
                    <p className='flex-1  font-semibold'>Average wait time 5-10mins ,<br />
                        pre booking activities is recommended</p>
                </div>
                <div className='flex justify-between lg:flex-row flex-col lg:gap-0 gap-8'>
                    <h1 className='border-white lg:border-r  text-[18px] font-bold pr-10'>
                        PLAN YOUR <br className='hidden lg:block'/> DAY AT PLAY
                    </h1>
                    <div className='flex flex-1 lg:justify-around  flex-wrap'>
                    {
                        infoCards?.map((item, id) =>
                            <div key={id} className='lg:w-fit w-1/2 mb-5 lg:mb-0' >
                                <div className='flex justify-start items-center gap-3 text-[rgb(237,255,179)] text-[16px]'>
                                    <figure>
                                        <img src={item?.image} />
                                    </figure>
                                    <span>{item?.title}</span>
                                </div>
                                <p className='text-[16px] leading-relaxed'>{item?.time}</p>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookSlot
