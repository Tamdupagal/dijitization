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
    <div className="dark:bg-[#0a1424] ">
      <div className=" dark:bg-[#0a1424] bg-[#f5f5f7]   p-10 px-6 lg:px-20  text-white dark:text-white bga">
        <div className="flex lg:flex-row flex-col justify-between gap-3  px-2">
          <div className="flex flex-col  lg:items-start gap-2 justify-between">
            <div>
              <h2 className="text-2xl   cursor-pointer text-[#2b2e4a] dark:text-[#f4f7f2]">
                Dijitization
              </h2>
              <p className="mt-3   text-[#2b2e4a] dark:text-[#f4f7f2]">
                Our mission is to simplify digital transformation, one step at a
                time. <br />
                We believe that every organization has the potential to unlock
                <br />
                the power of digital processes, and we're here to help you get
                there.
              </p>
            </div>

            <div>
              <h2 className="text-2xl  dark:text-[#f4f7f2] text-[#2b2e4a]">
                Address
              </h2>
              <p className="mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
                {" "}
                79 V Mall, Western Express Hwy, Thakur Complex, Kandivali East,
                Mumbai, MH 400101, India.
              </p>
            </div>
            <p className="text-2xl  dark:text-[#f4f7f2] text-[#2b2e4a]">
              Social Media
            </p>
            <div className="flex items-center  gap-3 text-white">
              <div className="text-2xl  bg-blue-500 hover:bg-tomato  icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-3 ">
                <span>
                  <Link href={"#"}>
                    <FaFacebookF />
                  </Link>{" "}
                </span>
              </div>
              <div className="text-2xl  bg-[#1DA1F2] hover:bg-tomato   icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-3 ">
                <span>
                  <Link href={"#"}>
                    {" "}
                    <AiOutlineTwitter />
                  </Link>{" "}
                </span>
              </div>
              <div className="text-2xl  bg-[#C13584] hover:bg-tomato   icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-3 ">
                <span>
                  <Link href={"#"}>
                    {" "}
                    <FaPinterestP />
                  </Link>
                </span>
              </div>
              <div className="text-2xl  bg-[#007BB5] hover:bg-tomato   icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-3 ">
                <span>
                  <Link href={"#"}>
                    {" "}
                    <AiOutlineInstagram />
                  </Link>{" "}
                </span>
              </div>
              <div className="text-2xl bg-[#007BB5] hover:bg-tomato  icon-bg w-10 h-10 rounded-lg flex items-center justify-center mb-3 ">
                <span>
                  <Link href={"#"}>
                    <FaLinkedinIn />
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="  lg:px-1 py-1 rounded-lg" id="demo">
            <div>
              <h2 className="text-2xl  dark:text-[#f4f7f2] text-[#2b2e4a] ">
                Product{" "}
              </h2>
              <ul className="flex flex-col justify-start gap-1  mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
                <li>
                  <Link
                    href="/"
                    className="  cursor-pointer hover:text-logotext"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className=" cursor-pointer hover:text-logotext"
                  >
                    Feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/page2"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    How Its Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="  lg:px-1 py-1 rounded-lg" id="demo">
            <div>
              <h2 className="text-2xl  dark:text-[#f4f7f2] text-[#2b2e4a] ">
                Explore{" "}
              </h2>
              <ul className="flex flex-col justify-start gap-1  mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
                <li>
                  <Link
                    href="/"
                    className="  cursor-pointer hover:text-logotext"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className=" cursor-pointer hover:text-logotext"
                  >
                    Feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/page2"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    How Its Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="  lg:px-1 py-1 rounded-lg" id="demo">
            <div>
              <h2 className="text-2xl  dark:text-[#f4f7f2] text-[#2b2e4a] ">
                Company{" "}
              </h2>
              <ul className="flex flex-col justify-start gap-1  mt-3 dark:text-[#f4f7f2] text-[#2b2e4a] ">
                <li>
                  <Link
                    href="/"
                    className="  cursor-pointer hover:text-logotext"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className=" cursor-pointer hover:text-logotext"
                  >
                    Feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/page2"
                    className="   cursor-pointer hover:text-logotext"
                  >
                    How Its Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-1" />

        <div className="text-center text-lg  dark:text-[#f4f7f2] text-[#2b2e4a]">
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
