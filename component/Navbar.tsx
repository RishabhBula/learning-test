import { bellSvg, hamburgerSvg } from "@/utils/UtilsSVG";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#fff]">
      <div>{hamburgerSvg}</div>
      <h1>App Name</h1>
      <div>{bellSvg}</div>
    </div>
  );
};

export default Navbar;
