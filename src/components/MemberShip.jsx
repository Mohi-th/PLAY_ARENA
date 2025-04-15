import React from 'react'
import { membershipSection } from '../config'
import { ArrowRight } from 'lucide-react'

function MemberShip() {
    return (
        <section className='w-screen lg:px-0 px-5 lg:justify-center justify-start pb-10 lg:pt-20 pt-10 bg-gray-200 flex flex-col items-center bg-[url("https://playarena.in/wp-content/themes/playarena.in/img/member_benefits_bg.svg")]'>
            <div className='lg:max-w-[1080px] mx-5 w-full flex lg:flex-row flex-col h-full lg:gap-5 gap-10 justify-between'>
                {/* Left Content */}
                <div className='lg:w-[250px] flex flex-col lg:gap-8 gap-3'>
                    <h1 className='lg:text-7xl text-[36px] font-bold'>
                        Play it <br className='hidden lg:block' />cool
                    </h1>
                    <p>We call this our Royalty <br className='hidden lg:block' />Programme.</p>
                    <button className='lg:flex hidden bg-[rgb(3,113,230)] rounded-md w-full justify-between text-white items-center px-5 py-3'>
                        Become a member <ArrowRight />
                    </button>
                </div>

                {/* Cards Section */}
                <div className='h-auto flex lg:flex-row flex-col gap-16'>
                    {
                        membershipSection?.map((item, index) =>
                            <div key={index} className={`h-full items-center lg:w-[198px] flex flex-row lg:flex-col gap-5 ${index % 2 == 0 ? "justify-start" : "lg:justify-end"}`}>
                                <figure className='w-[90px]'>
                                    <img src={item?.image} />
                                </figure>
                                <div className='lg:text-center'>
                                    <h3 className='text-2xl font-bold'>{item?.title}</h3>
                                    <p>{item?.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='lg:hidden mt-10 w-full  flex justify-start'>
                <button className='bg-[rgb(3,113,230)] rounded-md max-w-[375px] w-full justify-between text-white items-center px-5 py-3 flex'>
                    Become a member <ArrowRight />
                </button>
            </div>
        </section>
    )
}

export default MemberShip
