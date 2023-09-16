import React, { ChangeEventHandler, MouseEventHandler } from "react";

interface InputProps {
  ClassName: string;
  SVGType?: "Plus" | "Filter" | undefined;
  InputType: string;
  Placeholder?: string;
  OnClick?: MouseEventHandler<HTMLInputElement> | undefined;
  OnChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
const Input = (props: InputProps) => {
  return (
    <input
      type={props.InputType}
      placeholder={props.Placeholder}
      className={`${props.ClassName}`}
      onClick={props.OnClick}
      onChange={props.OnChange}
    />
  );
};

export default Input;
