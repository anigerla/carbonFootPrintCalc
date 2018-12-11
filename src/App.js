import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Travel from './components/Travel';
import Meat from './components/Meat';
import WelcomeScreen from './components/WelcomeScreen';
import NavBar from './components/NavBar';

class App extends Component {
 
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
