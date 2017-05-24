import React, { Component } from 'react'

class Vacation extends Component {
  render() {
    let done = this.props.value == this.props.index ? true : false
    return (
      <div className = "col-md-3 ">
        <div className="vacationContainer" onClick={() => this.props.handleClick(this.props.index)}>
          <p className="text-center">Colorado</p>
        </div>
      </div>
    )
  }
}

export default Vacation;
