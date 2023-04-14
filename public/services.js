import { BsBarChartSteps, BsGearWideConnected } from "react-icons/bs";
import { CgPathIntersect } from "react-icons/cg";
import { BiBookContent } from "react-icons/bi";
import { FaUserClock, FaHandshake } from "react-icons/fa";
// import { BsFillClipboardDataFill } from "react-icons/bs";

export const dataT = [
  {
    _id: 1,
    name: "Step by Step Guide",
    desc: "Digital adoption platforms provide an easy-to-follow guide that helps users navigate complex software and applications. This ensures that users get the most out of their technology investment.",
    icon: <BsBarChartSteps />,
  },
  {
    _id: 2,
    name: "Tooltips & Hints:",
    desc: "Tooltips and hints make it easy for users to understand how to perform specific tasks. They can be customized to match the look and feel of the application.",
    icon: <CgPathIntersect />,
  },
  // {
  //   _id: 3,
  //   name: "Contextual Cues",
  //   desc: "Digital adoption platforms can provide cues that are specific to the user's context. This can include information about what the user is currently working on, or tips about how to perform a task more efficiently.",
  //   icon: <BiBookContent />,
  // },
  // {
  //   _id: 4,
  //   name: "User Engagement",
  //   desc: "The step-by-step guides and tooltips provided by digital adoption platforms help to keep users engaged. This leads to higher user satisfaction and better adoption rates.",
  //   icon: <FaUserClock />,
  // },
  {
    _id: 5,
    name: "Improved Onboarding:",
    desc: " A digital adoption platform can streamline the onboarding process by providing new users with an intuitive and straightforward guide to the software or application.",
    icon: <FaHandshake />,
  },
  {
    _id: 6,
    name: "Increased Productivity",
    desc: "By providing users with the tools and information they need to work efficiently, digital adoption platforms can help to increase productivity and improve user performance. This leads to better business results and increased revenue for organizations.",
    icon: <BsGearWideConnected />,
  },
];
