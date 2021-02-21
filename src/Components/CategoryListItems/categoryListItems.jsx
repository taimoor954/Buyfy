import React from "react";
import ProductCard from "../ProductCard/productCard";
import { Link } from "react-router-dom";

const CategoryListItems = ({ categoryCheck, products }) => {
  return (
    <div>
      <h1>---------------------------------------------------</h1>
      <h1>{categoryCheck}</h1>

      {products.map((product) => (
        <ProductCard {...product} key={product.title} />
      ))}
      <br />
      <Link to={`/category-products/${categoryCheck}`}>
        <button>View More</button>
      </Link>
    </div>
  );
};

export default CategoryListItems;
