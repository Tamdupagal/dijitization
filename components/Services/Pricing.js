import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" bg-[#fafafa] px-14 py-20" id="services">
      <div className="text-center">
        <h2 className="text-5xl leading-[68px] font-semibold pt-8">
          Pricing <span className="text-[#64A665]"></span>
        </h2>

        <p className="mt-4 text-[#666A7B]">
          We will help you in dental health care with wide selection of
          categories that <br /> you can choose according to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6 mt-14">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
