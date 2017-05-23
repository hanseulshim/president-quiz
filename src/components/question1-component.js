import React, { Component } from 'react'
import Snack from '../components/snack'
import blackCherries from '../images/snack/1.jpg'
import jellyBean from '../images/snack/2.jpg'
import popcorn from '../images/snack/3.jpg'
import pigsInBlanket from '../images/snack/4.jpg'


class Question1Component extends Component {
  render() {
    return (
      <div>
        <h3>1. Choose a snack.</h3>
        <Snack
          handleClick={this.props.handleClick}
          index="1"
          value={this.props.index}
          src={blackCherries}
          title="Black Cherries"
        />
        <Snack
          handleClick={this.props.handleClick}
          index="2"
          value={this.props.index}
          src={jellyBean}
          title="Jelly Beans"
        />
        <Snack
          handleClick={this.props.handleClick}
          index="3"
          value={this.props.index}
          src={popcorn}
          title="Popcorn"
        />
        <Snack
          handleClick={this.props.handleClick}
          index="4"
          value={this.props.index}
          src={pigsInBlanket}
          title="Pigs in a Blanket"
        />
      </div>
    )
  }
}

export default Question1Component;
