import React from 'react';
import { ProgressPlugin } from 'webpack';

const Card = () => {
    return(
        <div>
            <img alt={props.alt} src={props.image} />
            <h2>props.heading</h2>
            <button>{props.buttonText}</button>
        </div>
            
    );
}

export default Card;