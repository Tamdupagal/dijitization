import React, { useState } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";

const Plans = () => {
  const [monthly, setMonthly] = useState(false);
  const [yearly, setYearly] = useState(false);

  const handleMonthlyBtn = () => {
    setMonthly(!monthly);
    setYearly(!monthly);
  };
  const handleYearlyBtn = () => {
    setYearly(!yearly);
    setMonthly(!yearly);
  };

  // console.log(monthly)

  return (
    <div className="text-fontclr bg-[#f5f5f7]  px-5 lg:px-24 pt-24 pb-5 dark:bg-[#0a1424] dark:text-white">
      <div className="text-center   container">
        <h2 className="text-3xl lg:text-4xl leading-[68px] font-semibold pt-8">
          Find the right plan for your
          <span className="text-logotext"> product</span>
        </h2>

        <h2 className="text-base lg:text-base py-3 font-semibold">
          {/* The Best Solutions For Our Clients */}
        </h2>

        <div className="line service-line ">
          <div className="dot dot1"></div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="border-2 border-tomato rounded-lg">
          <button
            onClick={handleMonthlyBtn}
            className={`${
              monthly ? "bg-logotext text-white" : ""
            }  hover:text-white font-bold px-8 py-4 rounded-lg `}
          >
            Monthly
          </button>

          <button
            onClick={handleYearlyBtn}
            className={`${
              !monthly ? "bg-logotext text-white" : ""
            }   hover:text-white font-bold px-8 py-4 rounded-lg`}
          >
            Yearly
          </button>
        </span>
      </div>

      <div>{monthly ? <MonthlyPlan /> : <YearlyPlan />}</div>
    </div>
  );
};

export default Plans;
