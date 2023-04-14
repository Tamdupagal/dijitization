import Image from "next/image";
import React from "react";
import banner1 from "/public/assets/dash3.png";
import banner2 from "/public/assets/dash2.png";
// import banner3 from "/public/assets/dash3.png";
import logo from "/public/assets/logogo.png";
import logo2 from "/public/assets/dfdf.png";
import { useTheme } from "next-themes";
import { BsArrowRight } from "react-icons/bs";

// <Image src={banner4} alt="banner img" width={400} height={300} />
import Link from "next/link";

const Banner = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-[#f4f7f2] text-center pt-20 px-6 lg:px-20 pb-10 dark:bg-[#0a1424] dark:text-white">
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
        <div className="">
          <button className=" price_cardd py-5 px-8 font-bold bg-[#2b2e4a]  text-white rounded-full mt-12 lg:mb-0 mb-10 hover:bg-logotext hover:text-white ">
            <Link href="/#demo" className="flex flex-row content-center">
              Get Started <BsArrowRight className="text-2xl pl-1"/>
            </Link>
          </button>
        </div>
        {theme === "light" ? (
          <Image src={logo2} alt="dsffsdf" />
        ) : (
          <Image src={logo} alt="dsffsdf" />
        )}
      </div>
    </div>
  );
};

export default Banner;
