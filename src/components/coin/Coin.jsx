import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td`
  width: 25vh;
  border: 1px solid #cccccc;
`;

export default function Coin(props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tikerId);

    }
    let balance = props.showBalance ? <Td>{props.balance}</Td> : <Td>********</Td>;
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.tiker}</Td>
            <Td>${props.price}</Td>
            {balance}

            <Td>
                <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </Td>
        </tr>
    )


}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    tiker: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}