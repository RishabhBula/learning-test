import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";
import ClassesCard from "@/component/ClassesCard";
import Footer from "@/component/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#F8F9FD] h-screen text-black md:bg-[#FF3059] md:flex md:justify-between md:flex-col">
      <Navbar />
      <div className="w-full max-w-[800px] mx-auto h-[calc(100vh-140px)] overflow-y-auto">
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
      </div>
      <Footer />
    </div>
  );
}
