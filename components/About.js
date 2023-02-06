import Image from "next/image";
import React from "react";
import plus from "/public/assets/plus.png";

const Legacy = () => {
  return (
    <div
      className="bg-[#fafafa] relative dark:bg-black dark:text-white pt-20"
      id="about"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5  lg:px-36 px-6">
        {/* <div className={"legacy_dentist_bg  flex-1"}>
          <Image
            src={"/assets/logo.png"}
            alt="dentist"
            width={200}
            height={200}
            className="mt-[-348px] ml-0 lg:ml-20 z-50"
          />
        </div>
 */}
        <div className="flex-1">
          <h2 className="text-5xl leading-[68px] font-semibold text-center">
            <h2 className="text-5xl leading-[68px] font-semibold pt-8">
              About <span className="text-logotext"> us</span>
            </h2>
          </h2>
          <p className="py-4 lg:text-4xl capitalize font-400 text-center text-2xl  ">
            the digital transformation partner of choice for organizations
            everywhere!
          </p>

          <div className="flex lg:flex-row flex-col gap-10 py-10">
            <p className="mt-4  text-xl leading-relaxed	">
              Our passion for technology and drive to simplify the digital
              journey has led us to create a platform that's equal parts
              innovative, efficient, and fun. We believe that digital
              transformation should be an exciting and fulfilling experience,
              not a daunting task. That's why we've crafted our Digital Adoption
              Platform with you in mind, providing step-by-step guidance,
              interactive tutorials, and powerful analytics to help you every
              step of the way. At Dijitzation, our team of experts is dedicated
              to helping organizations of all sizes fully embrace the digital
              age. We know that every organization is unique, which is why we
              offer customized solutions tailored to your specific needs. With
              Dijitzation, you'll enjoy the peace of mind that comes with
              knowing you're in good hands.
            </p>
            <Image
              src={"/assets/dash.jpg"}
              alt="Dash"
              width={500}
              height={400}
              className="m-[auto] rounded-xl"
            />
          </div>

          <div className="flex lg:flex-row flex-col gap-10 py-10">
            <Image
              src={"/assets/misvis.png"}
              alt="Dash"
              width={500}
              height={400}
              className="m-[auto] rounded-xl"
            />
            <p className="mt-4  text-xl leading-relaxed	">
              {" "}
              <b>Mission</b>
              <br />
              Our mission is to simplify digital transformation, one step at a
              time. We believe that every organization has the potential to
              unlock the power of digital processes, and we're here to help you
              get there. With Dijitzation, you'll enjoy a seamless digital
              journey that's both engaging and empowering.
              <br /> <b>Vision</b> <br /> Our vision is a world wher e digital
              transformation is effortless and enjoyable for organizations
              everywhere. We see a future where the barriers to digital success
              are lifted, and organizations of all sizes can harness the power
              of digital processes to drive growth, innovation, and success.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col gap-10 py-10">
            <p className="mt-1 text-xl leading-relaxed	">
              {" "}
              In the words of <b>Founder & CEO-Mallikarjun Reddy</b>: "At
              Dijitzation, we're on a mission to make digital transformation as
              smooth as possible where user journey is merrymaking & embraced.
              Our innovative Digital Adoption Platform is designed to guide
              organizations on their journey, providing step-by-step guidance,
              interactive tutorials, and AI-powered analytics to help
              organizations fully embrace the digital age. Join us as we
              revolutionize the way organizations approach digital
              transformation."
            </p>{" "}
            <Image
              src={"/assets/team.jpg"}
              alt="Dash"
              width={500}
              height={400}
              className="m-[auto] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
