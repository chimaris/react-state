import React, { Component } from 'react'

export class Table extends Component {

  render() {
    console.log(this.props.data)
    // const {symbol, askPrice, bidPrice, highPrice, bidQty,  weightedAvgPrice } = this.props.data;
    // console.log(symbol, askPrice)
    return (
      <div>
          <table>
            <tbody>
                <tr>
                    <th>Symbol</th>
                    <th>AskPrice</th>
                    <th>BidPrice</th>
                    <th>HighPrice</th>
                    <th>BidQty</th>
                    <th>WeightedAvgPrice</th>
                </tr>
                {this.props.data.map((record => 
                <tr key={record.firstId}>
                    <td>{record.symbol}</td>
                    <td>{record.askPrice}</td>
                    <td>{record.bidPrice}</td>
                    <td>{record.highPrice}</td>
                    <td>{record.bidQty}</td>
                    <td>{record.weightedAvgPrice}</td>
                </tr> ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table



