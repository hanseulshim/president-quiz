import React, { Component } from 'react'
import AnswerComponent from '../components/answer-component'
import coolidge from '../images/presidents/coolidge.jpg'
import ford from '../images/presidents/ford.jpg'
import hwbush from '../images/presidents/hwbush.jpg'
import ike from '../images/presidents/ike.jpg'
import lincoln from '../images/presidents/lincoln.jpg'
import reagan from '../images/presidents/reagan.jpg'
import teddy from '../images/presidents/teddy.jpg'
import wbush from '../images/presidents/wbush.jpg'

class Answer extends Component {

  randomize(){
    return Math.floor(Math.random() * (9 - 1))
  }

  render() {
    let index = this.randomize()
    let president = this.getPresident()[index]
    return (
      <AnswerComponent
        questions={this.props.questions}
        president={president}
      />
    )
  }

  getPresident(){
    return [
      {
        name: "Calvin Coolidge",
        src: <img src={coolidge} className="pull-right" alt="Calvin Coolidge"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Gerald Ford",
        src: <img src={ford} className="pull-right" alt="Gerald Ford"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "George H. W. Bush",
        src: <img src={hwbush} className="pull-right" alt="George H. W. Bush"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Dwight D. Eisenhower",
        src: <img src={ike} className="pull-right" alt="Dwight D. Eisenhower"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Abraham Lincoln",
        src: <img src={lincoln} className="pull-right" alt="Abraham Lincoln"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Ronald Reagan",
        src: <img src={reagan} className="pull-right" alt="Ronald Reagan"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "Theodore Roosevelt",
        src: <img src={teddy} className="pull-right" alt="Theodore Roosevelt"/>,
        detail: "Roosevelt has also been deemed the country's first environmentalist president. In 1906, he signed the National Monuments Act, protecting sites like the Grand Canyon and preserving countless wildlife sanctuaries, national forests and federal game reservers. He also made headway with the nation's infrastructure, instigating 21 irrigation projects."
      },
      {
        name: "George W. Bush",
        src: <img src={wbush} className="pull-right" alt="George W. Bush"/>,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  }
}

export default Answer;
