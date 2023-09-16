import React from "react";
import Image from "next/image";
import Button from "@/component/Button";
import Navbar from "@/component/Navbar";
import SunsetImg from "@/images/sunset.png";
import AvtarImg from "@/images/Avatar.png";
import { chatSvg } from "@/utils/UtilsSVG";

const Class = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-start gap-2 items-center mt-5">
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-1 rounded-2xl"
          ButtonText="New Post"
          SVGType="Plus"
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-1 rounded-2xl"
          ButtonText="Filter"
          SVGType="Filter"
        />
      </div>
      <div className=" justify-center items-center mt-8">
        <Image src={SunsetImg} alt="sunset" />
        <h2 className="text-xl font-normal leading-8 mt-3">
          Add onboarding in Travel booking app desin.
        </h2>
        <p className="text-sm text-[#272727] font-normal leading-6 mt-3">
          Add onboarding in Travel booking app desin. Travel booking app desin
          Add onboarding desin Add onboarding in Travel in Travel.
        </p>
        <div className="flex gap-1 items-center mt-8 text-[#919498]">
          <Image src={AvtarImg} alt="avtar" />
          <input className="w-9/12" type="text" placeholder="Blanca Hill" />
          <span>{chatSvg}</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default Class;
