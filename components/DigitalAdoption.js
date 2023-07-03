import React from "react";
import Image from "next/image";
import Logo from "../public/assets/dash.jpg";

const DigitalAdoption = () => {
  return (
    <div className="bg-[#f5f5f7] dark:bg-[#0a1424]">
      <div className="flex lg:flex-row flex-col pt-24 px-6 lg:px-32 py-20 gap-16 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div>
          <Image src={Logo} className="rounded-lg" layout="responsive" />
        </div>
        <div className="self-center ">
          <p className="lg:text-5xl text-3xl dark:text-white self-center font-bold py-4">
            <span className="text-[#3742fa]">Digital product </span> <br /> adoption made simple
          </p>
          <p className="py-2 text-[17px] dark:text-white">
            Our{" "}
            <span className="font-bold dark:text-white">
              Digital Adoption Platform (DAP)
            </span>{" "}
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
