import Link from "next/link";
import React from "react";
import SmallCard from "./SmallCard";
import Image from 'next/image';

const About = () => {
  return (
    <React.Fragment>
        <div className="container">
    <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg mt-8">
        <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-[48px] font-[700] mb-4">
                WELCOME TO <span className="text-[#2a2172]">LAKSHMI LIFTS</span>
            </h1>
            <p className="text-gray-500 mb-4">
                 Your trusted partner in lift services. Though new to the industry, our dedication to quality and innovation drives us to provide top-notch lift manufacturing and installation services.
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap -mx-2">
            <div className="md:w-1/2 px-2 mb-4">
                    <SmallCard  
                        title="Manufacturing"
                        content="We craft top-tier lifts in cutting-edge facilities, prioritizing durability and efficiency."
                    />
                </div>
                <div className="md:w-1/2 px-2 mb-4">
                    <SmallCard  
                        title="Lift Installation"
                        content="Our expert team ensures a smooth and efficient installation process, utilizing the latest technology to meet your needs."
                    />
                </div>
                <div className="md:w-1/2 px-2 mb-4">
                    <SmallCard  
                        title="Maintenance Services"
                        content="We offer comprehensive maintenance plans to keep your lifts operating safely and efficiently."
                    />
                </div>
                <div className="md:w-1/2 px-2 mb-4">
                    <SmallCard  
                        title="Modernization Solutions"
                        content="Upgrade your existing lifts with our modernization services to enhance performance and safety."
                    />
                </div>
                
            </div>
            <Link href="/about" className="bg-[#2a2172] text-white py-2 px-4 rounded hover:bg-[#6962e9] mt-6">
                Read More
            </Link>
        </div>
        <div className="md:w-1/3">
        <Image
        src="/imageAboutLanding.png"
        alt="Lift"
        width={500} // Adjust the width according to the actual size of your image
        height={300} // Adjust the height according to the actual size of your image
        className=""
      />
            </div>
    </div>
</div>

    </React.Fragment>
  );
};

export default About;
