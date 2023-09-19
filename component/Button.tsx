import React, { MouseEventHandler } from "react";
import { filterSvg, plusSvg } from "@/utils/UtilsSVG";

interface ButtonProps {
  ClassName: string;
  ButtonText: string;
  SVGType?: "Plus" | "Filter" | undefined;
  OnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button = ({ ClassName, ButtonText, SVGType, OnClick }: ButtonProps) => {
  return (
    <button
      onClick={OnClick}
      className={`flex justify-evenly items-center ${ClassName}`}
    >
      {SVGType && (
        <span>
          {SVGType === "Plus" ? plusSvg : SVGType === "Filter" ? filterSvg : ""}
        </span>
      )}
      <span className="text-base font-medium leading-7">{ButtonText}</span>
    </button>
  );
};

export default Button;
