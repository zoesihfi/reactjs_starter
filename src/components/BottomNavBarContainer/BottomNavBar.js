import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {BottomNavigation} from '@material-ui/core';
import {BottomNavigationAction} from '@material-ui/core';

/* Routing import links */
import UserHome from "../UserHomeContainer/UserHome.js";
import GameStats from "../GameStatsContainer/GameStats.js";
import Login from "../LoginContainer/Login.js";

/* Bottom Nav Bar icons ----> 3 to 5 per bar */
import DehazeIcon from '@material-ui/icons/Dehaze';    /* more */
import EqualizerIcon from '@material-ui/icons/Equalizer'; /* analitics */
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; /*profile*/
import HomeIcon from '@material-ui/icons/Home'; /* home */

export default class BottomNavBar extends Component{
     render() {
        return (
        <Router>
            <BottomNavigation>
                
                <Link to="/login">
                <BottomNavigationAction label="Home" icon= {<HomeIcon/>}/>
                </Link>

                <Link to="/game-stats">
                <BottomNavigationAction label="GameStats" icon= {<EqualizerIcon/>} />
                </Link>

                <Link t0="/user-home">
                <BottomNavigationAction label="Profile" icon= {<AccountCircleIcon/>} />
                </Link>
            </BottomNavigation>

                <Switch> 
                     <Route path="/login" component={Login} />
                     <Route path="/game-stats" component={GameStats} />
                     <Route path="/user-home" component={UserHome} />
                     
                </Switch>
        </Router>
        );
    }
}
