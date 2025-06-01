import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div className='container py-32'>
            <div className='grid md:grid-cols-2 gap-10 items-start'>
                <div className='space-y-4'>
                    <h2 className='text-3xl lg:text-4xl font-medium text-white'>Too Many No-Shows? <br />
                        Overwhelmed by Admin Work?</h2>
                    <p className='text-sm lg:text-base text-white mt-4 text-pretty'>
                        If your sales reps are buried in manual tasks and struggling with low call attendance,
                        you're leaving revenue on the table. Apex CRM Systems streamlines your sales process
                        with full-service automation.
                    </p>
                    <Link href={''} className="block w-full md:w-fit text-center md:inline-flex items-center justify-center px-10 py-4 font-medium text-white bg-secondary rounded-sm hover:bg-secondary/80 transition-colors">
                        <span className='text-base'>Book free call</span>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        AboutItem.map((item, index) => (
                            <div key={index} className="inline-flex items-center justify-center px-10 py-4 w-full font-medium text-[#B3E9FF] bg-secondary/15 rounded-sm border border-secondary">
                                <span className='text-base md:text-lg font-mono'>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}



const AboutItem = ['CRM Setup', 'Workflow Automation', 'Pipeline Design', 'Reminder Sequences', 'Zapier Integration', 'Calendar Optimization'];   