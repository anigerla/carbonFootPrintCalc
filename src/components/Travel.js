import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Travel extends Component {
  //button effect state initialization
  state = {
    hidden: false
  }

  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/People Waiting.mp4" type="video/mp4" />
          <source src="/Assets/Videos/People Waiting.mp4" type="video/ogg" />
        </video>
        <form>
          <div className="formParent">
            <h2>Please, input your departure and destination:</h2>
            <div className="formChild">
              <label>From
                <input type="text" name="departure"></input>
              </label>
              <label>To
                <input type="text" name="destination"></input>
              </label>
            </div>
          </div>
          <div>
            <ParticleEffectButton color='#121019' hidden={this.state.hidden}>
              <button className="sbmtBtn" type="submit" onClick={this.props.sendTravelInfo}>Submit Here</button> 
            </ParticleEffectButton>
          </div>
        </form>
      </div>
    )
  }
}
