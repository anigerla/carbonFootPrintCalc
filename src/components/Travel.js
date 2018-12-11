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

hide = (e) => {

  e.preventDefault();
  this.setState({
  hidden: !this.state.hidden,
  })
  setTimeout( () => {
    this.sendTravelInfo(e);
  }, 1000)
}

// onSubmit collects input data
  sendTravelInfo = (e) => {
    e.preventDefault(); 
    let uInput = document.getElementById('uInput');
    // let uInput = e.target.uInput.value;
    
    // let uInput2 = e.target.uInput2.value;
    let uInput2 = document.getElementById('uInput2');
    // console.log(uInput2.value); 

  //new object created that stores the user inputs
    let userInput = {
      origin: uInput.value,
      destination: uInput2.value
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
    
    fetch(`http://localhost:8080/travel`, init)
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
};

  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/People Waiting.mp4" type="video/mp4" />
          <source src="/Assets/Videos/People Waiting.mp4" type="video/ogg" />
        </video>
        {/* <form onSubmit={this.sendTravelInfo}> */}
        <form onSubmit={this.hide}>
          <div className="formParent">
            <h2 className="travelH2">Please, input your departure and destination:</h2>
            <div className="formChild">
              <label className="travelLabels">From
                <input type="text" name="uInput" className="uInput" id="uInput"></input>
              </label>
              <label className="travelLabels">To
                <input type="text" name="uInput2" className="uInput2" id="uInput2"></input>
              </label>
            </div>
          </div>
          <div>
            <ParticleEffectButton color={"#1e90ff"}
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
          {/* onClick={this.hide} */}
        </form>
        {this.state.showBottom && <div className="calcResultsParent">
          <h1>{this.state.flightData.decisions.carbon.description}</h1>
          <div>  
            <h2>tonnes of CO2 equivalent</h2>
            <h3>will be emitted</h3>
          </div>    
        </div>}  
      </div>
    )
  }
}
