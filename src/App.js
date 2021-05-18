
import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList'
import Header from './components/Heder/Header'
import styled from 'styled-components'

const Div = styled.div`
 text-align: center;
 background-color: rgb(34, 46, 99);
 color: #cccccc;
`;

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      balance: 10000,
      coinData:[
        {
          name:"Bitcoin",
          tiker: "BTC",
          price: 50000.00
        },
        {
          name:"Ethereum",
          tiker: "ETH",
          price: 4100.00
        },
        {
          name:"Tether",
          tiker: "USDT",
          price: 1.00
        },
        {
          name:"Ripple",
          tiker: "XPR",
          price: 0.2
        }


      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTiker){
   const coin = this.state.coinData.find(({tiker}) => tiker === valueChangeTiker);
   console.log(coin)

  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance  amount = {this.state.balance}/>
        <CoinList coinData = {this.state.coinData} handleRefresh={this.handleRefresh}/>
      </Div>
    );

  }
  
}

export default App;
