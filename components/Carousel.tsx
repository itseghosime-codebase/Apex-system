import React from 'react'
import { Marquee } from './magicui/marquee'

export default function Carousel() {
    return (
        <div className='bg-[#101934]'>
            <section className='py-5'>
                <Marquee reverse pauseOnHover className="[--duration:50s]">
                    {
                        CarouselItem.map((item, index) => (
                            <div key={index} className='flex items-center gap-5 mx-14 text-white'>
                                <p className='text-base'>{item.question}</p>
                            </div>
                        ))
                    }
                </Marquee>
            </section>
            <section className='bg-[#52A3C5] py-5'>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    <div className="mx-32">
                        <p className='font-semibold text-lg'>We fix this by rebuilding your CRM workflows to double your showup rate and give your reps more time to sell.</p>
                    </div>                </Marquee>
            </section>
        </div>
    )
}



const CarouselItem = [
    {
        question: "50% of your booked calls don't show.",
    },
    {
        question: 'Your sales team is chasing leads manually.',
    },
    {
        question: 'Revenue is leaking every single day.',
    },
]