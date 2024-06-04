import CounterOne from "@/componets/atom/CounterOne";
import Footer from "@/componets/atom/Footer";
import Header from "@/componets/atom/Header";
import Link from "next/link";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { GoGoal } from "react-icons/go"
import ContactSection from "@/componets/atom/ContactUsLink";
import Image from 'next/image';

const About = () => {
  const missionContent = {
    title: "Our Mission",
    content:
      "At Lakshmi Lifts, our mission is to revolutionize the lift industry through cutting-edge technology, We aim to enhance the accessibility and functionality of buildings, ensuring a seamless vertical journey for all users.",
      icon:<GoGoal />
  };

  const visionContent = {
    title: "Our Vision",
    content:
      "We envision a world where every building, regardless of its size or purpose, has access to state-of-the-art lift solutions that prioritize safety, efficiency, and sustainability. By continually pushing the boundaries of innovation, we strive to be the global leader in lift manufacturing.",
      icon:<MdRemoveRedEye/>
  };
  return (
    <>
    <Header />
    <div className="w-full m-auto">
      {/* <Breadcrumb title={"About Us"} /> */}
      <div
        className=" pt-20 pb-20 bg-gray-100 bg-cover bg-center relative banner-about"
      >
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className=" pt-10 text-center">
                <h2 className="text-4xl font-[500] text-white">About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Area */}

      {/* Start About Area  */}
      <div className="pt-20 pb-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-3/12">
              <div className="thumbnail">
              <Image
        src="/about-landing-banner.png"
        alt="About Landing Banner"
        width={1200} // Replace with the actual width of your image
        height={400} // Replace with the actual height of your image
        className="w-full" // Apply the width class
      />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="about-inner inner p-6">
                <div className="section-title">
                  <h2 className="text-5xl font-[700] ">We Lakshmi Lifts</h2>
                  <p className="mt-4 text-justify">
                    Welcome to Lakshmi Lifts, where innovation and precision
                    meet to elevate your vertical transportation experience.
                    With decades of expertise in the lift manufacturing
                    industry, we are committed to delivering top-quality,
                    reliable, and safe lift solutions for a variety of
                    applications, including residential, commercial, and
                    industrial spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="flex justify-around p-5 flex-wrap w-full mb-6">
  <div className="w-full lg:w-[45%] mb-4 lg:mb-0 ">
    <div className="sm:w-full p-4 border rounded shadow-lg bg-white h-full">
      <h2 className="text-2xl font-[500] mb-4">Our Expertise</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Engineering Excellence:</strong> Our team of engineers boasts extensive experience in lift design and manufacturing. Their expertise ensures that each lift is meticulously crafted for optimal performance and durability.
        </li>
        <li>
          <strong>Advanced Technology:</strong> We integrate the latest technological advancements into our products, from state-of-the-art control systems to energy-efficient designs, ensuring our lifts are at the forefront of innovation.
        </li>
        <li>
          <strong>Regulatory Compliance:</strong> Our lifts are designed and manufactured in strict adherence to international safety and quality standards, providing our clients with peace of mind and reliability.
        </li>
        <li>
          <strong>Customization Capabilities:</strong> We excel in creating bespoke lift solutions tailored to meet the unique needs and specifications of our clients, offering unparalleled flexibility and precision.
        </li>
      </ul>
    </div>
  </div>

  <div className="w-full lg:w-[45%] ">
    <div className="sm:w-full p-4 border rounded shadow-lg bg-white h-full">
      <h2 className="text-2xl font-[500] mb-4">Our Proactive Approach</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Innovation-Driven:</strong> We proactively invest in research and development to continually enhance our products and stay ahead of industry trends. This commitment to innovation ensures that our clients benefit from the latest advancements in lift technology.
        </li>
        <li>
          <strong>Customer-Centric:</strong> Understanding and anticipating the needs of our clients is at the heart of our proactive approach. We engage closely with customers to identify their specific requirements and provide tailored solutions that exceed their expectations.
        </li>
        <li>
          <strong>Preventive Maintenance:</strong> Our proactive maintenance services are designed to prevent issues before they arise, ensuring the long-term reliability and efficiency of our lifts. Regular inspections and timely interventions keep our lifts running smoothly.
        </li>
        <li>
          <strong>Sustainability Focus:</strong> We take a proactive stance on environmental responsibility, employing sustainable practices in our manufacturing processes and designing energy-efficient lifts that reduce environmental impact.
        </li>
      </ul>
    </div>
  </div>
</div>


      <div className="flex flex-wrap justify-center">
        
          
      <div className="py-4 box-border mx-2">
  <div className="group hover-card max-w-[80%] mx-auto bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 h-[100%] flex">
    <div className="p-6 flex flex-col items-center justify-start h-full">
      <div className="bg-[#d4d6fc] w-[100px] h-[100px] rounded-[10%] flex items-center justify-center text-2xl text-[#2a2172] group-hover:text-white transition-colors duration-300">
        {visionContent.icon}
      </div>
      <h5 className="mt-4 mb-2 text-[24px] font-[500] tracking-tight text-[#343a40] text-center group-hover:text-white transition-colors duration-300">
        {visionContent.title}
      </h5>
      <p className="mb-3 font-normal text-[#9da9bb] text-center group-hover:text-white transition-colors duration-300">
        {visionContent.content}
      </p>
    </div>
  </div>
</div>

<div className="py-4 box-border mx-2">
  <div className="group hover-card max-w-[80%] mx-auto bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 h-[100%] flex">
    <div className="p-6 flex flex-col items-center justify-start h-full">
      <div className="bg-[#d4d6fc] w-[100px] h-[100px] rounded-[10%] flex items-center justify-center text-2xl text-[#2a2172] group-hover:text-white transition-colors duration-300">
        {missionContent.icon}
      </div>
      <h5 className="mt-4 mb-2 text-[24px] font-[500] tracking-tight text-[#343a40] text-center group-hover:text-white transition-colors duration-300">
        {missionContent.title}
      </h5>
      <p className="mb-3 font-normal text-[#9da9bb] text-center group-hover:text-white transition-colors duration-300">
        {missionContent.content}
      </p>
    </div>
  </div>
</div>

      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="pt-20 pb-20 bg-gray-100">
        <div className="container mx-auto">
         
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area */}
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
        width={1200} // Replace with the actual width of your image
        height={800} // Replace with the actual height of your image
      />
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area */}

      {/* Start Back To Top */}

      {/* End Back To Top */}

      <ContactSection/>

      <Footer />
    </div>
    </>
    
  );
};

export default About;
