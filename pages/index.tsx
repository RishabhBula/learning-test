import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div>sss</div>
    </div>
  );
}
