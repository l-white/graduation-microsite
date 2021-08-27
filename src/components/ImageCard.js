import React from 'react';
import styled from 'styled-components';
import './ImageCard.css';

const ImageComponent = styled.div`
    width: 500px;
    height: 300px;
    margin: 0 auto 5px;
    border: 1px solid #002e5b;
    position: relative;
    @media only screen and (max-width: 550px) {
        width: 350px;
        height: 220px;
    }
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 70%;
    background-color: lightblue;
    opacity: 90%;
    width: 100%;
    padding-bottom: 15px;
`;

const ImageText = styled.p`
    margin-left: 10px;
    font-weight: bold;
    text-align: left;
    z-index: -1;
`;

const ImageCard = (props) => {
    return (
        <div>
        <ImageComponent className={props}>
            <ImageOverlay>
                <p><ImageText>{props.imageText}</ImageText></p>
            </ImageOverlay>
        </ImageComponent>
        </div>
    );
}

export {ImageCard, ImageComponent};

/*
<ImageComponent style={{backgroundColor: "#002e5b"}}>
*/