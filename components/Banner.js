import Image from "next/image";
import React from "react";
import banner1 from "/public/assets/dash3.png";
import banner2 from "/public/assets/dash2.png";
// import banner3 from "/public/assets/dash3.png";
import banner4 from "/public/assets/dash4.png";
          // <Image src={banner4} alt="banner img" width={400} height={300} />

const Banner = () => {
  return (
    <div className="bg-[#f4f7f2] text-center pt-32 px-6 lg:px-20 pb-14 dark:bg-black dark:text-white">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-4xl lg:text-6xl leading-[50px] lg:leading-[80px] font-bold pt-8">
          Welcome to Dijitzation
          <span className="text-logotext">
            <br />
            The Ultimate Digital Adoption Platform
          </span>
        </h2>
        <p className="mt-8 text-md">
          Dijitzation is a cutting-edge platform designed to help anyone
          streamline and optimize their digital processes.<br/> Whether you're an SMB
          or a large enterprise,
          <br /> Dijitzation can help you achieve your digital goals.
        </p>
        <button className="py-4 px-10 bg-logotext text-white rounded-xl mt-12 font-bold hover:bg-[#666A7B] hover:text-white ">
          Request a Demo Today
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full pt-20">
        <Image src={banner1} alt="banner img" width={400} height={300} />
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="flex flex-col items-center gap-5 h-full ">
            <Image src={banner2} alt="banner img" width={400} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
