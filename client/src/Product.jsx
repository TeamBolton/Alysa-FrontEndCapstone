import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating.jsx';
import styled from 'styled-components';


const ProductContainer = styled.div`
  width: 130px;
  height: 300px;
  margin-right: 40px;
  font-family: Graphik,"Helvetica Neue",sans-serif;
`;

const ProductBrand = styled.div`
  font-size: 13px;
  color: rgb(41, 41, 41);
  margin-top: 5px;
  font-weight: 330;
  width: fit-content;
`;

const ProductName = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  width: fit-content;
  color: black;
`;

const Reviews = styled.div`
  display: inline-block;
  font-size: 13px;
  color: rgb(41, 41, 41);
  margin-bottom: 5px;
  font-weight: 330;
  width: 40px;
`;

const ProductPrice = styled.div`
  fontSize: 14px;
  color: rgb(41, 41, 41);
  font-weight: 330;
`;

const Hyper = styled.a`
  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;


const Product = ({index, brand, image_url, name, price, reviews, ratings}) => {
  return(
    <ProductContainer>
      <a href="https://www.google.com/">
        <img src={image_url} alt="product picture" width="130" height="130" />
      </a>
      <Hyper href="https://www.google.com/">
        <ProductBrand>{brand}</ProductBrand>
      </Hyper>
      <Hyper href="https://www.google.com/">
        <ProductName>{name}</ProductName>
      </Hyper>
      <StarRating ratings={ratings} index={index}/>
      <Hyper href="https://www.google.com/">
        <Reviews>({reviews})</Reviews>
      </Hyper>
      <ProductPrice>${price}</ProductPrice>

    </ProductContainer>

  )
}


export default Product;