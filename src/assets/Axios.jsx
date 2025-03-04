import React, { useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        let res = await axios.get('https://fakestoreapi.com/products');
        console.log(res.data)
    }
    return (
        <div>Axios</div>
    )
}

export default Axios