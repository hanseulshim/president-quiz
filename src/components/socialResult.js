import React, { Component } from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

class SocialResult extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <h2>Share your results!</h2>
        <a target="_blank" href="https://www.facebook.com/">
          <button type="button" className="btn btn-primary col-md-1 col-sm-2 col-xs-2 social">
            <img src={facebook} alt="Facebook"/>
            (100)
          </button>
        </a>
        <a target="_blank" href= {"https://twitter.com/home?status=I%20%am%20"+this.props.name}>
          <button type="button" className="btn btn-info col-md-1 col-sm-2 col-xs-2 social">
            <img src={twitter} alt="Twitter"/>
            (100)
          </button>
        </a>
      </div>
    );
  }
}

export default SocialResult;
