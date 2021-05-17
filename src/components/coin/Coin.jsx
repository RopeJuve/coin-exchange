import React, { Component } from 'react'
import './Coin.css'
import PropTypes from 'prop-types'

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
           <tr className="coin-row">
               <td>{this.props.name}</td>
               <td>{this.props.tiker}</td>
               <td>${this.state.price}</td>
               <td>
                   <form action="#" method = "POST">
                    <button onClick={this.handleClick}>Refres</button>
                   </form>
               </td>
           </tr>
        )
    }
   
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    tiker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}