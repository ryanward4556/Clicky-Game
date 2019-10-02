import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import TileCardContainer from './components/TileCardContainer';

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <TileCardContainer>
        </TileCardContainer>
      </Wrapper >
    );
  }
}
export default App;
