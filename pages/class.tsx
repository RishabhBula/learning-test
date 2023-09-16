import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/Button";
import Navbar from "@/component/Navbar";
import SunsetImg from "@/images/sunset.png";
import AvtarImg from "@/images/Avatar.png";
import { chatSvg, textSvg } from "@/utils/UtilsSVG";
import Footer from "@/component/Footer";
import Modal from "@/component/Modal";
import Input from "@/component/Input";

const Class = () => {
  const [create, setCreate] = useState("");
  return (
    <div>
      <Navbar />
      <div className="flex justify-start gap-2 items-center mt-5">
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-1 rounded-2xl"
          ButtonText="New Post"
          SVGType="Plus"
          OnClick={() => setCreate("Create")}
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-1 rounded-2xl"
          ButtonText="Filter"
          SVGType="Filter"
        />
      </div>
      <div className="flex justify-center items-center mt-8">
        <Image src={SunsetImg} alt="sunset" />
        <h2 className="text-xl font-normal leading-8 mt-3">
          Add onboarding in Travel booking app desin.
        </h2>
        <p className="text-sm text-[#272727] font-normal leading-6 mt-3">
          Add onboarding in Travel booking app desin. Travel booking app desin
          Add onboarding desin Add onboarding in Travel in Travel.
        </p>
        <div className="flex max-md:flex-col gap-1 items-center mt-8 text-[#919498]">
          <Image src={AvtarImg} alt="avtar" />
          <div>
            <input className="w-9/12" type="text" placeholder="Blanca Hill" />
            <span>{chatSvg}</span>
            <span>3</span>
          </div>
        </div>
      </div>
      <Footer />
      <Modal create={create} ImgType={create}>
        {create === "Create" && (
          <>
            <h1 className="text-xl font-medium leading-8 mt-5">New Post</h1>
            <p className="text-sm font-normal text-[#B7B7B7] pb-[23px]">
              Please select your post type and share your post
            </p>
            <div className="flex gap-[27px]">
              <span className="bg-[#FF5174]">{textSvg}</span>
              <span className="bg-[#FF5174]">{textSvg}</span>
            </div>
            <Button
              ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
              ButtonText="Create Post"
              OnClick={() => setCreate("")}
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export default Class;
