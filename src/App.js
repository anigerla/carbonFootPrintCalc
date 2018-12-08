import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Travel from './components/Travel';
import Meat from './components/Meat';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/NavBar';

class App extends Component {
  state = {
    flightData: {
      decisions: {
        carbon: {
          description: { }
        }
      }
    },
    meatData: []
  }

  // componentDidMount
  // onSubmit collects input data
  // commSubmit = (e) => {
  //   e.preventDefault();
  //   let uInput = e.target.userInput.value;
  //   let uInput2 = e.target.userInput2.value;
  //   console.log(uInput);
  //   console.log(uInput2);
  //   this.submitHandler(uInput);
  // }

  sendTravelInfo(uInput) {
    //new object created that stores the user inputs
    let userInput = {
      departure: uInput,
      // destination: uInput2

      // fetch(`http://localhost:8080/travel/`, init)
      //   .then()
    }

    //fetch GET request is sent off to the local server
      //amend fetch to a more specific request???
    fetch(`http://localhost:8080/travel/`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        return data;
      })
  }

    // fetch for the travel data

    //submitted parameters are entered into fetch url to ask API
    //for relevant information
    //response gets formatted and displayed on the screen
    // fetch for the meat consumption data

  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          {/* <WelcomeScreen /> */}
          <Switch>
            <Route path='/travel' exact component={Travel}></Route>
            <Route path='/meat' exact component={Meat}></Route>
            <Route path='/welcome' exact component={WelcomeScreen} />
            <Route path='/' exact render={() => <Redirect to='/welcome' component={WelcomeScreen} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
