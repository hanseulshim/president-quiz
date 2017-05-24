import React, { Component } from 'react'
import Vacation from '../components/vacation'

class Question2Component extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 questionContainer">
        <h3>2. Choose a vacation.</h3>
        <Vacation
          handleClick={this.props.handleClick}
          index="1"
          value={this.props.index}
          location="Colorado"
        />
        <Vacation
          handleClick={this.props.handleClick}
          index="2"
          value={this.props.index}
          location="California"
        />
        <Vacation
          handleClick={this.props.handleClick}
          index="3"
          value={this.props.index}
          location="Camp David"
        />
        <Vacation
          handleClick={this.props.handleClick}
          index="4"
          value={this.props.index}
          location="Mississippi"
        />
      </div>
    )
  }
}

export default Question2Component;
