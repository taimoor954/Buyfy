import React from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts, clearProducts } from "./../../Redux/Products/productsAction";
import { useEffect } from "react";
import ProductCard from './../../Components/ProductCard/productCard.jsx';

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
// }); //because ager page reload hua tou product show nahi hongay cuz product state may category list say arahi hai and 
//yaha wo use nahi hora tou direct db say fetch karna hoga fetchCategoryProducts is liye use hua hai
//takay category kay basisi per product fetch ho

var actions = {
  fetchCategoryProducts, 
  clearProducts
};
var mapState = (store) => ({
    products : store.products
})
export default connect(mapState, actions)(Categoryproduct);
