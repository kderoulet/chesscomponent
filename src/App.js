import React, { Component } from 'react';
import Chess from './components/Chess'

class App extends Component {
  render() {
    return(
      <Chess
      tileSize="40px"
      tile1color="yellow"
      tile2color="brown"
      highlight="#FF33FF"
      pieceSize="25px"
      pieceColor="gray"
      />
    )
  }
}

export default App;
