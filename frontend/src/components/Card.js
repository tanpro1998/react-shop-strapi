import React from "react";
import { Link } from "react-router-dom";
import { uploadUrl } from "../utils/url";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="flex flex-col gap-2 relative">
        <div className="w-[350px] h-[500px] cursor-pointer overflow-hidden relative">
          <img
            src={uploadUrl + item.attributes?.img?.data?.attributes?.url}
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src={uploadUrl + item.attributes?.img1?.data?.attributes?.url}
            alt=""
            className="w-full h-full object-cover absolute"
          />
        </div>
        <span className=" font-semibold text-lg capitalize">{item?.attributes.title}</span>
        <div className="flex space-x-4">
          <span className="text-gray-500 line-through">
            ${item?.attributes.oldPrice.toFixed(2)}
          </span>
          <span className="font-semibold">
            ${item?.attributes.price.toFixed(2)}
          </span>
        </div>
        {item?.attributes.isNew === true && (
          <div className="absolute top-2 left-2 p-1 bg-white text-green-500 font-semibold">
            New Season
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
