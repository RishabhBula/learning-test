import { chatSvg } from "@/utils/UtilsSVG";
import Image from "next/image";
import React from "react";
import AvtarImg from "@/images/Avatar.png";
import SunsetImg from "@/images/sunset.png";

const ClassTile = () => {
  return (
    <div className="bg-white rounded-[17px] p-6 mt-[18px]">
      <div className="flex justify-center items-center gap-5 max-md:flex-col">
        <Image className="max-w-[436px] w-full" src={SunsetImg} alt="sunset" />
        <div>
          <div>
            <p className="text-[15px] text-[#B7B7B7]">5 July, 2020</p>
          </div>
          <h2 className="text-lg font-normal leading-8 mt-3">
            Add onboarding in Travel booking app desin.
          </h2>
          <p className="text-sm text-[#272727] font-normal leading-6 mt-3">
            Add onboarding in Travel booking app desin. Travel booking app desin
            Add onboarding desin Add onboarding in Travel in Travel.
          </p>
          <div className="flex gap-1 items-center mt-8 text-[#919498] justify-between items-center">
            <div className="flex gap-[10px] w-max">
              <Image src={AvtarImg} alt="avtar" />
              <input className="w-9/12" type="text" placeholder="Blanca Hill" />
            </div>
            <div className="flex items-center">
              <span>{chatSvg}</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTile;
