import React from "react";
import ProductCard from "../ProductCard/productCard";
import { Link } from "react-router-dom";
import "./categoryListItem.css"

const CategoryListItems = ({ categoryCheck, products }) => {
  return (
    <div className='categoryListItem'>
      {/* <h1>---------------------------------------------------</h1> */}
      <h1 className='category-text'><Link to={`/category-products/${categoryCheck}`}>{categoryCheck}</Link></h1>

      {products.map((product) => (
        <ProductCard {...product} key={product.title} />
      ))}
      <br />
      {/* <Link to={`/category-products/${categoryCheck}`}>
        <button>View More</button>
      </Link> */}
    </div>
  );
};

export default CategoryListItems;
