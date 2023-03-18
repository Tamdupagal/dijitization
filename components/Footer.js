import Link from "next/link";
import React, { useState } from "react";
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
import { useRouter } from "next/router";

const Footer = () => {
  // const [ firstName, setFirstName ] = useState( "" );
  // const [ lastName, setLastName ] = useState( "" );
  // const [ WorkEmail, setWorkEmail ] = useState( "" );
  // const [ CompanyName, setCompanyName ] = useState( "" );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://backend.dijitization.com/registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log(data);
    if (response.ok) {
      router.push("/thankyou");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-secondary p-10 px-6 lg:px-20 dark:bg-[#151515] text-white dark:text-white">
      <div className="flex lg:flex-row flex-col justify-between gap-10  px-2">
        <div className="flex flex-col  lg:items-start gap-2 justify-between">
          <div>
            <h2 className="text-2xl font-bold cursor-pointer text-[#3742fa]">
              Dijitization
            </h2>
            <p className="mt-3  text-lg dark:text-white">
              Our mission is to simplify digital transformation, one step at a
              time. <br />
              We believe that every organization has the potential to unlock the
              power of digital processes, and we're here to help you get there.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3742fa] ">Useful Links</h2>
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
                  href="/page2"
                  className="font-semibold   cursor-pointer hover:text-logotext"
                >
                  How Its Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3742fa]">Address</h2>
            <p className="mt-3  ">
              {" "}
              79 V Mall, Western Express Hwy, Thakur Complex, Kandivali East,
              Mumbai, MH 400101, India.
            </p>
          </div>
          <p className="text-2xl font-bold text-[#3742fa] ">Social Media</p>
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
        <div
          className="bg-secondary dark:bg-[#151515] lg:px-12 py-8 rounded-lg"
          id="demo"
        >
          <p className=" py-2 text-xl font-semibold text-[#3742fa]">
            Dijitization Product Demo
          </p>
          <p className=" py-2 text-lg text-white">
            Add your info below and we'll reach out to schedule a product demo.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="py-3 gap-3 flex flex-col">
              <input
                type="name"
                placeholder="FirstName"
                value={formData.firstName}
                onChange={handleInputChange}
                name="firstName"
                className="  rounded-lg py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border"
              />
              <input
                type="text"
                placeholder="Lastname"
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
                className="rounded-lg py-3 px-4 w-full bg-secondary dark:bg-[#151515]  border-white border"
              />
              <input
                type="name"
                placeholder="CompanyName"
                value={formData.companyName}
                name="companyName"
                onChange={handleInputChange}
                className="rounded-lg py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border"
              />
              <input
                type="email"
                placeholder="WorkEmail"
                value={formData.workEmail}
                name="workEmail"
                onChange={handleInputChange}
                className="rounded-lg py-3 px-4 w-full bg-secondary dark:bg-[#151515] border-white border text-white"
              />
              <button
                type="submit"
                className="px-2 py-3 hover:bg-[#666A7B] hover:text-white rounded-lg w-full bg-logotext text-white "
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="my-8 border-1" />

      <div className="text-center text-lg font-semibold">
        <p>
          &copy; 2023 Dijitization All Rights Reserved. Powered By{" "}
          <Link href={"https://digitalaidedschool.com"}>
            {" "}
            Digital aided school
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
