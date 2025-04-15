import React from 'react'
import { zonesData } from '../config'
import { ArrowRight } from "lucide-react"

function BannerCards() {
    return (
        <>
            <div className='z-10 lg:flex hidden w-full absolute bottom-0'>
                {zonesData.map((item) =>
                    <div className={`${item?.bgColor} w-full p-5 flex flex-col justify-between gap-10 transform translate-y-[46%] hover:translate-y-0  transition-all duration-400`}>
                        <div>
                            <div className='flex gap-4 items-center'>
                                <figure className='w-[30px] h-[30px]'>
                                    <img src={item?.image} className='w-full h-full' alt={item?.name} />
                                </figure>
                                <span className='font-bold text-3xl'>{item?.name}</span>
                            </div>
                            <p>{item?.tagline}</p>
                        </div>
                        <button className='flex px-6 py-3 cursor-pointer rounded bg-[rgb(3,113,230)] text-white w-full'>
                            <span className='text-[16px]'>View All {item?.activities} Activities</span>
                            <span><ArrowRight /></span>
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}

export default BannerCards
