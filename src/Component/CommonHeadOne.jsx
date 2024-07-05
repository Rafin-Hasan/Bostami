import React from 'react'

export const CommonHeadOne = ({CommonHead}) => {
  return (
    <>
    <div className="relative mb-10">
      <div className="heading text-[36px] text-black font-slab font-bold mb-[15px]">{CommonHead}</div>
      <div className="w-[200px] h-[3px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] mb-[20px] absolute left-[22%] top-[50%] translate-y-[-50%] rounded-md"></div>
    </div>

    </>
  )
}
