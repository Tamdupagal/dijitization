import React, { useEffect, useState, useRef } from "react";
import Testimonial from "./Product";

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
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div
      className="bg-[#fafafa] lg:px-14 px-4 pt-5 dark:bg-black dark:text-white"
      id="testimonials"
    >
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl lg:leading-[68px] font-semibold pt-8">
          Product <span className="text-[#3742fa]"> Specification</span>
        </h2>

        <p className="mt-4 font-semibold">
          Dijitzation offers a range of products to help organizations of all
          sizes unlock <br /> the power of digital transformation. From small
          businesses to large enterprises,
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
      </div>
    </div>
  );
};

export default Testimonials;
