import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import  ContactSales  from "@/components/ContactSales";

const contact = () => {
  return (
    <div className=" text-[#2b2e4a] bg-[#fafafa]">
      <Navbar />
      <ContactSales />
      <Footer />
    </div>
  );
};

export default contact;
