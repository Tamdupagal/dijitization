import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import logo from "../public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [start, setStart] = useState(false);

  const toggleDropdown = () => {
    setStart(!start);
  };

  const menuItems = (
    <>
      {/* <li>
        <Link
          href="/"
          onClick={() => setOpen(!open)}
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[14px]"
        >
          Home
        </Link>
      </li> */}

      <li onClick={toggleDropdown}>
        <div className="relative ">
          <button
            type="button"
            className="inline-flex items-center  gap-x-1 text-[16px] font-semibold leading-6 text-gray-900"
            aria-expanded="false"
          >
            <span className="dark:text-[#fff]"> Product</span>
            <RiArrowDownSLine className="text-xl dark:text-[#fff]" />
          </button>

          {start && (
            <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-lg bg-white dark:bg-[#0a1424] dark:text-white  text-sm leading-6 shadow-2xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-[#0a1424] dark:text-white">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <a href="#" className="font-semibold dark:text-white">
                        Analytics
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 dark:text-white">
                        Get a better understanding of your traffic
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-[#0a1424] dark:text-white">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                    </div>
                    <div>
                      <a href="#" className="font-semibold dark:text-white">
                        Engagement
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 dark:text-white">
                        Speak directly to your customers
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex gap-x-6 rounded-lg p-4 dark:hover:bg-[#0a1424] dark:text-white hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                        />
                      </svg>
                    </div>
                    <div>
                      <a href="#" className="font-semibold dark:text-white">
                        Security
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 dark:text-white">
                        Your customers&#039; data will be safe and secure
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex gap-x-6 rounded-lg p-4 dark:hover:bg-[#0a1424] dark:text-white hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    <div>
                      <a href="#" className="font-semibold dark:text-white">
                        Automations
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 dark:text-white">
                        Build strategic funnels that will convert
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact sales
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </li>

      <li>
        <Link
          onClick={() => setOpen(!open)}
          href="/#services"
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[16px]"
        >
          Why Dijitization
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={() => setOpen(!open)}
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[16px]"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(!open)}
          href="/pricing"
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[16px]"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(!open)}
          href="/pricing"
          className="font-semibold px-5  cursor-pointer hover:dark:bg-[#444444] hover:bg-[#ebecff]  py-2 rounded-lg text-[16px]"
        >
          Resources
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav
        className="bg-[#f5f5f7] backdrop-filter backdrop-blur-lg bg-opacity-70  dark:bg-[#0a1424]  dark:text-white flex items-center z-[99] justify-between py-4 lg:px-20 px-4 fixed w-full"
        id="home"
      >
        <Link
          href="/"
          className="text-[22px] font-bold cursor-pointer flex items-center dark:text-white"
        >
          <Image src={logo} alt={"this is logo"} width={50} height={50} />
          <p>Dijitization</p>
        </Link>

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
          <Link
            href="/contact-sales"
            className=" text-[#3742fa] text-[14px] px-6 py-2 border-[#3742fa] border-2 font-semibold rounded-lg lg:block hidden hover:bg-[#3742fa] hover:text-white"
          >
            Contact Sales
          </Link>
          <button onClick={() => setOpen(!open)} className="block lg:hidden ">
            {!open ? (
              <HiMenuAlt3 className="text-3xl" />
            ) : (
              <RxCross2 className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="bg-[#f5f5f7] dark:bg-[#000] text-logotext rounded w-full  z-[9]  py-12 z-100 fixed pt-32 text-center">
          <ul className=" lg:hidden flex flex-col  items-center gap-5 text-center ">
            {menuItems}
            <li>
              <Link
                href="/contact-sales"
                className="bg-logotext w-full px-4 py-2 rounded-full text-white hover:bg-[#666A7B] hover:text-black"
              >
                Contact Sales
              </Link>
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
