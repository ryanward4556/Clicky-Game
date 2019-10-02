import React from 'react';
import "./style.css";

function Navbar() {
    return (

        <nav class="navbar navbar-expand-md sticky-top navbar-light bg-light">
            <a class="navbar-brand navbar-nav mr-auto" href="/"><h2>Clicky game</h2></a>
            <div class="mx-auto order-0">
                <h3 class="navbar-nav mx-auto justify-content-center">Click an image to begin!</h3>
            </div>
            <div class="ml-auto">
                <h3 class="navbar-nav mx-auto">
                    Score: 0 | Top Score: 0
                    </h3>
            </div>
        </nav>)

}

export default Navbar;



