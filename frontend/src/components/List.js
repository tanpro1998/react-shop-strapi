import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const List = ({ catId, sort, maxPrice, subCats }) => {
  console.log(sort);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="flex justify-between gap-8 mt-8 flex-wrap ">
      {loading
        ? "Loading"
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
