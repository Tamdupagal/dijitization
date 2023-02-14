import React, { useEffect, useState, useRef } from "react";
import Testimonial from "./Testimonial";

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
      className="bg-[#fafafa] lg:px-14 px-4 pt-20 dark:bg-black dark:text-white"
      id="testimonials"
    >
      <div className="text-center">
        <h2 className="text-5xl leading-[68px] font-semibold pt-8">
          How can Digitization{" "}
          <span className="text-logotext">help anyone grow?</span>
        </h2>

        <p className="mt-4 text-[#666A7B]">
          Serves wholeheartedly to help others in maintaining healthy tooth and{" "}
          <br /> mouth
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
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
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
