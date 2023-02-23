import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
      <div
        className=" bg-[#fafafa] px-6 lg:px-20 py-5 dark:bg-black dark:text-white"
        id="services"
      >
        <div className="text-center">
          <h2 className="text-5xl leading-[68px] font-semibold pt-8">
            Product <span className="text-logotext"> features</span>
          </h2>

          <p className="mt-4 text-base font-semibold">
            Streamline onboarding for new employees with step-by-step guides and
            tutorials Provide in-app guidance and <br />
            support to help employees learn and use digital tools and systems
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 justify-items-center gap-6 mt-14">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;