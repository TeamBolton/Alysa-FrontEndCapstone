import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';

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
      <div className="view-port" style={styles.view_port}>
        { this.state.left_most === 0 && <button onClick={this.handle_right} onMouseOver={this.bigger_shadow} onMouseLeave={this.normal_shadow} style={styles.right_button}>{">"}</button>}
        { this.state.left_most === 5 && <button onClick={this.handle_left} onMouseOver={this.bigger_shadow} onMouseLeave={this.normal_shadow} style={styles.left_button}>{"<"}</button>}
        <div ref={ref_id => this.product_container = ref_id} className="product-container" style={styles.product_container}>
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
        </div>
    </div>
    )
  }
}

const styles = {
  view_port: {
    position: 'relative',
    paddingLeft: '20px',
    width: '1020px',
    height: '300px',
    // backgroundColor: 'blue',
    overflow: 'hidden'
  },

  product_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
    paddingTop: '10px',
    paddingLeft: '10px'
  },

  left_button: {
    position: 'absolute',
    borderRadius: '90%',
    float: 'left',
    zIndex: 1,
    width: '35px',
    height: '35px',
    marginTop: '115px',
    border: 'none',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
  },

  right_button: {
    position: 'absolute',
    right: '20px',
    borderRadius: '90%',
    width: '35px',
    height: '35px',
    zIndex: 1,
    marginTop: '115px',
    border: 'none',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
  },
}

export default Slider;