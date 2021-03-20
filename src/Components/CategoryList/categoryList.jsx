import React, {useEffect} from 'react'
import CategoryListItems from '../CategoryListItems/categoryListItems';
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/Products/productsAction';
import { categorizeProducts } from '../../Utility/productUtility/productUtility';
import "./categoryList.css"

const CategoryList = ({fetchProducts, categories}) => {
    // console.log(categories)
    useEffect(()=>{
        //CDM
        fetchProducts()
    },[])
    return (
        <div className='categoryList'>
            {/* <h1>Catgrory List</h1> */}
            {categories.map((category) => <CategoryListItems key={category.categoryCheck} {...category}/>)}
        </div>
    )
}
var mapState= (store) => ( {categories : categorizeProducts(store.products)})

var actions = {
    fetchProducts
}
export default connect(mapState, actions)(CategoryList)
  