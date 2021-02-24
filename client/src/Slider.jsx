import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import { Viewport, ProductContainer, LeftButton, RightButton } from './SliderStyle.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left_most: 0
    }

    this.handle_right = this.handle_right.bind(this);
    this.handle_left = this.handle_left.bind(this);
    this.bigger_shadow = this.bigger_shadow.bind(this);
    this.normal_shadow = this.normal_shadow.bind(this);
  }

  handle_right () {
    var new_left_most = this.state.left_most + 5;
    this.setState({ left_most: new_left_most }, () => {
      this.product_container.style.transitionDuration = "0.5s";
      this.product_container.style.transform = `translate(-${170 * this.state.left_most}px)`;
    })
  }

  handle_left () {
    var new_left_most = this.state.left_most - 5;
    this.setState({ left_most: new_left_most }, () => {
      this.product_container.style.transitionDuration = "0.5s";
      this.product_container.style.transform = `translate(${170 * this.state.left_most}px)`;
    })
  }

  bigger_shadow(e) {
    e.target.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.24),0 6px 20px 0 rgba(0,0,0,0.19)';
  }

  normal_shadow(e) {
    e.target.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)';
  }

  render () {

    return (
      <Viewport>
      { this.state.left_most === 0 && <RightButton onClick={this.handle_right} onMouseOver={this.bigger_shadow} onMouseLeave={this.normal_shadow}>{">"}</RightButton>}
      { this.state.left_most === 5 && <LeftButton onClick={this.handle_left} onMouseOver={this.bigger_shadow} onMouseLeave={this.normal_shadow}>{"<"}</LeftButton>}
        <ProductContainer ref={ref_id => this.product_container = ref_id}>
        {this.props.products.map((product, index) => {
            return (
              <Product
                index={index}
                brand={product.brand}
                image_url={product.image_url}
                name={product.name}
                price={product.price}
                reviews={product.reviews}
                ratings={product.ratings}
              /> )
            }
          )}
        </ProductContainer>
      </Viewport>    )
  }
}

export default Slider;