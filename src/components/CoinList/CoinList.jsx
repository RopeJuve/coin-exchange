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
                        <th>Balance:</th>
                        <th>Actions:</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.coinData.map(coin => <Coin 
                            key={coin.key}
                            handleRefresh={this.props.handleRefresh}
                            showBalance={this.props.showBalance}
                            name={coin.name} 
                            balance={coin.balance}
                            tiker={coin.tiker} 
                            price={coin.price} />
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
