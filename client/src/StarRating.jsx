import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StarsOuter = styled.div`
  display: block;
  position: relative;
  float: left;
  margin-right: 5px;

  &::before {
    content: "☆☆☆☆☆";
  }
`;

const StarsInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 0;

  &::before {
    content: "★★★★★";
    color: rgb(235, 201, 11);
  }
`;

class StarRating extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const stars = 5;
    const starPercentage = (this.props.ratings / stars) * 100;
    const roundedPercentage = Math.round(starPercentage);
    document.getElementById(`${this.props.index}`).style.width = `${roundedPercentage}%`;
  }


  render () {
    return (
      <StarsOuter>
        <StarsInner id={this.props.index}></StarsInner>
      </StarsOuter>
    )
  }

}


export default StarRating;