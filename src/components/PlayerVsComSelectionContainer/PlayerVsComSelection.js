import React, { Component } from "react";

export default class Select extends Component{
    state = {
        playerVsPlayer: "",
       
    };
    render() {

        return (
            <form>
                <label>
                <h1>Choose an Opponent:</h1>
                </label>

            
                <button className="select-buttons">Player</button>
                <button className="select-buttons">Computer</button>
                <button className="back-button">Back</button> 
                
                
            </form>
        );

        
      
    }
}
