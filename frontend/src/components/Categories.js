import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { uploadUrl } from "../utils/url";

const Categories = () => {
  const { data, loading, error } = useFetch(`/categories?populate=*`);

  return (
    <div className="mt-32 flex flex-col md:flex-row gap-4 p-8">
      {loading
        ? "Loading..."
        : error
        ? "Something went wrong"
        : data?.map((item) => (
            <div
              className="w-full md:w-1/4 h-[500px] mb-8 m-auto relative"
              key={item?.id}
            >
              <img
                src={uploadUrl + item?.attributes.img.data.attributes.url}
                alt=""
                className="w-full h-full object-cover hover:opacity-50 transition duration-100"
              />
              <Link className="link" to={`/products/${item?.id}`}>
                <button className="absolute min-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 right-0 left-0 m-auto cursor-pointer border-none bg-white uppercase font-semibold hover:bg-blue-500 hover:text-white">
                  {item?.attributes.title}
                </button>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Categories;
