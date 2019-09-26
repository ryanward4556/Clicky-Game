import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import TileCard from './components/TileCard';
import players from "./players.json";




function App() {
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
      <Container>
        <TileCard 
        name={players[0].name}
        image={players[0].image}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
