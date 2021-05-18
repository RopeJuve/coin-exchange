import React, { Component } from 'react'
import Coin from '../coin/Coin'
import styled from 'styled-components'


const Table = styled.table`
margin: 50px auto 50px auto;
display: inline-block;
font-size: 1.8rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name: </th>
                        <th>Tiker: </th>
                        <th>Price: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.coinData.map(coin => <Coin 
                            key={coin.tiker}
                            handleRefresh={this.props.handleRefresh} 
                            name={coin.name} 
                            tiker={coin.tiker} 
                            price={coin.price} />
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
