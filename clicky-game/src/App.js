import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
// import TileCardContainer from './components/TileCardContainer';
import TileCard from './components/TileCard';
import { Container, Row, Col } from 'react-bootstrap'
import data from "./data.json"

class App extends Component {

  state = {
    data: data,
    score: 0,
    topScore: 0,
  }


  startApp() {
    this.setState({ data: this.shuffleData(this.state.data) })
    this.state.data.map(item => console.log(item))
  }

  resetData() {
    console.log("RESET")
    const resetData = this.state.data.map(item => ({ ...item, clicked: false }))
    return resetData;
  }

  handleCorrectGuess = newData => {
    console.log("CORRECT")

    const { topScore, score } = this.state; 
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({ score: newScore, topScore: newTopScore });
  }

  handleIncorrectGuess = newData => {
    console.log("incorrect")
    this.setState({
      data: this.resetData(this.state.data),
      score: 0
    })
  }

  shuffleData(data) {
    for (var i = data.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }

  handleItemClick = id => {
    let guessedCorrect = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          item.clicked = true;
          guessedCorrect = true;
          console.log(item)
        } 
      }
      return newItem;

    })
    this.shuffleData(this.state.data)
    guessedCorrect ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
    
  }

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.data.map(item =>
              (<Col sm={3} >
                <TileCard
                  key={item.id}
                  onClick={() => this.handleItemClick(item.id)}
                  name={item.name}
                  image={item.image}>
                </TileCard>
              </Col>)
            )}
          </Row>
        </Container>;
      </Wrapper >
    );
  }
}


export default App;
