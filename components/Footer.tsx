import Image from "next/image";
import Link from "next/link";
import Logo from './../assets/images/logo.svg';
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container font-normal mt-5 md:mt-0 py-5 md:py-2.5 grid  md:grid-cols-3 gap-5 items-center justify-center">
                <div>
                    <Image
                        src={Logo}
                        alt="Logo"
                        sizes="100%"
                        className="h-12 w-auto mx-auto md:mx-0"
                    />
                </div>
                <div className="flex items-center gap-10 text-sm">
                    <Link href={""} className="text-primary hover:text-secondary shrink-0">
                        <span>Privacy policy</span>
                    </Link>
                    <Link href={""} className="text-primary hover:text-secondary shrink-0">
                        <span>Term of service</span>
                    </Link>
                </div>
                <div>
                    <p className="text-primary uppercase text-sm text-center md:text-right">
                        &copy; {new Date().getFullYear()} APEXCRMSYSTEMS
                    </p>
                </div>
            </div>
        </footer>
    )
}
