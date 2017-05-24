import React, { Component } from 'react'
import Question2Component from '../components/question2-component'


class Question2 extends Component {
  constructor(props) {
    super(props)
   this.state = {activeIndex: 0}

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index){
    this.setState({activeIndex: index})
    console.log(this.state)
  }
  render() {
    return (
      <Question2Component
        handleClick={this.handleClick}
        index={this.state.activeIndex}
      />
    )
  }
}

export default Question2;
