import React, { Component } from 'react'

class Snack extends Component {
  render() {
    return (
      <div className = "col-md-3 ">
        <div className="snackContainer" onClick={() => this.props.onClick(this.props.item)}>
          <img src={this.props.src} className="image-responsive center-block" alt={this.props.title}/>
          <div className="checkbox text-center">
            <label><input type="checkbox" checked={this.props.done} value="" />{this.props.title}</label>
          </div>
        </div>
      </div>
    )
  }
}

export default Snack;
