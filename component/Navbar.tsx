import { bellSvg, hamburgerSvg } from "@/utils/UtilsSVG";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-white md:py-5 justify-between items-center px-[25px] py-3">
        <div className="lg:hidden">{hamburgerSvg}</div>
        <Link href={"/"}>
          <h1 className="text-xl font-medium leading-7">App Name</h1>
        </Link>
        <div className="flex gap-4">
        <div className="max-lg:hidden lg:flex justify-between items-center gap-4">
          <Link className="text-[#000] font-normal hover:opacity-50 animation text-sm text-[grey]" href="/create-class">
            Create class
          </Link>
          <Link className="text-[#000] font-normal hover:opacity-50 animation text-sm text-[grey]" href="/join-class">
            Join class
          </Link>
        </div>
        <div>{bellSvg}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
