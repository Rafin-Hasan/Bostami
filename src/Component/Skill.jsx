import React from "react";
export const Skill = ({ cardHead, cardIcon, cardP, cardColor }) => {
  return (
    <>
      <div
        className={`w-[296px] hover:scale-110 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ${cardColor} px-5 pt-5 pb-[15px] flex gap-[20px] rounded-xl mb-[30px]`}
      >
        <div className="image-col text-[35px] font-light">{cardIcon}</div>
        <div className="text-col">
          <h3 className="text-[22px] font-poppins font-medium mb-[10px] text-black">
            {cardHead}
          </h3>
          <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#44566c]">
            {cardP}
          </p>
        </div>
      </div>
    </>
  );
};
