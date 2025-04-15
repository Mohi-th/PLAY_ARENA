import React from 'react'
import EventCards from './EventCards'
import { ArrowRight } from 'lucide-react'

function EventsSection() {
    return (
        <section className='bg-[rgb(235,219,204)] lg:px-[218px]  lg:py-15 px-5 py-8 flex flex-col gap-8'>
            <h1 className='font-bold lg:text-6xl text-4xl'>Play, Your Way</h1>
            <p>When it comes to get-togethers, the more is always the merrier. You bring the people, we’ll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&B to choose from.</p>
            <EventCards />
            <h1 className="flex justify-between w-full underline text-3xl items-center cursor-pointer">Have an offbeat idea? Create your own event, fully customised!<ArrowRight className='hidden lg:block' /></h1>
            <button className='flex lg:hidden cursor-pointer justify-between w-full  border rounded-md px-5 py-4'>
                Find out more
                <ArrowRight />
            </button>
        </section>
    )
}

export default EventsSection
