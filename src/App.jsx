import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Binance from '../components/users/Binance';
import './App.css'


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Practing with state, setState and componentDidMount() with ES6 Class Component</h2>
        <Binance />
      </div>
    )
  }
}

export default App
