import React, { useEffect, useState, useRef } from "react";
import Testimonial from "./Product";
import { banner } from "../../public/assets/dash4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div
      className="bg-[#f5f5f7] lg:px-32 px-4 pt-5 dark:bg-[#0a1424] dark:text-white"
      id="testimonials"
    >
      <div className="text-center py-10">
        <h2 className="text-3xl lg:text-4xl lg:leading-[68px] font-semibold pt-8">
          Product <span className="text-[#3742fa]"> Specification</span>
        </h2>

        <p className="mt-4 font-semibold">
          Dijitzation offers a range of products to help organizations of all
          sizes unlock <br /> the power of digital transformation. From small
          businesses to large enterprises,
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div data-aos="fade-right">
          <Image
            src={"/assets/dash4.png"}
            alt="Dash"
            width={1}
            height={1}
            layout="responsive"
            className="m-[auto] rounded-lg"
          />
        </div>
        <div className=" px-2  ">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
