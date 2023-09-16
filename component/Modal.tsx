import React from "react";
import JoinImg from "@/images/join class.png";
import CreateImg from "@/images/careate class.png";
import Image from "next/image";

interface ModalInterface {
  HeaderText?: string;
  ImgType?: "Create" | "Join" | undefined;
  children?: any;
}
const Modal = (props: ModalInterface) => {
  return (
    <div>
      <Image src={CreateImg} alt="Create" />
      {props.children}
    </div>
  );
};

export default Modal;
