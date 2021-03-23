import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { fecthSpecificProduct } from '../../Redux/Products/productsAction';
import ProductCard from '../../Components/ProductCard/productCard';

const Productdetail = ({fecthSpecificProduct, match : {params : {productId}}}) => {
    var [productDetails, setProductDetails] = useState({})
    useEffect(async()=> {
        //CDM
         var productData = await fecthSpecificProduct(productId)
         setProductDetails(productData)
    },[])

    console.log(productId)
    return (
        <div>
            <h1>Product Detail</h1>
            {productDetails.title && < ProductCard {...productDetails}/>} 

        </div>
    )
}
var actions = {
fecthSpecificProduct
}

export default connect(null, actions)(Productdetail)
