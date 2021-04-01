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
// update state
  render(){
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <Square />
      </React.Fragment>
    )
  }
}
export default App
