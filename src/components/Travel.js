import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Travel extends Component {
  //button effect and onSubmit function states initialization
  state = {
    hidden: false,
    showBottom: false,
    
    flightData: {
      decisions: {
        carbon: {
          description: ''
        }
      }
    }
  }

// onSubmit collects input data
  sendTravelInfo = (e) => {
    e.preventDefault();
    // setTimeout(function () {
    //   window.location.href = "http://www.google.com";
    // }, 3000)
    let uInput = e.target.uInput.value; 
    let uInput2 = e.target.uInput2.value;

  //new object created that stores the user inputs
    let userInput = {
      origin: uInput,
      destination: uInput2
      }
    // console.log(userInput);
      
    const init = {
      body: JSON.stringify(userInput),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
        }
      };

    // console.log(init);
    
    fetch(`http://localhost:8080/travel/:origin/:destination`, init)
    .then((response) => {
    return response.json();
    })
    .then(data => {
      this.setState({
        flightData: data, 
        showBottom: true   
        })   
      console.log(data);         
      });

  // this.setState({
  //   showBottom: true
  // })
};

//  hide = () => {
    // this.sendTravelInfo;

  //   this.setState({
  //     hidden: !this.state.hidden
  //   })
  // }

  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/People Waiting.mp4" type="video/mp4" />
          <source src="/Assets/Videos/People Waiting.mp4" type="video/ogg" />
        </video>
        <form onSubmit={this.sendTravelInfo}>
          <div className="formParent">
            <h2>Please, input your departure and destination:</h2>
            <div className="formChild">
              <label>From
                <input type="text" name="uInput" className="uInput"></input>
              </label>
              <label>To
                <input type="text" name="uInput2" className="uInput2"></input>
              </label>
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

        {this.showBottom && <div className="calcResultsParent">
          <h1>{this.state.flightData.decisions.data.description}</h1>
          <h2>tonnes of CO2 equivalent</h2>
          <h3>will be emitted</h3>  
        </div>}  

      </div>
    )
  }
}
