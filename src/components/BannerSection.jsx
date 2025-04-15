import React from 'react'
import { backgroundVideo } from "../config"
import BannerCards from './BannerCards'
import MobileViewCards from './MobileViewCards'

function BannerSection() {
    return (
        <div>
            <section className="relative w-full lg:h-[71vh] h-[54vh] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover z-0"
                    src={backgroundVideo}
                />
                <BannerCards />
            </section>
            <MobileViewCards/>
        </div>


    )
}

export default BannerSection
