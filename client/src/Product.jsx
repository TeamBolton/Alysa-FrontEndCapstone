import React from 'react';
import ReactDOM from 'react-dom';

const Product = ({index, brand, image_url, name, price, reviews}) => {

  return(
    <div className="product" style={styles.product}>
      <img src={image_url} alt="product picture" width="130" height="130" />
      <div>{brand}</div>
      <div>{name}</div>
      <div>${price}</div>
      <div>({reviews})</div>
    </div>

  )
}

const styles = {
  product: {
    width: '200px',
    height: '300px',
    fontFamily: 'Graphik,"Helvetica Neue",sans-serif'
  }
}

export default Product;