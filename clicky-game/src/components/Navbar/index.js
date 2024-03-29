import React from 'react';
import "./style.css";

function Navbar(props) {
    return (

        <nav class="navbar navbar-expand-md sticky-top navbar-light bg-light">
            <a class="navbar-brand navbar-nav mr-auto" href="/"><h2>FIFA Clicky Game</h2></a>
            <div class="mx-auto order-0">
                <h3 class="navbar-nav mx-auto justify-content-center">Click an image to begin!</h3>
            </div>
            <div class="ml-auto">
                <h3 class="navbar-nav mx-auto">
                    Score: {props.score} | Top Score: {props.topScore}
                    </h3>
            </div>
        </nav>)

}

export default Navbar;



