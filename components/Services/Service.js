import Image from "next/image";
import React from "react";
import { TbPremiumRights } from "react-icons/tb";

const Service = ({ service }) => {
  const { name, desc, icon } = service;
  return (
    <div className="dark:border-[#202e45]  border-white border-2 price_card p-7 rounded-lg shadow-lg h-[298px]">
      <div className="flex items-center gap-4">
        <TbPremiumRights className="text-6xl" />
        <h3 className="text-2xl font-semibold dark:white">{name}</h3>
      </div>

      <p className=" mt-7">{desc}</p>
    </div>
  );
};

export default Service;
