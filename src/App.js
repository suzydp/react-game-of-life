import React, { Component } from 'react';
// to apply Game component on inside of render
import Game from "./components/Game/Game.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
