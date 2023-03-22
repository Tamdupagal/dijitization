import Image from "next/image";
import React from "react";
import banner1 from "/public/assets/dash3.png";
import banner2 from "/public/assets/dash2.png";
// import banner3 from "/public/assets/dash3.png";
import banner4 from "/public/assets/dash4.png";
// <Image src={banner4} alt="banner img" width={400} height={300} />
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[#f4f7f2] text-center pt-32 px-6 lg:px-20 pb-36 dark:bg-[#181818] dark:text-white">
      <div className="flex flex-col pt-10 items-center justify-between">
        <h2 className="text-4xl lg:text-6xl leading-[50px] lg:leading-[80px] font-bold pt-8">
          Dijitzation
          <span className="text-logotext">
            <br />
            The Ultimate Digital Adoption Platform
          </span>
        </h2>
        <p className="mt-8 text-lg max-w-2xl font-700 opacity-90 ">
          Dijitzation is a cutting-edge platform designed to help anyone
          streamline and optimize their digital processes.
          {/*  <br /> Whether you're an SMB or a large enterprise,
          <br /> Dijitzation can help you achieve your digital goals. */}
        </p>
        <div className="flex flex-row gap-6">
          <button className="lg:py-3  py-2 px-5 font-bold bg-[#2b2e4a] lg:text-md text-sm text-white rounded-full mt-12  hover:bg-logotext hover:text-white ">
            <Link href="/#demo">Book my demo</Link>
          </button>
          <button className="lg:py-3 py-2 px-5 bg-white text-logotext rounded-full mt-12 lg:text-md text-sm border border-logotext   ">
            <Link href="/#demo">Book my demo</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
