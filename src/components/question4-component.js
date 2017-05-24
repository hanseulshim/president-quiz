import React, { Component } from 'react'
import Clothing from '../components/clothing'
import boots from '../images/clothing/1.jpg'
import hat from '../images/clothing/2.jpg'
import socks from '../images/clothing/3.jpg'
import bowtie from '../images/clothing/4.jpg'


class Question4Component extends Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 questionContainer">
        <h3>4. Choose two articles of clothing.</h3>
        <Clothing
          handleClick={this.props.handleClick}
          index="1"
          value={this.props.index}
          src={boots}
          title="Cowboy boots"
        />
        <Clothing
          handleClick={this.props.handleClick}
          index="2"
          value={this.props.index}
          src={hat}
          title="Top Hat"
        />
        <Clothing
          handleClick={this.props.handleClick}
          index="3"
          value={this.props.index}
          src={socks}
          title="Socks"
        />
        <Clothing
          handleClick={this.props.handleClick}
          index="4"
          value={this.props.index}
          src={bowtie}
          title="Bowtie"
        />
      </div>
    )
  }
}

export default Question4Component;
