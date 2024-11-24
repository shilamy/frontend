"use client";

import React, { useState } from "react";
import { AskQuestion, SearchBar } from "@/components";
import { navLinks } from "@/constants";
import Image from "next/image";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-secondary shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-white mr-5">EDUCONNECT</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex items-center space-x-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-gray-600 hover:text-amber-500"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="hidden sm:flex flex-1 mx-6">
        <SearchBar />
      </div>

      {/* Buttons and Ask Question */}
      <div className="hidden sm:flex items-center space-x-4">
        <AskQuestion />
        <a href="login">
          <button className="px-4 py-2 text-black bg-primary rounded-[10px]">
            Log In
          </button>
        </a>
        <a href="register">
          <button className="px-4 py-2 text-white bg-primary rounded-[10px]">
            Join Us
          </button>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="absolute top-16 right-4 p-6 bg-black rounded-md shadow-md w-[20%]">
            <ul className="space-y-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-4">
                <a href="login">
                  <button className="w-full px-4 py-2 text-black bg-primary rounded-[10px]">
                    Log In
                  </button>
                </a>
                <a href="register">
                  <button className="w-full px-4 py-2 text-white bg-primary rounded-[10px]">
                    Join Us
                  </button>
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
