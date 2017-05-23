import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Title from './components/title'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Main />
      </div>
    );
  }
}

export default App;
