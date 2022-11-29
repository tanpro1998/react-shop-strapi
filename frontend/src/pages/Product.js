import React, { useState } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const imgData = [
    "https://j-p.vn/vnt_upload/news/11_2021/Ao_thun_T-shirt_la_gi.jpg",
    " https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats039s2/ao-thun-nam-aristino-ATS039S2-09x500x500x4.webp",
  ];

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className="flex p-4">
      <div className="clm flex gap-4">
        <div className="clm flex flex-col gap-4">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[180px] object-cover cursor-pointer"
            onClick={() => setSelectedImg("img")}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img1?.data?.attributes?.url
            }
            alt=""
            className="w-full h-[200px] object-cover cursor-pointer"
            onClick={() => setSelectedImg("img1")}
          />
        </div>
        <div className="flex5">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
            className="w-[600px] h-[800px] object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="clm flex flex-col gap-8">
        <h1 className="text-2xl font-bold">{data?.attributes.title}</h1>
        <span className="text-xl text-blue-500 font-semibold">
          ${data?.attributes.price}
        </span>
        <p>
        {data?.attributes.desc}
        </p>
        <div className="flex  items-center space-x-4">
          <button
            className="px-6 py-4 bg-gray-300 cursor-pointer"
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>

          <button
            className="px-6 py-4 bg-gray-300 cursor-pointer"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="p-2 bg-blue-500 w-1/4 flex items-center justify-center gap-4 text-white cursor-pointer hover:bg-blue-700">
          <ShoppingCartIcon className="w-8" />
          <span className="uppercase">Add to cart</span>
        </div>
        <div className="flex space-x-8 text-blue-300 uppercase text-sm">
          <div className="flex items-center gap-2 cursor-pointer">
            <HeartIcon className="w-6" />
            <span>Add to wish list</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ScaleIcon className="w-6" />
            <span>add to compare</span>
          </div>
        </div>
        <div className="flex flex-col text-gray-400 gap-2 text-sm">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className=" uppercase flex flex-col gap-2">
          <span className="border-b-2 w-1/4 pb-2">description</span>
          <span className="border-b-2 w-1/4 pb-2">additional information</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
