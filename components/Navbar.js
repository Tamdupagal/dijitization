import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import logo from "../public/logo.png";
import NavTop from "./NavTop";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className="font-semibold px-5  cursor-pointer hover:bg-[#3742fa] hover:text-white py-2 rounded-lg text-lg"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          className="font-semibold px-5  cursor-pointer hover:bg-[#3742fa] hover:text-white py-2 rounded-lg text-lg"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          href="/#services"
          className="font-semibold px-5  cursor-pointer hover:bg-[#3742fa] hover:text-white py-2 rounded-lg text-lg"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          href="/#testimonials"
          className="font-semibold px-5  cursor-pointer hover:bg-[#3742fa] hover:text-white py-2 rounded-lg text-lg"
        >
          Pricing
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav
        className="bg-[#fff]  dark:bg-[#181818] dark:text-white flex items-center z-[99] justify-between py-2 lg:px-20 px-8 fixed w-full  "
        id="home"
      >
        <h2 className="text-[25px] font-bold cursor-pointer flex items-center text-logotext">
          <Image src={logo} alt={"this is logo"} width={50} height={50} />
          <p>Dijitization</p>
        </h2>

        <ul className="hidden lg:flex  lg:flex-row items-center gap-4 ">
          {menuItems}
        </ul>

        <div className="flex ">
          <button
            className="p-2.5 text-[20px]  text-[#606060] px-3 mx-2 rounded-md bg-blue dark:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <button
            href="https://dashboard.dijitization.com/"
            className=" text-[#3742fa] text-lg px-6 py-3 border-[#3742fa] border-2 font-semibold rounded-lg lg:block hidden hover:bg-[#3742fa] hover:text-white"
          >
            Contact Sales
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="block lg:hidden ">
          {!open ? (
            <HiOutlineMenuAlt4 className="text-3xl" />
          ) : (
            <RxCross2 className="text-3xl" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="bg-[#f4f7f2] dark:bg-[#000] text-logotext rounded w-full  z-[9]  py-12 z-100 fixed pt-32 text-center">
          <ul className=" lg:hidden flex flex-col  items-center gap-5 text-center ">
            {menuItems}
            <li>
              <button
                href="/"
                className="bg-logotext w-full px-4 py-2 rounded-lg text-white hover:bg-[#666A7B] hover:text-white"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <hr className="border-4" />
    </>
  );
};

export default Navbar;
