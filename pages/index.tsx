import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";
import ClassesCard from "@/component/ClassesCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <ClassesCard />
        adad
      </div>
    </div>
  );
}
