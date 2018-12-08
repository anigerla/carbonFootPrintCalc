import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
            <div>
                <ul>
                    <Link to="/welcome">
                      <li>Main</li>
                    </Link>
                    <Link to="/travel">
                      <li>Travel Impact Calculator</li>
                    </Link>
                    <Link to="/meat">
                      <li>Meat Diet Impact Calculator</li>
                    </Link>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
