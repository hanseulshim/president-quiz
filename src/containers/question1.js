import React, { Component } from 'react'
import Question1Component from '../components/question1-component'


class Question1 extends Component {
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
      <Question1Component
        handleClick={this.handleClick}
        index={this.state.activeIndex}
      />
    )
  }
}

export default Question1;
