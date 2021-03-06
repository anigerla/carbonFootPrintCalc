import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {

    //typing effect animation on the logo code starts
    //Source: Jake Maldonado
    const animateHome = (i) => {
      this.alreadyRunning = true;
      let navText = 'b';
      let words = ['igfoot'];
      let nestCount = 1;

      let intervalId = setInterval(() => {
        document.getElementById('nav-home').innerHTML = nestCount % 2 === 0 ? navText + '&nbsp;&nbsp;' : navText + '|';
        if (nestCount === 0) {
          clearInterval(intervalId);
          let wordToAnimate = words[i];
          let wordArr = wordToAnimate.split('');
          let writeWordId = setInterval(() => {
            navText += wordArr.shift();
            document.getElementById('nav-home').innerHTML = wordArr.length ? navText + '|' : navText;
            if (!wordArr.length) {
              clearInterval(writeWordId);
            }
          }, 200);
        }
        nestCount--;
      }, 400);
    }
    //typing effect animation on the logo code ends

    return (
      <div className="navBarGrandParent">
        <div className="navBarParent">
          <div className="navBarChild">
            <Link to="/welcome">
              <h1 id='nav-home'>bigfoot</h1>
            </Link>
            <ul>
              <Link to="/welcome">
                <li>Main</li>
              </Link>
              <Link to="/travel">
                <li>Travel Impact</li>
              </Link>
              <Link to="/meat">
                <li>Meat Diet Impact</li>
              </Link>
            </ul>
            {animateHome(0)}
          </div>
        </div>
      </div>
    )
  }
}
