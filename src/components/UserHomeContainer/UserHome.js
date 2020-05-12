import React, { Component } from "react";
import './UserHome.css'; 


class UserHome extends Component {
    render() {
        return (
        
            <div>
                <ul>
                    
                
                <br></br>   
                    <button className ="user-direct">My profile</button>
                <br></br>
                    <button className ="user-direct">Game Stats</button>
               <br></br>     
                    <button className ="user-direct">Friend Requests</button>
                <br></br>    
                    <button className ="user-direct">Invitations</button>
                    <hr></hr>
                    <button className="user-direct">Log Out</button>

                </ul>

                
            </div>
        );
    }
}

export default UserHome;