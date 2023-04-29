import React from "react";

// <Image src={"/assets/dash.jpg"} alt="Dash" width={1000} height={200}  className="m-[auto] rounded-lg"/>
const Trust = () => {
  return (
    <div className="bg-[#f5f5f7] pt-10 pb-10 relative dark:bg-[#0a1424] dark:text-white ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="  text-white dark:bg-[#15151] dark:text-white p-10 lg:px-20 px-6 w-[90vw] mx-auto lg:h-[280px]  mt-12 rounded-lg grid justify-content-center border-2 border-[#232c3a] dark:border-white ">
          <div className="text-center ">
            <h2 className="text-4xl font-semibold dark:text-white text-[#232c3a] leading-[48px] capitalize">
              the digital transformation partner of
              <br /> choice for organizations everywhere!
            </h2>
            <button className=" py-4 px-10 bg-white text-logotext rounded-full mt-12 font-bold  hover:bg-[#666A7B] hover:text-white ">
              Start Your Free Trail Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
