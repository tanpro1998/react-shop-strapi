import React, { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="px-4 py-2 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between h-[80px]">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src="/img/en.png" alt="" />
            <ChevronDownIcon className="w-6" />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex items-center">
              <span>USD</span>
              <ChevronDownIcon className="w-6 " />
            </div>
            {menuOpen && (
              <div className="absolute top-10 p-2 border">
                <ul>
                  <li className="hover:bg-gray-300">USD</li>
                  <li className="hover:bg-gray-300">VND</li>
                </ul>
              </div>
            )}
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Men
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Women
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Children
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Accessories
          </div>
        </div>
        <div className="text-2xl uppercase font-bold">
          <Link to="/">FlashStore</Link>
        </div>
        <div className="flex items-center space-x-8">
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            HomePage
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            About
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Contact
          </div>
          <div className="cursor-pointer hover:scale-125 transition duration-75">
            Stores
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <MagnifyingGlassIcon className="w-6 cursor-pointer" />
            <UserIcon className="w-6 cursor-pointer" />
            <HeartIcon className="w-6 cursor-pointer" />
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-2 left-4 flex items-center justify-center text-white">
                {products.length}
              </div>
              <ShoppingCartIcon
                className="w-6 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
