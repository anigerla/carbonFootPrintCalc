import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class WelcomeScreen extends Component {

  render() {
    return (
      <div className="ancestorContainer">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/Indian Tea.mp4" type="video/mp4" />
          <source src="/Assets/Videos/Indian Tea.mp4" type="video/ogg" />
        </video>

          <h1>Choose a side!</h1>
          <div className="leftRightDivHolder">
              <div className="leftDiv">
                <Link to="/travel">
                  <h2>What's your air travel carbon impact?</h2>
                </Link>
              </div>
              <div className="rightDiv">
                <Link to="/meat">
                  <h2>What's your meat diet carbon impact?</h2>
                </Link>
              </div>
          </div>
      </div>
    )
  }
}
