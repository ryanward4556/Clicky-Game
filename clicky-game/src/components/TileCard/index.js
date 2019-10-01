import React from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';


function TileCard(props) {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card >

    )

}

export default TileCard;