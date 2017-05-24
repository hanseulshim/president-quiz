import React, { Component } from 'react'
import President from '../components/president'

class AnswerComponent extends Component {
  render() {
    return (
      <div className="col-md-12">
        {
          this.props.questions.every((element) => element) ?
          <President data={this.props.president}/>
          :
          <div></div>
        }
      </div>
    )
  }
}

export default AnswerComponent;
