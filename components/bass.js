import Image from "next/image";
import React from "react";
import style from "../styles/Home.module.css";
import banner1 from "/public/assets/dash3.png";
import banner2 from "/public/assets/dash2.png";
import logo from "/public/assets/gap.png";
import logo2 from "/public/assets/hurrah2.png";
import { useTheme } from "next-themes";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-[#f5f5f7] text-center pt-20 px-6 lg:px-20 pb-10 dark:bg-[#0a1424] dark:text-white">
      <div
        className="flex flex-col pt-10 items-center justify-between"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* <h1 className="text-xl uppercase">Drive digital fluency.</h1> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="font-bold"
        >
          <h1 className="lg:text-5xl   text-3xl pt-32">Dijitization</h1>
          <h1 className="lg:text-5xl  text-3xl py-2">
            The Ultimate Digital Adoption Platform
          </h1>
        </motion.div>

        <p className="mt-8 text-lg max-w-2xl font-700 opacity-90 ">
          Dijitzation is a cutting-edge platform designed to help anyone
          streamline and optimize their digital processes.
        </p>
        <div className="pb-10">
          <button className=" price_cardd py-5 px-8 font-bold bg-[#2b2e4a]  text-white rounded-full mt-12 lg:mb-0 mb-10 hover:bg-logotext hover:text-white ">
            <Link href="/#demo" className="flex flex-row content-center">
              Get Started <BsArrowRight className="text-2xl pl-1" />
            </Link>
          </button>
        </div>
        <div className={style.banner}>
          <Image style={{}} src={logo} alt="dsffsdf" />
          {/* <Image src={logo2} alt="dsffsdf" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
