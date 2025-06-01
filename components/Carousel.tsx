import React from 'react'
import { Marquee } from './magicui/marquee'

export default function Carousel() {
    return (
        <div className='py-5 bg-[#101934]'>
            <section>
                <Marquee reverse pauseOnHover className="[--duration:50s]">
                    {
                        CarouselItem.map((item, index) => (
                            <div key={index} className='flex items-center gap-5 mx-14 text-white'>
                                <p className='text-base'>{item.question}</p>
                                <div className='py-2 px-4 rounded bg-secondary text-xs'>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </Marquee>
            </section>
        </div>
    )
}



const CarouselItem = [
    {
        question: 'Do you want higher revenue growth?',
        answer: 'Yes'
    },
    {
        question: 'Do you want higher revenue growth?',
        answer: 'Yes'
    },
    {
        question: 'Do you want higher revenue growth?',
        answer: 'Yes'
    },
    {
        question: 'Do you want higher revenue growth?',
        answer: 'Yes'
    },
    {
        question: 'Do you want higher revenue growth?',
        answer: 'Yes'
    },
]