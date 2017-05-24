import React, { Component } from 'react'

class Clothing extends Component {
  render() {
    let done = this.props.value.indexOf(this.props.index) !== -1 ? true : false
    let className = this.props.value.indexOf(this.props.index) !== -1  ? "clothingContainer active" : "clothingContainer"
    className = className !== "clothingContainer active" && this.props.value.length === 2 ? "clothingContainer notActive" : "clothingContainer"
    return (
      <div className = "col-md-3 ">
        <div className={this.props.value.length > 0 ? className : "clothingContainer"} onClick={() => this.props.handleClick(this.props.index)}>
          <img src={this.props.src} className="image-responsive center-block" alt={this.props.title} />
          <div className="checkbox text-center">
            <label><input type="checkbox" checked={done} value="" />{this.props.title}</label>
          </div>
        </div>
      </div>
    )
  }
}

export default Clothing;
