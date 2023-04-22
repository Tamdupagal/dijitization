import React from "react";
import Image from "next/image";
import Logo from "../public/assets/dash.jpg";

const DigitalAdoption = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <div className="flex lg:flex-row flex-col pt-24 px-6 lg:px-32 py-20 gap-16 ">
        <div>
          <Image src={Logo} className="rounded-lg" layout="responsive" />
        </div>
        <div className="self-center ">
          <p className="text-4xl self-center font-bold py-4">
            Digital product adoption made simple
          </p>
          <p className="py-2 text-[17px]">
            Our{" "}
            <span className="font-bold">Digital Adoption Platform (DAP)</span>{" "}
            enhances digital products with controllable experience layer that
            enables features for user onboarding, customer self service, and
            feature adoption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalAdoption;
