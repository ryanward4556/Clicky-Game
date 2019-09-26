import React, { Component } from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';


class TileCard extends Component {
    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                </Card.Body>
            </Card >
        )
    }
}

export default TileCard;