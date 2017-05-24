import React, { Component } from 'react'

class Vacation extends Component {
  render() {
    let className = this.props.value === this.props.index ? "vacationContainer active" : "vacationContainer notActive"
    return (
      <div className = "col-md-3 col-sm-3 col-xs-6 text-center">
        <button className={this.props.value ? className : "vacationContainer"} onClick={() => this.props.handleClick(this.props.index)}>
          <p className="text-center">{this.props.location}</p>
        </button>
      </div>
    )
  }
}

export default Vacation;
