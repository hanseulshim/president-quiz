import React, { Component } from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

class Social extends Component {
  render() {
    return (
      <div className="col-md-12">
        <button type="button" className="btn btn-primary col-md-1 social">
          <img src={facebook} alt="Facebook"/> (100)
        </button>
        <button type="button" className="btn btn-info col-md-1 social">
          <img src={twitter} alt="Twitter"/> (100)
        </button>
      </div>
    );
  }
}

export default Social;
