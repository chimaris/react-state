import React, { Component } from 'react';
import Table from '../layout/Table';
import spinLoading from '../../assets/spinLoading.svg'

export class Binance extends Component {
    
    state = {
        binanceData : [],
        loading : true
    }

    componentDidMount() {
        fetch('https://api2.binance.com/api/v3/ticker/24hr')
        .then(res => res.json())
        .then(data => this.setState({binanceData : data.slice(0,8), loading : false}))
        .catch(err => this.console.error(err))
    }

  render() {
    //   console.log(this.state.binanceData)
    return (
      <div className='container'>
        <h3>Data is fetching from Binance API</h3>
        {this.state.loading ? <img src={spinLoading} alt="" style ={userStyle} /> : <Table data = {this.state.binanceData} />}
      </div>
    )
  }
}

const userStyle = {
  width: '50%'
}

export default Binance
