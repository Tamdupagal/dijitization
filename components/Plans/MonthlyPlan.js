import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const MonthlyPlan = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 capitalize">
      <div className="card-border bg-white dark:bg-[#151515] price_card p-8  rounded-xl text-left text-fontclr">
        <h2 className="text-2xl font-semibold  ">Start Up Plan</h2>
        <h3 className="text-5xl font-bold my-2">$24</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl font-semibold">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">10 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Smart Context</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl text-red-600" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Surveys</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl text-red-600" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl text-red-600" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">
                Content Life Cycle Management
              </p>
            </div>
            <div>
              <AiOutlineClose className="text-2xl text-red-600" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border price_card p-8 bg-white dark:bg-[#151515]  rounded-xl text-left text-fontclr">
        <div>
          <h2 className="text-2xl font-semibold ">
            Growth{" "}
            <span className="rounded-3xl border-2 text-base  float-right px-5  uppercase">
              Popular
            </span>
          </h2>
        </div>
        <h3 className="text-5xl text-tomato font-bold my-2">$59</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl font-semibold">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">40 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">4 Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Smart Context</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />{" "}
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Surveys</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">
                Content Life Cycle Management
              </p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border price_card p-8 bg-white dark:bg-[#151515]  rounded-xl text-left text-fontclr">
        <h2 className="text-2xl font-semibold ">Enterprise</h2>
        <h3 className="text-5xl text-tomato font-bold my-2">$89</h3>

        <div className="mt-5">
          <div className="flex items-center justify-start mb-0.5">
            <h2 className="text-xl font-semibold">INCLUDES</h2>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">In-app guidance</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">50 user</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">5 Applications</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Smart Context</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold ">Chat Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Task Management</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Surveys</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">User Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">Guidance Analytics</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">
                Content Life Cycle Management
              </p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-start mb-0.5">
              <GoPrimitiveDot />
              <p className="text-lg font-semibold">SSO</p>
            </div>
            <div>
              <AiOutlineCheck className="text-2xl text-green-700" />
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MonthlyPlan;
