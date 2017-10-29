import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import RegistrationForm from './RegistrationForm';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <RegistrationForm />
      </div>
    );
  }
}

ReactDOM.render (
  <App />,
  document.getElementById('root')
)
