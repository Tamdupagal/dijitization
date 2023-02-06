import React from "react";
import squire from "/public/assets/Tooth.png";
import heart from "/public/assets/Tooth.png";
import tooth from "/public/assets/Tooth.png";
import check from "/public/assets/Tooth.png";
import Image from "next/image";

const catagoriesData = [
  {
    id: 1,
    numbers: "5000+",
    facility: "Square ft Space",
    icon: squire,
    width: "240",
    height: "180",
  },
  {
    id: 2,
    numbers: "12000+",
    facility: "Dental Implants",
    icon: tooth,
    width: "240",
    height: "180",
  },
  {
    id: 3,
    numbers: "66000+",
    facility: "Dental Crown",
    icon: heart,
    width: "240",
    height: "180",
  },
  {
    id: 4,
    numbers: "40+",
    facility: "Golden Years",
    icon: check,
    width: "160",
    height: "160",
  },
];

const Catagories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-6 pt-18 bg-[#fafafa] catagory_container py-20 dark:bg-black dark:text-white">
      {catagoriesData.map((catagory) => (
        <div
          key={catagory.id}
          className="bg-bule-500 p-8 rounded-xl shadow-lg h-[342px] w-[288px]  text-center flex flex-col items-center"
        >
          <Image
            src={catagory.icon}
            width={catagory.width}
            height={catagory.height}
            alt="reviewer"
          />
          <h3 className="text-3xl font-semibold mt-4 text-[#2B2E4A]">
            {catagory.numbers}
          </h3>
          <p className="text-[#666A7B] mt-5  font-semibold">
            {catagory.facility}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Catagories;
