import React, { Component } from 'react'
import Vacation from '../components/vacation'
import blackCherries from '../images/snack/1.jpg'
import jellyBean from '../images/snack/2.jpg'
import popcorn from '../images/snack/3.jpg'
import pigsInBlanket from '../images/snack/4.jpg'


class Question2Component extends Component {
  render() {
    return (
      <div className="col-md-12">
        <h3>2. Choose a vacation.</h3>
        <Vacation
          handleClick={this.props.handleClick}
          index="1"
          value={this.props.index}
          src={blackCherries}
          title="Black Cherries"
        />
        <Vacation
          handleClick={this.props.handleClick}
          index="2"
          value={this.props.index}
          src={jellyBean}
          title="Jelly Beans"
        />
        <Vacation
          handleClick={this.props.handleClick}
          index="3"
          value={this.props.index}
          src={popcorn}
          title="Popcorn"
        />
        <Vacation
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

export default Question2Component;
