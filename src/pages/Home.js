import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
//import ImageCard from '../components/ImageCard';
import { ImageCard, ImageComponent } from '../components/ImageCard';
import './Home.css';

const homepageImage = {
    width: "100%",
    height: "auto",
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: white;
`;

const HomePageBlock = styled.div`
    background-color: #002e5b;
    max-width: 300px;
    padding: 20px;
    margin: 10px;
`;

const KeepInTouch = styled.div`
    background-color: green;
    max-width: 300px;
    padding: 20px;
    margin: 10px;
`;

const AnotherHeading = styled.div`
    background-color: mediumseagreen;
    max-width: 300px;
    padding: 20px;
    margin: 10px;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Home = () => {
    return (
        <>
            <p><img alt="graduates pose in yellow gowns" style={homepageImage} src="/images/graduates-homepage.jpg" /></p>
            <h1>Congratulations Class of 20xx!</h1>
            <p>Join us on May 18, 2021 for our in-person graduation event.</p><p>Venue, 1800 Address Lane, Milwaukee WI 53202.</p>
            <div><ImageContainer >
                <ImageComponent style={{backgroundImage: "url(/images/DSC04427.JPG)"}} imageText="Join us at Panther Arena!" />
                <ImageComponent style={{backgroundColor: "tomato"}} imageText="Send grauation photos for our Messages webpage!"/>
                <ImageCard imageText="Stay connected through our Alumni website." />
            </ImageContainer></div>
           
            <Card heading="JOIN US" buttonText="Submit"/>
            <div><Container>
                <div><HomePageBlock>
                    <h2>Join us</h2>
                    <p>Address Line 1<br />
                    Address Line 2</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <button>Submit</button>
                    </HomePageBlock></div>
                <div><KeepInTouch>
                    <h2>Submit Your Photos</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    <button>Submit</button>
                </KeepInTouch></div>
                <div><AnotherHeading><h2>Another Heading</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p><button>Submit</button></AnotherHeading></div>
            </Container></div>
        </>
    );
}

export default Home;