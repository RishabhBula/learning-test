import {
  createSvg,
  postIconSvg,
  rewardsSvg,
  threeDotsSvg,
} from "@/utils/UtilsSVG";
import { link } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const router = useRouter();
  const footerList = [
    {
      id: 1,
      title: `${router.pathname === "/class" ? "Posts" : "Groups"}`,
      herf: `${router.pathname === "/class" ? "/class" : "/"}`,
      svgImg: postIconSvg,
    },
    {
      id: 2,
      title: `${router.pathname === "/class" ? "Rewards" : "Join"}`,
      herf: `${router.pathname === "/class" ? "#" : "/join-class"}`,
      svgImg: rewardsSvg,
    },
    {
      id: 3,
      title: "Create",
      herf: `${router.pathname === "/class" ? "/new-post" : "/create-class"}`,
      svgImg: createSvg,
    },
    {
      id: 4,
      title: "More",
      herf: "#",
      svgImg: threeDotsSvg,
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[800px] w-full py-[18px] px-[40px] flex justify-between mx-auto">
        {footerList.map((item) => {
          return (
            <Link key={item.id} href={item.herf}>
              <div
                className={`${
                  router.pathname === item.herf ? "active-item" : ""
                } flex justify-center flex-col items-center`}
              >
                <span>{item.svgImg}</span>
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
