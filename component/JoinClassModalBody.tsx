import React, { MouseEventHandler } from "react";
import Button from "./Button";
import Input from "./Input";

interface JoinClassModalBodyProps {
  handleSave: MouseEventHandler<HTMLButtonElement>;
}
const JoinClassModalBody = (props: JoinClassModalBodyProps) => {
  return (
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
          OnClick={props.handleSave}
        />
      </div>
    </>
  );
};

export default JoinClassModalBody;
