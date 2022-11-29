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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 py-2 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between h-[80px]">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src="/img/en.png" alt="" />
            <ChevronDownIcon className="w-6" />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <ChevronDownIcon className="w-6" />
          </div>
          <div>Men</div>
          <div>Women</div>
          <div>Children</div>
          <div>Accessories</div>
        </div>
        <div className="text-2xl uppercase font-bold">
          <Link to="/">FlashStore</Link>
        </div>
        <div className="flex items-center space-x-8">
          <div>HomePage</div>
          <div>About</div>
          <div>Contact</div>
          <div>Stores</div>
          <div className="flex items-center space-x-4 text-gray-500">
            <MagnifyingGlassIcon className="w-6 cursor-pointer" />
            <UserIcon className="w-6 cursor-pointer" />
            <HeartIcon className="w-6 cursor-pointer" />
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-2 left-4 flex items-center justify-center text-white">
                2
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
