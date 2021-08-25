import React from 'react';
import styled from 'styled-components';

const DivStyle = styled.div`
    width: 500px;
    height: 400px;
    border: 1px dashed #002e5b;
    margin: 10px;
`;

const ButtonStyles = {
    backgroundColor: "#002e5b",
    color: "white",
    padding: "10px",
    fontSize: "1.5em",
}

const Card = (props) => {
    return(
        <div><DivStyle>
            <img alt={props.alt} src={props.image} />
            <h2>{props.heading}</h2>
            <button style={ButtonStyles}>{props.buttonText}</button>
        </DivStyle></div>
            
    );
}
/*
const Card = (props) => {
    return(
        <div>
            <h2>Hi to {props.to}</h2>
            <p>We're glad you're here!</p>
            <p>From {props.from}</p>
        </div>
    );
}*/

export default Card;