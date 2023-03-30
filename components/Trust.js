import React from "react";

// <Image src={"/assets/dash.jpg"} alt="Dash" width={1000} height={200}  className="m-[auto] rounded-lg"/>
const Trust = () => {
  return (
    <div className="bg-[#fafafa] pt-10 pb-10 relative dark:bg-[#181818] dark:text-white ">
      <div className="bg-gradient-to-r from-[#737bfc] via-[#5f68fb] to-[#3742fa]  text-white dark:bg-[#15151] dark:text-white p-10 lg:px-20 px-6 w-[90vw] mx-auto lg:h-[280px]  mt-12 rounded-lg grid justify-content-center ">
        <div className="flex flex-col lg:flex-row items-center justify-between px-10">
          <h2 className="text-4xl font-semibold leading-[48px] capitalize">
            the digital transformation partner of
            <br /> choice for organizations everywhere!
          </h2>
          <button className=" py-4 px-10 bg-white text-logotext rounded-full mt-12 font-bold  hover:bg-[#666A7B] hover:text-white ">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trust;
