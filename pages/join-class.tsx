import Button from "@/component/Button";
import ClassesCard from "@/component/ClassesCard";
import Footer from "@/component/Footer";
import Input from "@/component/Input";
import Modal from "@/component/Modal";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const JoinClass = () => {
  const [create, setCreate] = useState("");
  return (
    <div className="bg-[#F8F9FD] h-screen text-black md:bg-[#FF3059] md:flex md:justify-between md:flex-col">
      <Navbar />
      <div className="flex justify-center gap-[100px] items-center mt-5 mb-2">
        <Button
          ClassName="bg-[#fff] border-2 border-black w-36 px-5 py-2  rounded-2xl"
          ButtonText="Join"
          OnClick={() => setCreate("Join")}
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-5 py-2  rounded-2xl"
          ButtonText="Create"
          SVGType="Plus"
          OnClick={() => setCreate("Create")}
        />
      </div>
      <div className="w-full max-w-[800px] mx-auto h-[calc(100vh-140px)] overflow-y-auto">
        <div className="my-5 px-[25px] flex gap-[15px] flex-col">
          <Link href={"/class"}>
            <ClassesCard />
          </Link>
          <Link href={"/class"}>
            <ClassesCard />
          </Link>
          <Link href={"/class"}>
            <ClassesCard />
          </Link>
          <Link href={"/class"}>
            <ClassesCard />
          </Link>
        </div>
      </div>
      <Footer />
      {create && (
        <Modal ImgType={create}>
          {create === "Create" ? (
            <>
              <h1 className="text-xl font-medium leading-8 mt-5">
                Create Class
              </h1>
              <p className="text-sm font-normal text-[#B7B7B7] pb-[23px]">
                If you want to create Quiz please enter Quiz Title
              </p>
              <div className="flex flex-col gap-[27px]">
                <Input
                  InputType="text"
                  Placeholder="choose collection"
                  ClassName="border border-[#F1F1F1] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
                />
                <Input
                  InputType="text"
                  Placeholder="please enter class title"
                  ClassName="border border-[#F1F1F1] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
                />
                <Button
                  ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
                  ButtonText="Create Class"
                  OnClick={() => setCreate("")}
                />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-medium leading-8 mt-5">Join Class</h1>
              <p className="text-sm font-normal text-[#B7B7B7] pb-[23px]">
                If you want to start quiz please enter a quiz id
              </p>
              <div className="flex flex-col gap-[27px]">
                <Input
                  InputType="text"
                  Placeholder="please enter class id"
                  ClassName="border border-[#F1F1F1] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
                />
                <Button
                  ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
                  ButtonText="Join Class"
                  OnClick={() => setCreate("")}
                />
              </div>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default JoinClass;
