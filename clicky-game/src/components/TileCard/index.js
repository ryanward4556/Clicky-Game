import React from 'react';
import "./style.css";
import Card from 'react-bootstrap/Card';


function TileCard(props) {

    return (
        <button key={props.id} onClick={props.onClick}>
            <Card>
                <Card.Img variant="top" src={require("../../../public/images" + props.image)}/>
            </Card >
        </button>
    )
}

export default TileCard;