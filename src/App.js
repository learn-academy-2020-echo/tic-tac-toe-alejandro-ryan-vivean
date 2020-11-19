import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

//we need to .map through this.state.squares and label their entire value,index, emoji
// method to create the initial alert handleGamePlay
  handleGamePlay = (index) => {
    alert("yo!" )
  }

  render(){
    return(
      <React.Fragment>
        <h1 id="title">Tic Tac Toe</h1>
        <div id="boardgame">
        { this.state.squares.map((value, index) => {
          return (
          <Square
          value={ value }
          key={ index }
          index={ index }
          handleGamePlay= {
            this.handleGamePlay }
          />
        )
      }) }
      </div>
      </React.Fragment>
    )
  }
}
export default App
