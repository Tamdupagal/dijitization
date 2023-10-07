import React from "react";
import Banner from "./Banner";
// import Catagories from './Catagories';
import Footer from "./Footer";
import Legacy from "./About";
import Navbar from "./Navbar";
// import Plans from "./Plans/Plans";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Trust from "./Trust";
import Products from "./Product/Products";
import DigitalAdoption from "./DigitalAdoption";
import Course from "./course/Course";
// import Tabs from "./Tabs";
// import Profes from "./Testimonials/Profes";

const Layouts = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <Banner />
      <Testimonials />
      {/* <Profes /> */}
      <DigitalAdoption />
      <Services />
      {/* <Tabs /> */}
      {/* <Plans /> */}
      {/* <Legacy /> */}
      <Products />
      <Trust />
      <Course/>

      <Footer />
    </div>
  );
};

export default Layouts;
