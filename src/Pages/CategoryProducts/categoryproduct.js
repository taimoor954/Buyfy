import React from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts, clearProducts } from "./../../Redux/Products/productsAction";
import { useEffect } from "react";
import ProductCard from './../../Components/ProductCard/productCard';

const Categoryproduct = ({match: {params: { categoryCheck },}, fetchCategoryProducts, products, clearProducts}) => {
  useEffect(() => {
    fetchCategoryProducts(categoryCheck);
    return ()=> {
      clearProducts() //CWU
    }
  }, []);
  console.log(products);
  return (
    <div>
      <h1>{categoryCheck} Category product</h1>
      {products.map((product)=> <ProductCard key={product.title} {...product}/>)}
    </div>
  );
};
// var mapState = (store, {match: {params: { categoryCheck }}} ) => ({
//   products: store.products.filter((product)=> product.category === categoryCheck)
// });

var actions = {
  fetchCategoryProducts, 
  clearProducts
};
var mapState = (store) => ({
    products : store.products
})
export default connect(mapState, actions)(Categoryproduct);
