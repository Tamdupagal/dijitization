import React, { useEffect, useState } from "react";
import Service from "./Service";
import { dataT } from "@/public/services";

const Services = () => {
  return (
    <div
      className=" bg-[#fafafa] px-6 lg:px-20 py-5 dark:bg-[#0a1424] dark:text-white"
      id="services"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl leading-[68px] font-semibold pt-8">
          Product <span className="text-logotext"> features</span>
        </h2>

        <p className="mt-4 text-base font-semibold">
          Streamline onboarding for new employees with step-by-step guides and
          tutorials Provide in-app guidance and <br />
          support to help employees learn and use digital tools and systems
        </p>
      </div>

      <div className="grid grid-cols-1 px-36  lg:grid-cols-3 justify-items-center gap-6 mt-14">
        {dataT.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
