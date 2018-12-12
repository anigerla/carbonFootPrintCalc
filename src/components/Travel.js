import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Travel extends Component {
  //button effect and onSubmit function states initialization
  state = {
    hidden: false,
    showBottom: false,
    hideForm: true,
    
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
    let uInput = document.getElementById('uInput');
    let uInput2 = document.getElementById('uInput2');

  //new object created that stores the user inputs
    let userInput = {
      origin: uInput.value,
      destination: uInput2.value
    }
      
    const init = {
      body: JSON.stringify(userInput),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
        }
    };
    
    fetch(`http://localhost:8080/travel`, init)
      .then((response) => {
      return response.json();
      })
      .then(data => {
        this.setState({
          flightData: data, 
          showBottom: true,
          })            
        });
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
          <source src="/Assets/Videos/People Waiting.mp4" type="video/mp4" />
          <source src="/Assets/Videos/People Waiting.mp4" type="video/ogg" />
        </video>
        <form onSubmit={this.hide} hideForm={this.state.hideform}>
          <div className="formParent">
            <h2 className="travelH2">Please, input your departure and destination:</h2>
            <div className="formChild">
              <label className="travelLabels">From
                <input type="text" name="uInput" className="uInput" id="uInput" />
              </label>
              <label className="travelLabels">To
                <input type="text" name="uInput2" className="uInput2" id="uInput2"/>
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
        </form>
        {this.state.showBottom && <div className="calcResultsParent">
          <h1>{this.state.flightData.decisions.carbon.description}</h1>
          <div className="calcResultsChild">  
            <h2>tonnes of CO2 equivalent</h2>
            <div className="resultsLastDiv">  
              <h3>will be emitted</h3>
              <button className="refreshBtn" onClick={this.refresh}>Refresh</button>
            </div>  
          </div>    
        </div>}  
      </div>
    )
  }
}
