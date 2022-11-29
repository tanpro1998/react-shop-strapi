import React from "react";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProduct from "../components/FeaturedProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="featured" />
      <Categories />
      <FeaturedProduct type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
