import React from 'react'

const ProductCard = ({title, cost}) => {
    return (
        <div>
            <h1>{title} -${cost}-<button>Add to cart</button></h1>
        </div>
    )
}

export default ProductCard
