import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ testimonial }) => {
  const { name, review, img, ratings } = testimonial;
  return (
    <div className="dark:bg-[#151515] bg-white dark:border-[#3742fa] border p-8 rounded-lg shadow-lg text-center my-5 h-36">
      <div className="flex flex-col items-center ">
        <h3 className="text-xl font-semibold mt-1">{name}</h3>
      </div>
      <p className="text-[#666A7B] mt-3 text-base font-semibold">{review}</p>
    </div>
  );
};

export default Testimonial;
