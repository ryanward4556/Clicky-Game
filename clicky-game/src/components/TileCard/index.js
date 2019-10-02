import React, { Component } from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';
// import { ToggleButton } from 'react-bootstrap';


class TileCard extends Component {

    state = {
        active: false
    }

    handleToggle(e) {
        console.log(this.state.active)

        const currentState = this.state.active;
        this.setState({
            active: !currentState
        });
        console.log(this.state.active)
    }

    render() {
        return (

            <Card toggle={this.state.active ? "toggle" : null}
                onClick={this.handleToggle.bind(this)}
            >
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                </Card.Body>
            </Card >

        )
    }
}

export default TileCard;