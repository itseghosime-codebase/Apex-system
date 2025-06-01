import About from "@/components/About";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import Background from './../assets/images/dots-connect.webp';
import Works from "@/components/Works";
import Bookings from "@/components/Bookings";
import Testimonial from "@/components/Testionial";
import Faq from "@/components/Faq";
import Bg from './../assets/images/bg-2.webp';

export default function Home() {
  return (
    <main className="bg-primary">
      <div className="relative">
        <div className="relative z-10">
          <Banner />
          <Carousel />
          <About />
        </div>
        <Image
          src={Background}
          alt="Hero Background"
          sizes="100%"
          fill
          priority
          quality={100}
          className="absolute z-0 inset-0 w-full h-full object-cover object-center opacty-30"
        />
      </div>
      <Works />
      <div className="relative">
        <div className="relative z-10">
          <Bookings />
          <Testimonial />
          <Faq />
        </div>
        <Image
          src={Bg}
          alt="Bg Background"
          sizes="100%"
          fill
          priority
          quality={100}
          className="absolute z-0 inset-0 w-full h-full object-cover object-center opacty-30"
        />
      </div>
    </main>
  );
}
