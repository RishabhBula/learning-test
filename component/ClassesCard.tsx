import React from "react";
import Image from "next/image";
import { clockSvg } from "@/utils/UtilsSVG";
import gridImg1 from "../images/group-img-1.png";
import gridImg2 from "../images/group-img-2.png";
import gridImg3 from "../images/group-img-3.png";
import gridImg4 from "../images/group-img-4.png";
import gridImg5 from "../images/group-img-5.png";
import messageIcon from "../images/message-icon.png";

const ClassesCard = () => {
  return (
    <div className="rounded-[17px] bg-[#fff] p-[25px] ">
      <h2 className="font-medium text-xl pb-[11px]">English Class</h2>
      <div className="flex gap-[9px]">
        <span>{clockSvg}</span>
        <p className="text-[#8A8586] text-xs mb-[18px]">12 sep 2022</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <Image className="object-contain" src={gridImg1} alt="" />
          <Image
            className="relative -left-[5px] object-contain"
            src={gridImg2}
            alt=""
          />
          <Image
            className="relative -left-[10px] object-contain"
            src={gridImg3}
            alt=""
          />
          <Image
            className="relative -left-[15px] object-contain"
            src={gridImg4}
            alt=""
          />
          <Image
            className="relative -left-[20px] object-contain"
            src={gridImg5}
            alt=""
          />
          <div className="relative -left-[25px] border-2 border-[#FFEAEE] bg-[#FF3059] text-[10px] font-bold rounded-[8px] px-2 h-[30px] flex items-center text-white">
            9+
          </div>
        </div>
        <div className="flex gap-2">
          <Image src={messageIcon} alt="" className="object-contain" />
          <span className="text-[16px] text-[#919498]">3</span>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
