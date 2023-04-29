import React from "react";
import Image from "next/image";
import logo from "../public/assets/self.png";
import log2 from "../public/assets/se2.png";
import log3 from "../public/assets/se1.png";
import log4 from "../public/assets/se3.png";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="lg:px-20 ">
        <div className="flex flex-wrap">
                <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

          <div className="w-full">
            <ul
              className="flex mb-0 list-none justify-center py-4 flex-wrap gap-2 pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="  text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? " dark:text-white bg-blueGray-600"
                      : "text-blueGray-600 dark:bg-white dark:text-black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Self help
                </a>
              </li>
              <li className=" text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "dark:text-white  bg-blueGray-600"
                      : "text-blueGray-600  bg-white dark:text-black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Flows
                </a>
              </li>
              <li className=" text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "dark:text-white bg-blueGray-600"
                      : "text-blueGray-600 bg-white dark:text-black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Pop-ups
                </a>
              </li>
              {/* <li className=" text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "dark:text-white bg-blueGray-600"
                      : "text-blueGray-600 dark:text-black bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Pop-ups
                </a>
              </li> */}
            </ul>

            <div className="relative flex flex-col min-w-0 break-words py-5  w-full mb-6  rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="flex flex-col lg:flex-row ">
                      <div className="self-center py-2">
                        <p className="text-xl ">Self Help</p>
                        <p className="mt-3 dark:text-[#f4f7f2] text-lg break-normal	 ">
                          Knowledge bases are built directly into the in-app
                          experience, putting each user in charge of their own
                          development.
                        </p>
                      </div>
                      <div>
                        <Image src={log3} width="50%" className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="flex flex-col lg:flex-row ">
                      <div className="self-center py-2">
                        <p className="text-xl">Flows</p>
                        <p className="mt-3 dark:text-[#f4f7f2] text-lg px-2">
                          Knowledge bases are built directly into the in-app
                          experience, putting each user in charge of their own
                          development.
                        </p>
                      </div>
                      <div>
                        <Image src={log2} width="50%" className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="flex flex-col lg:flex-row ">
                      <div className="self-center py-2">
                        <p className="text-xl">Pop-ups</p>
                        <p className="mt-3 dark:text-[#f4f7f2] text-lg ">
                          Knowledge bases are built directly into the in-app
                          experience, putting each user in charge of their own
                          development.
                        </p>
                      </div>
                      <div>
                        <Image src={log4} width="50%" className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="flex flex-col lg:flex-row ">
                      <div className="self-center py-2">
                        <p className="mt-3 dark:text-[#f4f7f2] text-lg ">
                          Knowledge bases are built directly into the in-app
                          experience, putting each user in charge of their own
                          development.
                        </p>
                      </div>
                      <div>
                        <Image src={log3} width="50%" className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
