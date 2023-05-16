import React from 'react'
import Product1 from './Product1'
import Product2 from './Product2'

function Product() {
    return (
        <div className='container py-5'>
            <div className='row'>
                <Product1 />
                <Product2 />
            </div>
        </div>
    )
}

export default Product
