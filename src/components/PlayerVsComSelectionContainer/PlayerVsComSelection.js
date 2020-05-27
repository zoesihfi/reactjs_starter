import React, { Component } from "react";
import './PlayerVsComSelection.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import playerVsPlayerIcon from '../../assets/img/player-vs-player.png';
import computerIcon from '../../assets/img/computer-icon.jpg';
import UserHome from "../UserHomeContainer/UserHome.js";
export default class Select extends Component{
    state = {
        playerVsPlayer: "",
       
    };

    
    
    render() {

        return (
            <form>
                <Router>
                <label>
                <h1>Choose your Opponent:</h1>
                </label>

                <div className="row">
                
                
                <button><img class="col" src={computerIcon} alt="default-profile-inmg " /></button> 
                <button><img class="col" src={playerVsPlayerIcon} alt="default-profile-inmg " /> </button> 
          
                </div>

                <Link to="/user-home">
                <center>
                <button className="back-button">Back</button> 
                </center>
                </Link>


                <Switch>
                    <Route path="/user-home" component={UserHome} />     
                </Switch> 
                
            </Router>   
            </form>
        );

        
      
    }
}
