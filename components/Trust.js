import React from "react";

// <Image src={"/assets/dash.jpg"} alt="Dash" width={1000} height={200}  className="m-[auto] rounded-xl"/>
const Trust = () => {
  return (
    <div className="bg-[#fafafa] pt-10 pb-10 relative dark:bg-black dark:text-white">
      <div className="bg-secondary text-white dark:bg-[#15151] dark:text-white p-10 lg:px-20 px-6 w-[90vw] mx-auto lg:h-[280px]  mt-12 rounded-xl grid justify-content-center ">
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 trust-bg">
          <h2 className="text-4xl font-semibold leading-[48px] capitalize">
            the digital transformation partner of
            <br /> choice for organizations everywhere!
          </h2>
          <button className=" py-4 px-10 bg-white text-logotext rounded-xl mt-12 font-bold  hover:bg-[#666A7B] hover:text-white ">
            Request a Demo Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trust;
