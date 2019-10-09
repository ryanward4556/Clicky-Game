import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
// import TileCardContainer from './components/TileCardContainer';
import TileCard from './components/TileCard';
import { Container, Row, Col } from 'react-bootstrap'
import players from "./players.json";


class App extends Component {

  state = {
    data: players,
    score: 0,
    topScore: 0,
  }

  // componentDidMount() {
  //   this.setState({ data: this.shuffleData(this.state.data) })
  //   // this.state.data.map(item => console.log(item))
  // }

  resetData() {
    const resetData = this.state.data.map(item => ({ ...item, clicked: false }))
    return resetData;
  }

  handleCorrectGuess = newData => {
    const { topScore, score } = newData.state; //  changed 'this' to newData
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({ topScore: newTopScore });
  }

  handleIncorrectGuess = newData => {
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

  consoleMe = () => {
    console.log(this.state)
  }

  handleItemClick = id => {
    console.log("we in handleItemClick");
    let guessedCorrect = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrect = true;
        }
      }
      return newItem;
    })
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
                  onClick={() => this.handleItemClick(this.state.id)}
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


// if (currentActive === true) {
//   this.setState({
//     gameOver: true
//   })
// } else if (currentCount < 12) {
//   this.setState({
//     active: true,
//     count: (currentCount + 1)
//   });
//   this.handleShuffle(players)
// } else {
//   this.setState({
//     currentScore: currentScore + 1
//   })
// }


export default App;
