import React from "react";
import Image from "next/image";
import { clockSvg } from "@/utils/UtilsSVG";
import gridImg1 from "../images/group-img-1.png";
import gridImg2 from "../images/group-img-2.png";
import gridImg3 from "../images/group-img-3.png";
import gridImg4 from "../images/group-img-4.png";
import gridImg5 from "../images/group-img-5.png";
import messageIcon from "../images/message-icon.png";
import { useRouter } from "next/router";

const ClassesCard = () => {
  const router = useRouter();
  return (
    <div className="rounded-[17px] bg-[#fff] p-[25px] ">
      <h2 className="font-medium text-xl pb-[11px]">English Class</h2>
      <div className="flex gap-[9px]">
        <span>{clockSvg}</span>
        <p className="text-[#8A8586] text-xs mb-[18px]">12 sep 2022</p>
      </div>
      {(router.pathname === "/create-class" ||
        router.pathname === "/join-class") && (
        <div className="mb-3">
          <button
            type="button"
            className="mx-3 rounded-full bg-[#3b71ca]/[0.3] font-semibold px-6 pb-2 pt-2.5 text-xs text-[#3b71ca]"
          >
            Design
          </button>
          <button
            type="button"
            className="mx-3 rounded-full bg-[#d42a46]/[0.3] font-semibold px-6 pb-2 pt-2.5 text-xs text-[#d42a46]"
          >
            Research
          </button>
        </div>
      )}
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
