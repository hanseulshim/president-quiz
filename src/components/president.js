import React, { Component } from 'react'
import SocialResult from '../components/socialResult'

class President extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12">
        <div className="col-md-12 col-sm-12 answerContainer">
          <div className="presidentText">
            <h4>Which Republian President Are You?</h4>
            <h3>YOU GOT: {this.props.data.name}</h3>
            <p>{this.props.data.detail}</p>
          </div>
          <div className="presidentImage">
            {this.props.data.src}
          </div>
        </div>
        <SocialResult />
      </div>
    );
  }
}

export default President;
