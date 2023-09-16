import { clockSvg } from "@/utils/UtilsSVG";
import React from "react";

const ClassesCard = () => {
  return (
    <div>
      <h2>English Class</h2>
      <div className="text=[##8A8586]">
        <span>{clockSvg}</span>
        <p>12 sep 2022</p>
      </div>
    </div>
  );
};

export default ClassesCard;
