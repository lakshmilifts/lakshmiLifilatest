'use client';
import React from 'react';

const MapLocation = () => {
  return (
    <div className='container'>
      <h2 className="text-[26px] my-4 text-center font-[500]">Find Us On Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.855102688782!2d77.06346567326835!3d11.049488454101267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8575579e664bf%3A0x943c085f0228d837!2sLakshmi%20lifts!5e0!3m2!1sen!2sin!4v1717007189063!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
