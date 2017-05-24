import React, { Component } from 'react'
import Social from './social'
import Questions from '../containers/questions'


class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1 main-container">
          <div className="row">
            <Social />
            <Questions />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
