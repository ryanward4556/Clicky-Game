import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import TileCard from '../TileCard';
import players from "../../players.json";



class TileCardContainer extends Component {

  state = {
    players,
    active: false
  };

  handleToggle(e) {
    const currentState = this.state.active;

    this.setState({
      active: !currentState
    });
    this.handleShuffle(players)
    console.log(currentState)
  }

  handleShuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  render() {
    return <Container>
      <Row>
        {this.state.players.map(player => (
          <Col sm={3} >
            <button toggle={this.state.active ? "toggle" : null}
              onClick={this.handleToggle.bind(this)}>
              <TileCard
                name={player.name}
                image={player.image}
              />
            </button>
          </Col>
        ))}
      </Row>
    </Container>;
  }
}

export default TileCardContainer;