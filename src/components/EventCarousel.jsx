import React from 'react'
import { eventsSlider } from '../config'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function EventCarousel() {

  const responsive = {
    0: {
      items: 2,
    },
    1024: {
      items: 4,
    }
  }

  return (
    <section className='px-6 py-10'>
      <h1 className='lg:px-[218px] mb-10 font-bold lg:text-6xl text-3xl'>NOW PLAYING</h1>
      <AliceCarousel
        mouseTracking
        infinite={1000}
        autoPlay={true}
        autoPlayInterval={2000}
        animationDuration={500}
        responsive={responsive}
        disableButtonsControls={true}
        items={
          eventsSlider?.map((item, id) =>
            <div className='flex flex-col gap-5 w-[307px]' key={id}>
              <figure className='h-[200px] w-full'>
                <img src={item?.image} className='w-full h-full' />
              </figure>
              <h1 className='text-2xl font-bold'>{item?.title}</h1>
              <p >{item?.description}</p>
            </div>
          )
        } />
    </section>
  )
}

export default EventCarousel
