import React from 'react'
import getApiData from './UtilsCustomHook';

const CustomHookApp = () => {

  let product = getApiData('https://fakestoreapi.com/products/1');
  return (
    <>
      <h1>Custom Hooks demo</h1>
      <div>{Object.keys(product)}</div>
      <div>{product.title}</div>
      <div>{product.price}</div>
    </>
  )
}

export default CustomHookApp