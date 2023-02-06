import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const YearlyPlan = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
      <div className="card-border bg-white dark:bg-[#151515] price_card p-8  rounded-xl text-left text-fontclr">
        <h2 className="text-2xl font-semibold ">Basic Plan</h2>
        <h3 className="text-5xl text-tomato font-bold my-3">$224</h3>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Audits</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Management</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Copywriting</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Link Building</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Site Migration</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Video Camplaigns</p>
            <AiOutlineClose className="text-2xl text-red-600" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Unlimited SEO Keywords</p>
            <AiOutlineClose className="text-2xl text-red-600" />
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border price_card bg-white dark:bg-[#151515] p-8  rounded-xl text-left text-fontclr">
        <h2 className="text-2xl font-semibold ">Standard Plan</h2>
        <h3 className="text-5xl text-tomato font-bold my-3">$259</h3>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Audits</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Management</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Copywriting</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Link Building</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Site Migration</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Video Camplaigns</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Unlimited SEO Keywords</p>
            <AiOutlineClose className="text-2xl text-red-600" />
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>

      <div className="card-border price_card p-8 bg-white dark:bg-[#151515]  rounded-xl text-left text-fontclr">
        <h2 className="text-2xl font-semibold ">Premium Plan</h2>
        <h3 className="text-5xl text-tomato font-bold my-3">$289</h3>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Audits</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Management</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">SEO Copywriting</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Link Building</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Site Migration</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Video Camplaigns</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Unlimited SEO Keywords</p>
            <AiOutlineCheck className="text-2xl text-green-700" />
          </div>
        </div>

        <button className="bg-gradient-to-t from-orange via-[#ff7e62] to-[#ff5f59] text-white font-semibold text-lg px-10 py-3 rounded-xl mt-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default YearlyPlan;
