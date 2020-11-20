import React from 'react';
import ReactDOM from 'react-dom';

class StarRating extends React.Component {

  constructor(props) {
    super(props);
    //this.props.ratings
    //this.props.index
  }

  componentDidMount() {
    // console.log('starRating', this.props.ratings);
    const stars = 5;
    const starPercentage = (this.props.ratings / stars) * 100;
    const roundedPercentage = Math.round(starPercentage);
    // var arr = document.getElementsByClassName('.stars-inner');
    // console.log(arr);
    // document.querySelector('stars-inner').style.width = `${roundedPercentage}%`;
    document.getElementById(`${this.props.index}`).style.width = `${roundedPercentage}%`;
    // var ratings = document.querySelectorAll(".stars-inner");
    // for (var i = 0; i < ratings.length; i ++) {
    //   ratings[i].style.width = `${roundedPercentage}%`;
    // }

  }


  render () {
    // console.log('render stars');
    return (
      <div className="stars-outer">
        <div className="stars-inner" id={this.props.index}></div>
      </div>
    )
  }

}


export default StarRating;