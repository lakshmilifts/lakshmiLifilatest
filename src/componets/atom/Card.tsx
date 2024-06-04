"use client";
import React from "react";
import {
  FaTools,
  FaRegCalendarAlt,
  FaExclamationTriangle,
  FaSearch,
  FaSync,
  FaWrench,
  FaSignal,
  FaPhone,
  FaUserShield,
  FaClipboardCheck,
  FaArrowUp,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    id: 10,
    title: "New Lift Installations",
    description: "Expert installation of new lifts tailored to your building's specifications and requirements.",
    icon: <FaBuilding />,
  },
  {
    id: 11,
    title: "Modernization and Upgrades",
    description: "Upgrading existing lifts with the latest technology to improve performance and efficiency.",
    icon: <FaArrowUp />,
  },
  {
    id: 9,
    title: "Component Overhauls",
    description: "Overhauling key components to extend the lift's lifespan.",
    icon: <FaWrench />,
  },
  {
    id: 1,
    title: "Preventive Maintenance",
    description: "Scheduled inspections, lubrication, cleaning, adjustments, and calibrations.",
    icon: <FaRegCalendarAlt />,
  },
  {
    id: 2,
    title: "Corrective Maintenance",
    description: "Emergency repairs, replacement of worn parts, and immediate response to breakdowns.",
    icon: <FaTools />,
  },
  {
    id: 5,
    title: "Compliance and Safety Checks",
    description: "Safety inspections, load testing to ensure compliance with safety regulations.",
    icon: <FaClipboardCheck />,
  },
  {
    id: 6,
    title: "Remote Monitoring and Diagnostics",
    description: "Remote monitoring systems, automatic alerts for quicker response times.",
    icon: <FaSearch />,
  },
  {
    id: 7,
    title: "Emergency Rescue Services",
    description: "Emergency response teams, 24/7 support for lift users.",
    icon: <FaPhone />,
  },
  {
    id: 8,
    title: "Full-Service Maintenance Contracts",
    description: "Comprehensive coverage, tailored plans for specific needs.",
    icon: <FaUserShield />,
  },
  
];
// 2a2172


const HoverCard = () => {
  return (
    <div className="container">
      <div className="flex justify-center my-12">
      <div className="max-w-[50%] ">
        <div className="text-center">
          <h3 className="text-[1.75rem] font-[500] text-[#343a40]">Our <span className="text-[#2a2172]">Service</span></h3>
          <p className="text-[#9da9bb]">
          Comprehensive Lift Solutions Tailored to Your Needs, Ensuring Safe, Reliable, and Efficient Lift Operations


          </p>
        </div>
      </div>
      </div>
      <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <div key={service.id} className="py-4 box-border mx-2">
          <div className="group hover-card max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 h-[100%] flex">
            <div className="p-6 flex flex-col items-center justify-start h-full">
              <div className="bg-[#d4d6fc] w-[100px] h-[100px] rounded-[10%] flex items-center justify-center text-2xl text-[#2a2172] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h5 className="mt-4 mb-2 text-[24px] font-[500] tracking-tight text-[#343a40] text-center group-hover:text-white">
                {service.title}
              </h5>
              <p className="mb-3 font-normal text-[#9da9bb] group-hover:text-white text-center">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>


  );
};

export default HoverCard;
