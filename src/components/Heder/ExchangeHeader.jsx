import React, { Component } from 'react'
import logo from '../../logo.svg'
import styled from 'styled-components'

const H1 = styled.h1`
 font-size: 4rem;
`;

const Img = styled.img`
 height: 8rem;
 pointer-events: none;
`;

const Header1 = styled.header`
background-color: #282c34;
min-height: 10vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

color: white;
`;


export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header1>
        <Img src={logo} alt="React logo"/>
          
            <H1>Coin Exchange</H1>
    
        </Header1>
        )
    }
}
