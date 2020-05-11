import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import Donate from "./components/DonateContainer/Donate.js"; 
import GameStats from "./components/GameStatsContainer/GameStats.js";
import Select from "./components/PlayerVsComSelectionContainer/PlayerVsComSelection.js";
import UserHome from "./components/UserHomeContainer/UserHome.js";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-up"}>Code Strikers ReactJS Starter</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to={"/donate"}>Donate</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to={"/game-stats"}>Game Status</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to={"/player-vs-computer"}>Player Vs Computer</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to={"/user-home"}>User Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/welcome" component={WelcomeScreen}/>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/donate" component={Donate} />
            <Route path="/game-stats" component={GameStats} />
            <Route path="/player-vs-computer" component={Select} />
            <Route path="/user-home" component={UserHome} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
