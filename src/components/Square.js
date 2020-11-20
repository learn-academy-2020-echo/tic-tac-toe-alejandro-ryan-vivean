import React, { Component } from 'react'

class Square extends Component{

// we need a function to take a variable in our parent which holds our game rules here in the child.
// we need a variable/function what the current user is.
//we will need to switch between users
// display the corresponding name for the current user & their emoji
//

// we want this function to comeback with the specific instance of index within our rules of handleGamePlay
  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick={ this.handleClick }>
          {this.props.value}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
