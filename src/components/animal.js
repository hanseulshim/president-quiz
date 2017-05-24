import React, { Component } from 'react'

class Animal extends Component {
  render() {
    let className = this.props.value === this.props.index ? "animalContainer active" : "animalContainer notActive"
    return (
      <div className = "col-md-12">
        <button className={this.props.value ? className : "animalContainer"} onClick={() => this.props.handleClick(this.props.index)}>
          <p className="text-left">{this.props.location}</p>
        </button>
      </div>
    )
  }
}

export default Animal;
