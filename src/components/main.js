import React, { Component } from 'react'
import Social from './social'
import Question1 from '../containers/question1'
import Question2 from '../containers/question2'


class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1 main-container">
          <div className="row">
            <Social />
            <Question1 />
            <Question2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
