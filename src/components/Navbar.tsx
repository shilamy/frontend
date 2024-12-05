"use client";

import React, { useState } from "react";
import { SearchBar } from "@/components";
import { navLinks } from "@/constants";
import Image from "next/image";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { QuestionModal } from "./QuestionModal";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-primary shadow-md sticky top-0 z-50">
      {/* Logo Name */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-white mr-5">EDUCONNECT</h1>
      </div>

      {/* Desktop Navigation */}
      {/* Desktop Navigation */}
<ul className="hidden sm:flex items-center space-x-6">
  {navLinks.map((nav) => (
    <li key={nav.id}>
      <Link
        href={nav.url}
        className={`font-poppins font-medium cursor-pointer text-[16px] ${
          active === nav.title ? "text-lightgray" : "text-gray-600 hover:text-amber-500"
        }`}
        onClick={() => setActive(nav.title)}
      >
        {nav.title}
      </Link>
    </li>
  ))}
</ul>


      {/* Search Bar */}
      <div className="hidden sm:flex flex-1 mx-6">
        <SearchBar />
      </div>

      {/* Buttons and Ask Question */}
      <div className="hidden sm:flex items-center space-x-4">
        <button
          className="px-4 py-2 text-white bg-amber-500 rounded-full hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Ask Question
        </button>
        <a href="/login">
          <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px]">
            Log In
          </button>
        </a>
        <a href="/register">
          <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px]">
            Join Us
          </button>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Menu */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-primary absolute top-14 right-0 mx-4 my-2 min-w-[140px] transition-all duration-300 ease-in-out z-50`}
        >
          <ul className="space-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}>
                  <Link
                  href={nav.url}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-charcoalGray ${
                  active === nav.title ? "mr-0" : "mb-4"
                }`}
                onClick={() => setActive(nav.title)}
              >
                  {nav.title}
                  </Link>
                  </li>
            ))}
            {/* Mobile Buttons */}
            <li>
              <button
                type="button"
                className="px-4 py-2 text-white bg-dark rounded-full hover:bg-charcoalGray w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Ask Question
              </button>
            </li>
            <li>
              <a href="/login">
                <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px] w-full">
                  Log In
                </button>
              </a>
            </li>
            <li>
              <a href="/register">
                <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px] w-full">
                  Join Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Question Modal */}
      {isModalOpen && (
        <QuestionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
