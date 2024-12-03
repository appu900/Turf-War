import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src="/banner.svg" width={500} height={500} alt="logo" />
      </div>
      <div className="text-center">
        <h1 className="text-6xl  md:tezt-7xl lg:text-8xl font-extrabold text-[#263238]">
          Clash
        </h1>
        <p className="text-2xl font-semibold text-center">
          Discover the better choice togeather
        </p>
        <Link href="/login">
          <Button className="mt-2 bg-[#263238]">Start free</Button>
        </Link>
      </div>
    </div>
  );
}
