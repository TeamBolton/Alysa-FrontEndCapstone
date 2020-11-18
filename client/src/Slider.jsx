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
  }

  handle_right () {
    var new_left_most = this.state.left_most + 5;
    this.setState({ left_most: new_left_most }, () => {
      this.product_container.style.transitionDuration = "0.5s";
      this.product_container.style.transform = `translate(-${200 * this.state.left_most}px)`;
    })
  }

  handle_left () {
    var new_left_most = this.state.left_most - 5;
    this.setState({ left_most: new_left_most }, () => {
      this.product_container.style.transitionDuration = "0.5s";
      this.product_container.style.transform = `translate(${200 * this.state.left_most}px)`;
    })
  }

  render () {

    return (
      <div className="view-port" style={styles.view_port}>
        { this.state.left_most === 0 && <button onClick={this.handle_right} style={styles.right_button}>{">"}</button>}
        { this.state.left_most === 5 && <button onClick={this.handle_left} style={styles.left_button}>{"<"}</button>}
        <div ref={ref_id => this.product_container = ref_id}className="product-container" style={styles.product_container}>
          {this.props.products.map((product, index) => {
            return (
              <Product
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
    </div>
    )
  }
}

const styles = {
  view_port: {
    position: 'relative',
    paddingLeft: '20px',
    width: '1200px',
    height: '300px',
    // backgroundColor: 'blue',
    overflow: 'hidden'
  },

  product_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
    paddingTop: '20px',
    paddingLeft: '10px'
  },

  left_button: {
    position: 'absolute',
    borderRadius: '90%',
    float: 'left',
    zIndex: 1,
    width: '30px',
    height: '30px',
    marginTop: '130px'
  },

  right_button: {
    position: 'absolute',
    right: '50px',
    borderRadius: '90%',
    width: '30px',
    height: '30px',
    zIndex: 1,
    // float: 'right',
    marginTop: '130px'
  },
}

export default Slider;