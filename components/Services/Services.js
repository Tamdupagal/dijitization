import React, { useEffect, useState } from "react";
import Service from "./Service";
import { dataT } from "@/public/services";
import Tabs from "../Tabs";

const Services = () => {
  return (
    <div
      className=" bg-[#f5f5f7] px-6 lg:px-20 py-5 dark:bg-[#091220] dark:text-white"
      id="services"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl leading-[68px] font-semibold pt-8">
          Product <span className="text-logotext"> features</span>
        </h2>

        <p className="mt-4 text-base font-semibold py-3">
          Streamline onboarding for new employees with step-by-step guides and
          tutorials Provide in-app
          <br /> guidance and support to help employees learn and use digital
          tools and systems
        </p>
      </div>

      {/* <div className="grid grid-cols-1   lg:grid-cols-4 justify-items-center gap-6 mt-14">
        {dataT.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div> */}
      <Tabs />
    </div>
  );
};

export default Services;
