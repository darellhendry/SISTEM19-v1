import React, { Component } from 'react';
import './App.css';
import Container from './Container'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Container />
      </HashRouter>
    )
  }
}

export default App;
