import React, { Component } from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';


class TileCard extends Component {

    state = {
        active: false
    }

    handleToggle(e) {
        const currentState = this.state.active;
        console.log(currentState)

        this.setState({
            active: !currentState
        });
        console.log(currentState)
    }

    render() {
        return (
            <button toggle={this.state.active ? "toggle" : null}
                onClick={this.handleToggle.bind(this)}>
                <Card
                >
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                    </Card.Body>
                </Card >
            </button>
        )
    }
}

export default TileCard;