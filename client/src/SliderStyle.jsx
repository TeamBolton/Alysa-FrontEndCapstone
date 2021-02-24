import styled from 'styled-components';

export const Viewport = styled.div`
  position: relative;
  paddingLeft: 20px;
  width: 1020px;
  height: 300px;
  // backgroundColor: blue;
  overflow: hidden;
`;

export const ProductContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
  paddingTop: 10px;
  paddingLeft: 10px;
`;

export const LeftButton = styled.button`
  position: absolute;
  border-radius: 90%;
  float: left;
  z-index: 1;
  width: 35px;
  height: 35px;
  margin-top: 115px;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const RightButton = styled.button`
  position: absolute;
  right: 20px;
  border-radius: 90%;
  width: 35px;
  height: 35px;
  z-index: 1;
  margin-top: 115px;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);s
`;