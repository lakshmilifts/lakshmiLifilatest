import Link from "next/link";
import React from "react";

const ContactSection = () => {
    return (
      <div className="bg-[#2a2172] text-white py-8 justify-between items-center px-8 md:px-16 text-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Do You Have Any Questions? Feel Free To Contact Us
          </h2>
          <p className="text-md md:text-lg  mb-6">
          {"Discover excellence with Lakshmi Lifts: Coimbatore's trusted experts in providing innovative, safe, and reliable elevator solutions. Reach new heights with our superior vertical transportation services."}
          </p>
        </div>
        <Link href="/contact" className="bg-white text-[#2a2172] font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition-colors w-[20%]">
          Contact now
        </Link>
      </div>
    );
  };
  
  export default ContactSection;