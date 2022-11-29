import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

const Category = () => {
  const catId = parseInt(useParams().id);
  console.log(catId);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSub, setSelectedSub] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSub(
      isChecked
        ? [...selectedSub, value]
        : selectedSub.filter((item) => item !== value)
    );
  };

  return (
    <div className="px-2 py-3 flex">
      <div className="flex1 sticky top-[100px] h-full">
        <div className="mb-4">
          <h1 className="text-2xl mb-4">Products Categories</h1>
          {data?.map((item) => (
            <div className="flex gap-4" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor={item.id} className="cursor-pointer capitalize">
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl mb-4">Filter by price</h1>
          <div className="flex items-center mb-4 cursor-pointer">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-4">Sort by</h1>
          <div className="flex gap-4">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="flex3">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <List
          catId={catId}
          sort={sort}
          maxPrice={maxPrice}
          subCats={selectedSub}
        />
      </div>
    </div>
  );
};

export default Category;
