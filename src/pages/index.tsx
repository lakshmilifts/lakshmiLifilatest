import Footer from "@/componets/atom/Footer";
import Header from "@/componets/atom/Header";
import LandingCurasole from "@/componets/atom/LandingPage";
import HoverCard from "@/componets/atom/Card";
import About from "@/componets/atom/HomeAbout";
import ContactUs from "@/componets/atom/Emailjs";
import Link from "next/link";
import Image from 'next/image';


export default function Home() {
  return (
   <>
   <Header></Header>
   <LandingCurasole/>
   <About/>
   <HoverCard/>
  
   <ContactUs></ContactUs>
   <div className="container">
   <div className="pt-20 pb-20 bg-gray-100">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 p-6">
            <h4 className="text-2xl font-semibold text-gradient">
              WE PROVIDE THE QUALITY PRODUCTS AND SERVICES.
            </h4>
            <p className="mt-4">
              Our team of experts works with the latest tools and technologies
              to deliver highly performance & comforatble Vertical Trasportation
              to your buildings.
            </p>
            <Link
              className="rn-btn inline-block mt-6 px-4 py-2 bg-[#2a2172] text-black border text-white rounded-md"
              href="/products"
            >
              View Products
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="">
            <Image
        src="/about-landing.jpg"
        alt="Finding Images"
        width={800} // Adjust the width to match your image or desired layout
        height={600} // Adjust the height to match your image or desired layout
      />
            </div>
          </div>
        </div>
      </div>
      </div>
   <Footer/>
   </>
  );
}
