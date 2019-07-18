import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    border-color: 1px solid red;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
    box-sizing: border-box;
    min-height: 100vh;
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
`;

const Header = styled.h1`
    margin: 1em 0 0.5em 0;
    color: #343434;
    font-weight: normal;
    font-family: 'Ultra', sans-serif;   
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
`;

const Paragraph = styled.p`
    width: 30%;
    color: ${props => props.black ? 'black' : 'white'};
    @media (max-width: 375px) {
        width: 90%;;
      }
`;

const Media = styled.video`
    @media (max-width: 375px){
        width: 350px;
    };
`;



export function NasaInfo({ date, explanation, title, url, media_type }) {

    return (

        <Wrapper>
            <Header>{title}</Header>
            <Paragraph black>{date}</Paragraph>
            <Paragraph white>{explanation}</Paragraph>
            <Media width="400" controls>
                <source src={url} type={media_type} />
            </Media>
        </Wrapper>

    )

}