import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterOne = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible:any) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const data = [
    {
      countNum: 50,
      countTitle: "HAPPY CUSTOMERS",
    },
    {
      countNum: 5,
      countTitle: "SUCCESSFUL PROJECTS", //need to remove
    },
    {
        countNum: 100,
        countTitle: "SATISFIED CUSTOMERS",
      }
  ];

  return (
    <div className="bg-white rounded pb-8">
    <div className="text-center py-6 ">
    <div className="section-title">
      <h3 className="font-medium text-2xl">MILESTONES</h3>
    </div>
  </div>
    <div className="flex flex-wrap w-full justify-center ">
      
      {data.map((value, index) => (
        <div
          className=" w-full sm:w-1/2 lg:w-1/4 p-4 text-center"
          key={index}
        >
          <h5 className="text-4xl font-bold text-[#6057e7]">
            <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                <CountUp    end={didViewCountUp ? value.countNum : 0}
                suffix={value.countTitle === "SATISFIED CUSTOMERS" ? "%" : ""} />
            </VisibilitySensor>
          </h5>
          <p className="description">{ value.countTitle  }</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CounterOne;
