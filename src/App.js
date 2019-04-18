import React, { Component } from 'react';
import './App.css';
import Movierouter from './Components/Movies'
import Movienav from './Components/Movienav'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Movienav/>
      <Movierouter/>

      </div>
    );
  }
}

export default App;
