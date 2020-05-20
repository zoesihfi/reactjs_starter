import React, { Component } from "react"; 
import './PlayGame.css'; 

export default class ReactRPS extends Component {

    constructor() {
        super();

        this.state = {
            playerChoice : "",
            computerChoice: "",
            result: ""
            }
        }
    
    render() {
        return(
            <div className = "rps-game">
                <button className= "rps-button" type= "button" value="rock">Rock</button> 
                <button className= "rps-button" type= "button" value="rock">Paper</button> 
                <button className= "rps-button" type= "button" value="rock">Scissors</button>

                <button className= "rps-confirm" type= "button" value="shoot">Shoot!</button>  
                </div> 

           
        );
    }

    
}