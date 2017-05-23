import React, { Component } from 'react'
import Social from './social'
import Question1 from '../containers/question1'


class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1 main-container">
          <Social />
          <Question1 />
        </div>
      </div>
    );
  }
}

export default Main;
