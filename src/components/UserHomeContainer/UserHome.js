import React, { Component } from "react";
import './UserHome.css'; 
import Image from 'react-bootstrap/Image'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import UserProfile from "../UserProfileContainer/UserProfile.js";
import GameStats from "../GameStatsContainer/GameStats.js";
import FriendRequests from "../FriendRequestsContainer/FriendRequests.js";
import Invitations from "../InvitationsContainer/Invitations.js";
import Donate from "../DonateContainer/Donate.js";
import LogOut from "../LogOutContainer/LogOut.js";
import Login from "../LoginContainer/Login.js";

import defaultImg from '../../assets/img/default-profile-image.png';

 export default class UserHome extends Component {
    render() {
        return (
        <Route>
            <div className="user-home">
                
                    <img scr={defaultImg} alt="default-profile-inmg " />
                <br></br>   
                    <button className ="user-direct" to="/my-profile">My profile</button>
                <br></br>
                    <button className ="user-direct" to="/game-stats">Game Stats</button>
               <br></br>     
                    <button className ="user-direct" to="/friend-requests">Friend Requests</button>
                <br></br>    
                    <button className ="user-direct" to="/invitations">Invitations</button>
                <hr></hr>
                    <button className="user-direct" to="/log-out">Log Out</button>   
                    <p>
                       Donate $1 or more to fund our Youth Technology
                       Learning Program based in Wilmington, DE.</p> 

                    <button id="donate-button" to="/donate">Donate</button>
            </div>

            <Switch> 
                <Route path="/my-profile" component={UserProfile}/>
                <Route path="/game-stats" component={GameStats} />
                <Route path="/friend-requests" component={FriendRequests}/>
                <Route path="/invitations" component={Invitations} />
                <Route path="/donate" component={Donate} />
                <Route path="/log-out" component={LogOut} />

               
            </Switch>
        </Route>
        );
    }
}

