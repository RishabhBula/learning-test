import { hamburgerSvg } from "@/utils/UtilsSVG";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>{hamburgerSvg}</div>
      <span>App Name</span>
      <span>App Name</span>
    </div>
  );
};

export default Navbar;
