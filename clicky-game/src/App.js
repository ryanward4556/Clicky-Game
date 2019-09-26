import React from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Container from './Container';
import TileCard from './TileCard';




function App() {
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
      <Container>
        <TileCard />
      </Container>
    </Wrapper>
  );
}

export default App;
