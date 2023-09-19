import React, { MouseEventHandler } from "react";
import Input from './Input'
import Button from './Button'

interface LoginInModalBodyProp {
    handleSave: MouseEventHandler<HTMLButtonElement>;
  }

const LoginInModalBody = (props: LoginInModalBodyProp) => {
  return (
    <>
    <h1 className="text-lg font-medium leading-8 mt-5 text-center">Login In</h1>
      <p className="text-sm font-normal text-[#B7B7B7] pb-[23px] text-center">
        Login to join the class
      </p>
      <div className="flex flex-col gap-[27px]">
        <Input
          InputType="text"
          Placeholder="Id"
          ClassName="border border-[grey]/[50%] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
        />
        <Input
          InputType="password"
          Placeholder="Password"
          ClassName="border border-[grey]/[50%] p-4 rounded-[15px] w-full text-sm font-normal text-[#B7B7B7]"
        />
        <Button
          ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
          ButtonText="Join Class"
          OnClick={props.handleSave}
        />
      </div>
    </>
  )
}

export default LoginInModalBody