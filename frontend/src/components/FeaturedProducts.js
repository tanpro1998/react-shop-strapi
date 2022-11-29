import React, { useState } from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const FeaturesProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 mt-16 mx-32">
        <h1 className=" capitalize flex-1 text-2xl font-bold">
          {type} Products
        </h1>
        <p className="flex-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          culpa a vel quidem asperiores non officia, provident rem, mollitia
          reiciendis, dolore esse. Quia facilis vel distinctio quas accusantium?
          Optio hic sunt natus quas! Dolorem veritatis dolor minus quos amet
          earum saepe aspernatur aperiam enim distinctio soluta numquam
          repellat, minima itaque.
        </p>
      </div>
      <div className="flex space-x-12 justify-center mt-16">
        {loading
          ? "Loading"
          : error
          ? "Something went wrong"
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturesProduct;
