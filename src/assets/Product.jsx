import React, { useContext } from 'react'
import { context } from './UseContext';

const Product = () => {
    let data = useContext(context);
    return (
        <div>
            <h1>Product</h1>
            <h2>age: {data.age}</h2>
        </div>
    )
}

export default Product