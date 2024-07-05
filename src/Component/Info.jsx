import React from "react";

export const Info = ({ infoIcon, infoText, infoP }) => {
  return (
    <>
      <div className="flex pt-[10px] pb-[10px] flex-wrap items-center gap-[10px] w-[240px] ">
        <div className="text-[22px] font-black w-[35px] h-[35px] leading-[35px] flex justify-center items-center bg-white rounded-lg text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white">
          {infoIcon}
        </div>
        <div className=" flex flex-col justify-start items-start">
          <span className="text-[12px] font-normal leading-[18px] text-[#44566c] inline-block">
            {infoText}
          </span>
          <p className="text-[14px] font-poppins font-normal text-black leading-[24px] ">
            {infoP}
          </p>
        </div>
      </div>
    </>
  );
};
