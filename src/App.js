import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Title from './components/title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
      </div>
    );
  }
}

export default App;
