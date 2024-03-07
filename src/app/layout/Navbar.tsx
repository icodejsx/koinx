"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-2 flex items-center justify-between bg-white shadow-2xl">
      <div className="flex items-center">
        <Image src="/icons/logoo.svg" width={100} height={100} alt="" />
      </div>
      <div className="hidden sm:flex font-bold gap-10 items-center">
        <Link href="">Crypto Taxes</Link>
        <Link href="">Free Tool</Link>
        <Link href="">Resource Center</Link>
        <button className="px-4 py-2 bg-[#1b4aef] text-white rounded-xl">
          Get Started
        </button>
      </div>
      {/* Hamburger Menu Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.01196 9.80613V7.52148H24.5738V9.80613H4.01196ZM4.01196 15.518H24.5738V13.2334H4.01196V15.518ZM4.01196 21.2299H24.5738V18.9452H4.01196V21.2299Z"
                fill="#0B182F"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden pt-10 gap-2 flex flex-col h-auto w-full absolute top-16 right-0 bg-white p-4 space-y-2 shadow-md">
          <Link href="">Crypto Taxes</Link>
          <Link href="">Free Tool</Link>
          <Link href="">Resource Center</Link>
          <div className="inline">
            <button className="px-4 py-2 bg-[#1b4aef] text-white rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
