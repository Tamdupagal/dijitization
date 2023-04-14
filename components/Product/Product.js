import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = ({ testimonial }) => {
  const { _id, name, review, img, ratings } = testimonial;
  return (
    <div className="py-2">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">
          <span>{_id}. </span>
          {name}
        </h3>
      </div>
      <p className=" mt-1 px-5 text-md ">{review}</p>
    </div>
  );
};

export default Testimonial;
