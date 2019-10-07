import React from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';


function TileCard(props) {

    return (
        <button key={props.id} onClick={props.onClick}>
            <Card>
                <Card.Img variant="top" src={props.image}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card >
        </button>
    )
}

export default TileCard;