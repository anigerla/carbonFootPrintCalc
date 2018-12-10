import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Meat extends Component {
  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/mp4" />
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/ogg" />
        </video>
        <form>
          <div className="formParent">
            <h2>Please, input your daily meat consumption:</h2>
            <div className="formChild">
              <label>In grams
                <input type="text" name="uInput"></input>
              </label>
              <label>Or how many portions
                <input type="text" name="uInput2"></input>
              </label>
             </div> 
          </div>
          <div>
            <Link to='/meatresults'>
              <button type="submit" onClick={this.props.sendMeatInfo}>Submit Here</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}
