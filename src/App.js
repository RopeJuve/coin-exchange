
import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList'
import Header from './components/Heder/Header'
import styled from 'styled-components'
import axios from 'axios'
const Div = styled.div`
 text-align: center;
 background-color: rgb(34, 46, 99);
 color: #cccccc;
`;

const COIN_COINT = 10;
const formatedPrice = price => parseFloat(Number(price).toFixed(4))

class App extends React.Component{
  state = {
    showBalance: true,
    balance: 10000,
    coinData:[
     /* {
        name:"Bitcoin",
        tiker: "BTC",
        balance: 0.5,
        price: 50000.00
      },
      {
        name:"Ethereum",
        tiker: "ETH",
        balance: 32.0,
        price: 4100.00
      },
      {
        name:"Tether",
        tiker: "USDT",
        balance: 0,
        price: 1.00
      },
      {
        name:"Ripple",
        tiker: "XPR",
        balance: 100,
        price: 0.2
      }
*/

    ]
  }
  
  componentDidMount = async () => {
   const response = await axios.get('https://api.coinpaprika.com/v1/coins')     
   const coinIds = response.data.slice(0,COIN_COINT).map(coin=> coin.id);
   const tikerUrl = 'https://api.coinpaprika.com/v1/ticker/';
   const promises = coinIds.map(id => axios.get(tikerUrl + id)); 
   const coinData = await Promise.all(promises);
   const coinPriseData = coinData.map(function(response){
    const coin = response.data;
     return{
       key: coin.id,
       name: coin.name,
       tiker: coin.symbol,
       balance: 0,
       price:formatedPrice(coin.price_usd) ,
     }
   })
    this.setState({coinData: coinPriseData});
  
  }

 

  handleRefresh = async (valueChangeId) =>{

    const tikerUrl = `https://api.coinpaprika.com/v1/ticker/${valueChangeId}`;
    const response = await axios.get(tikerUrl);
    const newPrice = formatedPrice(response.data.price_usd);
   const newCoinData = this.state.coinData.map(function (values)
   {
      let newValues = {...values}
     
     if(valueChangeId === values.key){
       console.log(newPrice)
      newValues.price = newPrice;
     }
     return newValues
   });

   this.setState({coinData: newCoinData});

  }

  hideBalance = () => {
    this.setState({showBalance:!this.state.showBalance,});
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance  amount = {this.state.balance} showBalance={this.state.showBalance} hideBalance={this.hideBalance}/>
        <CoinList coinData = {this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance}/>
      </Div>
    );

  }
  
}

export default App;
