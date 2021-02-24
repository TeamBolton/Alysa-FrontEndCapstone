import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Slider from './Slider.jsx';
import styled from 'styled-components';

const Header = styled.h2`
  fontFamily: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
  fontSize: 20px;
  fontWeight: 450;
  fontStyle: normal;
`;

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
        <Header>People also liked</Header>
        <div>
          <Slider products={this.state.products}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('service'));

