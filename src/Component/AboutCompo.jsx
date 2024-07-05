import React from "react";
import { CommonHeadOne } from "./CommonHeadOne";
import { Info } from "./Info";
import { FaMobileAlt } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CommonHeadTwo } from "./CommonHeadTwo";
import { Skill } from "./Skill";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoGridOutline } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa6";
import { LiaPenAltSolid } from "react-icons/lia";
import { FaListCheck } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export const AboutCompo = () => {
  return (
    <>
      <div className="container">
        <div className="w-full bg-white px-[80px] py-[60px] rounded-xl">
          <CommonHeadOne CommonHead="About Me" />
          <div className="info flex gap-10">
            <div className="image w-[330px] h-[400px] mb-[80px]">
              <img
                className="w-full h-full rounded-[30px] hover:scale-105"
                src="https://elperiodiquito.com/wp-content/uploads/2023/06/Michael-Jakson-1.jpg"
                alt="photo"
              />
            </div>
            <div className="text w-[623px] mb-10">
              <h3 className="text-[26px] font-medium font-poppins text-black mb-[11px]">
                Who Am I?
              </h3>
              <p className="text-[16px] font-normal font-poppins text-[#44566c] mb-[16px]">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
                <br /> <br />
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p>
              <div className="personal py-5">
                <div className="infoHead">
                  <h3 className="text-[28px] font-medium mb-[15px] inline-block font-poppins text-black">
                    Personal Info
                  </h3>
                  <div className="flex flex-wrap px-[15px] ">
                    <Info
                      infoIcon={<FaMobileAlt className="text-[#e93b81]" />}
                      infoText="phone"
                      infoP="+123 456 7890"
                    />
                    <Info
                      infoIcon={<BsEnvelopePaper className="text-[#6ab5b9]" />}
                      infoText="Email"
                      infoP="Example@Mail.Com"
                    />
                    <Info
                      infoIcon={<IoLocationSharp className=" text-[#fd7590]" />}
                      infoText="Location"
                      infoP="Hong Kong China"
                    />
                    <Info
                      infoIcon={
                        <FaRegCalendarAlt className=" text-[#c17ceb]" />
                      }
                      infoText="Birthday"
                      infoP="May 27, 1990"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CommonHeadTwo Common2="What I Do!" />
          <div className="flex flex-wrap mb-[30px] gap-10">
            <Skill
              cardIcon={<LiaSwatchbookSolid className="text-[#d566ff]" />}
              cardColor="bg-[#fff4f4]"
              cardHead="Ui/Ux Design"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
            <Skill
              cardIcon={<IoGridOutline className="text-[#ff6080]" />}
              cardColor="bg-[#eef5fa]"
              cardHead="App Development"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
            <Skill
              cardIcon={<FaCameraRetro className="text-[#8774ff]" />}
              cardColor="bg-[#fff4f4]"
              cardHead="Photography"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
            <Skill
              cardIcon={<LiaPenAltSolid className="text-[#dda10c]" />}
              cardColor="bg-[#fff4f4]"
              cardHead="Graphic Design"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
            <Skill
              cardIcon={<FaListCheck className="text-[#ff75d8]" />}
              cardColor="bg-[#fff4f4]"
              cardHead="Managment"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
            <Skill
              cardIcon={<FaCode className="text-[#007aff]" />}
              cardColor="bg-[#fff4f4]"
              cardHead="Web Development"
              cardP="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
            />
          </div>
        </div>
      </div>
    </>
  );
};
