import React from "react";
import ContactUs from "./Emailjs";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import MapLocation from "./MapLocation";

const HomeContact = () => {
  return (
    <>
    <div className="">
    <div
  className="pt-20 pb-20 bg-gray-100 bg-cover bg-center relative banner-contact"
>
  
  <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="w-full text-center">
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container">
      <div className="pt-12 pb-6 bg-gray-100">
       
          <div className="flex flex-wrap">
            {/* Start Single Address  */}
            <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 mb-2 lg:mb-0 px-4">
              <div className="bg-white p-6 rounded-lg border border-[#ebebeb] text-start h-full">
                <div className="icon mb-4 mb-4">
                  <FiPhone className=" mx-auto" />
                </div>
                <div className="text-start">
                  <h4 className="text-xl font-semibold mb-2">
                    Contact With Mobile
                  </h4>
                  <p>
                    <a
                      href="tel:+91 7339147773"
                      className="text-gray-400 hover:text-[#6b63e9]"
                    >
                      +91 7339147773{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 lg:mb-0 px-4 mt-12 lg:mt-0">
              <div className="bg-white p-6 rounded-lg border border-[#ebebeb] text-start h-full">
                <div className="icon mb-4">
                  <FiMail className=" mx-auto" />
                </div>
                <div className="text-start">
                  <h4 className="text-xl font-semibold mb-2">Email Address</h4>
                  <p>
                    <a
                      href="mailto:mikdanjey@gmail.com"
                      className="text-gray-400 hover:text-[#6b63e9]"
                    >
                      lakshmiliftscbe@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 px-4 mt-12 lg:mt-0">
              <div className="bg-white p-6 rounded-lg border border-[#ebebeb] text-start  h-full">
                <div className="icon mb-4">
                  <FiMapPin className=" mx-auto" />
                </div>
                <div className="text-start">
                  <h4 className="text-xl font-semibold mb-2">Location</h4>
                  <p className="text-gray-400">
                  <a href="https://maps.app.goo.gl/8grnjYEagqcPRYhC8" className="hover:text-[#6b63e9]">
                    No: 2 / 413 - B, Krishna Gounder, Chiniyampalayam,
                    Coimbatore - 641062{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        
      </div>

      <div>
        <ContactUs />
      </div>
      <div className="flex justify-center my-8">
     <MapLocation></MapLocation>
     </div>
     </div>
     </div>
    </>
  );
};

export default HomeContact;
