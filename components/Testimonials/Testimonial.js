import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ testimonial }) => {
  const { name, review, img, ratings } = testimonial;
  return (
    <div className="dark:bg-[#151515] bg-white dark:border-[#3742fa] border lg:p-12 p-8 rounded-xl shadow-lg md:w-[350] lg:w-[600px] w-[250] text-center my-5">
      <div className="flex items-center justify-center">
        <AiFillStar className="text-xl" />
        <AiFillStar className="text-xl" />
        <AiFillStar className="text-xl" />
        <AiFillStar className="text-xl" />
        <AiFillStar className="text-xl" />
      </div>
      <p className="text-[#666A7B] mt-6 text-xl font-semibold">{review}</p>

      <div className="flex flex-col items-center  mt-12">
        <Image src={img} width={64} height={64} alt="reviewer" />
        <h3 className="text-base font-semibold mt-3">{name}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
