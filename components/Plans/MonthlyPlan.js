import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const MonthlyPlan = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 capitalize">
      <div className="card-border  bg-[#f5f5f7] dark:bg-[#0a1424] border-2 border-white dark:border-[#202e45]  p-8 shadow-lg rounded-lg text-left text-fontclr">
        <h2 className="text-2xl   ">Start Up Plan</h2>
        <h3 className="text-5xl font-bold my-2">$24</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl ">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">10 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Smart Context</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Surveys</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Content Life Cycle Management</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] dark:text-[#202e45] text-white  text-md px-10 py-3 rounded-lg mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border  p-8 bg-[#7980fc] dark:bg-[#202e45] shadow-lg  rounded-lg text-left text-white">
        <div>
          <h2 className="text-2xl  ">
            Growth{" "}
            <span className="rounded-3xl border-2 text-base  float-right px-5  uppercase">
              Popular
            </span>
          </h2>
        </div>
        <h3 className="text-5xl text-tomato font-bold my-2">$59</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl ">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">40 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">4 Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Smart Context</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />{" "}
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Surveys</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Content Life Cycle Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange dark:text-[#202e45] via-[#ff7e62] to-[#ff5f59] text-white  text-md px-10 py-3 rounded-lg mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border  p-8 bg-[#f5f5f7] dark:bg-[#0a1424] shadow-lg border-2 border-white dark:border-[#202e45]  rounded-lg text-left text-fontclr">
        <h2 className="text-2xl  ">Enterprise</h2>
        <h3 className="text-5xl text-tomato font-bold my-2">$89</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl ">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">50 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">5 Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Smart Context</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md  ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Surveys</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">Content Life Cycle Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-md ">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl dark:text-white" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange dark:text-[#202e45] via-[#ff7e62] to-[#ff5f59] text-white  text-md px-10 py-3 rounded-lg mt-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlan;
