import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import TileCardContainer from './components/TileCardContainer';
import TileCard from './components/TileCard';
import players from "./players.json";
import { Row, Col } from 'react-bootstrap'

class App extends Component {

  state = {
    players
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <TileCardContainer>
          <Row>
            {this.state.players.map(player => (
              <Col sm={3} >
                <TileCard
                  name={player.name}
                  image={player.image}
                />
              </Col>
            ))}
          </Row>
        </TileCardContainer>
      </Wrapper >
    );
  }
}
export default App;
