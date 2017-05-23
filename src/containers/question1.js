import React, { Component } from 'react'
import Snack from '../components/snack'
import blackCherries from '../images/snack/1.jpg'
import jellyBean from '../images/snack/2.jpg'
import popcorn from '../images/snack/3.jpg'
import pigsInBlanket from '../images/snack/4.jpg'


class Question1 extends Component {
  constructor(props) {
    super(props)
   this.state =
   {
     cherry: false,
     jelly: false,
     popcorn: false,
     pigs: false
   }

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({[e]: !this.state[e]})
  }
  render() {
    return (
      <div>
        <h3>1. Choose a snack.</h3>
        <Snack onClick={this.handleClick} item="cherry" done={this.state.cherry} src={blackCherries} title="Black Cherries" />
        <Snack onClick={this.handleClick} item="jelly" done={this.state.jelly} src={jellyBean} title="Jelly Beans" />
        <Snack onClick={this.handleClick} item="popcorn" done={this.state.popcorn} src={popcorn} title="Popcorn" />
        <Snack onClick={this.handleClick} item="pigs" done={this.state.pigs} src={pigsInBlanket} title="Pigs in a Blanket" />
      </div>
    );
  }
}

export default Question1;
