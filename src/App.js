import React, { Component } from 'react';
import logo from './NBlogo.png';
import './App.css';
import PlayerList from './PlayerList';


class App extends Component {
  render() {
  return (
    <div className="App">
                <h2>Nutter Butter</h2>
                <h7>
                  <img class = "logo" src= {logo}></img>
                </h7>
              <h3>Per Game Stats</h3>
              

        <PlayerList/>
    </div>
  );
}
}

export default App;
