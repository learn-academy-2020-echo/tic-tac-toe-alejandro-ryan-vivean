import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      clickLocation: null
    }
  }

//need a componentDidMount



//we need to .map through this.state.squares and label their entire value,index, emoji
// method to create the initial alert handleGamePlay
  handleGamePlay = (index) => {

  const { squares, clickLocation }
    if(index === clickLocation){
      squares[index] = "🌞"
      this.setState({squares: squares})
    }else if(index === clickLocation){
      squares[index] = "🌚"
      this.setState({squares: squares})
    }
//nest goal is to mark a square after it is clicked



//
// handleGamePlay = (index) => {
//   const { squares, treasureLocation } = this.state
//   if(index === treasureLocation){
//     squares[index] = "🥑"
// this.setState({ squares: squares })
//   } else {
//   squares[index] = "🌴"
//   this.setState({ squares: squares })
// }
// }

//different from treasure hunt becasue:
//-This has two players, there is no treasure being placed within random square, There are multiple winning conditons within this game,



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
