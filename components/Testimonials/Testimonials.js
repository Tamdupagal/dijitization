import React, { useEffect, useState, useRef } from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";
// import React from "react";
import banner1 from "/public/assets/dashb.png";
import banner2 from "/public/assets/dashc.png";
// import banner3 from "/public/assets/dash.png";
import banner4 from "/public/assets/dasht.png";
import { testData } from "@/public/testimonials";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div
      className="bg-[#f5f5f7] lg:px-32 px-4   dark:bg-[#0a1424] dark:text-white"
      id="testimonials"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl lg:leading-[68px] font-semibold lg:pt-8">
          How can Digitization{" "}
          <span className="text-logotext">help anyone grow?</span>
        </h2>
              <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>


        <p className="mt-4  text-base font-semibold">
          Dijitzation has a solution that can help you achieve your digital
          goals
        </p>
      </div>

      <div className="py-10  m-[auto]  ">
        <Swiper
          loop={true}
          Pagination={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper  "
        >
          {testData.map((testData) => (
            <SwiperSlide key={testData._id}>
              <Testimonial testDataa={testData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full pb-10">
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
      </div> */}
      </div>
      </div>
  );
};

export default Testimonials;
