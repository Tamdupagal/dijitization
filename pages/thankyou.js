import ThankYouPage from "@/components/ThankYou";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const thankyou = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <ThankYouPage />
      <Footer />
    </div>
  );
};

export default thankyou;
