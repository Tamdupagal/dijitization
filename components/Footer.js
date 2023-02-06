import Link from "next/link";
import React from "react";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { GrPinterest } from "react-icons/gr";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[fafafa] p-10 px-6 lg:px-20 dark:bg-black dark:text-white">
      <div className="flex lg:flex-row flex-col justify-between gap-10  px-2">
        <div className="flex flex-col  lg:items-start gap-2 justify-between">
          <div>
            <h2 className="text-2xl font-bold cursor-pointer">Dijitization</h2>
            <p className="mt-3  text-lg dark:text-white">
              Our mission is to simplify digital transformation, one step at a
              time. <br />
              We believe that every organization has the potential to unlock the
              power of digital processes,
              and we're here to help you get there.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold ">Useful Links</h2>
            <ul className="flex flex-col justify-start gap-1  mt-3  ">
              <li>
                <Link
                  href="/"
                  className="font-semibold  cursor-pointer hover:text-logotext"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="font-semibold cursor-pointer hover:text-logotext"
                >
                  Feature
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="font-semibold   cursor-pointer hover:text-logotext"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="font-semibold   cursor-pointer hover:text-logotext"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="font-semibold   cursor-pointer hover:text-logotext"
                >
                  How Its Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold ">Address</h2>
            <p className="mt-3  ">
              {" "}
              79 V Mall, Western Express Hwy, Thakur Complex, Kandivali
              East, Mumbai, MH 400101, India.
            </p>
          </div>
         <p className="text-2xl font-bold" >Social Media</p>
          <div className="flex items-center  gap-3 text-white">
           
            <div className="text-2xl  bg-blue-500 hover:bg-tomato  icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
              <span>
                <Link href={"#"}>
                  <FaFacebookF />
                </Link>{" "}
              </span>
            </div>
            <div className="text-2xl  bg-[#1DA1F2] hover:bg-tomato   icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
              <span>
                <Link href={"#"}>
                  {" "}
                  <AiOutlineTwitter />
                </Link>{" "}
              </span>
            </div>
            <div className="text-2xl  bg-[#C13584] hover:bg-tomato   icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
              <span>
                <Link href={"#"}>
                  {" "}
                  <FaPinterestP />
                </Link>
              </span>
            </div>
            <div className="text-2xl  bg-[#007BB5] hover:bg-tomato   icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
              <span>
                <Link href={"#"}>
                  {" "}
                  <AiOutlineInstagram />
                </Link>{" "}
              </span>
            </div>
            <div className="text-2xl bg-[#007BB5] hover:bg-tomato  icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
              <span>
                <Link href={"#"}>
                  <FaLinkedinIn />
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-secondary dark:bg-[#151515] lg:px-12 px-4 py-8 rounded-xl">
          <p className=" py-2 text-xl font-semibold text-white">
            Dijitization Product Demo
          </p>
          <p className=" py-2 text-lg text-white">
            Add your info below and we'll reach out to schedule a product demo.
          </p>
          <div className="py-3 gap-3 flex flex-col">
            <input
              type="name"
              placeholder="FirstName"
              className="  rounded-xl py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border"
            />
            <input
              type="email"
              placeholder="Lastname"
              className="rounded-xl py-3 px-4 w-full bg-secondary dark:bg-[#151515]  border-white border"
            />
            <input
              type="name"
              placeholder="CompanyName"
              className="rounded-xl py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border"
            />
            <input
              type="email"
              placeholder="WorkEmail"
              className="rounded-xl py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border text-white"
            />
            <button className="px-2 py-3 hover:bg-[#666A7B] hover:text-white rounded-xl w-full bg-logotext text-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8 border-1" />

      <div className="text-center text-lg font-semibold">
        <p>&copy; 2023 Dijitization All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
