import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Travel from './components/Travel';
import Meat from './components/Meat';
import WelcomeScreen from './components/WelcomeScreen';
import NavBar from './components/NavBar';

class App extends Component {
  // state = {
  //   flightData: {
  //     decisions: {
  //       carbon: {
  //         description: { }
  //       }
  //     }
  //   },
  //   meatData: [
  //    { 
  //      grams_co2e_per_serving: 
  //    }
  //   ]
  // }

  // onSubmit collects input data
  // commSubmit = (e) => {
  //   e.preventDefault();
  //   let uInput = e.target.userInput.value;
  //   let uInput2 = e.target.userInput2.value;
  //   console.log(uInput);
  //   console.log(uInput2);
  //   this.submitHandler(uInput);
  // }

  // sendTravelInfo(uInput) {
  //   //new object created that stores the user inputs
  //   let userInput = {
  //     departure: uInput,
  //     destination: uInput2
  //   }

  //     const init = {
  //       body: JSON.stringify(userInput),
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  //     };

  //     fetch(`http://localhost:8080/travel/:id`, init)
  //     .then((response) => {
  //     return response.json();
  //   })
  //     .then((data) => {
  //       this.setState(data);
  //       console.log(data)
  //     })
  //   }

    //fetch GET request is sent off to the local server
      //amend fetch to a more specific request???
    // fetch(`http://localhost:8080/travel/`)
    //   .then((response) => {
    //     return response.text();
    //   })
    //   .then((data) => {
    //     this.setState(data);
    //     console.log(data)
    //   })
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/travel' exact component = { Travel } />
            <Route path='/meat' exact component={Meat} />
            <Route path='/welcome' exact component={WelcomeScreen} />
            <Route path='/' exact render={() => <Redirect to='/welcome' component={WelcomeScreen} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
