import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Meat extends Component {
  //button effect and onSubmit function states initialization
  state = {
    hidden: false,
    showBottom: false,
    meatData: []
  }

  hide = (e) => {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden,
    })
    setTimeout(() => {
      this.sendMeatInfo(e);
    }, 1000)
  }

  // onSubmit collects input data
  sendMeatInfo = (e) => {
    let uInput = document.getElementById('uInput');

    //new object created that stores the user inputs
    let userInput = {
        type: uInput.value
    }

    const init = {
      body: JSON.stringify(userInput),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch(`http://localhost:8080/meat`, init)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        this.setState({
          meatData: data,
          showBottom: true   
          })
        console.log(data);
      });

    let uInputClear = " ";
    document.getElementById('uInput').value = uInputClear;
  };

  refresh = (e) => {
    this.setState({
      hidden: false,
      showBottom: false,
      hideForm: true
    })
  }

  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/mp4" />
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/ogg" />
        </video>
        <form onSubmit={this.hide}>
          <div className="formParent">
            <h2 className="travelH2 meatH2">What type of meat did you eat today?</h2>
            <div className="formChild">
              <label className="meatLabels">Type of Meat
                <input type="text" name="uInput" placeholder="beef, pork, turkey, chicken, lamb" className="uInput" id="uInput"></input>
              </label>
             </div> 
          </div>
          <div className="meatBtn">
            <ParticleEffectButton color={"#ff7700"}
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
              <button className="sbmtBtn" type="submit">Submit Here</button>
            </ParticleEffectButton>
          </div>
        </form>
        {this.state.showBottom && <div className="calcResultsParent">
        {console.log(this.state)}
          <h2>{Math.round(this.state.meatData.grams_co2e_per_serving)}</h2>
          <div>
            <h2>grams of CO2e per serving</h2>
            <div className="resultsLastDiv">
              <h3>have been emitted</h3>
              <button className="refreshBtn" onClick={this.refresh}>Refresh</button>
            </div>   
          </div>
        </div>}  
      </div>
    )
  }
}
