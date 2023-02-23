import React, { useState } from 'react';
import MonthlyPlan from './MonthlyPlan';
import YearlyPlan from './YearlyPlan';

const Plans = () => {
    const [monthly, setMonthly] = useState(false);
    const [yearly, setYearly] = useState(false);

    const handleMonthlyBtn = () => {
        setMonthly(!monthly);
        setYearly(!monthly);
    }
    const handleYearlyBtn = () => {
        setYearly(!yearly)
        setMonthly(!yearly)
    }

    // console.log(monthly)

    return (
      <div className="text-fontclr  px-5 lg:px-24 pt-5 dark:bg-black dark:text-white">
        <div className="text-center   container">
          <h2 className="text-5xl leading-[68px] font-semibold pt-8">
            Pricing <span className="text-logotext"> plans</span>
          </h2>

          <h2 className="text-base lg:text-base py-3 font-semibold">
            The Best Solutions For Our Clients
          </h2>

          <div className="line service-line ">
            <div className="dot dot1"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <span className="border-2 border-tomato rounded-xl">
            <button
              onClick={handleMonthlyBtn}
              className={`${
                monthly ? "bg-logotext text-white" : ""
              }  hover:text-white font-bold px-8 py-4 rounded-xl `}
            >
              Monthly
            </button>

            <button
              onClick={handleYearlyBtn}
              className={`${
                !monthly ? "bg-logotext text-white" : ""
              }   hover:text-white font-bold px-8 py-4 rounded-xl`}
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