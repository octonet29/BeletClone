'use client'
import React from "react";
import TopSlider from "@/data/TopSlider";
import BottomSlider from "@/data/BottomSlider";
import Image from "next/image";

const Slider:React.FC = ():JSX.Element => {
  return (
    <div className="relative mt-20 before:absolute before:left-0 before:top-0 before:bottom-0 before:z-10 before:w-2/4 before:bg-gradient-to-r from-[#19191f] to-[#19191f00] before:from-dark-background-default after:absolute after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-2/4 after:bg-gradient-to-l  from-[#19191f] to-[#19191f00] after:from-dark-background-default">
      <div className="  w-full overflow-x-hidden text-[0px] [&>ul>li>div]:rounded-md [&>ul>li]:w-[68.75vw] [&>ul>li]:max-w-xs md:[&>ul>li]:w-[35vw] lg:[&>ul>li]:w-[40vh]">
        <ul className="animate-scrollX shrink-0 w-full	inline-block h-fit list-none space-x-4 whitespace-nowrap ">
          {TopSlider.map((item) => (
            <li className="-items inline-block" key={item.id}>
              <div className="aspect-w-3 aspect-h-2 w-full ">
                <Image
                  src={item.image}
                  alt="slider image"
                  width={100}
                  height={100}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" direction-reverse  mt-4 w-full overflow-x-hidden text-[0px] [&>ul>li>div]:rounded-md [&>ul>li]:w-[68.75vw] [&>ul>li]:max-w-xs md:[&>ul>li]:w-[35vh] lg:[&>ul>li]:w-[40vh]">
        <ul className="animate-scrollX shrink-0	inline-block	w-full animation-delay-300 direction-reverse  h-fit list-none space-x-4 whitespace-nowrap">
          {BottomSlider.map((item) => (
            <li className="-items inline-block" key={item.id}>
              <div className="aspect-w-3 aspect-h-2 w-full ">
                <Image
                  src={item.image}
                  alt="slider image"
                  width={100}
                  height={100}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
