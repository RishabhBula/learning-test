import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/Button";
import Navbar from "@/component/Navbar";
import SunsetImg from "@/images/sunset.png";
import {
  attendanceSvg,
  chatSvg,
  fileSvg,
  linkSvg,
  meetingSvg,
  pollSvg,
  quizSvg,
  reminderSvg,
  taskSvg,
  textSvg,
} from "@/utils/UtilsSVG";
import Footer from "@/component/Footer";
import Modal from "@/component/Modal";
import Input from "@/component/Input";
import ClassTile from "@/component/ClassTile";

const Class = () => {
  const [create, setCreate] = useState("");
  const postModalContet = [
    {
      id: 1,
      title: "Text",
      image: textSvg,
    },
    {
      id: 2,
      title: "File",
      image: fileSvg,
    },
    {
      id: 3,
      title: "Link",
      image: linkSvg,
    },
    {
      id: 4,
      title: "Attendance",
      image: attendanceSvg,
    },
    {
      id: 5,
      title: "Meeting",
      image: meetingSvg,
    },
    {
      id: 6,
      title: "Task",
      image: taskSvg,
    },
    {
      id: 7,
      title: "Reminder",
      image: reminderSvg,
    },
    {
      id: 8,
      title: "Poll",
      image: pollSvg,
    },
    {
      id: 9,
      title: "Quiz",
      image: quizSvg,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-[#ffe6eb] px-5 pt-5 mb-[30px]">
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

        <div className="mt-[30px]">
          <ClassTile />
          <ClassTile />
          <ClassTile />
        </div>
      </div>

      <Footer />
      <Modal create={create} ImgType={create}>
        {create === "Create" && (
          <>
            <h1 className="text-lg font-medium leading-8 mt-5 text-center">New Post</h1>
            <p className="text-sm font-normal text-[#B7B7B7] pb-[23px] text-center">
              Please select your post type and share your post
            </p>
            <div className="grid grid-cols-3 gap-[27px]">
              {postModalContet.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border-2 border-[#FF5174] rounded-[15px] py-[18px] flex justify-center items-center flex-col first:text-white first:bg-[#ff5174] cursor-pointer post-tile"
                  >
                    <span className="">{item.image}</span>
                    <h6 className="first:text-white mt-[5px] text-[14px]">
                      {item.title}
                    </h6>
                  </div>
                );
              })}

              <div></div>
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
