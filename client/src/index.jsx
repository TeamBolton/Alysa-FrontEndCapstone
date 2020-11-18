import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductList from './productList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };

  }

  getProducts () {
    console.log('getProducts ran');
    $.get('/api/recommended', function(data, status) {

      this.setState({
        products: data
      })

    }.bind(this));
  }

  componentDidMount() {
    this.getProducts();
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="slider">
        <h2>People also liked</h2>
        <ul>
          <ProductList products={this.state.products}/>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

