import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Slider from './Slider.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

  }

  getProducts (id) {
    console.log('getProducts ran');

    $.get(`/api/recommended/${id}`, function(data, status) {

      this.setState({
        products: data
      })

    }.bind(this));
  }

  componentDidMount() {
    console.log('componentDidMount');

    const path = window.location.pathname;
    const product_id = path.slice(1);
    console.log('id', product_id);
    this.getProducts(product_id);

  }

  render() {

    return (
      <div>
        <h2 style={styles.header}>People also liked</h2>
        <div>
          <Slider products={this.state.products}/>
        </div>
      </div>
    )
  }
}

const styles = {
  header: {
    fontFamily: 'Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '20px',
    fontWeight: '450',
    fontStyle: 'normal'

  }
}

ReactDOM.render(<App />, document.getElementById('service'));

