import React, { Component } from 'react'

class President extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-12 answerContainer">
          <div className="col-md-5 col-md-offset-1 presidentText">
            <h4>Which Republian President Are You?</h4>
            <h3>YOU GOT: {this.props.data.name}</h3>
            <p>{this.props.data.detail}</p>
          </div>
          <div className="col-md-6 presidentImage">
            {this.props.data.src}
          </div>
        </div>
      </div>
    );
  }
}

export default President;
