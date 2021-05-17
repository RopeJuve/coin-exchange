
import React from 'react'
import Logo from './logo.svg'
import './App.css';
import Coin from '../src/components/coin/Coin.jsx'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={Logo} alt="React logo" className="App-logo"/>
        <p>
          <h1 className="App-title">Coin exchange</h1>
        </p>
      </header>

      <table className="coin-table">
        <thead>
          <tr>
            <th>Name: </th>
            <th>Tiker: </th>
            <th>Price: </th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" tiker="BTC" price={50000.00} />
          <Coin name="Ethereum" tiker="ETH" price={4100.00} />
          <Coin name="Thether" tiker="USDT" price={1.00} />
          <Coin name="Riple" tiker="XPR" price={0.2} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
