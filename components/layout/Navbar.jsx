import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  static defaultProps = {
    title : 'MyLogo',
    icon : 'fa fa-btc'
  };
  
  // static propTypes = {
  //   title : PropTypes.string.isRequired,
  //   icon : PropTypes.string.isRequired
  // }
  
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className = { this.props.icon } aria-hidden="true" /> { this.props.title } 
        </h1>
      </nav>
    )
  }
}

export default Navbar

