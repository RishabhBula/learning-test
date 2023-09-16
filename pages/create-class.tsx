import Button from "@/component/Button";
import Input from "@/component/Input";
import Modal from "@/component/Modal";
import Navbar from "@/component/Navbar";
import React, { useState } from "react";

const CreateClass = () => {
  const [create, setCreate] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center mt-5">
        <Button
          ClassName="bg-[#fff] border-2 border-black w-36 px-5 py-2  rounded-2xl"
          ButtonText="Join"
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-5 py-2  rounded-2xl"
          ButtonText="Create"
          SVGType="Plus"
          OnClick={() => setCreate(!create)}
        />
      </div>
      {create && (
        <Modal>
          <h1 className="text-xl font-medium   leading-8 mt-3">Create Class</h1>
          <p className="text-sm font-normal text-[#B7B7B7]">
            If you want to create Quiz please enter Quiz Title
          </p>
          <Input
            InputType="text"
            Placeholder="choose collection"
            ClassName="border border-black p-2 rounded-2xl w-full text-sm font-normal text-[#B7B7B7]"
          />
          <Input
            InputType="text"
            Placeholder="please enter class title"
            ClassName="border border-black p-2 rounded-2xl w-full text-sm font-normal text-[#B7B7B7]"
          />
        </Modal>
      )}
    </div>
  );
};

export default CreateClass;
