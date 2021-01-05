import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../Redux/Products/productsAction';
import { categorizeProducts } from '../../Utility/productUtility/productUtility';

const Category = ({fetchProducts, categories}) => {
    console.log(categories)
    useEffect(()=>{
        //CDM
        fetchProducts()
    },[])
    return (
        <div>
            <h1>Category page</h1>
        </div>
    )
}
var mapState= (store) => ({categories : categorizeProducts(store.products)})

var actions = {
    fetchProducts
}
export default connect(mapState, actions)(Category)
