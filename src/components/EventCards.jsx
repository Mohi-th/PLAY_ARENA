import React from 'react'
import { events } from '../config'
import { ArrowRight } from 'lucide-react'

function EventCards() {
    return (
        <div className='flex lg:flex-row flex-col w-full gap-15 justify-between'>
            {
                events?.map((item) =>
                    <div key={item?.id} className='min-w-0 lg:max-w-[305px] justify-between flex flex-col lg:min-h-[510px] max-h-[510px]'>
                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex lg:justify-between items-center gap-4'>
                                    <figure className='lg:h-[50px] h-[34px] '>
                                        <img src={item?.icon} className='h-full' />
                                    </figure>
                                    <p className='text-3xl'>{item?.title}</p>
                                </div>
                                <ArrowRight className='lg:hidden' />
                            </div>

                            <div>
                                <figure className='lg:w-[303px] w-full h-[150px] border-t-2'>
                                    <img src={item?.image} className='w-full h-full object-cover' />
                                </figure>
                                <p className=''>{item?.description}</p>
                            </div>
                        </div>
                        <button className='lg:flex hidden
                         cursor-pointer justify-between w-full max-w-3/4 border rounded-md px-5 py-4'>
                            Find out more
                            <ArrowRight />
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default EventCards
