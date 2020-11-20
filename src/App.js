import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    //holds players, squares, and our 8 winning conditions(yes/no).
    this.state = {
      squares: Array(9).fill("") ,
      player: "🌞",
      gameover: false
    }
  }
//need a componentDidMount
//we need to .map through this.state.squares and label their entire value,index, emoji
// method to create the initial alert handleGamePlay
//build a variable called clickLocation to return a value of who the next player is.
//we need clickLocation to clarify who the last user was, so that way we can determine who is the current user to put their "🌞" vs "🌚"
//carry state in variable clickLocation

/*
componentDidMount(){
  let turn = Math.floor(Math.random() * this.state.squares.length)
  this.setState({ clickLocation: turn })
  console.log(turn);
}
*/
//we need a method to return what ever square we click, and replaces the value inside the box with our currentplayer is. "🌞""🌚"
//

  handleGamePlay = (index) => {
//var clickLocation = this.state.clickLocation

  const { squares, player, gameover } = this.state
  // trying to destruction our this.state to use squares and clickLocation
  //clickLocation starts at null, squares
  //
    if(squares[index] === "" && gameover === false ){
      this.setState({ squares: squares.map() })
      console.log(clickLocation);
    }else{
    squares[index] = "🌚"
    this.setState({ squares: squares })

    }
  //  }else if(index === clickLocation){
    //  squares[index] = "🌚"
    //  this.setState({squares: squares})
    }

//nest goal is to mark a square after it is clicker
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
