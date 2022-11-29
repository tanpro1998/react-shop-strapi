import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const dataLength = data.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(dataLength - 1)
      : setCurrentSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    currentSlide < dataLength - 1
      ? setCurrentSlide((prev) => prev + 1)
      : setCurrentSlide(0);
  };

  return (
    <div className="sliderH w-screen overflow-hidden relative">
      <div
        className="flex w-[300vw] h-full transition duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" className="w-screen h-full object-cover" />
        <img src={data[1]} alt="" className="w-screen h-full object-cover" />
        <img src={data[2]} alt="" className="w-screen h-full object-cover" />
      </div>
      <div className="flex absolute left-0 right-0 bottom-[100px] m-auto w-fit gap-4">
        <div className="cursor-pointer">
          <ChevronDoubleLeftIcon className="w-10" onClick={prevSlide} />
        </div>
        <div className="cursor-pointer">
          <ChevronDoubleRightIcon className="w-10" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
