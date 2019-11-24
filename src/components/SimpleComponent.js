// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.PureComponent {
  state = {
    mood: "happy"
  }

  handleClick = event => {
    const setMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: setMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;

