// import React from 'react';
// import Container from 'react-bootstrap/Container'
// // import { Row, Col } from 'react-bootstrap'
// // import TileCard from '../TileCard';


// function TileCardContainer() {

// }

//   state = {
//     active: false,
//     gameOver: false
//   };

//   handleToggle(e) {
//     e.preventDefault();

//     const currentActive = this.state.active;
//     this.setState({
//       active: true,
//     });
//     console.log("active:", currentActive);
//     this.handleShuffle(players);
//   }



//   render() {
//     return <Container>
//       <Row>
//         {this.state.players.map(player => (
//           <Col sm={3} >
//             <button toggle={this.state.active ? "toggle" : null}
//               onClick={this.handleToggle.bind(this)}>
//               <TileCard
//                 name={player.name}
//                 image={player.image}
//               />
//             </button>
//           </Col>
//         ))}
//       </Row>
//     </Container>;
//   }
// }

// export default TileCardContainer;