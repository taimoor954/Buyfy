import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/Products/productsAction';
import { categorizeProducts } from '../../Utility/productUtility/productUtility';
import CategoryList from './../../Components/CategoryList/categoryList';

const Category = () => {
    
    return (
        <div>
            <h1>Category page</h1>
            <CategoryList/>
        </div>
    )
}

export default Category
