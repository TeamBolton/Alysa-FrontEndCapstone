import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating.jsx';

const Product = ({index, brand, image_url, name, price, reviews, ratings}) => {
  return(
    <div className="product" style={styles.product}>
      <a href="https://www.google.com/">
        <img src={image_url} alt="product picture" width="130" height="130" />
      </a>
      <a href="https://www.google.com/">
        <div className="product-brand" style={styles.product_brand}>{brand}</div>
      </a>
      <a href="https://www.google.com/">
        <div className="product-name" style={styles.product_name}>{name}</div>
      </a>
      <StarRating ratings={ratings} index={index}/>
      <a href="https://www.google.com/">
        <div className="reviews" style={styles.reviews}>({reviews})</div>
      </a>
      <div className="product-price" style={styles.product_price}>${price}</div>


    </div>

  )
}

const styles = {
  product: {
    // width: '170px',
    width: '130px',
    height: '300px',
    marginRight: '40px',
    fontFamily: 'Graphik,"Helvetica Neue",sans-serif'
  },

  product_brand: {
    fontSize: '13px',
    color: 'rgb(41, 41, 41)',
    marginTop: '5px',
    fontWeight: '330',
    width: 'fit-content',
    // height: '30px'
  },

  product_name: {
    fontWeight: '500',
    marginBottom: '5px',
    // width: '130px',
    width: 'fit-content',
    // height: '40px',
    color: 'black'
  },

  reviews: {
    display: 'inline-block',
    fontSize: '13px',
    color: 'rgb(41, 41, 41)',
    marginBottom: '5px',
    // marginLeft: '100px',
    fontWeight: '330',
    width: '40px',

  },

  product_price: {
    fontSize: '14px',
    color: 'rgb(41, 41, 41)',
    fontWeight: '330'
  }
}

export default Product;