import Footer from "@/components/Footer";
import Legacy from "@/components/About";
import Navbar from "@/components/Navbar";
import React from "react";
import Plans from "@/components/Plans/Plans";

const pricing = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <Plans />
      <Footer />
    </div>
  );
};

export default pricing;
