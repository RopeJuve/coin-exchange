import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td`
  width: 25vh;
  border: 1px solid #cccccc;
`;

export default class Coin extends Component {
    constructor(props){
        super(props)
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        const randomProcentage = 0.995 + Math.random() * 0.01;
            this.setState(function(oldState){
                return {
                    price: oldState.price * randomProcentage
                };
            });

    }

    render() {
        return (
           <tr>
               <Td>{this.props.name}</Td>
               <Td>{this.props.tiker}</Td>
               <Td>${this.state.price}</Td>
               <Td>
                   <form action="#" method = "POST">
                    <button onClick={this.handleClick}>Refres</button>
                   </form>
               </Td>
           </tr>
        )
    }
   
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    tiker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}