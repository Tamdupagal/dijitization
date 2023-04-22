import Footer from "@/components/Footer";
import Legacy from "@/components/About";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <Legacy />
      <Footer />
    </div>
  );
};

export default about;
