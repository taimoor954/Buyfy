import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchProducts, clearProducts } from '../../Redux/Products/productsAction';
import { categorizeProducts } from '../../Utility/productUtility/productUtility';
import CategoryList from './../../Components/CategoryList/categoryList';

const Category = ({clearProducts}) => {
    useEffect(() => {
        return () => {
        //CWU
        clearProducts()
        }
    }, [])
    return (
        <div>
            <h1>Category page</h1>
            <CategoryList/>
        </div>
    )
}

var actions = {
    clearProducts
}
export default connect(null,actions)(Category)
