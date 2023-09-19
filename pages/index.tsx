import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";
import ClassesCard from "@/component/ClassesCard";
import Footer from "@/component/Footer";
import Link from "next/link";
import { useState } from "react";
import Button from "@/component/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loginBtn, setLoginBtn] = useState<boolean>(true)
  return (
    <div className="bg-[#f7d4da] h-screen text-black md:flex md:justify-between md:flex-col">
      <Navbar />

      <div className="w-full max-w-[800px] mx-auto h-[calc(100vh-140px)] overflow-y-auto">
        {
          loginBtn ?
            <div className="px-[25px] flex h-[inherit] justify-center items-center">
              <Button
                ClassName="bg-[#FF5174] border-2 border-[#FF5174] text-white w-36 px-3 py-[15px] rounded-2xl text-[18px] w-full"
                ButtonText="Create Post"
                OnClick={() => setLoginBtn(false)}
              />
            </div> :
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
            </div>
        }
      </div>
      <Footer />
    </div>
  );
}
