import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null); // Specify HTMLFormElement as the type

  const [tostOpen,setShowToast] = useState(false)

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    if (form.current) { // Ensure form.current is not null before accessing it
      emailjs
        .sendForm(
          'service_04hzfsc',    // your service ID
          'template_mc9shgt',   // your template ID
          form.current,
          'C_U6KwsaoRCSYlnQ6'   // your public key
        )
        .then(
          (result:any) => {
            console.log('SUCCESS!', result.text);
            setShowToast(true);
            if (form.current) {
              form.current.reset();  // Clear form after submission
            }
          },
          (error:any) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };


  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined
    if (tostOpen) {
      timeout  = setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [tostOpen]);

  return (
    <div className="container border rounded-md bg-white mt-4">
      <div className="text-center mb-2 m-auto mt-8">
      <h1 className="text-2xl font-[500] text-[#343a40]">Get in Touch With Us</h1>
      <p className="text-gray-400 mt-2">{"Reach out to us with any questions or inquiries. We're here to help you find the best lift solutions tailored to your needs."}</p>
    </div>
  <div className="flex flex-col lg:flex-row justify-center items-center  p-6  box-border">
    
    <div className="flex-1 lg:w-1/2 text-center p-4">
    <Image
        src="/contact-us.jpg"
        alt="Contact Us"
        width={800} // Replace with the actual width of your image
        height={600} // Replace with the actual height of your image
        className="rounded-md" // Apply additional styling classes
      />
    </div>
    <form ref={form} onSubmit={sendEmail} className="flex-1 lg:w-1/2 flex flex-col gap-4 p-4 w-[100%]">
  <label className="font-[500] text-gray-600">Name</label>
  <input type="text" name="name" placeholder='Enter Name' className="w-full p-1 border border-gray-300 rounded" />
  <label className="font-[500] text-gray-600">Email</label>
  <input type="email" name="email" placeholder='Enter Email' className="w-full p-1 border border-gray-300 rounded" />
  <label className="font-[500] text-gray-600">Phone</label>
  <input type="number" name="phone" placeholder='Enter Phone Number' className="w-full p-1 border border-gray-300 rounded" />
  <label className="font-[500] text-gray-600">Message</label>
  <textarea name="message" className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Your Query'/>
  <input type="submit" value="Send" className="w-full p-2 bg-[#2a2172] text-white rounded cursor-pointer transform transition-transform duration-300 hover:scale-105" />
  {tostOpen &&
 <div className="bg-[#10b981] text-center rounded">
  <p className='text-white py-3'>Mail Sent Successfully</p>
  </div>
}
</form>
  </div>
 
</div>

   
  );
};

export default ContactUs;
