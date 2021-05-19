import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td`
  width: 25vh;
  border: 1px solid #cccccc;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleRefresh(this.props.tiker);

    }

    render() {
        let balance = this.props.showBalance ? <Td>{this.props.balance}</Td> : null;
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.tiker}</Td>
                <Td>${this.props.price}</Td>
                {balance}

                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
    }

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    tiker: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}