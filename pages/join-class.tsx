import Button from "@/component/Button";
import ClassesCard from "@/component/ClassesCard";
import CreateClassModalBody from "@/component/CreateClassModalBody";
import Footer from "@/component/Footer";
import Input from "@/component/Input";
import JoinClassModalBody from "@/component/JoinClassModalBody";
import Modal from "@/component/Modal";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const JoinClass = () => {
  const [create, setCreate] = useState("");
  const handleSave = () => {
    setCreate("");
  };
  return (
    <div className="bg-[#ffe6eb] h-screen text-black md:flex md:justify-between md:flex-col">
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
      <div className="w-full max-md:h-[calc(100vh-235px)] md:h-[calc(100vh-68px)] overflow-y-auto">
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
      {/* {create && ( */}
      <Modal create={create} ImgType={create}>
        {create === "Create" ? (
          <>
            <CreateClassModalBody handleSave={handleSave} />
          </>
        ) : (
          <>
            <JoinClassModalBody handleSave={handleSave} />
          </>
        )}
      </Modal>
      {/* )} */}
    </div>
  );
};

export default JoinClass;
