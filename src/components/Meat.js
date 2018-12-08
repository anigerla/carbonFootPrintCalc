import React, { Component } from 'react';
import { Ripple } from '@progress/kendo-react-ripple';

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
                <input type="text" name="meatInGrams"></input>
              </label>
              <label>Or how many portions
                <input type="text" name="meatInPortions"></input>
              </label>
             </div> 
          </div>
          <div>
            <button type="submit" onClick={this.props.sendMeatInfo}>Submit Here</button>
          </div>
        </form>
      </div>
    )
  }
}
