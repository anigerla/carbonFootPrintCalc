import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Meat extends Component {
  state = {
    hidden: false
  }

  hide = () => {
  this.setState({
      hidden: !this.state.hidden
    })
  }

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
              {/* <label>In grams
                <input type="text" name="uInput"></input>
              </label>
              <label>Or how many portions
                <input type="text" name="uInput2"></input>
              </label> */}
              <select name="meatType">
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="lamb">Lamb</option>
                <option value="pork">Pork</option>
                <option value="turkey">Turkey</option>
              </select>
             </div> 
          </div>
          <div>
            <ParticleEffectButton color={"#ff4d73"}
              direction="left"
              duration={800}
              easing="easeOutSine"
              oscillationCoefficient={1}
              particlesAmountCoefficient={7}
              size={3}
              speed={3}
              style="fill"
              type="triangle"
              hidden={this.state.hidden}>
              <button className="sbmtBtn" type="submit" onClick={this.hide}>Submit Here</button>
            </ParticleEffectButton>
          </div>
        </form>
      </div>
    )
  }
}
