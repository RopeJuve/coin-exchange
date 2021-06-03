
import React, { useState, useEffect } from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList'
import ExchangeHeader from './components/Heder/ExchangeHeader'
import styled from 'styled-components'
import axios from 'axios'


const Div = styled.div`
 text-align: center;
 background-color: rgb(34, 46, 99);
 color: #cccccc;
`;

const COIN_COINT = 10;
const formatedPrice = price => parseFloat(Number(price).toFixed(4))

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COINT).map(coin => coin.id);
    const tikerUrl = 'https://api.coinpaprika.com/v1/ticker/';
    const promises = coinIds.map(id => axios.get(tikerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriseData = coinData.map(function (response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        tiker: coin.symbol,
        balance: 0,
        price: formatedPrice(coin.price_usd),
      }
    })

    setCoinData(coinPriseData);

  }

  useEffect(function () {
    if (coinData.length === 0) {
      componentDidMount();
    }
  }
  )



  const handleRefresh = async (valueChangeId) => {

    const tikerUrl = `https://api.coinpaprika.com/v1/ticker/${valueChangeId}`;
    const response = await axios.get(tikerUrl);
    const newPrice = formatedPrice(response.data.price_usd);
    const newCoinData = coinData.map(function (values) {
      let newValues = { ...values }

      if (valueChangeId === values.key) {
        console.log(newPrice)
        newValues.price = newPrice;
      }
      return newValues
    });
    setCoinData(newCoinData);

  }

  const hideBalance = () => {
    setShowBalance(oldValue => !oldValue);

  }

  const addBalance = () => {
    setBalance(oldValue => oldValue + 1200);
  }

    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance 
        amount={balance} 
        showBalance={showBalance} 
        hideBalance={hideBalance} 
        addBalance = {addBalance}/>
        <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance} />
        
      </Div>
    );



  }

export default App;

