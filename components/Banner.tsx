import Link from 'next/link'
import React from 'react'
import BannerIcon from '@/assets/images/apex-icon.svg';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='container pt-32 pb-20'>
      <div className="grid items-center justify-center md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-4">
          <p className='text-[#89DCFF] text-sm italic font-light'>
            Too many no shows? Fix that with a smart CRM setup
          </p>
          <h1 className="text-2xl md:text-3xl font-medium lg:text-4xl uppercase text-white">
            Double your show-up rate in 14 days—double your monthly revenue in just 30.</h1>
          <p className="text-base lg:text-lg text-white mt-4 text-pretty">
            We take care of your entire CRM setup—from custom workflows and automated reminders
            to full pipeline configuration—so your sales team can stop wasting time on admin and start
            focusing on what really matters: showing up and closing deals.
          </p>
          <div className='flex flex-col md:flex-row items-center justify-start gap-2'>
            <Link href={'#bookings'} className="block w-full md:w-fit text-center md:inline-flex items-center justify-center px-10 py-4 font-medium text-white bg-secondary rounded-sm hover:bg-secondary/80 transition-colors">
              <span className='text-base'>Book free call</span>
            </Link>
            <Link href={'#works'} className="block w-full md:w-fit text-center md:inline-flex items-center justify-center px-10 py-3.5 font-medium text-[#B3E9FF] bg-secondary/35 rounded-sm hover:bg-secondary/80 hover:text-white border border-secondary transition-colors">
              <span className='text-base'>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-4 relative">
          <div className='relative z-10 flex items-center justify-center'>
            <Image
              src={BannerIcon}
              alt="Banner Image"
              className='w-full h-auto'
              sizes='100%'
            />
          </div>
          <div className='bg-[#98F7F9]/20 blur-[128px] inset-5 rounded-full absolute z-0' />
        </div>
      </div>
    </div>
  )
}
