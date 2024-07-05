import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { SocialButton } from "./SocialButton";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const HomeCompo = () => {
  return (
    <>
      <div className="personal-info flex justify-center items-center text-center mt-[30px] flex-col">
        <div className="image w-[280px] h-[280px] mb-[21px]">
          <img
            className="w-full h-full rounded-full "
            src="https://preview.redd.it/u5sslvkyseo91.jpg?width=640&crop=smart&auto=webp&s=303f323775f91d5f14f526946085274cfef92621"
            alt="person"
          />
        </div>
        <div className="image-text">
          <Link to="#" className="text-xl font-medium font-slab text-black">
            Michael Jackson
          </Link>
          <h4 className="text-[14px] font-medium text-[#7b7b7b] mb-[15px] p-[4px 20px] mt-[15px] font-poppins">
            American singer-songwriter and dancer
          </h4>
        </div>
        <div className="social-info mb-[30px] flex gap-[17px] ">
          <SocialButton
            iconLink="https://www.facebook.com/"
            icons={<FaFacebookF className="text-[#1773ea]" />}
          />
          <SocialButton icons={<FaTwitter className="text-[#0d6efd]" />} />
          <SocialButton icons={<FaInstagram className="text-[#e12a72]" />} />
          <SocialButton icons={<FaLinkedinIn className="text-[#144679]" />} />
        </div>
        <div className="btn">
          <a
            href="./images/cv.png"
            download="resume"
            className="px-[24px] flex gap-[10px] justify-center items-center font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white hover:text-black hover:bg-[#fff] font-poppins active:scale-125 transition-all py-[10px] rounded-[50px] text-[16px] text-center"
          >
            {" "}
            <FaDownload /> Download CV{" "}
          </a>
        </div>
      </div>
    </>
  );
};
