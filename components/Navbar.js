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
          onClick={() => setOpen(!open)}
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[14px]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          onClick={() => setOpen(!open)}
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[14px]"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(!open)}
          href="/#services"
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[14px]"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(!open)}
          href="/#testimonials"
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[14px]"
        >
          Pricing
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav
        className="bg-[#f4f7f2]  dark:bg-[#0a1424]  dark:text-white flex items-center z-[99] justify-between py-4 lg:px-20 px-4 fixed w-full"
        id="home"
      >
        <h2 className="text-[22px] font-bold cursor-pointer flex items-center text-logotext">
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
            className=" text-[#3742fa] text-[14px] px-6 py-2 border-[#3742fa] border-2 font-semibold rounded-full lg:block hidden hover:bg-[#3742fa] hover:text-white"
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
                className="bg-logotext w-full px-4 py-2 rounded-full text-white hover:bg-[#666A7B] hover:text-white"
              >
                Contact Sales
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
