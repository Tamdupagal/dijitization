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
    <div className="dark:bg-[#181818] ">
      <div className=" dark:bg-[#161616] bg-[#f4f7f2] rounded-t-[100px]  p-10 px-6 lg:px-20  text-white dark:text-white bga">
        <div className="flex lg:flex-row flex-col justify-between gap-10  px-2">
          <div className="flex flex-col  lg:items-start gap-2 justify-between">
            <div>
              <h2 className="text-2xl font-bold  cursor-pointer text-[#2b2e4a] dark:text-[#f4f7f2]">
                Dijitization
              </h2>
              <p className="mt-3   text-[#2b2e4a] dark:text-[#f4f7f2]">
                Our mission is to simplify digital transformation, one step at a
                time. <br />
                We believe that every organization has the potential to unlock
                the power of digital processes, and we're here to help you get
                there.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold dark:text-[#f4f7f2] text-[#2b2e4a] ">
                Useful Links
              </h2>
              <ul className="flex flex-col justify-start gap-1  mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
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
              <h2 className="text-2xl font-bold dark:text-[#f4f7f2] text-[#2b2e4a]">
                Address
              </h2>
              <p className="mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
                {" "}
                79 V Mall, Western Express Hwy, Thakur Complex, Kandivali East,
                Mumbai, MH 400101, India.
              </p>
            </div>
            <p className="text-2xl font-bold dark:text-[#f4f7f2] text-[#2b2e4a]">
              Social Media
            </p>
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
          <div className="  lg:px-12 py-8 rounded-lg" id="demo">
            <p className=" py-2 text-xl font-bold dark:text-[#f4f7f2] text-[#2b2e4a]">
              Dijitization Product Demo
            </p>
            <p className=" py-2  dark:text-white text-[#2b2e4a] ">
              Add your info below and we'll reach out to schedule a product
              demo.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="py-3 gap-3 flex flex-col">
                <input
                  type="name"
                  placeholder="FirstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  name="firstName"
                  className="  rounded-lg py-3 px-4 w-full  dark:bg-[#2f2f2f] border-[#2b2e4a] border-[1px ]"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  name="lastName"
                  className="rounded-lg py-3 px-4 w-full  dark:bg-[#2f2f2f]  border-[#2b2e4a] border-[1px ]"
                />
                <input
                  type="name"
                  placeholder="CompanyName"
                  value={formData.companyName}
                  name="companyName"
                  onChange={handleInputChange}
                  className="rounded-lg py-3 px-4 w-full  dark:bg-[#2f2f2f] border-[#2b2e4a] border-[1px ]"
                />
                <input
                  type="email"
                  placeholder="WorkEmail"
                  value={formData.workEmail}
                  name="workEmail"
                  onChange={handleInputChange}
                  className="rounded-lg py-3 px-4 w-full  dark:bg-[#2f2f2f] border-[#2b2e4a] border-[1px ] text-white"
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

        <div className="text-center text-lg font-semibold dark:text-[#f4f7f2] text-[#2b2e4a]">
          <p>
            &copy; 2023 Dijitization All Rights Reserved. Powered By{" "}
            <Link href={"https://digitalaidedschool.com"}>
              {" "}
              Digital aided school
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
