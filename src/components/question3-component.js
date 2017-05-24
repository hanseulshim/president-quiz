import React, { Component } from 'react'
import Animal from '../components/animal'

class Question3Component extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 questionContainer">
        <h3>3. Choose an animal.</h3>
        <Animal
          handleClick={this.props.handleClick}
          index="1"
          value={this.props.index}
          location="bear"
        />
        <Animal
          handleClick={this.props.handleClick}
          index="2"
          value={this.props.index}
          location="bobcat"
        />
        <Animal
          handleClick={this.props.handleClick}
          index="3"
          value={this.props.index}
          location="horse"
        />
        <Animal
          handleClick={this.props.handleClick}
          index="4"
          value={this.props.index}
          location="dog"
        />
      </div>
    )
  }
}

export default Question3Component;
