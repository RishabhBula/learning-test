import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";
import ClassesCard from "@/component/ClassesCard";
import Footer from "@/component/Footer";
import Link from "next/link";
import { useState } from "react";
import Button from "@/component/Button";
import Modal from "@/component/Modal";
import LoginInModalBody from "@/component/LoginInModalBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loginBtn, setLoginBtn] = useState<boolean>(true)
  const [loginModal, setLoginModal] = useState("");
  const [showModal, setShowModal] = useState(false)
  const handleSave = () => {
    setLoginModal(""),
      setShowModal(!showModal)
  };
  return (
    <div className="bg-[#ffe6eb] h-screen text-black md:flex md:justify-between md:flex-col">
      <Navbar />

      <div className="w-full mx-auto max-md:h-[calc(100vh-164px)] md:h-[calc(100vh-68px)]  overflow-y-auto">
        {
          loginBtn ?
            <div className="px-[25px] flex h-[inherit] justify-center items-center">
              <Button
                ClassName="bg-[#FF5174] max-w-[500px] w-full border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
                ButtonText="Login"
                OnClick={() => { setLoginBtn(false), setLoginModal("Login") }}
              />
            </div> :
            <>
              {
                showModal === true ?
                  <div className="my-5 px-[25px] flex gap-[15px] flex-col">
                    <Link href={"/class"}>
                      <ClassesCard />
                    </Link>
                    <Link href={"/class"}>
                      <ClassesCard />
                    </Link>
                    <Link href={"/class"}>
                      <ClassesCard />
                    </Link>
                    <Link href={"/class"}>
                      <ClassesCard />
                    </Link>
                  </div> : <></>
              }
            </>

        }

        <Modal create={loginModal} ImgType={loginModal}>
          <LoginInModalBody handleSave={handleSave} />
        </Modal>


      </div>
      {
        loginBtn === false &&
        <Footer />
      }
    </div>
  );
}
