"use client";
import Link from "next/link";
import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { InlineWidget } from "react-calendly";

export default function Bookings() {
    return (
        <div id="bookings" className="py-20 grid lg:grid-cols-5 gap-10 items-center container">
            <section className='lg:col-span-2'>
                <div className="rounded-lg h-fit overflow-hidden max-w-md mx-auto ">
                    <InlineWidget
                        url="https://calendly.com/mosa_kambule/30min"
                        pageSettings={{
                            backgroundColor: "#111C39",
                            textColor: "#ffffff",
                            primaryColor: "#52A3C5",
                            hideEventTypeDetails: true,
                        }}
                    />
                </div>
            </section>
            <section className="lg:col-span-3 space-y-3 text-white">
                <BlurFade inView delay={0.25}>
                    <h2 className="text-2xl md:text-3xl font-medium uppercase">
                        Let’s Build a CRM That Works for You
                    </h2>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <p className=" text-lg md:text-xl">
                        Book your free setup consultation today and let us build a
                        fully customized CRM system designed to boost your
                        show-up rates, streamline your sales process, and drive
                        more revenue for your business.
                    </p>
                </BlurFade>
                <BlurFade delay={0.75} inView>
                    <Link href={""} target="_blank">
                        <span className="block w-full md:w-fit text-center md:inline-flex bg-secondary px-8 py-4 rounded text-white font-semibold text-sm uppercase">
                            Book Call
                        </span>
                    </Link>
                </BlurFade>
            </section>
        </div>
    );
}