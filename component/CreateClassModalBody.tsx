import React, { MouseEventHandler } from "react";
import Input from "./Input";
import Button from "./Button";

interface CreateClassModalBodyProps {
  handleSave: MouseEventHandler<HTMLButtonElement>;
}
const CreateClassModalBody = (props: any) => {
  return (
    <>
      <h1 className="text-lg font-medium leading-8 mt-5 text-center">Create Class</h1>
      <p className="text-sm font-normal text-[#B7B7B7] pb-[23px] text-center">
        If you want to create Quiz please enter Quiz Title
      </p>
      <div className="flex flex-col gap-[27px]">
        <Input
          InputType="text"
          Placeholder="choose collection"
          ClassName="border border-[grey]/[50%] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
        />
        <Input
          InputType="text"
          Placeholder="please enter class title"
          ClassName="border border-[grey]/[50%] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
          ButtonText="Create Class"
          OnClick={props.handleSave}
        />
      </div>
    </>
  );
};

export default CreateClassModalBody;
