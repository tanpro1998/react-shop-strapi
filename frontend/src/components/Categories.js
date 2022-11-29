import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-[10px] m-[10px] mt-32">
      <div className="clm flex flex-col gap-[10px]">
        <div className="clm flex gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="clm flex gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="clm flex flex-col gap-[10px]">
        <div className="clm flex gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="clm flex flex-col gap-[10px] clml">
        <div className="clm flex gap-[10px] relative overflow-hidden">
          <div className="clm flex flex-col gap-[10px]">
            <div className="clm flex gap-[10px] relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="clm flex flex-col gap-[10px]">
            <div className="clm flex gap-[10px] relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="clm flex gap-[10px] relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
