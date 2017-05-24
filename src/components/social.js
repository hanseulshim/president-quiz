import React, {Component} from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'

class Social extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <a target="_blank" href="https://www.facebook.com/">
          <button type="button" className="btn btn-primary col-md-1 col-sm-2 col-xs-2 social">
            <img src={facebook} alt="Facebook"/>
            (100)
          </button>
        </a>
        <a target="_blank" href="https://twitter.com/home?status=Take%20this%20quiz%20to%20see%20which%20republican%20president%20you%20are!">
          <button type="button" className="btn btn-info col-md-1 col-sm-2 col-xs-2 social">
            <img src={twitter} alt="Twitter"/>
            (100)
          </button>
        </a>
      </div>
    );
  }
}

export default Social;
