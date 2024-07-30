"use client"
import { useState } from "react";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgb(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))] blur-md z-0"></div>
            <Image
              src={logoImage}
              alt="logo"
              className="relative h-12 w-12 z-10"
            />
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden" onClick={toggleMenu}>
            <MenuIcon className="text-white cursor-pointer" />
          </div>

          {/* for bigger screens */}
          <nav className="gap-6 hidden sm:flex items-center">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Features
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Updates
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Help
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Customers
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
              Get for free
            </button>
          </nav>
        </div>

        {/* for smaller screens */}
        {isMenuOpen && (
          <nav className="sm:hidden flex flex-col items-end gap-4 mt-4 animate-fade-in p-2">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 animate-slide-in  font-medium text-lg">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 animate-slide-in  font-medium text-lg">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 animate-slide-in  font-medium text-lg">Updates</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 animate-slide-in  font-medium text-lg">Help</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 animate-slide-in  font-medium text-lg">Customers</a>
          </nav>
        )}
      </div>
    </div>
  );
};


