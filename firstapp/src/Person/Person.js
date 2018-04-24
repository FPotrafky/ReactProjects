import React from "react";

const person = (props) => {
    return (
        <div> 
            <div>Mein Name ist {props.name} und ich bin {props.age} Jahre alt.</div>
            <div>{props.children}</div>
        </div>
    );
}

export default person;
