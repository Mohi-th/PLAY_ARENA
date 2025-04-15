import React, { useEffect, useState } from 'react'
import { partyIcons, zonesData } from '../config'
import { ArrowRight } from 'lucide-react'

function MobileViewCards() {

    const [displayCard, setDisplayCard] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setDisplayCard(prev => (prev + 1) % zonesData.length);
        }, 4000); 
    
        return () => clearInterval(interval);
      }, []);

    return (
        <section className='lg:hidden'>
            <div className='flex justify-between p-4.5 bg-black'>
                {
                    partyIcons?.map((icon, index) =>
                        <button onClick={()=>{setDisplayCard(index)}} className={`p-3 ${index===displayCard?zonesData[index]?.bgColor:"bg-gray-200"} rounded-xl`}>
                            <img className='w-[20px] h-[20px] text-red-800' src={icon} />
                        </button>
                    )
                }
            </div>
            <div>
                <div className='z-10 lg:hidden w-full'>
                    {zonesData.map((item, index) =>
                        <div className={`${item?.bgColor} ${displayCard === index ? "flex" : "hidden"} w-full p-5  flex-col justify-between gap-6`}>
                            <div>
                                <div className='flex flex-col justify-start gap-4 items-start'>
                                    <span className='font-bold text-4xl'>{item?.name}</span>
                                    <p>{item?.tagline}</p>
                                </div>
                            </div>
                            <button className='flex justify-between cursor-pointer px-6 py-3 rounded-[8px] font-semibold bg-[rgb(3,113,230)] max-w-[374px] text-white w-full'>
                                <span className='text-[16px]'>View All {item?.activities} Activities</span>
                                <span className='rounded-full text-[rgb(3,113,230)] bg-white flex items-center'>
                                    <ArrowRight className='h-[17px]' />
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MobileViewCards
