import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false }
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened })
  }
  render() {
    console.log( 'isOpened',  this.state.isOpened )
    return (
    <div onClick={this.toggleState.bind(this)}>
      Its dropdown baby
    </div>
    )
  }
}

export default Dropdown;
