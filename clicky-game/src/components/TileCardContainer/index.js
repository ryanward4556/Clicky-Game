import React from 'react';
import Container from 'react-bootstrap/Container'


function TileCardContainer(props) {
    return <Container>{props.children}</Container>;
  }
  
export default TileCardContainer;