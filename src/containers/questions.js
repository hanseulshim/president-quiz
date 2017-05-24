import React, { Component } from 'react'
import Question1 from './question1'
import Question2 from './question2'
import Question3 from './question3'
import Question4 from './question4'
import Answer from './answer'

class Questions extends Component {
  constructor(props) {
    super(props)
   this.state = {
     questions: [false,false,false,false]
   }

   this.checkComplete = this.checkComplete.bind(this);
  }

  checkComplete(index){
    let tempState = this.state.questions.slice()
    tempState[index] = true;
    this.setState({questions: tempState})
  }

  render() {
    return (
      <div>
        <Question1 checkComplete={this.checkComplete}/>
        <Question2 checkComplete={this.checkComplete}/>
        <Question3 checkComplete={this.checkComplete}/>
        <Question4 checkComplete={this.checkComplete}/>
        <Answer questions={this.state.questions}/>
      </div>
    )
  }
}

export default Questions;
