import React, { useEffect, useState, useRef } from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";
// import React from "react";
import banner1 from "/public/assets/dashb.png";
import banner2 from "/public/assets/dashc.png";
// import banner3 from "/public/assets/dash.png";
import banner4 from "/public/assets/dasht.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div
      className="bg-[#fafafa] lg:px-14 px-4  dark:bg-[#181818] dark:text-white"
      id="testimonials"
    >
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl lg:leading-[68px] font-semibold lg:pt-8">
          How can Digitization{" "}
          <span className="text-logotext">help anyone grow?</span>
        </h2>

        <p className="mt-4  text-base font-semibold">
          Dijitzation has a solution that can help you achieve your digital
          goals
        </p>
      </div>

      <div className="py-10 px-30 m-[auto]  ">
        <Swiper
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          slidesPerGroup={1}
          breakpoints={{
            299: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full pt-20">
          <Image
            className="rounded-lg"
            src={banner1}
            alt="banner img"
            width={400}
            height={300}
          />
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="flex flex-col items-center gap-5 h-full ">
              <Image
                className="rounded-lg"
                src={banner2}
                alt="banner img"
                width={400}
                height={300}
              />
            </div>
            <Image
              className="rounded-lg"
              src={banner4}
              alt="banner img"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
