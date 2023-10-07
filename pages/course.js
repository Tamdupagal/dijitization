import Course from '@/components/course/Course'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
// import ContactSales from "@/components/ContactSales";

const course = () => {
  return (
      <div>
          <Navbar/>
          <Course />
          <Footer/>
    </div>
  )
}

export default course
