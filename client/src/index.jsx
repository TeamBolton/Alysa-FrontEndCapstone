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

  getProducts () {
    console.log('getProducts ran');
    $.get('/api/recommended', function(data, status) {

      this.setState({
        products: data
      })

    }.bind(this));
  }

  updateDimensions () {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  componentDidMount() {
    this.getProducts();
    console.log('componentDidMount');
    // window.addEventListener('resize', this.updateDimensions)
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

ReactDOM.render(<App />, document.getElementById('app'));

