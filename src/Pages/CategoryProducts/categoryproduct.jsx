import React from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts, clearProducts } from "../../Redux/Products/productsAction";
import { useEffect } from "react";
import ProductCard from '../../Components/ProductCard/productCard.jsx';
import "./categoryproducts.css"
const Categoryproduct = ({match: {params: { categoryCheck },}, fetchCategoryProducts, products, clearProducts}) => {
  useEffect(() => {
    fetchCategoryProducts(categoryCheck);
    return ()=> {
      clearProducts() //CWU
    }
  }, []);
  return (
    <div className="categoryProducts">
        <div className="categoryProductList">
      <h1 className='category-text additonal-category-text'>{categoryCheck}</h1>

      {products.map((product)=> <ProductCard key={product.title} {...product}/>)} 
        </div>
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
