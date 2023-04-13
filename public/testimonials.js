import { SiHandshake } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiUserStarFill } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaExchangeAlt } from "react-icons/fa";

export const testData = [
  {
    _id: 101,
    name: "Digital Transformation",
    review:
      "Digital Transformation Adopt new technology without a dip in productivity",
    ratings: 5,
    img: <SiHandshake />,
  },
  {
    _id: 102,
    name: "Change Management",
    review: "Manage enterprise change with efficiency",
    ratings: 5,
    img: <FaExchangeAlt />,
  },
  {
    _id: 103,
    name: "Remote Training",
    review: "Train remote team members with in-app learning",
    ratings: 5,
    img: <HiComputerDesktop />,
  },
  {
    _id: 104,
    name: "User Adoption",
    review: "Increase user adoption of your enterprise software",
    ratings: 5,
    img: <RiUserStarFill />,
  },
  {
    _id: 105,
    name: "Employee Onboarding",
    review: "Onboard new hires faster with in-app training",
    ratings: 5,
    img: <SiHandshake />,
  },
  {
    _id: 106,
    name: "Performance Support",
    review: "Improve employee productivity with self-service support",
    ratings: 5,
    img: <BiSupport />,
  },
];
