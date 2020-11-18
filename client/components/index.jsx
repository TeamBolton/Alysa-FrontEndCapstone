import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

  }

  render() {
    return (
      <div>
        webpack working, rendering!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));