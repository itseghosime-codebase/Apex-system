'use client'
import React from 'react'

import Partner from '@/assets/images/partner.svg'
import Image from 'next/image';

export default function Testionial() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const onSwiperChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div id='testimonial' className='py-24 bg-white'>
            <div className="container">
                <h2 className='text-primary text-2xl md:text-4xl uppercase text-center font-medium'>Clients worked with</h2>
                <div className='mt-5 max-w-4xl mx-auto bg-primary p-10 w-full rounded-lg flex flex-col items-center text-center'>
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        onSlideChange={onSwiperChange}
                        className="mySwiper"
                    >
                        {
                            Caro.map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grid lg:grid-cols-5">
                                        <div className='lg:col-span-2'>
                                            <Image src={Profile} alt="Profile" className='w-full h-full object-cover object-center' sizes='100%' />
                                        </div>
                                        <div className="lg:col-span-3 bg-primary p-5 flex text-lg flex-col gap-8 justify-between text-white">
                                            <p>Josh Kee</p>
                                            <h5 className='text-xl'>Especially in web design, paper prototypes can be used to probe the illegibility of a design: A high-fidelity design mockup</h5>

                                            <p>The setter circle </p>
                                        </div>
                                    </div>
                                </SwiperSlide>))
                        }

                    </Swiper>
                    <div className="flex items-center gap-2 mt-4">
                        {Caro.map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center h-3.5 w-3.5 border border-primary rounded-full"
                            >
                                <span
                                    className={`h-3.5 w-3.5 inline-block bg-primary ${activeIndex == index ? "opacity-100" : "opacity-0"
                                        } rounded-full transition-opacity ease-in-out duration-300`}
                                ></span>
                            </div>
                        ))}
                    </div> */}
                    <Image
                        src={Partner}
                        alt="Partner"
                        className='w-full h-20'
                        sizes='100%'
                    />
                    <p className='text-sm md:text-base lg:text-lg text-white'>7 Million Amazon Coaching Business</p>
                </div>
            </div>
        </div>
    )
}


const Caro = ['', '', '', '',]