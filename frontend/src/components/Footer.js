import React from "react";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="flex gap-10">
        <div className="flex flex-col flex-1">
          <h1 className="text-xl mb-2 text-gray-900">Categories</h1>
          <div className="flex flex-col space-y-4 text-gray-500">
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-xl mb-2 text-gray-900">Links</h1>
          <div className="flex flex-col space-y-4 text-gray-500">
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl mb-2 text-gray-900">About</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aliquam nihil voluptatum, natus veritatis maiores soluta dicta
            blanditiis maxime culpa!
          </span>
        </div>
        <div className="flex-1">
          <h1 className="text-xl mb-2 text-gray-900">Contact</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aliquam nihil voluptatum, natus veritatis maiores soluta dicta
            blanditiis maxime culpa!
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl uppercase text-blue-400 font-bold">
            FlashStore
          </h1>
          <span>Copyright by FLash.</span>
        </div>
        <div>
          <img src="/img/payment.png" alt="" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
