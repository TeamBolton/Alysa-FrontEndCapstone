import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating.jsx';

const Product = ({index, brand, image_url, name, price, reviews, ratings}) => {
  return(
    <div className="product" style={styles.product}>
      <img src={image_url} alt="product picture" width="130" height="130" />
      <div className="product-brand" style={styles.product_brand}>{brand}</div>
      <div className="product-name" style={styles.product_name}>{name}</div>
      <StarRating ratings={ratings} index={index}/>
      <div className="reviews" style={styles.reviews}>({reviews})</div>
      <div className="product-price" style={styles.product_price}>${price}</div>
    </div>

  )
}

const styles = {
  product: {
    width: '170px',
    height: '300px',
    fontFamily: 'Graphik,"Helvetica Neue",sans-serif'
  },

  product_brand: {
    fontSize: '13px',
    color: 'rgb(41, 41, 41)',
    marginTop: '5px',
    fontWeight: '300'
  },

  product_name: {
    fontWeight: '500',
    marginBottom: '5px',
    width: '130px'
  },

  reviews: {
    fontSize: '13px',
    color: 'rgb(41, 41, 41)',
    marginBottom: '5px',
    marginLeft: '100px',
    fontWeight: '330'
  },

  product_price: {
    fontSize: '14px',
    color: 'rgb(41, 41, 41)',
    fontWeight: '330'
  }
}

export default Product;