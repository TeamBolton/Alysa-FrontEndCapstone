import React from 'react';
import ReactDOM from 'react-dom';

const ProductListEntry = ({index, brand, image_url, name, price, reviews}) => {

  return(
    <li>
      <div>
        <img src={image_url} alt="product picture" width="130" height="130" />
        <div>{brand}</div>
        <div>{name}</div>
        <div>${price}</div>
        <div>({reviews})</div>
      </div>
    </li>

  )
}


export default ProductListEntry;