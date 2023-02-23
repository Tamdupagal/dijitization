import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className="font-semibold px-5   cursor-pointer hover:text-logotext text-xl"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          className="font-semibold px-5  cursor-pointer hover:text-logotext text-xl"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          href="/#services"
          className="font-semibold px-5  cursor-pointer hover:text-logotext text-xl"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          href="/#testimonials"
          className="font-semibold px-5  cursor-pointer hover:text-logotext text-xl"
        >
          Pricing
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav
        className="bg-[#f4f7f2] dark:bg-black dark:text-white flex items-center justify-between py-4 lg:px-20 px-8 fixed w-full z-[9]"
        id="home"
      >
        <h2 className="text-[25px] font-bold cursor-pointer flex items-center text-logotext">
          {/*   <Image
            src={"/assets/logo.png"}
            alt={"this is logo"}
            width={50}
            height={50}
          /> */}
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
            className="bg-logotext text-white px-6 py-3 rounded-xl lg:block hidden hover:bg-[#666A7B] hover:text-white"
          >
            Get Started
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
        <div className="bg-[#f4f7f2] text-logotext rounded w-full   py-12 z-100 fixed pt-32 text-center">
          <ul className=" lg:hidden flex flex-col items-start gap-5 text-center ">
            {menuItems}
            <li>
              <button
                href="/"
                className="bg-logotext w-full px-4 py-2 rounded-xl text-white hover:bg-[#666A7B] hover:text-white"
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
