import React from 'react';
import ReactDOM from 'react-dom';
import ProductListEntry from './productListEntry.jsx';

const ProductList = ({products}) => {
  return (
    <div>
      {products.map((product, index) => {
        return ( <ProductListEntry
          index={index}
          brand={product.brand}
          image_url={product.image_url}
          name={product.name}
          price={product.price}
          reviews={product.reviews}
        /> )
        }
      )}
    </div>
  )
}


export default ProductList;