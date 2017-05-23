import React, { Component } from 'react'
import logo from '../images/logo.png'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <button type="button" className="btn btn-danger navbar-btn navbar-left" id="contribute">Contribute</button>
            <a className="navbar-brand" href="https://gop.com/">
              <img alt="Brand" id="logo" src={logo} />
            </a>
            <div className="navbar-right">
              <p className="navbar-text">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search | Log In
              </p>
              <p className="navbar-text">
                <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
              </p>
            </div>
      </div>
    </nav>
    );
  }
}

export default Header;
