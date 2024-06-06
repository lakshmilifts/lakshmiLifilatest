import React from "react";
import Image from 'next/image';


const ProductCard  = (()=>{
    const products = [
        {
          id: 1,
          title: "Passanger Lift ",
    
          icon:"/passangerLift.png" ,
        },
        {
          id: 5,
          title: "Hospital Lift",
        
          icon:"/hospital-lift.png" ,
        },
        {
          id: 2,
          title: "Goods Lift",
        
          icon:"/goods-lift1.jpg" ,
        },
       
        {
          id: 6,
          title: "Hydraulic Lift",
      
          icon:"/hydraulic-lift.jpg" ,
        },
        {
          id: 7,
          title: "Industrial Car Lift",
          icon:"/Industrial-Car-Elevators.jpg" ,
        },
        {
          id: 8,
          title: "Home Lift",
          icon:"/home-lift.webp" ,
        }
      ];
    return(
        <>
        
        <div
        className=" pt-20 pb-20 bg-gray-100 bg-cover bg-center relative banner-product"
      >
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className=" pt-10 text-center">
                <h2 className="text-4xl font-bold text-white">Our Range Of Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="text-center mb-2 max-w-[60%] m-auto mt-8">
      <h1 className="text-2xl font-[500] text-[#343a40]">Elevate Your Experience with Our Range of Lift Solutions</h1>
      <p className="text-gray-400 mt-2">Discover our diverse selection of lift products, from preventive maintenance to emergency rescue services, designed to meet your specific needs and ensure seamless vertical transportation.</p>
    </div>
          
    <div className="flex flex-wrap justify-center h-full">
  {products.map((service) => (
    <div key={service.id} className="py-4 mx-4 mt-2 max-w-[325px] w-full">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md h-full w-full transition-transform transform hover:scale-105">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-t-lg">
          <Image
        src={service.icon}
        alt={service.title}
        width={500} // Adjust to the actual size of your image or layout requirements
        height={500} // Adjust to the actual size of your image or layout requirements
        className="object-cover w-full h-full"
      />
          </div>
          <h5 className="m-6 text-[24px] font-bold text-[#343a40] text-center">
            {service.title}
          </h5>
        </div>
      </div>
    </div>
  ))}
</div>



      </div>
        </>
    )
});

export default ProductCard;