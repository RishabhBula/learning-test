import {
  createSvg,
  postIconSvg,
  rewardsSvg,
  threeDotsSvg,
} from "@/utils/UtilsSVG";
import { link } from "fs";
import Link from "next/link";
import React from "react";

function Footer() {
  const footerList = [
    {
      id: 1,
      title: "Posts",
      svgImg: postIconSvg,
    },
    {
      id: 2,
      title: "Rewards",
      svgImg: rewardsSvg,
    },
    {
      id: 3,
      title: "Create",
      svgImg: createSvg,
    },
    {
      id: 4,
      title: "More",
      svgImg: threeDotsSvg,
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[800px] w-full py-[18px] px-[40px] flex justify-between mx-auto">
        {footerList.map((item) => {
          return (
            <Link key={item.id} href="/">
              <div className="flex justify-center flex-col items-center">
                {item.svgImg}
                <p className="text-[13.5px] font-medium text-[#8F8F90] pt-2">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
