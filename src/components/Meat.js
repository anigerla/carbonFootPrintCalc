import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Meat extends Component {
  //button effect and onSubmit function states initialization
  state = {
    hidden: false,
    showBottom: false
    //meat API 
  }

  hide = (e) => {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden,
    })
    setTimeout(() => {
      // this.sendTravelInfo(e);
      this.setState({
        showBottom: true
      })
    }, 1000)

    // this.setState({
    // showBottom: true
    // })
  }

  // onSubmit collects input data
  // sendMeatInfo = (e) => {
    // let uInput = document.getElementById('meatType');
    // let uInput2 = e.target.uInput2.value;

    //new object created that stores the user inputs
    // let userInput = {
    //   origin: uInput,
    //   destination: uInput2
    // }
    // console.log(userInput);

    // const init = {
    //   body: JSON.stringify(userInput),
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // };
    // console.log(init);

    // fetch(`http://localhost:8080/meat/:meattype`, init)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       meatData: data,
    //       // showBottom: true   
    //     })
    //     console.log(data);
    //   });

    // this.setState({
    //   showBottom: true
    // })
  // };

  render() {
    return (
      <div className="componentParent">
        <video autoplay="autoplay" muted loop id="myVideo" >
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/mp4" />
          <source src="/Assets/Videos/Pexels Videos 4947.mp4" type="video/ogg" />
        </video>
        {/* <form onSubmit={this.sendMeatInfo}> */}
        <form>
          <div className="formParent">
            {/* <h2>Please, input your daily meat consumption:</h2> */}
            <h2 className="travelH2 meatH2">Please, choose the type of meat:</h2>
            <div className="formChild">
              {/* <label>In grams
                <input type="text" name="uInput"></input>
              </label>
              <label>Or how many portions
                <input type="text" name="uInput2"></input>
              </label> */}
              <select name="meatType" id="meatType">
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="lamb">Lamb</option>
                <option value="pork">Pork</option>
                <option value="turkey">Turkey</option>
              </select>
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
              <button className="sbmtBtn" type="submit" onClick={this.hide}>Submit Here</button>
            </ParticleEffectButton>
          </div>
        </form>
        {this.state.showBottom && <div className="calcResultsParent">
          <h2>Still under construction</h2>
          {/* <div>
            <h2>tonnes of CO2 equivalent</h2>
            <h3>will be emitted</h3>
          </div> */}
        </div>}  
      </div>
    )
  }
}
