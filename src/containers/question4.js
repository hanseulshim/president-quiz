import React, { Component } from 'react'
import Question4Component from '../components/question4-component'


class Question4 extends Component {
  constructor(props) {
    super(props)
   this.state = {activeIndex: [], count: 0}

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index){
    let tempState = this.state.activeIndex.slice()
    tempState.indexOf(index) === -1 ? tempState[this.state.count] = index : tempState.slice()
    tempState.length === 2 ? this.props.checkComplete(3) : tempState.slice()
    this.setState({activeIndex: tempState, count: (this.state.count+1)%2})
  }
  render() {
    return (
      <Question4Component
        handleClick={this.handleClick}
        index={this.state.activeIndex}
      />
    )
  }
}

export default Question4;
