import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ testDataa }) => {
  const { name, review, img, ratings } = testDataa;
  return (
    <div className="dark:border-[#202e45] hover:text-[#3742fa] hover:dark:bg-[#444444] hover:bg-[#ebecff] bg-[#fff] border-[#fff] bba border-2 p-5 rounded-lg shadow-lg text-center my-5  h-48">
      <div className="flex flex-col items-center text-[25px]">
        <p className="">{img}</p>
        <h3 className="text-xl font-semibold mt-3 text-[#666A7B] ">{name}</h3>
      </div>
      <p className="text-[#666A7B] mt-3 text-base font-semibold">{review}</p>
    </div>
  );
};

export default Testimonial;
