import React, { Component } from "react";
import './UserHome.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import UserProfile from "../UserProfileContainer/UserProfile.js";
import GameStats from "../GameStatsContainer/GameStats.js";
import FriendRequests from "../FriendRequestsContainer/FriendRequests.js";
import Invitations from "../InvitationsContainer/Invitations.js";
import Donate from "../DonateContainer/Donate.js";
import LogOut from "../LogOutContainer/LogOut.js";
import Login from "../LoginContainer/Login.js";
import BottomNavBar from "../BottomNavBarContainer/BottomNavBar.js";
import defaultImg from '../../assets/img/default-profile-image.png';

 export default class UserHome extends Component {
    render() {
        return (
        <Route>
            <div className="user-home">
                
                    <img src={defaultImg} alt="default-profile-inmg " />
                <br></br>  

                <div className="row">
                <div className="col-1">
                <Link to="/my-profile">
                    <button className ="user-direct">My profile</button>
                </Link>
                <br></br>
                <Link to="/game-stats">
                    <button className ="user-direct">Game Stats</button>
                </Link>
                </div>

               <br></br>

               <div className="col-1">   
               <Link  to="/friend-requests">
                    <button className ="user-direct">Friends</button>
                </Link>
                <br></br> 
                <Link to="/invitations">
                    <button className ="user-direct">Invitations</button>
                </Link>
                </div>

                
            
                
                   
            </div>
                    <p>
                       Donate $1 or more to fund our Youth Technology
                       Learning Program based in Wilmington, DE.</p> 

                    <Link id="donate-button" to="/donate">Donate</Link>
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

