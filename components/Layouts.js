import React from "react";
import Banner from "./Banner";
// import Catagories from './Catagories';
import Footer from "./Footer";
import Legacy from "./About";
import Navbar from "./Navbar";
import Plans from "./Plans/Plans";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Trust from "./Trust";

const Layouts = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <Banner />
          <Testimonials />
      <Services />
      <Plans />
      <Legacy />
      <Testimonials />
      <Trust />
      <Footer />
    </div>
  );
};

export default Layouts;
