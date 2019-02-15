import React, { Component } from 'react';
import './App.css';
import Container from './Container'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    const {...props} = this.props
    return (
      <BrowserRouter basename='/profile'>
        <Container />
      </BrowserRouter>
    )
  }
}

export default App;
