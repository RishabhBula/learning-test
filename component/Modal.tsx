import JoinImg from "@/images/join class.png";
import CreateImg from "@/images/careate class.png";
import Image from "next/image";

interface ModalInterface {
  HeaderText?: string;
  ImgType?: string;
  children?: any;
  create?: string;
}
const Modal = (props: ModalInterface) => {
  return (
    <div
      className={`fixed animation inset-0 bg-gray-500 bg-opacity-75 flex justify-between items-center max-sm:items-end ${
        props.create ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white rounded-[20px] w-[640px] mx-auto px-5 pt-[30px] pb-[50px] ease-linear max-sm:${
          props.create ? "-mb-[15px]" : "-mb-[640px] "
        }`}
      >
        <div className="mx-auto w-max">
          {props.ImgType === "Create" ? (
            <Image src={CreateImg} alt="Create" />
          ) : (
            <Image src={JoinImg} alt="Join" />
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
