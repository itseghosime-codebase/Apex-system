import React from 'react'
import { BlurFade } from "@/components/magicui/blur-fade";
import WBackground from './../assets/images/background.webp';
import Image from 'next/image';

export default function Works() {
    return (
        <div id='works' className='pt-32 pb-52 relative text-center'>
            <div className="relative z-20 container">
                <section className='text-white space-y-4 mb-10'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl uppercase'>How It Works</h3>
                    <p className='text-xl md:text-2xl lg:text-3xl'>Simple, Stress-Free Implementation</p>
                </section>
                <section className='max-w-3xl mx-auto space-y-4'>
                    {Step.map((items, index) => (
                        <BlurFade key={index} delay={0.5 + index * 0.12}>
                            <div className="bg-[#B3E9FF]/15 border border-[#B3E9FF] flex items-center gap-5 p-2 rounded-lg">
                                <div className="py-5 px-6 shrink-0 md:px-10 bg-[#B3E9FF] rounded-md text-primary font-mono font-medium">
                                    Step {index + 1}
                                </div>
                                <p className="text-lg text-white text-left">{items}</p>
                            </div>
                        </BlurFade>
                    ))}
                </section>
            </div>
            <div className='bg-gradient-to-b from-[#0F1033] to-transparent absolute z-10 inset-0' />
            <Image
                src={WBackground}
                alt="Work Background"
                sizes="100%"
                fill
                priority
                quality={100}
                className="absolute z-0 inset-0 w-full h-full object-cover object-bottom"
            />
        </div>
    )
}


const Step = ['Book a free strategy call', 'We design and implement your full CRM system', 'Your team gets a turnkey system ready to boost performance']