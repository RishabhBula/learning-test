import { bellSvg, hamburgerSvg } from "@/utils/UtilsSVG";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-white md:py-5 justify-between items-center">
        <div className="lg:hidden">{hamburgerSvg}</div>
        <h1 className="text-xl font-medium leading-7">App Name</h1>
        <div className="max-md:hidden md:flex justify-between items-center w-2/12 ">
          <Link className="text-[#FF3059] font-medium" href="/create-class">
            Create class
          </Link>
          <Link className="text-[#FF3059] font-medium" href="/join-class">
            Join class
          </Link>
        </div>
        <div>{bellSvg}</div>
      </div>
    </>
  );
};

export default Navbar;
