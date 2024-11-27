"use client";

import React, { useState } from "react";
import { AskButton, AskQuestion, SearchBar } from "@/components";
import { navLinks } from "@/constants";
import Image from "next/image";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-primary shadow-md sticky top-0 z-50">
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
              active === nav.title ? "text-lightgray" : "text-gray-600 hover:text-amber-500"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="hidden sm:flex flex-1 mx-6">
        <SearchBar  />
      </div>

      {/* Buttons and Ask Question */}
      <div className="hidden sm:flex items-center space-x-4">
      
      <AskButton
      title="Ask Question"
      btnType="button"
      containerStyles="px-4 py-2 text-white bg-dark rounded-full hover:bg-charcoalGray"

      />
        <a href="./register/Login">
          <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px]">
            Log In
          </button>
        </a>
        <a href="./register/Signup">
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
          onClick={() => setToggle((prev)=> !prev)}
        />

      
          <div
          className={`${toggle? 'flex': 'hidden'} p-6 
          bg-blue-gradient absolute top-10 right-0  mx-4 my-2 min-w-[140px]`}
          >
            
            
            <ul className="space-y-4">
            {navLinks.map((nav,index)=>(

                <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  text-white
                ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>

                </li>

                ))} 
              {/* Buttons */}
              <div className="hidden sm:flex items-center space-x-4">
        <AskQuestion />
        <a href="./register/Login">
          <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px]">
            Log In
          </button>
        </a>
        <a href="./register/Signup">
          <button className="px-4 py-2 text-white bg-charcoalGray rounded-[10px]">
            Join Us
          </button>
        </a>
      </div>
            </ul>
          </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
