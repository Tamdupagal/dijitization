import ThankYouPage from "@/components/ThankYou";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const thankyou = () => {
  return (
    <div>
      <Navbar />
      <ThankYouPage />
      <Footer />
    </div>
  );
};

export default thankyou;
