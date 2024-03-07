import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex px-16 py-2 items-center justify-between bg-white 
     shadow-2xl "
    >
      <Image src="/icons/log.svg" width={100} height={100} alt="" />
      <div className="font-bold flex gap-10 items-center">
        <Link href="">Crypto Taxes</Link>
        <Link href=""> Free Tool</Link>
        <Link href="">Resource Center</Link>
        <button className="px-4 py-2 bg-[#1b4aef] text-white rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
