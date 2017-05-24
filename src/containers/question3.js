import React, { Component } from 'react'
import Question3Component from '../components/question3-component'


class Question3 extends Component {
  constructor(props) {
    super(props)
   this.state = {activeIndex: null}

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index){
    this.setState({activeIndex: index})
    this.props.checkComplete(2)
  }
  render() {
    return (
      <Question3Component
        handleClick={this.handleClick}
        index={this.state.activeIndex}
      />
    )
  }
}

export default Question3;
