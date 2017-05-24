import React, { Component } from 'react'

class Snack extends Component {
  render() {
    let done = this.props.value == this.props.index ? true : false
    let className = this.props.value == this.props.index ? "snackContainer active" : "snackContainer notActive"
    return (
      <div className = "col-md-3 ">
        <div className={this.props.value ? className : "snackContainer"} onClick={() => this.props.handleClick(this.props.index)}>
          <img src={this.props.src} className="image-responsive center-block" alt={this.props.title} />
          <div className="checkbox text-center">
            <label><input type="checkbox" checked={done} value="" />{this.props.title}</label>
          </div>
        </div>
      </div>
    )
  }
}

export default Snack;
